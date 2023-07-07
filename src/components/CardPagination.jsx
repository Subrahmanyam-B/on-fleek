import React from "react";

const CardPagination = ({ pages, active, perView }) => {
  const renderPages = () => {
    let pagesArray = [];
    for (let i = 0; i < pages / perView; i++) {
      pagesArray.push(
        <button
          className={`w-[10px] h-[10px] rounded-full ${
            active === i ? "bg-white" : "bg-white/20"
          }`}
          key={i}
        ></button>
      );
    }
    return pagesArray;
  };

  return <div className="flex gap-2">{renderPages()}</div>;
};

export default CardPagination;
