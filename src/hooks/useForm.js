import { useState } from "react";
// import useAPI from "./useAPI";

const useForm = () => {
  // const { fetchData, tests } = useAPI();
  const [formData, setFormData] = useState({
    company: [],
    date: new Date(),
    departmant: [],
    issue: "",
    note: "",
    staff: [],
    typeIssue: "",
  });
  const [error, setError] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handelTime = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      date: date,
    }));
  };

  const handelFile = (base46) => {
    setFormData((prevData) => ({
      ...prevData,
      file: base46,
    }));
  };
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => {
      if (checked) {
        return {
          ...prevData,
          [name]: [...(prevData[name] || []), value],
        };
      } else {
        return {
          ...prevData,
          [name]: prevData[name].filter((item) => item !== value),
        };
      }
    });
  };

  const sendForm = (url, method, callback) => {
    if (formData.date === "") {
      setError((prevState) => [...prevState, "Enter the date, it is required"]);
    }

    if (formData.departmant.length === 0) {
      setError((prevState) => [...prevState, "Enter the department, it is required"]);
    }

    if (formData.issue === "") {
      setError((prevState) => [...prevState, "Enter the issue, it is required"]);
    }

    if (formData.staff.length === 0) {
      setError((prevState) => [...prevState, "Enter the staff, it is required"]);
    }

    if (formData.typeIssue === "") {
      setError((prevState) => [...prevState, "Enter the type of issue, it is required"]);
    } else if (error.length === 0) {
      callback(url, method, formData);
    }
  };

  const remove = () => {
    setFormData({
      company: [],
      date: new Date(),
      departmant: [],
      issue: "",
      note: "",
      staff: [],
      typeIssue: "",
    });
  };

  // const test1 = () => {
  //   tests();
  // };
  return {
    formData,
    remove,
    handleChange,
    handleCheckboxChange,
    handelTime,
    sendForm,
    error,
    setError,
    handelFile,
    // test1,
  };
};

export default useForm;
