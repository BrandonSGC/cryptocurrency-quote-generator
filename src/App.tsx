import { useEffect } from "react";
import { CryptoSearchForm } from "./components";
import { useCryptoStore } from "./store";

function App() {
  const { fetchCryptos } = useCryptoStore();

  useEffect(() => {
    fetchCryptos();    
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cryptocurrency <span>quote Generator</span>
        </h1>

        <div className="content">
          <CryptoSearchForm />
        </div>
      </div>
    </>
  );
}

export default App;
