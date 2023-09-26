import { useEffect, useState } from 'react';

async function UseCurrencyHooks() {
  const [data, setData] = useState(null);
  // const [CAD, setCAD] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=c77eb3d5a579402abc716366245fef1f"); 
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const currency = await response.json();
        setData(currency);
        console.log("Berhasil");
        console.log(currency)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return data;
}

export default UseCurrencyHooks;