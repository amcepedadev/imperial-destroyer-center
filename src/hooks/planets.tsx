import { useEffect, useState } from "react";
import axios from "axios";
import { PLANETS_API_ROUTE } from "../constants/apiRoutes";

export default function usePlanets(url: string) {
  const [planets, setPlanets] = useState<any[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        console.log("requesting ",`${PLANETS_API_ROUTE}${url || ""}`)
        const response = await axios.get(`${PLANETS_API_ROUTE}${url || ""}`);
        console.log("res is ",response)
        setPlanets(response?.data?.results);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { planets, error, loading };
}
