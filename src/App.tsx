import { CryptoSearchForm } from "./components";

function App() {
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
