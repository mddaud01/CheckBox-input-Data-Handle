import React, { useState } from "react";

function CheckboxForm() {
  const [checkboxOptions, setCheckboxOptions] = useState({
    option1: false,
    option2: false,
    option3: false
  });

  const [textInputs, setTextInputs] = useState({
    textInput1: "",
    textInput2: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxOptions({
      ...checkboxOptions,
      [name]: checked
    });
  };

  const handleTextInputChange = (e) => {
    const { name, value } = e.target;
    setTextInputs({
      ...textInputs,
      [name]: value
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="option1"
          checked={checkboxOptions.option1}
          onChange={handleCheckboxChange}
        />
        Option 1
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="option2"
          checked={checkboxOptions.option2}
          onChange={handleCheckboxChange}
        />
        Option 2
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="option3"
          checked={checkboxOptions.option3}
          onChange={handleCheckboxChange}
        />
        Option 3
      </label>
      <br />
      <label>
        Text Input 1:
        <input
          type="text"
          name="textInput1"
          value={textInputs.textInput1}
          onChange={handleTextInputChange}
        />
      </label>
      <br />
      <label>
        Text Input 2:
        <input
          type="text"
          name="textInput2"
          value={textInputs.textInput2}
          onChange={handleTextInputChange}
        />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      {submitted && (
        <div>
          <p>Selected Options:</p>
          <ul>
            {Object.entries(checkboxOptions).map(([option, isSelected]) =>
              isSelected ? <li key={option}>{option}</li> : null
            )}
          </ul>
          <p>Text Input Values:</p>
          <ul>
            {Object.entries(textInputs).map(([inputName, inputValue]) =>
              inputValue ? (
                <li key={inputName}>
                  {inputName}: {inputValue}
                </li>
              ) : null
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CheckboxForm;
