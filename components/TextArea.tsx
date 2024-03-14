/* eslint-disable no-unused-vars */

import React from "react";

interface InputProps {
    label: string,
    htmlFor: string,
    value: any,
    onChange: (e: any) => void,
    placeholder?: string,
    className?: string,
    rows?: number,
    columns?: number
}

const TextArea: React.FC<InputProps> = ({
    label,
    htmlFor,
    value,
    onChange,
    className,
    rows,
    columns,
    placeholder,
    ...props
}) => {
    return (
        <div className="flex flex-col gap-2 m-1 p-1">
            <label
                htmlFor={htmlFor}
            >
                {label}
            </label>
            <textarea
                value={value}
                className={` p-1 border border-black border-opacity-25 rounded-sm focus: outline-none ${className}`}
                placeholder={placeholder ? placeholder : ""}
                name={htmlFor}
                onChange={onChange}
                rows={rows ? rows : 5}
                cols={columns ? columns : 25}
                {...props}
                required
            />
        </div>
    );
};

export default TextArea;