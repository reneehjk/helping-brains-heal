import { Link } from "react-router-dom";

const Button = ({
    children,
    onClick,
    to,
    type = "button",
    variant = "primary",
    size = "medium",
    disabled = false,
    className = "", // Optional className prop for custom styling
}) => {
    const baseClasses = "font-semibold rounded-full focus:outline-none transition-all duration-150 inline-block font-satoshiBold";
    const sizeClasses = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-5 py-3 text-lg",
    };
    const variantClasses = {
        primary: "bg-black text-white hover:bg-opacity-80 hover:text-white",
        secondary: "bg-gray-600 text-white hover:bg-gray-700 hover:text-white",
        outline: "bg-none border border-blue-600 text-blue-600 hover:bg-blue-50",
    };

    const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? "cursor-not-allowed" : "hover:shadow-lg hover:shadow-[#37CAEC]/50"
        } ${className}`;

    if (to) {
        return (
            <Link to={to} className={buttonClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} disabled={disabled} className={buttonClasses}>
            {children}
        </button>
    );
};

export default Button;
