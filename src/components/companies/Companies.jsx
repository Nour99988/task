import { useRef, useState, useEffect } from "react";
import { toggleShow } from "../../hooks/helper";

const Companies = ({ handleCheckboxChange }) => {
  const parentRef = useRef(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const div = useRef(null);
  const handleResize = () => {
    setIsMobileView(window.innerWidth < 700);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const hanelShow = () => {
    toggleShow(div);
  };

  const renderOptions = () => {
    const companies = [
      { id: "3kbattery", label: "3kbattery", logo: "./assets/logos/3kbattery.svg" },
      { id: "deve", label: "deve", logo: "./assets/logos/deve.svg" },
      { id: "du", label: "du", logo: "./assets/logos/du.svg" },
      { id: "growatt", label: "growatt", logo: "./assets/logos/growatt.svg" },
      { id: "must", label: "must", logo: "./assets/logos/must.svg" },
      { id: "luminous", label: "luminous", logo: "./assets/logos/luminous.svg" },
      { id: "rocket", label: "rocket", logo: "./assets/logos/rocket.svg" },
      { id: "filicity", label: "filicity", logo: "./assets/logos/filicity.svg" },
      { id: "superpower", label: "superpower", logo: "./assets/logos/superpower.svg" },
      { id: "rambo", label: "rambo", logo: "./assets/logos/rambo.svg" },
      { id: "orbit", label: "orbit", logo: "./assets/logos/orbit.svg" },
      { id: "longi", label: "longi", logo: "./assets/logos/longi.svg" },
      { id: "inkel", label: "inkel", logo: "./assets/logos/inkel.svg" },
      { id: "exide", label: "exide", logo: "./assets/logos/exide.svg" },
      { id: "tuffbull", label: "tuffbull", logo: "./assets/logos/tuffbull.svg" },
    ];

    if (isMobileView) {
      return companies.map((company) => (
        <div key={company.id}>
          <input
            type="checkbox"
            id={company.id}
            name="company"
            value={company.id}
            onChange={(e) => handleCheckboxChange(e)}
          />
          <label htmlFor={company.id}>{company.id}</label>
        </div>
      ));
    }

    return companies.map((company) => (
      <div key={company.id}>
        <input
          type="checkbox"
          id={company.id}
          name="company"
          value={company.id}
          onChange={(e) => handleCheckboxChange(e)}
        />
        <label htmlFor={company.id}>
          <img src={company.logo} alt={company.label} />
        </label>
      </div>
    ));
  };

  return (
    <div className="companies" ref={parentRef}>
      <span className="title">Relating to which</span>
      <div className="options" onClick={hanelShow} ref={div}>
        {isMobileView && <div className="click">select your options</div>}
        {renderOptions()}
      </div>
    </div>
  );
};

export default Companies;
