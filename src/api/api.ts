import { delay } from 'utils/sharedUtils'

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD'

interface RequestOptions {
  path: string
  queryParams?: { [key: string]: string }
  method?: Method
  delay?: number
}

export async function request(options: RequestOptions) {
  await delay(options.delay || 0)

  const origin =
    process.env.REACT_APP_MOCKED_JSON_SERVER_PATH || window.location.origin
  const url = new URL(origin + options.path)

  if (options.queryParams) {
    Object.entries(options.queryParams).forEach(([key, value]) => {
      url.searchParams.append(key, String(value))
    })
  }

  const method = options.method || 'GET'

  const response = await fetch(url.toString(), {
    method: method
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return response.json()
}
