import React from "react";

type Images = {
  url: string;
  alt: string;
  src: string;
};

type Props = {
  image: Images;
};

const ImageCard = ({ image }: Props) => {
  return (
    <a href={`/product/${image.url}`}>
      <img
        className="object-cover w-full h-full"
        src={image.src}
        alt={image.alt}
        width={320}
        height={250}
      />
    </a>
  );
};

export default ImageCard;
