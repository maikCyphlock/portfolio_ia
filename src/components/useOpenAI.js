import { useEffect, useState } from "react";
import useStore from "./SearchContext";

const useOpenAI = (prmt) => {
  const setSearchResult = useStore(state=> state.setSearchResult)
  const setLoading = useStore(state=> state.setLoading)
  const setError = useStore(state=> state.setError)
  const [prompt, setPrompt] = useState(prmt);

  useEffect(() => {
   
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        "X-RapidAPI-Host": "openai80.p.rapidapi.com",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "assistant", content: `this is the information about maikol douglas aguilar falcon:  is a full stack developer with a strong passion for technology and a focus on frontend development. he possess problem-solving skills with a dedication to clean code and efficient business logic. he have expertise in React and Next.js and knowledge of Vite, ThreeJS, and Zustand, as demonstrated through their personal projects, including a minimal Minecraft clone built with these technologies and an app with Astro that retrieves data from the backend and deploys the API every hour through GitHub actions. he have also contributed to an open-source project as a contributor.  maikol has a non-traditional educational background, mainly self-taught through freeCodeCamp, YouTube, and MDN documentation, supplemented by reading books and searching on Stack Overflow and Google. he are currently pursuing a bachelor's degree in English and have a C1 level of proficiency in English.and learing german in A1 level, maikol possesses strong hard skills in JavaScript, responsive design, HTML, CSS, react, next.js, Node.js, typescript, MongoDB, and cloud hosting, with beginner-level knowledge of Go and Rust. he also have soft skills, including proactivity, creativity, adaptability, attention to detail, and communication, he is 21yo, lives in acarigua,portuguesa,venezuela.|| respond in the same languague as the question and be concise,(only respond question about maikol aguilar without no doubt):${prompt}` }],
        stream: false,
      }),
    };
  

    const Fetch = ( async() => {
      try {
        const response = await fetch('https://openai80.p.rapidapi.com/chat/completions', options);
        setLoading(true);
        const data = await response.json();
        setSearchResult(data);
      } catch (error) {
        console.error({error});
        
        setError('error');
      }
    })()
    
    return () => setLoading(false)

  }, [prompt, setError, setLoading, setSearchResult]);

  return [ setPrompt];
};

export default useOpenAI;
