import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGame = () => {
  const [games, setGames] = useState([]);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErro(err.message);
      });
    return () => controller.abort();
  }, []);
  return { games, erro };
};


export default useGame;
