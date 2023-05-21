import React from "react";

const Staff = ({ handleCheckboxChange }) => {
  return (
    <>
      <div className="staff">
        <span className="title">Direct it to whome ?</span>
        <div className="options">
          <input type="checkbox" id="one" name="staff" value="one" onChange={handleCheckboxChange} />
          <label htmlFor="one">
            <img src="./assets/staff/one.svg" alt="dsd" />
          </label>
          <input type="checkbox" id="two" name="staff" value="two" onChange={handleCheckboxChange} />
          <label htmlFor="two">
            <img src="./assets/staff/two.svg" alt="dsd" />
          </label>
          <input type="checkbox" id="three" name="staff" value="three" onChange={handleCheckboxChange} />
          <label htmlFor="three">
            <img src="./assets/staff/three.svg" alt="dsd" />
          </label>

          <input type="checkbox" id="four" name="staff" value="four" onChange={handleCheckboxChange} />
          <label htmlFor="four">
            <img src="./assets/staff/four.svg" alt="dsd" />
          </label>

          <input type="checkbox" id="five" name="staff" value="five" onChange={handleCheckboxChange} />
          <label htmlFor="five">
            <img src="./assets/staff/five.svg" alt="dsd" />
          </label>

          <input type="checkbox" id="six" name="staff" value="six" onChange={handleCheckboxChange} />
          <label htmlFor="six">
            <img src="./assets/staff/six.svg" alt="dsd" />
          </label>

          <input type="checkbox" id="seven" name="staff" value="seven" onChange={handleCheckboxChange} />
          <label htmlFor="seven">
            <img src="./assets/staff/seven.svg" alt="dsd" />
          </label>

          <input type="checkbox" id="eight" name="staff" value="eight" onChange={handleCheckboxChange} />
          <label htmlFor="eight">
            <img src="./assets/staff/eight.svg" alt="dsd" />
          </label>

          <input type="checkbox" id="nine" name="staff" value="nine" onChange={handleCheckboxChange} />
          <label htmlFor="nine">
            <img src="./assets/staff/nine.svg" alt="dsd" />
          </label>
          <input type="checkbox" id="ten" name="staff" value="ten" onChange={handleCheckboxChange} />
          <label htmlFor="ten">
            <img src="./assets/staff/ten.svg" alt="dsd" />
          </label>
        </div>
      </div>
    </>
  );
};

export default Staff;
