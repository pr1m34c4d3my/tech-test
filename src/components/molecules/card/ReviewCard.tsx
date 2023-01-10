import React from "react";
import ReviewImage from "../../atoms/typography/Testimonials/ReviewImage";
import ReviewName from "../../atoms/typography/Testimonials/ReviewName";
import ReviewText from "../../atoms/typography/Testimonials/ReviewText";
import ReviewTitle from "../../atoms/typography/Testimonials/ReviewTitle";

type Reviews = {
  text: string;
  name: string;
  image: string;
  title: string;
};
type Props = {
  data: Reviews;
};

const ReviewCard = ({ data }: Props) => {
  return (
    <>
      <figure className="w-full flex flex-col justify-between items-center  h-[250px]">
        <svg
          className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <blockquote>
          <ReviewText text={data.text} />
        </blockquote>
        <div>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <ReviewImage image={data.image} />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <ReviewName name={data.name} />
              <ReviewTitle title={data.title} />
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  );
};

export default ReviewCard;
