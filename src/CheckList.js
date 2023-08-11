import React, { useState } from 'react';

const Checklist = () => {
  const options = [
    'Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'
  ];

  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      setCheckedItems(checkedItems.filter(item => item !== value));
    }
  };

  return (
    <div>
      <h1>Checklist</h1>
      <form>
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="checkbox"
              value={option}
              checked={checkedItems.includes(option)}
              onChange={handleCheckboxChange}
            />
            {option}
          </label>
        ))}
      </form>
      <h2>Selected Options:</h2>
      <ul>
        {checkedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
