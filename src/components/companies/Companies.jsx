import React from "react";

const Companies = ({ handleCheckboxChange }) => {
  return (
    <>
      <div className="companies">
        <span className="title">Relating to which </span>
        <div className="options">
          <input type="checkbox" id="3kbattery" name="company" value="3kbattery" onChange={handleCheckboxChange} />
          <label htmlFor="3kbattery">
            <img src="./assets/logos/3kbattery.svg" alt="dsd" />
          </label>

          <input type="checkbox" id="deve" name="company" value="deve" onChange={handleCheckboxChange} />
          <label htmlFor="deve">
            <img src="./assets/logos/deve.svg" alt="dsd" />
          </label>

          <input type="checkbox" id="du" name="company" value="du" onChange={handleCheckboxChange} />
          <label htmlFor="du">
            <img src="./assets/logos/du.svg" alt="dsd" />
          </label>

          <input type="checkbox" id="growatt" name="company" value="growatt" onChange={handleCheckboxChange} />
          <label htmlFor="growatt">
            <img src="./assets/logos/growatt.svg" alt="dsd" />
          </label>

          <input type="checkbox" id="must" name="company" value="must" onChange={handleCheckboxChange} />
          <label htmlFor="must">
            <img src="./assets/logos/must.svg" alt="dsd" />
          </label>

          <input type="checkbox" id="luminous" name="company" value="luminous" onChange={handleCheckboxChange} />
          <label htmlFor="luminous">
            <img src="./assets/logos/luminous.svg" alt="dsd" />
          </label>

          <input type="checkbox" id="rocket" name="company" value="rocket" onChange={handleCheckboxChange} />
          <label htmlFor="rocket">
            <img src="./assets/logos/rocket.svg" alt="dsd" />
          </label>

          <input type="checkbox" id="filicity" name="company" value="filicity" onChange={handleCheckboxChange} />
          <label htmlFor="filicity">
            <img src="./assets/logos/filicity.svg" alt="dsd" />
          </label>

          <input type="checkbox" id="superpower" name="company" value="superpower" onChange={handleCheckboxChange} />
          <label htmlFor="superpower">
            <img src="./assets/logos/superpower.svg" alt="dsd" />
          </label>

          <input type="checkbox" id="rambo" name="company" value="rambo" onChange={handleCheckboxChange} />
          <label htmlFor="rambo">
            <img src="./assets/logos/rambo.svg" alt="dsd" />
          </label>

          <input type="checkbox" id="orbit" name="company" value="orbit" onChange={handleCheckboxChange} />
          <label htmlFor="orbit">
            <img src="./assets/logos/orbit.svg" alt="dsd" />
          </label>

          <input type="checkbox" id="longi" name="company" value="longi" onChange={handleCheckboxChange} />
          <label htmlFor="longi">
            <img src="./assets/logos/longi.svg" alt="dsd" />
          </label>

          <input type="checkbox" id="inkel" name="company" value="inkel" onChange={handleCheckboxChange} />
          <label htmlFor="inkel">
            <img src="./assets/logos/inkel.svg" alt="dsd" />
          </label>

          <input type="checkbox" id="exide" name="company" value="exide" onChange={handleCheckboxChange} />
          <label htmlFor="exide">
            <img src="./assets/logos/exide.svg" alt="dsd" />
          </label>

          <input type="checkbox" id="tuffbull" name="company" value="tuffbull" onChange={handleCheckboxChange} />
          <label htmlFor="tuffbull">
            <img src="./assets/logos/tuffbull.svg" alt="dsd" onChange={handleCheckboxChange} />
          </label>
        </div>
      </div>
    </>
  );
};

export default Companies;
