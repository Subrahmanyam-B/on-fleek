import React from 'react'

const CardPagination = ({pages}) => {

   const renderPages = () => {
       let pagesArray = []
         for(let i = 0; i < pages; i++){
               pagesArray.push(<button className="w-[10px] h-[10px] bg-white rounded-full" key={i}></button>)
         }
         return pagesArray
      }

  return (
    <div className='flex gap-2'>
      {renderPages()}
    </div>
  )
}

export default CardPagination