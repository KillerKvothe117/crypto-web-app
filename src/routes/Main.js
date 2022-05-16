import React, { useEffect, useState } from "react";
import "../App.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Main() {
  const [cryptoList, setCryptoList] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    Axios.get("https://api.coinlore.net/api/tickers/?start=0&limit=20").then(
      (response) => {
        setCryptoList(response.data["data"]);
      }
    );
  }, []);

  return (
    <>
      <header>
        <h1>CryptoLand</h1>
      </header>

      <div className="cryptoList">
        {cryptoList.map((coin) => {
          return (
            <div
              onClick={() => {
                navigate(`/currency/${coin.id}`);
              }}
            >
              <h1>{coin.symbol}</h1>
              <h1>{coin.price_usd}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Main;
