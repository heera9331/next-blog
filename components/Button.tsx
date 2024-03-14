

/* eslint-disable react/prop-types */
interface InputProps {
    text: string,
    onClick: (e: any) => void,
    className?: string,
}

const Button = ({ text, onClick, className, ...props }: InputProps) => {
    return (
        <button
            className={`bg-white border border-black border-opacity-25 rounded-sm px-2 py-1 font-semibold hover:bg-gray-100 ${className}`}
            type="button"
            {...props}
            onClick={onClick}
        >
            {text ? text : "Button"}
        </button>
    );
};

export default Button;