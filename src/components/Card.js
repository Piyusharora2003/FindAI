import React from 'react';

function Card({index,elem}) {
    return (
        <div key={index} className="border border-stone-50 p-2 flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <img
              src={elem.coverimage}
              className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm h-56 btn-"
              alt={elem.coverimagealt}
        />
        <div className="text-lg font-bold sm:text-xl md:text-2xl">
            {elem.title}
        </div>
        <p className="text-sm text-black">
            {elem.description.slice(0,210)}
        </p>
        <div className="pt-2 pr-0 pb-0 pl-0">
            <a
                className="inline font-medium mt-0 mr-1 mb-0 ml-0 font-bold text-l "
                href={elem.navigationLink}
                >
                    Go to <span className='underline'>{elem.title}</span>
            </a>
        </div>
    </div>
    )
}

export default Card;