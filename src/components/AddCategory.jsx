import { useState } from "react";

export const AddCategory = ({onNewCategory} ) => {
  const [inputValue, setinputValue] = useState('');

  const onInputChange = ({target}) => {
    setinputValue(target.value);
    //console.log(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setinputValue('');
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        placeholder="Search Gif's"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
