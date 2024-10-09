import React from 'react'
import myImg from '../assets/pexels-lilartsy.jpg';

function Card({username="chai aur code"}) {
    // default value
  return (

    <div><figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <img class="w-24 h-24 rounded-full mx-auto" src={myImg} alt="sneha" width="384" height="512"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure></div>
  )
}

export default Card