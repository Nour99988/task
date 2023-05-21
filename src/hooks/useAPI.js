import { useState } from "react";

const useAPI = () => {
  const [loading, setLoading] = useState(false);
  const [errorAPI, setErrorAPI] = useState("");

  const fetchData = async (url, method, data) => {
    setLoading(true);

    try {
      const processedData = { ...data };
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(processedData),
      });

      if (response.ok) {
      }
    } catch (error) {
      setErrorAPI("Server has a problem please try agin");
    } finally {
      setLoading(false);
    }
  };

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
