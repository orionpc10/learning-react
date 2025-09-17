import React from "react";

function Card({username = "DEAFUALT",text= "lorem ipsum", post = "default", image = "https://media.sketchfab.com/models/43f4f8a56f86459b83f3e4b5104075fb/thumbnails/685ecb217e1c4132bd11da090fb72961/817ff8178975461bbe5a5c4e983d35b7.jpeg"}){
    return (
    <div>
        <figure className="md: flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={image} alt="" width="384" height="512" />
        <div className="pt-6 md: p-8 text-center md:text-left space-y-4">
        <blockquote>
            <p className = "text-lg font-medium">
                {text}
            </p>
        </blockquote>
        <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
            {username}
        </div>
        <div className="text-slate-700 dark:text-slate-500">
            {post}
        </div>
        </figcaption>
        </div>
        </figure>

    </div>
    )
}

export default Card