'use client'
import Search from '@/components/Search'
import Cv from '@/components/Cv'
import PromptCards from '@/components/PromptCards'
import useStore from '@/components/SearchContext'
import Loader from '@/components/loader'
export const RenderResult = () => {
  const searchResult = useStore((state) => state.searchResult)

  return <>{JSON.stringify(searchResult.data)}</>
}

export default function Home () {
  const loading = useStore((state) => state.loading)
  console.log(loading)
  return (
    <>
      <div className="flex justify-start min-h-screen flex-col gap-4 items-center mt-3 md:mt-14">
        <PromptCards />
        <div className="flex w-full flex-col gap-4 items-center p-1 ">
          <Search />

          <div className="w-full p-4   bg-white border rounded-lg shadow-lg flex  max-w-3xl break-words transition-transform text-justify">
            <p className="text-gray-700 max-w-3xl text-ellipsis  flex-wrap"></p>

            {!loading ? <RenderResult /> : <Loader />}
          </div>
        </div>
        <div className="mt-72" />
        <Cv />
      </div>
    </>
  )
}
