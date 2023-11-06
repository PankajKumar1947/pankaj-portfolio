import React from 'react'

const Error = () => {
  return (
    <>
        <main class=" flex items-center justify-center mt-10 min-h-[50vh]">
          <div class="text-center">
            <h1 class="text-6xl font-semibold text-blue-600">
              4 <span><i class="fas fa-ghost"></i></span> 4
            </h1>
            <h2 class="text-2xl dark:text-gray-200 text-red-600">Error: 404 page not found</h2>
            <p class="dark:text-gray-200 text-red-600">Sorry, the page you're looking for cannot be accessed</p>
          </div>
        </main>

    </>
    
    
  )
}

export default Error