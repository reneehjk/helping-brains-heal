const ButtonLink = ({ label, href, width, color }) => {
  return (
    <a
      href={href}
      className={`inline-block ${width ? width : 'px-4'} ${color ? color : 'border-color-1 text-color-1 border-solid border-[1px]'} rounded-[94px] font-satoshiMedium group-hover:shadow-sm hover:border-fontBlack hover:scale-105 transition duration-300`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
};

export default ButtonLink;