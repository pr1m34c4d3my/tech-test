import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "../molecules/card/ReviewCard";

type Testimonial = {
  text: string;
  name: string;
  image: string;
  title: string;
};

const Testimonials = () => {
  const [testi, setTesti] = useState<Testimonial[]>([]);

  const data = () => {
    let list: Testimonial[] = [
      {
        text: `Untuk keramik, ROMAN is the best, untuk konstruksi bangunan besi - baja kami memilih PT. CIKANDE INDOBAJA MANDIRI sebagai mitra bisnis yang baik.

        Stokist besi - baja yang tergolong lengkap proses pengiriman barangnya pun sangat cepat dan tepat waktu. (Ini yang kami utamakan)
        
        Harga yang flexible dan bersaing dengan kompetitor juga dalam segi pelayanan PT. CIM sangat ramah dan asik.
        
        Sukses selalu untuk PT. CIKANDE INDOBAJA MANDIRI`,
        name: "Eka Prasetia",
        title: "Purchasing Dept - PT. SATYARAYA KERAMINDOINDAH",
        image: "/",
      },
      {
        text: `Segala permintaan yang kami butuhkan sangat fast respon dan mengesankan sehingga kami tidak perlu menunggu lama dalam proses pengiriman kebutuhan material besi - baja.

        Pelayanan juga sangat baik dana ramah juga harga yang diberikan relatif cukup memuaskan.
        
        Sukses selalu untuk PT. CIKANDE INDOBAJA MANDIRI`,
        name: "Agus Winarto",
        title: "Head HRD - PT. SEJIN CIPTA BANGUN",
        image: "/",
      },
      {
        text: `PT. CIM dikenal sebagai penyedia bahan besi baja dan bahan bangunan yang lengkap di daerah Cikande, pelayanan cepat & service yang maximal juga pengiriman tepat waktu telah kami rasakan di perusahaan kami.

        Tokonya strategis & tidak jauh dari kawasan industri estate di Cikande dan Workshop kami.
        
        Harapan kami PT. CIM terus berkembang & berinovasi sesuai perkembangan zaman, dalam penyedia produk besi - baja yang lebih lengkap lagi.`,
        name: "Christin Nobiantari",
        title: "Manager - PT. HANJIN KONTRUKSI",
        image: "/",
      },
    ];
    setTesti(list);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="w-full items-center flex flex-col mx-auto gap-2 justify-between">
      <h1 className="text-[32px] font-bold mb-10">Testimonial</h1>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full h-[300px] text-black"
      >
        <SwiperSlide>
          {testi.map((v: Testimonial, index) => {
            return (
              <ReviewCard
                data={{
                  text: v.text,
                  name: v.name,
                  image: v.image,
                  title: v.title,
                }}
              />
            );
          })}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
