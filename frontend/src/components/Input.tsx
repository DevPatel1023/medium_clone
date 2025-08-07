import type { InputProps } from "../types/Input";

const Input = ({ label, placeholder, type, value, onChange }: InputProps) => {
  return (
    <div className="py-2">
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
        required
      />
    </div>
  );
};

export default Input;
