import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import HomeSlider from "../molecules/sliders/HomeSlider";

type ImageKey = {
  id: number;
  url: string;
};

const Sliders = () => {
  SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

  const [slider, setSlider] = useState<ImageKey[]>([]);

  const data = () => {
    let list = [
      {
        id: 1,
        url: "https://www.bca.co.id/-/media/Feature/Promo/Thumbnail/2020/11/20201210-pre-order-iphone-12-series-banner.jpg",
        slug: "iphone",
      },
      {
        id: 2,
        url: "https://images.samsung.com/is/image/samsung/assets/id/offer/2021/october/samsung-anniversary/SamsungAnniv_FinderBanner_1440x640.png?imwidth=1366",
        slug: "Samsung",
      },
      {
        id: 3,
        url: "https://cdn.eraspace.com/pub/media/wysiwyg/Produk/Category_Banner_Asus_ROG_Phone_5_1200x350px_18_Juni_2021_.jpg",
        slug: "ASUS",
      },
    ];
    setSlider(list);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 5000,
      }}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="max-w-[1366px] text-black"
    >
      {slider.map((v: any, index: number) => (
        <SwiperSlide key={index}>
          <HomeSlider data={{ id: v.id, url: v.url, slug: v.slug }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Sliders;
