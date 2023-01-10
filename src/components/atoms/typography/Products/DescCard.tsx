import React from "react";

type Desc = {
  desc: string;
};

type Props = {
  description: Desc;
};

const DescCard = ({ description }: Props) => {
  return <p className="font-light text-[11px]">{description.desc}</p>;
};

export default DescCard;
