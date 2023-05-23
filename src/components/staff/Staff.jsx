import { useRef, useState, useEffect } from "react";
import { toggleShow } from "../../hooks/helper";
const Staff = ({ handleCheckboxChange }) => {
  const parentRef = useRef(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const div = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 700);
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
    const staff = [
      { id: "one", label: "one", image: "./assets/staff/one.svg" },
      { id: "two", label: "two", image: "./assets/staff/two.svg" },
      { id: "three", label: "three", image: "./assets/staff/three.svg" },
      { id: "four", label: "four", image: "./assets/staff/four.svg" },
      { id: "five", label: "five", image: "./assets/staff/five.svg" },
      { id: "six", label: "six", image: "./assets/staff/six.svg" },
      { id: "seven", label: "seven", image: "./assets/staff/seven.svg" },
      { id: "eight", label: "eight", image: "./assets/staff/eight.svg" },
      { id: "nine", label: "nine", image: "./assets/staff/nine.svg" },
      { id: "ten", label: "ten", image: "./assets/staff/ten.svg" },
    ];

    if (isMobileView) {
      return staff.map((staffMember) => (
        <div key={staffMember.id}>
          <input
            type="checkbox"
            id={staffMember.id}
            name="staff"
            value={staffMember.id}
            onChange={(e) => handleCheckboxChange(e)}
          />
          <label htmlFor={staffMember.id}>{staffMember.id}</label>
        </div>
      ));
    }

    return staff.map((staffMember) => (
      <div key={staffMember.id}>
        <input
          type="checkbox"
          id={staffMember.id}
          name="staff"
          value={staffMember.id}
          onChange={(e) => handleCheckboxChange(e)}
        />
        <label htmlFor={staffMember.id}>
          <img src={staffMember.image} alt={staffMember.label} />
        </label>
      </div>
    ));
  };

  return (
    <div className="staff" ref={parentRef}>
      <span className="title">Direct it to whom?</span>
      <div className="options" ref={div} onClick={hanelShow}>
        {isMobileView && <div className="click">select your options</div>}
        {renderOptions()}
      </div>
    </div>
  );
};

export default Staff;
