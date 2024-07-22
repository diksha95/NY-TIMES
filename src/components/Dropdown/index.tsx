import React from "react";
import Select from "react-select";

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  selectedOption: Option | null;
   setSelectedOption: (option: Option | null) => void;
}


const DropdownComponent: React.FC<DropdownProps> = ({options,selectedOption,setSelectedOption}) => {
  return (
    <Select
      defaultValue={selectedOption}
       onChange={setSelectedOption}
      options={options}
    />
  );
};

export default DropdownComponent;
