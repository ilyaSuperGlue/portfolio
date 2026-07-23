import { IFreeCard } from "@/features/game/free/FreeCard";
import { useCallback, useEffect, useState } from "react";
import apiHandler from "./apiHandler";
import { useFreeGameStore } from "@/store/useFreeGameStore";
import { webStorage } from "@/shared/lib/webApi";
const storage = webStorage();
const useGetFreeGame = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();
  const { data, setData } = useFreeGameStore();
  const getAPi = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    const res = await apiHandler<IFreeCard[]>(
      "https://www.gamerpower.com/api/giveaways",
    ).finally(() => {
      setLoading(false);
    });
    if (res[0]) {
      setData(res[0]);
      return;
    }
    setError(res[1]);
  }, []);

  useEffect(() => {
    getAPi();
  }, [getAPi]);

  return {
    data:
      data.length > 0
        ? data
        : (JSON.parse(storage?.getItem("cache") ?? "[]") as IFreeCard[]),
    loading,
    error,
    refetch: getAPi,
  };
};

export default useGetFreeGame;
