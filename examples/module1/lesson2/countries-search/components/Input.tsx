interface InputProps {
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputComponent = ({ placeholder, value, setValue }: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default InputComponent;
