import React from "react";

type TitleCard = {
  url: string;
  title: string;
};

type Props = {
  titleCard: TitleCard;
};

const TitleCard = ({ titleCard }: Props) => {
  return (
    <h2 className="font-bold text-[15px] hover:scale-110 transition-all">
      <a href={titleCard.url}>{titleCard.title}</a>
    </h2>
  );
};

export default TitleCard;
