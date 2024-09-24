import { useState } from "react";

interface FloatingLabelInputProps {
  placeholder: string;
  type?: string;
  rows?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  maxLength?: number;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({ placeholder, type = "text", rows = 1, value, onChange, error, maxLength }) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputStyles = `w-full p-2 text-sm border rounded-sm bg-gray-800 text-gray-200 border-gray-700 focus:border-pink-600 focus:outline-none flex-1 ${error ? 'border-red-500' : ''}`;
  const labelStyles = "absolute left-2 transition-all duration-200 pointer-events-none";

  const labelClasses = `${labelStyles} ${
    isFocused || value
      ? "-top-3 left-0 text-md text-gray-400"
      : "top-6 text-gray-400"
  }`;

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="relative pt-4 flex-1">
      <label className={labelClasses}>
        {placeholder}
      </label>
      {rows > 1 ? (
        <textarea
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={inputStyles}
          rows={rows}
          maxLength={maxLength}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={inputStyles}
          maxLength={maxLength}
        />
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      {maxLength && (
        <p className="text-gray-400 text-xs mt-1">
          {value.length}/{maxLength} characters
        </p>
      )}
    </div>
  );
};

export default FloatingLabelInput;