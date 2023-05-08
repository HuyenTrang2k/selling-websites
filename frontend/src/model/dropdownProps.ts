export interface DropdownProps {
    options: { value: number}[];
    value: number;
    onChange: (value: number) => void;
  }