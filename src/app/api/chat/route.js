import { NextResponse } from 'next/server'
export async function POST (req) {
  const { searchPrompt } = await req.json()
  const response = await fetch(
    'https://openai80.p.rapidapi.com/chat/completions',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '051619a6c5mshaf5d6179f9d60e8p1767f3jsn1d748089b4df',
        'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'assistant',
            content: `hola ${searchPrompt}`
          }
        ]
      })
    }
  )
  const data = await response.json()
  console.log()
  // if (response.ok) {

  //   return res.status(200).json(response.body);
  // } else {
  //   return res.status(400).json({ message: response.statusText });
  // }

  return NextResponse.json({ data })
}

// const text =
//   "this is the information about maikol douglas aguilar falcon:  is a full stack developer with a strong passion for technology and a focus on frontend development. he possess problem-solving skills with a dedication to clean code and efficient business logic. he have expertise in React and Next.js and knowledge of Vite, ThreeJS, and Zustand, as demonstrated through their personal projects, including a minimal Minecraft clone built with these technologies and an app with Astro that retrieves data from the backend and deploys the API every hour through GitHub actions. he have also contributed to an open-source project as a contributor.  maikol has a non-traditional educational background, mainly self-taught through freeCodeCamp, YouTube, and MDN documentation, supplemented by reading books and searching on Stack Overflow and Google. he are currently pursuing a bachelor's degree in English and have a C1 level of proficiency in English.and learing german in A1 level, maikol possesses strong hard skills in JavaScript, responsive design, HTML, CSS, react, next.js, Node.js, typescript, MongoDB, and cloud hosting, with beginner-level knowledge of Go and Rust. he also have soft skills, including proactivity, creativity, adaptability, attention to detail, and communication, he is 21yo, lives in acarigua,portuguesa,venezuela.|| respond in the same languague as the question and be concise,(only respond question about maikol aguilar without no doubt):${req.body.searchPrompt}";
