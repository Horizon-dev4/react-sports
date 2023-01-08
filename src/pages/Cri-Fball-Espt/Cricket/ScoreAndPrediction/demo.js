import { useEffect, useState } from 'react';

function MyComponent() {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const url = "https://livescore6.p.rapidapi.com/matches/v2/get-innings";
      const querystring = {"Eid":"836829","Category":"cricket"};
      const headers = {
        "X-RapidAPI-Key": "b6e89817d6msh36107de73277139p116779jsne307fb015e33",
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com"
      }

      try {
        const response = await fetch(url, { headers, params: querystring });
        const data = await response.json();
        setResponseData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  if (!responseData) {
    return null;
  }

  return (
    <div>
      <p>{responseData['SDInn'][0]['Pt']}</p>
      <p>{responseData['Prns'][0]['Snm']}</p>
    </div>
  );
}