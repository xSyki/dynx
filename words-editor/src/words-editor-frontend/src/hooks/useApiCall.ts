import { useEffect, useRef, useState } from 'react'
import { AxiosError, AxiosResponse } from 'axios'

function useApiCall<T, D extends any[]>(
  request: (
    controller: AbortController,
    ...params: D
  ) => Promise<AxiosResponse<T>>,
  callback?: (data: T) => void,
  ...params: D
): [
  { data: T | undefined; loading: boolean; error: undefined | AxiosError },
  { refetch: () => void }
] {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<AxiosError>()
  const controller = useRef<AbortController>()

  const getData = (controller: AbortController) => {
    request(controller, ...params)
      .then((res) => {
        setData(res.data)
        return res.data
      })
      .then((data) => {
        callback && callback(data)
      })
      .catch((error: AxiosError) => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    controller.current = new AbortController()

    getData(controller.current)

    return () => controller.current?.abort()
  }, params)

  const refetch = () => {
    if (!controller.current) return

    getData(controller.current)
  }

  return [{ data, loading, error }, { refetch }]
}

export default useApiCall
