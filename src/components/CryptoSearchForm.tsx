import { ChangeEvent, FormEvent, useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import { Pair } from "../types";
import { ErrorMessage } from "./";

export const CryptoSearchForm = () => {
  const { cryptocurrencies, fetchData } = useCryptoStore();
  const [pair, setPair] = useState<Pair>({
    currency: "",
    cryptocurrency: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPair({
      ...pair,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(pair).includes("")) {
      setError("All fiels are necessary");
      return;
    }

    setError("");
    fetchData(pair);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="field">
        <label htmlFor="currency">Currency:</label>
        <select
          name="currency"
          id="currency"
          onChange={handleChange}
          value={pair.currency}
        >
          <option value="">-- Select --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="cryptocurrency">Cryptocurrency:</label>
        <select
          name="cryptocurrency"
          id="cryptocurrency"
          onChange={handleChange}
          value={pair.cryptocurrency}
        >
          <option value="">-- Select --</option>
          {cryptocurrencies.map((currency) => (
            <option
              key={currency.CoinInfo.FullName}
              value={currency.CoinInfo.Name}
            >
              {currency.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="Get Quote" />
    </form>
  );
};
