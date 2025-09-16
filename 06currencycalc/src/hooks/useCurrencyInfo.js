import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({});
    useEffect(()=>{
        const fetchData = async () => {
            const baseURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`;
            const URL = `${baseURL}/${currency}.json`;
            try {
                let response = await fetch(URL);
                if (!response.ok) {
                    throw new Error(`Status : ${response.status}\n Status Text : ${response.statusText}`);
                }
                let responseJSON = await response.json();
                setData(responseJSON[currency]);
            } catch (error) {
                console.error("Fetch error:", error);
                setData({});
            }
        };
        fetchData();
    }, [currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo
