import React, { useState } from "react";
import { TextInput } from "flowbite-react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

const Index = ({ theme, placeholder, value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative">
            <TextInput
                theme={theme}
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="pr-10" // Provide enough padding for the icon button
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
                {showPassword ? (
                    <IconEyeOff className="h-5 w-5 text-gray-500" />
                ) : (
                    <IconEye className="h-5 w-5 text-gray-500" />
                )}
            </button>
        </div>
    );
};

export default Index;
