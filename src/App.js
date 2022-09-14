import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Products from "./Components/Products";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Products />
      </QueryClientProvider>
    </div>
  );
}

export default App;
