import React from "react";
import ProductCard from "./ProductCard";
import aeropencil from "../assets/aeropencil.png";
import castellpencil from "../assets/castellpencil.png";
import pencil from "../assets/pencil.png";

const InformationCard = () => {
  return (
    <div className="h-[500px] bg-background-secondary flex rounded-b-[25px]">
      <div className="w-1/3 pt-[51px] pl-[50px]">
        <div className=" flex flex-col gap-[20px]">
          <h2 className="font-[400] text-[21px] leading-8">
            Graphite Artist Quality Fine Art Drawing and Sketching Pencils
            Replaceable Nib Pencils.
          </h2>
          <ul className="list-disc pl-[19px] font-[600] leading-[40px]">
            <li>MECHANICAL PENCILS</li>
            <li>ARCHITECT'S CHOICE</li>
            <li>EXECUTIVE PENCILS</li>
            <li>ENGRAVABLE PENCILS</li>
          </ul>
          <div className="w-[120px] h-[50px] bg-yellow-primary flex justify-center items-center rounded-[5px]">
            <p className="text-background-primary cursor-pointer">SHOP ALL</p>
          </div>
        </div>
      </div>
      <div className="w-2/3 mt-[40px] mr-[50px] ml-[38px] flex  flex-col">
        <div className="h-[80px] bg-background-secondary rounded-[18px] flex items-center justify-center border-4 border-background-primary w-[712px]">
          <div className="text-yellow-primary font-[700] text-[36px] bg-background-primary flex-1 h-full pt-[13px]  text-center overflow-hidden">
            25% off
          </div>
          <div className="font-[300px] text-black-1 text-[25px] pl-[24px] w-2/3">
            Offer Applicable on All Our Pencils
          </div>
        </div>
        <div className="mt-[20px] flex gap-[20px]">
          <ProductCard
            img={aeropencil}
            title="Aero Mechanical Pencil"
            curPrice="$99.00"
            prevPrice="$125.00"
          />
          <ProductCard
            img={castellpencil}
            title="Castell Mechanical Pencil"
            curPrice="$75.00"
            prevPrice="$99.00"
          />
          <ProductCard
            img={pencil}
            title="Architect Choice Pencil"
            curPrice="$45.00"
            prevPrice="$70.00"
          />
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
