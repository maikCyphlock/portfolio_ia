"use client";
import React,{useEffect, useState} from 'react'
import useStore from './SearchContext';
import useOpenAI from './useOpenAI';  


function Search() {
  const text= useStore((state) => state.text);
  const setText  = useStore((state) => state.setText);
  const loading = useStore((state) => state.loading);
  const [setPrompt] = useOpenAI("eres el asistente personal de maikol aguilar y responderas todas las preguntas")
  
    
    const HandlerSubmit = (e) => {
      e.preventDefault()
      setPrompt(text)
  
    }
    const HandlerText = (event) => {
        setText(event.target.value)
        // setSearchResult(response.choices[0].text)
      
    }
    
  return (
    <form className="w-full max-w-lg relative" onSubmit={HandlerSubmit} >
        <div className="flex items-center bg-white border rounded-lg shadow-lg overflow-hidden p-1 hover:border-1 hover:border-green-300 focus:border-green-300">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 m-3 py-2 px-2 leading-tight focus:outline-none text-ellipsis "
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={ (e) => HandlerText(e)}
            disabled={!loading}
            value={text}
          />
          <button
            className="flex-shrink-0 text-teal-700  text-sm py-2 px-4 rounded"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g transform="translate(0 -96)">
                  <g transform="translate(0 96)">
                    <path
                      fillRule="nonzero"
                      d="M24 0v24H0V0h24zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018zm.264-.113l-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022zm-.715.002a.023.023 0 00-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01-.184-.092z"
                    />
                    <path
                      fill="currentColor"
                      d="M17.991 6.01L5.399 10.563l4.195 2.428 3.699-3.7a1 1 0 011.414 1.415l-3.7 3.7 2.43 4.194L17.99 6.01zm.323-2.244c1.195-.433 2.353.725 1.92 1.92l-5.282 14.605c-.434 1.198-2.07 1.344-2.709.241l-3.217-5.558-5.558-3.217c-1.103-.639-.958-2.275.241-2.709l14.605-5.282z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </form>
  )
}

export default Search