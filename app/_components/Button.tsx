import Image from 'next/image';

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
}: {
  label: string;
  iconUrl?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : `bg-coral-red text-white border-coral-red`
      }`}
    >
      {label}
      {iconUrl && (
        <Image
          src={iconUrl}
          alt='arrow right icon'
          className='ml-2 rounded-full w-5 h-5'
        />
      )}
    </button>
  );
};

export default Button;
