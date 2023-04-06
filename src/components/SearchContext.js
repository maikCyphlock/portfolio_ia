
import { create } from 'zustand'

const useStore = create((set) => ({
  searchResult: "s",
  loading: false,
  text: '',
  error: '',
  setSearchResult: async(searchResult) => set({ searchResult }),
  setLoading: async(loading) => set({ loading }),
  setText: (text) => set({ text }),
  setError: (error) => set({ error }),
}))

export default useStore