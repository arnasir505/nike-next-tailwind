'use client';

import Image, { StaticImageData } from 'next/image';

const ShoeCard = ({
  imgUrl,
  changeBigShoeImage,
  bigShoeImg,
}: {
  imgUrl: { thumbnail: string; bigShoe: StaticImageData };
  changeBigShoeImage: (arg0: StaticImageData) => void;
  bigShoeImg: StaticImageData;
}) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${
        bigShoeImg === imgUrl.bigShoe
          ? 'border-coral-red'
          : 'border-transparent'
      }`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <Image
          src={imgUrl.thumbnail}
          alt='shoe collection'
          width={127}
          height={103}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default ShoeCard;
