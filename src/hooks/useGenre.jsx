import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGenre = () => {
  const [genres, setGenres] = useState([]);
  const [erro, setErro] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();

    apiClient
      .get("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErro(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { genres, erro, isLoading };
};

export default useGenre;
