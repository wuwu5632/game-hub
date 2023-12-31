
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useData = (endpoint,requestConfig,deps=[]) => {
  const [data, setData] = useState([]);
  const [erro, setErro] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();

    apiClient
      .get(endpoint, { ...requestConfig, signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErro(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  },[endpoint,...deps]);
  return { data, erro, isLoading };
};

export default useData;
