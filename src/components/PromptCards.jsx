import React from 'react'
import useStore from './SearchContext';
function PromptCards() {
    const setText  = useStore((state) => state.setText);
    const handlerClick = (e) => {
        setText(e.target.value)
        
    }
  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-3xl ">
  <button onClick={(e)=>handlerClick(e) } class="bg-zinc-50 transition-colors hover:bg-slate-100 p-3 m-1 md:p-4 md:m-0 shadow-lg rounded-xl" value={"¿Qué tecnologías has utilizado en tus proyectos personales para desarrollar un clon de Minecraft y una aplicación con Astro?"}>
  ¿Qué tecnologías has utilizado en tus proyectos personales para desarrollar un clon de Minecraft y una aplicación con Astro?
  </button>
  <button onClick={(e)=>handlerClick(e) }  class="bg-zinc-50 transition-colors hover:bg-slate-100 p-3 m-1 md:p-4 md:m-0 shadow-lg  rounded-xl" value={"¿Cómo demuestra habilidad para resolver problemas en tus proyectos?"}>
  ¿Cómo demuestra habilidad para resolver problemas en tus proyectos?
  </button>
  <button onClick={(e)=>handlerClick(e) }  class="bg-zinc-50 transition-colors hover:bg-slate-100 p-1 hidden md:block md:p-4 shadow-lg  rounded-xl" value={"¿Qué contribuciones has hecho al proyecto Kings League?"}>
  ¿Qué contribuciones ha hecho al proyecto Kings League?
  </button>
  <button onClick={(e)=>handlerClick(e) }  class="bg-zinc-50 transition-colors hover:bg-slate-100 p-1 hidden md:block md:p-4 shadow-lg  rounded-xl" value={"¿Cómo te describirías como desarrollador web, sabe más de un idioma? "}>
  ¿Cómo te describirías como desarrollador web, sabe más de un idioma? 
  </button>
</div>

  )
}

export default PromptCards