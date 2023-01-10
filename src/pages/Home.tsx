import React, { useEffect, useState } from "react";
import ProducCard from "../components/molecules/card/ProducCard";
import SideBar from "../components/molecules/navigation/SideBar";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";

import Services from "../components/organisms/ServiceSection";
import Sliders from "../components/organisms/Sliders";

type Phone = {
  id: any;
  brand: string;
  category: string;
  desc: string;
  images: string;
  title: string;
};

const Home = () => {
  const [products, setProducts] = useState<Phone[] | null>(null);

  const data = () => {
    let list = [
      {
        id: 1,
        brand: "Iphone",
        category: "iOS",
        desc: "This is Iphone X",
        images:
          "https://images.tokopedia.net/img/cache/500-square/product-1/2019/10/18/346866676/346866676_c67dea10-c995-45df-b784-a2a169329ebf.jpg",
        title: "Iphone X",
      },
      {
        id: 2,
        brand: "Iphone",
        category: "iOS",
        desc: "This is Iphone 14",
        images:
          "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_14_pro_max_deep_purple_1.jpg",
        title: "Iphone 14",
      },
      {
        id: 3,
        brand: "Samsung",
        category: "Android",
        desc: "This is Samsung S 10",
        images:
          "https://assets.pikiran-rakyat.com/crop/0x80:591x706/x/photo/2021/12/17/4007823316.png",
        title: "Samsung S 10",
      },
      {
        id: 4,
        brand: "Samsung",
        category: "Android",
        desc: "This is Samsung S 11",
        images:
          "https://droidpoin.com/wp-content/uploads/2019/10/S11-Konsep.jpg",
        title: "Samsung S 11",
      },
      {
        id: 5,
        brand: "ASUS",
        category: "Android",
        desc: "This is ASUS Zenfone Max Pro M2",
        images:
          "https://3.bp.blogspot.com/-FTgO3SzJ4yQ/XA8q5Nky0-I/AAAAAAAAMpg/4q3NPvbbFcQ8aVHwzGMTRRs0TDaU2t1GQCLcBGAs/s1600/Asus-Zenfone-Max-Pro-M2%2BLaptophia.jpg",
        title: "ASUS Zenfone Max Pro M2",
      },
      {
        id: 6,
        brand: "ASUS",
        category: "Android",
        desc: "This is ASUS ROG Phone",
        images: "https://snapnaga.com/wp-content/uploads/2021/04/ImgW.jpg",
        title: "ASUS ROG Phone",
      },
    ];
    setProducts(list);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="w-full">
      <Header />

      <Sliders />

      <section className="max-w-[1170px] my-10 mx-auto flex lg:flex-row flex-col lg:p-0 p-5">
        <SideBar />
        <div className="flex flex-wrap gap-5 lg:justify-end justify-center">
          {products
            ? products.map((v: Phone, index) => {
                return (
                  <div key={index}>
                    <ProducCard
                      data={{
                        id: v.id,
                        brand: v.brand,
                        category: v.category,
                        desc: v.desc,
                        images: v.images,
                        title: v.title,
                      }}
                    />
                  </div>
                );
              })
            : null}
        </div>
      </section>

      <section className="">
        <Services />
      </section>

      <div className="bg-[#575757]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
