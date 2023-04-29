function Cv () {
  return (
    <article className="prose md:prose-lg lg:prose-xl mb-10">
      <figure className="grid  place-content-center">
        <img src="/maikol.png" className="w-64 " alt="" />
      </figure>
      <h1>Maikol D. Aguilar F.</h1>
      <p>
        I am a junior full stack developer with a passion for technology and a
        focus on frontend development. I am a proactive and creative problem
        solver with a dedication to clean code and efficient business logic.
        Furthermore, I am also studying English to improve my language skills.
      </p>
      <p>
        Through my personal projects, I have demonstrated proficiency in React
        and Next.js, as well as knowledge of Vite, ThreeJS, and Zustand. I have
        developed a minimal Minecraft clone using these technologies, showcasing
        my problem-solving skills and ability to utilize library hooks.
        Additionally, I have created an app with Astro that retrieves data from
        the backend and deploys the API every hour through GitHub actions. I
        have also contributed to the Kings League Project by making the rules
        section and GitHub statuses of the README. Overall, these projects
        demonstrate my passion for learning and my commitment to constantly
        improving my skills as a web
      </p>

      <h2>Work Experience</h2>
      <div>
        <h4>Federación Venezolana de Fútbol, Freelance job 2021</h4>
        <p>
          Creating a prototype of Landing page Submitting information on the
          website Deploying on Vercel
        </p>
      </div>

      <div>
        <h4>
          Clon de Mincraft | React Clone de Mincraft | React. diciembre. 2022
        </h4>
        <p>
          A minimal minecraft clone built with react, vite, threejs, and
          zustand. Using the three hooks built-in in its library link to repo:{' '}
          <a href="https://github.com/maikCyphlock/minecraft-react">
            https://github.com/maikCyphlock/minecraft-react
          </a>
        </p>
      </div>
      <div>
        <h4>Dolar Ve</h4>
        <p>
          This is an app made with Astro that gets data from the backend:{' '}
          <a href="https://github.com/maikCyphlock/dollar-ve-api">
            https://github.com/maikCyphlock/dollar-ve-api{' '}
          </a>{' '}
          that scrapes and retrieves the data to Cloudflare workers and GitHub
          actions deploy the API every hour.
        </p>
        <p>
          Link to the frontend repo:{' '}
          <a href="https://github.com/maikCyphlock/dollar-frontend-api">
            https://github.com/maikCyphlock/dollar-frontend-api
          </a>
        </p>
      </div>

      <div>
        <h4>contributor of the Kings League - OSS project</h4>
        <p>
          I have had the opportunity to participate with midudev open source
          project and contribute to make the rules section and the GitHub
          statuses of the README{' '}
          <a href="https://github.com/midudev/kings-league-project">
            https://github.com/midudev/kings-league-project.
          </a>
        </p>
      </div>

      <section>
        <h2>education</h2>
        <h4>Non-traditional study</h4>
        <ul>
          <li>
            learning with freeCodeCamp, YouTube and MDN documentation, reading
            books such as: you dont know JavaScript, and doing think by myself
            also when I’ve got stuck I search on Stack Overflow and google
          </li>
        </ul>
      </section>
      <section>
        <h4>OpenBootCamp</h4>
        <h5>Full-stack developer</h5>
        <p>Jan 2022 — Present</p>
      </section>
      <section>
        <h4>UNESR (universidad Nacional experimental Simon rodrigues)</h4>
        <h5>English bachelor master degree</h5>
        <p>Oct 2019 — Present</p>
      </section>
      <section>
        <h4>Hard Skills</h4>
        <h5>Advance:</h5>
        <ul>
          <li>JavaScript</li>
          <li>responsive design</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>react</li>
          <li>next.js</li>
          <li>Node.js</li>
        </ul>
        <h4>Intermediate:</h4>
        <ul>
          <li>Node.js</li>
          <li>typescript</li>
          <li>MongoDB</li>
          <li>cloud hosting (Firebase, Supabase)</li>
        </ul>
        <h4>Beginner:</h4>
        <ul>
          <li>Go</li>
          <li>Rust</li>
        </ul>
      </section>
      <section>
        <h4>Soft Skills</h4>
        <ul>
          <li>Proactivity</li>
          <li>Creativity</li>
          <li>Adaptability</li>
          <li>Attention to Detail</li>
          <li>Communication</li>
        </ul>
      </section>
    </article>
  )
}

export default Cv
