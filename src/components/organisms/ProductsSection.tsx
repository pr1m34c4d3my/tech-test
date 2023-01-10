import React from "react";
import ProducCard from "../molecules/card/ProducCard";
import SideBar from "../molecules/navigation/SideBar";

type Phone = {
  id: any;
  brand: string;
  category: string;
  desc: string;
  images: string;
  title: string;
};

type Props = {
  productList: Phone;
};

const ProductsSection = ({ productList }: Props) => {
  return (
    <section className="max-w-[1170px] mx-auto flex">
      <SideBar />
      <div className="flex flex-wrap gap-5 justify-end">
        <ProducCard
          key={productList.id}
          data={{
            id: productList.id,
            brand: productList.brand,
            category: productList.category,
            desc: productList.desc,
            images: productList.images,
            title: productList.title,
          }}
        />
      </div>
    </section>
  );
};

export default ProductsSection;
