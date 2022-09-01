const request = async (method, url, data, headers) => {
  const response = await fetch(
    url,
    {
      method: method,
      body: data ? JSON.stringify(data) : null,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...headers
      }
    }
  )

  console.log("response", response)

  if (!response.ok) {
    const errData = await response.json()

    return Promise.reject({ status: response.status, error: JSON.parse(errData) })
  }

  const resData = await response.json()

  return JSON.parse(resData)
}

export const get = async (url, data, headers)=> request('GET', url, data, headers)
export const post = async (url, data, headers) => request('POST', url, data, headers)
export const put = async (url, data, headers) => request('PUT', url, data, headers)
export const patch = async (url, data, headers) => request('DELETE', url, data, headers)
