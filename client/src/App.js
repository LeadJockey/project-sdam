import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDataApi } from "./api";

function App() {
  const [{ data, isLoading, isError }, doFetch] = useDataApi("https://server.leadjockey.now.sh/api/v1/users")
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <pre>{JSON.stringify(data)}</pre>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
