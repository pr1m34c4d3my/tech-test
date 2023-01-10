import React from "react";
import PrimaryButton from "../../atoms/buttons/PrimaryButton";
import ImageCard from "../../atoms/images/products/ImageCard";
import DescCard from "../../atoms/typography/Products/DescCard";
import TitleCard from "../../atoms/typography/Products/TitleCard";

type Data = {
  id: any;
  brand: string;
  category: string;
  desc: string;
  images: string;
  title: string;
};

type Props = {
  data: Data;
};

const ProducCard = ({ data }: Props) => {
  return (
    <div className="max-w-[270px] bg-white h-[410px] mb-5 rounded-2xl flex flex-col hover:scale-105 shadow-lg hover:shadow-2xl ease-out duration-200 p-3 justify-between overflow-hidden border-[#D1D1D1] border-[1px]">
      <div className="flex flex-col">
        <div className="w-[240px] mt-2 h-[220px] rounded-2xl bg-slate-200 overflow-hidden shadow-2xl ">
          <ImageCard
            image={{ url: data.id, alt: data.title, src: data.images }}
          />
        </div>
        <div className="flex flex-col items-start justify-start mt-5">
          <TitleCard titleCard={{ url: data.id, title: data.title }} />
          <DescCard description={{ desc: data.desc }} />
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <PrimaryButton />
      </div>
    </div>
  );
};

export default ProducCard;
