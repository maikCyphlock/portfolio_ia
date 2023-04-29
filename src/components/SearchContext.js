import { create } from 'zustand'

const useStore = create((set) => ({
  searchResult: '',
  loading: false,
  text: '',
  error: '',
  setSearchResult: (searchResult) => set({ searchResult }),
  setLoading: (loading) => set({ loading }),
  setText: (text) => set({ text }),
  setError: (error) => set({ error })
}))

export default useStore
