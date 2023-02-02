import React from "react";

const ProductCard = ({ img, title, curPrice, prevPrice }) => {
  return (
    <div className="h-[320px] w-[224px] bg-background-primary rounded-[18px]">
      <div className="pt-[10px] pr-[20px] pl-[20px]">
        <img src={img} alt={title} />
      </div>
      <div className="text-center font-[500] mt-[14px]">{title}</div>
      <div className="text-center mt-[7px] mb-[34px]  ">
        <span className="text-[16px] font-[600]">{curPrice}</span>{" "}
        <del className="pl-[11px] text-[14px] text-[#727272] ">{prevPrice}</del>
      </div>
    </div>
  );
};

export default ProductCard;
