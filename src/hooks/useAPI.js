import { useState } from "react";

const useAPI = () => {
  const [loading, setLoading] = useState(false);
  const [errorAPI, setErrorAPI] = useState("");

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const fetchData = async (url, method, data) => {
    setLoading(true);

    try {
      const processedData = { ...data };
      // console.log(data.file);

      for (const file in processedData) {
        if (processedData.hasOwnProperty(file) && processedData[file] instanceof File) {
          const base64Data = await convertToBase64(processedData[file]);
          processedData[file] = base64Data;
          // console.log(base64Data);
        }
      }

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(processedData),
      });

      if (response.ok) {
        // console.log("Your Report sent");
      }
    } catch (error) {
      setErrorAPI("Server has a problem please try agin");
    } finally {
      setLoading(false);
      // firFun();
    }
  };
  // const tests = async () => {
  //   // console.log(loading);
  //   await setLoading(true);
  //   setErrorAPI("dasdadads");
  //   return loading;
  // };
  return {
    fetchData,
    setErrorAPI,
    errorAPI,
    loading,
    setLoading,
    // tests,
  };
};

export default useAPI;
