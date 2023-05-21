import React from "react";
// import useForm from "../../hooks/useForm";
const Departmant = ({ handleCheckboxChange }) => {
  // const { handleCheckboxChange } = useForm();
  return (
    <>
      <div className="departmant">
        <span className="title">Relating to what departent</span>
        <div className="options-box">
          <input
            type="checkbox"
            id="security"
            name="departmant"
            value="security"
            onChange={(e) => handleCheckboxChange(e)}
          />
          <label htmlFor="security">Security</label>
          <input
            type="checkbox"
            id="suppler"
            name="departmant"
            value="suppler"
            onChange={(e) => handleCheckboxChange(e)}
          />
          <label htmlFor="suppler">Suppler</label>
          <input
            type="checkbox"
            id="human-res"
            name="departmant"
            value="human-res"
            onChange={(e) => handleCheckboxChange(e)}
          />
          <label htmlFor="human-res">Human Resources</label>
          <input
            type="checkbox"
            id="logistic"
            name="departmant"
            value="logistic"
            onChange={(e) => handleCheckboxChange(e)}
          />
          <label htmlFor="logistic">Logistic</label>
          <input
            type="checkbox"
            id="marketing"
            name="departmant"
            value="marketing"
            onChange={(e) => handleCheckboxChange(e)}
          />
          <label htmlFor="marketing">Marketing</label>
          <input type="checkbox" id="sales" name="departmant" value="sales" onChange={(e) => handleCheckboxChange(e)} />
          <label htmlFor="sales">Sales</label>
          <input
            type="checkbox"
            id="accounting"
            name="departmant"
            value="accounting"
            onChange={(e) => handleCheckboxChange(e)}
          />
          <label htmlFor="accounting">Accounting</label>
          <input
            type="checkbox"
            id="finance"
            name="departmant"
            value="finance"
            onChange={(e) => handleCheckboxChange(e)}
          />
          <label htmlFor="finance">Finance</label>
          <input
            type="checkbox"
            id="administrative"
            name="departmant"
            value="administrative"
            onChange={(e) => handleCheckboxChange(e)}
          />
          <label htmlFor="administrative">Administrative</label>
        </div>
      </div>
    </>
  );
};

export default Departmant;
