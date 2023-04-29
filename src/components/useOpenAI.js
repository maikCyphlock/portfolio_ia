import { useEffect, useState } from 'react'
import useStore from './SearchContext'
import { API_URL } from '../config'
const useOpenAI = (prompt) => {
  const setSearchResult = useStore((state) => state.setSearchResult)
  const setLoading = useStore((state) => state.setLoading)
  const setError = useStore((state) => state.setError)
  const [searchPrompt, setSearchPrompt] = useState(prompt)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await setLoading(() => true)
        const response = await fetch(`${API_URL()}/api/chat`, {
          method: 'POST',
          body: JSON.stringify({
            searchPrompt
          })
        })

        const data = await response.json()

        if (response.ok) {
          setSearchResult(data)
          await setLoading(() => false)
        } else {
          setError('Error en la respuesta del servidor' + response.statusText)
          await setLoading(() => false)
        }
      } catch (error) {
        setError('Error al llamar al servidor')
      } finally {
        await setLoading(false)
      }
    }

    fetchData()
  }, [searchPrompt, setError, setLoading, setSearchResult])

  return [setSearchPrompt]
}

export default useOpenAI
