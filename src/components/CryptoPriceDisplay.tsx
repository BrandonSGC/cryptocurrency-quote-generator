import { useMemo } from "react";
import { useCryptoStore } from "../store";
import Spinner from "./Spinner";

export const CryptoPriceDisplay = () => {
  const { result, isLoading } = useCryptoStore();
  const hasResult = useMemo(() => Object.entries(result).length > 0, [result]);

  return (
    <div className="result-wrapper">
      {isLoading ? (
        <Spinner />
      ) : (
        hasResult && (
          <>
            <h2>Price</h2>
            <div className="result">
              <img
                src={`https://cryptocompare.com/${result.IMAGEURL}`}
                alt="Cryptocurrency image"
              />
              <div>
                <p>
                  Price is:<span>{result.PRICE}</span>
                </p>
                <p>
                  Today's highest price:<span>{result.HIGHDAY}</span>
                </p>
                <p>
                  Today's lowest price:<span>{result.LOWDAY}</span>
                </p>
                <p>
                  Variation of cryptocurrency in the last 24h{" "}
                  <span>{result.CHANGEPCT24HOUR}</span>
                </p>
                <p>
                  Last update:<span>{result.LASTUPDATE}</span>
                </p>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};
