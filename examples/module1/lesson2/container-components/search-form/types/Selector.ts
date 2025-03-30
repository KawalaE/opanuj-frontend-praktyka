interface Option {
  value: string;
  title: string;
}

export interface SelectorData extends InputData {
  defaultSelect: string;
  options: Option[];
}

export interface InputData {
  label: string;
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}
