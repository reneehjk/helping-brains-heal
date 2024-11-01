const ButtonLink = ({ label, href, width}) => {
  return (
    <a
      href={href}
      className={`inline-block ${width ? width : 'px-4'} py-2 border-color-1 text-color-1 border-solid border-[1px] rounded-[94px] font-satoshiMedium`}
      target="_blank" 
      rel="noopener noreferrer" 
    >
      {label}
    </a>
  );};

export default ButtonLink;