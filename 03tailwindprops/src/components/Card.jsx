import React from 'react'

function Card(props) {  // We can also destructure the prop value itself without writing prop i.e ({username, value, etc)}
  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-col md:gap-8 rounded-2xl">
        <div>
            <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/34103372/pexels-photo-34103372.jpeg" />
        </div>
        <h1 className="text-2xl text-white bg-green-500 p-3 rounded-md">A Card of photos</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, maiores.</p>
        <p>© {props.username}, Software Developer 2025</p>
    </div>
  )
}

export default Card

