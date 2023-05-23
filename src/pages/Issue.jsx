import React, { useState, useRef } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import useAPI from "../hooks/useAPI";
import useForm from "../hooks/useForm";
import PropUp from "../components/resuble/PropUp";
import Departmant from "../components/departmant/Departmant";
import Companies from "../components/companies/Companies";
import Staff from "../components/staff/Staff";
import "./issue.css";

const Issue = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
  const [forceRender, SetforceRender] = useState("");
  const handleDateTimeChange = (moment) => {
    setSelectedDateTime(moment);
    handelTime(moment._d);
  };
  const { formData, handleChange, handleCheckboxChange, error, setError, handelTime, sendForm, remove, handelFile } =
    useForm();
  const { errorAPI, setErrorAPI, loading, fetchData } = useAPI();
  const fromRef = useRef(null);

  // convert File To base64
  const handleFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result;
      handelFile(base64);
    };
    reader.readAsDataURL(file);
  };

  const resetForm = () => {
    fromRef.current.reset();
    // For resrt The state
    remove();
    // for force render
    SetforceRender(Date.now().toString());
  };

  return (
    <div className="container">
      <h3>ISSUE</h3>
      <fieldset disabled={loading}>
        <form ref={fromRef}>
          <div className="type-issue">
            <input type="radio" id="urgent" name="typeIssue" value="urgent" onChange={handleChange} />
            <label htmlFor="urgent">Urgent</label>

            <input type="radio" id="typical" name="typeIssue" value="typical" onChange={handleChange} />
            <label htmlFor="typical">Typical</label>
          </div>
          <Departmant handleCheckboxChange={handleCheckboxChange} />
          <Companies handleCheckboxChange={handleCheckboxChange} />
          <Staff handleCheckboxChange={handleCheckboxChange} />
          <div className="texts">
            <div>
              <label>Issue</label>
              <textarea
                type="texterea"
                value={formData.issue}
                name="issue"
                onChange={handleChange}
                placeholder="  Type your issue"
              ></textarea>
            </div>
            <div>
              <label>Choices</label>
              <p type="text">{formData.departmant?.join("  ")}</p>
            </div>
            <div>
              <label>Choices</label>
              <p type="text">{formData.company?.join("  ")}</p>
            </div>
            <div>
              <label>Choices</label>
              <p type="text">{formData.staff?.join("/")}</p>
            </div>
            <div>
              <label>Note</label>
              <input type="text" name="note" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="upload">
                <div className="image">
                  <label> Supporting Document</label>
                  <img src="./assets/icons/upload.svg" alt="upload" />
                </div>
              </label>
              <input type="file" id="upload" name="file" onChange={handleFile} />
            </div>
          </div>
          <div className="date">
            <span className="title">Deadline</span>
            <div className="datepick">
              <Datetime viewMode="time" value={selectedDateTime} onChange={(e) => handleDateTimeChange(e)} />
            </div>
          </div>
          <div className="send">
            <button
              onClick={(e) => {
                remove();
                resetForm();
                e.preventDefault();
              }}
            >
              Delete
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                fetchData("http://localhost:4000", "POST");
              }}
            >
              Save
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                sendForm("http://localhost:4000", "POST", async () => await fetchData());
              }}
            >
              Send
            </button>
          </div>
        </form>
        {/* <input type="test" onChange={tests} /> */}
        {/* <button onClick={() => test1(() => tests())}>sssssssssssssssssss</button> */}
      </fieldset>

      {errorAPI !== "" ? <PropUp error={errorAPI} title="errorAPI" close={() => setErrorAPI("")} /> : <></>}
      {error.length ? <PropUp error={error} title="Error" close={() => setError([])} /> : <></>}
    </div>
  );
};

export default Issue;
