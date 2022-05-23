import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Registro from "./components/Registro";
import BalanceDetallado from "./page/BalanceDetallado";
import CombustibleDetallado from "./page/CombustibleDetallado";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/registro-combustible" element={<Registro />} />
          <Route path="/balance-detallado" element={<BalanceDetallado />} />
          <Route
            path="/detalle-combustible"
            element={<CombustibleDetallado />}
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
