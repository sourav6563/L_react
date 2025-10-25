import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  const API = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.table(data);
  }, [currency]);

  console.log(data);

  return data;
};

export { useCurrencyInfo };
