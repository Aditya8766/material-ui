import React, { useState } from 'react';

const SingleSelectableCheckbox = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'Option 1', checked: false },
    { id: 2, label: 'Option 2', checked: false },
    { id: 3, label: 'Option 3', checked: false }
  ]);

  const handleCheckboxChange = (selectedId) => {
    const updatedCheckboxes = checkboxes.map(checkbox => {
      if (checkbox.id === selectedId) {
        return { ...checkbox, checked: true };
      } else {
        return { ...checkbox, checked: false };
      }
    });
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <div>
      {checkboxes.map(checkbox => (
        <label key={checkbox.id}>
          <input
            type="checkbox"
            checked={checkbox.checked}
            onChange={() => handleCheckboxChange(checkbox.id)}
          />
          {checkbox.label}
        </label>
      ))}
    </div>
  );
};

export default SingleSelectableCheckbox;
