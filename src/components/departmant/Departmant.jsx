import { useRef, useState, useEffect } from "react";
import { toggleShow } from "../../hooks/helper";
const Departmant = ({ handleCheckboxChange }) => {
  const parentRef = useRef(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const div = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 500);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const hanelShow = () => {
    toggleShow(div);
  };
  const renderOptions = () => {
    const departmants = [
      { id: "security", label: "Security" },
      { id: "suppler", label: "Suppler" },
      { id: "human-res", label: "Human Resources" },
      { id: "logistic", label: "Logistic" },
      { id: "marketing", label: "Marketing" },
      { id: "sales", label: "Sales" },
      { id: "accounting", label: "Accounting" },
      { id: "finance", label: "Finance" },
      { id: "administrative", label: "Administrative" },
    ];

    if (isMobileView) {
      return departmants.map((departmant) => (
        <>
          <input
            type="checkbox"
            id={departmant.id}
            name="departmant"
            value={departmant.id}
            onChange={(e) => handleCheckboxChange(e)}
          />
          <label htmlFor={departmant.id}>{departmant.label}</label>
        </>
      ));
    }

    //   return (
    //     <select onChange={(e) => handleCheckboxChange(e)}>
    //       {departmants.map((departmant) => (
    //         <option key={departmant.id} value={departmant.id}>
    //           {departmant.label}
    //         </option>
    //       ))}
    //     </select>
    //   );
    // }

    return departmants.map((departmant) => (
      <>
        <input
          type="checkbox"
          id={departmant.id}
          name="departmant"
          value={departmant.id}
          onChange={(e) => handleCheckboxChange(e)}
        />
        <label htmlFor={departmant.id}>{departmant.label}</label>
      </>
    ));
  };

  return (
    <div className="departmant" ref={parentRef}>
      <span className="title">Relating to what departmant</span>
      <div className="options-box" onClick={hanelShow} ref={div}>
        {/* <div class="selectBox" >
          <select>
            <option id="showSelected">select an option</option>
          </select>
          <div class="overSelect"></div> */}
        {isMobileView && <div className="click">select your options</div>}
        {/* </div> */}
        {renderOptions()}
      </div>
    </div>
  );
};

export default Departmant;
