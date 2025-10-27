import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  const API = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
  useEffect(() => {
    // Reset data when currency changes to avoid showing stale rates
    setData({});
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        if (res[currency]) {
          setData(res[currency]);
        }
      })
      .catch((error) => console.error("Failed to fetch currency info:", error));
  }, [currency]);

  return data;
};

export { useCurrencyInfo };
