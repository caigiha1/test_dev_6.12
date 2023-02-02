import React from "react";
import CardItem from "../../components/CardItem";
import InformationCard from "../../components/InformationCard";
import Dot from "../../components/Dot";
import PencilIcon from "../../assets/Vector.png";
import MakerIcon from "../../assets/make.svg";
import PaintIcon from "../../assets/paint.svg";
import NoteBookIcon from "../../assets/notebook.svg";
import galerry1 from "../../assets/Rectangle21.png";
import galerry2 from "../../assets/Rectangle23.png";
import galerry3 from "../../assets/Rectangle24.png";
import galerry4 from "../../assets/Rectangle25.png";
import galerry5 from "../../assets/Rectangle26.png";
import galerry6 from "../../assets/Rectangle27.png";
import galerry7 from "../../assets/Rectangle28.png";

const FeaturedSection = () => {
  return (
    <>
      {/* Featured Section */}
      <section className="mt-[104px] mr-[142px] ml-[98px] w-[1200px] flex flex-col ">
        <div className="flex flex-row gap-[65px] items-center justify-center ">
          <div className="first:w-[300px] first:h-[200px] first:bg-background-secondary z-1 flex items-center justify-center rounded-t-[25px] ">
            <CardItem icon={PencilIcon} title="Pencils" />
          </div>
          <CardItem icon={MakerIcon} title="Markers" />
          <CardItem icon={PaintIcon} title="Drawing Colors" />
          <CardItem icon={NoteBookIcon} title="Notebooks" />
        </div>
        <InformationCard />
        <div className="flex items-center justify-center mt-[50px] mb-[100px] gap-[15px]">
          <Dot color="bg-black-1" />
          <Dot color="bg-background-secondary" />
        </div>
        {/* Gallery Section */}
        <div className="h-[756px]">
          <h1 className="font-[700] text-[45px] text-center">
            Packer pen Gallery
          </h1>
          <div class="grid  grid-cols-[291px_minmax(582px,_1fr)_291px] gap-x-[18px]  ">
            <div class="grid justify-center mt-[89px]">
              <img src={galerry2} alt="galerry1" />
              <img src={galerry4} alt="galerry2" />
            </div>
            <div class="grid gap-y-[13px] mt-[40px]">
              <img src={galerry1} alt="galerry3" />
              <img src={galerry3} alt="galerry4" />
            </div>
            <div class="grid mt-[89px]">
              <img src={galerry5} alt="galerry5" />
              <img src={galerry6} alt="galerry6" />
              <img src={galerry7} alt="galerry7" />
            </div>
          </div>
          <div className="flex items-center justify-center mt-[50px] gap-[15px]">
            <Dot color="bg-background-secondary" />
            <Dot color="bg-black-1" />
          </div>
        </div>
      </section>
      <div className="h-[90px]"></div>
    </>
  );
};

export default FeaturedSection;
