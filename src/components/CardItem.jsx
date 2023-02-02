import React from "react";

const CardItem = ({ icon, title }) => {
  return (
    <div className="flex items-center justify-center w-[235px] h-[140px] shadow-card rounded-[10px] z-2 bg-background-primary ">
      <div className="flex flex-col items-center justify-center gap-[4px]">
        <div className="bg-background-secondary rounded-full border border-none z-3 w-[58px] h-[58px] flex items-center justify-center">
          <img className="w-[36px] h-[36px] z-4" src={icon} alt={title} />
        </div>

        <p className="font-Poppins font-[700] text-black-2">{title}</p>
      </div>
    </div>
  );
};

export default CardItem;
