import { DebounceInput } from 'react-debounce-input';
interface InputProps {
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputComponent = ({ placeholder, value, setValue }: InputProps) => {
  return (
    <DebounceInput
      type="text"
      placeholder={placeholder}
      value={value}
      debounceTimeout={500}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default InputComponent;
