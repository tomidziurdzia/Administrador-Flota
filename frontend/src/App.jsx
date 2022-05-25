import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./paginas/Login";
import Registrar from "./paginas/Registrar";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import OlvidePassword from "./paginas/OlvidePassword";
import NuevoPassword from "./paginas/NuevoPassword";
import Dashboard from "./paginas/Dashboard";
import RutaProtegida from "./layouts/RutaProtegida";
import Viajes from "./paginas/Viajes";
import Choferes from "./paginas/Choferes";
import Acompanantes from "./paginas/Acompanantes";

import { AuthProvider } from "./context/AuthProvider";
import { ViajesProvider } from "./context/ViajesProvider";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ViajesProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route
                path="olvide-password/:token"
                element={<NuevoPassword />}
              />
              <Route path="confirmar/:token" element={<ConfirmarCuenta />} />
            </Route>
            <Route path="dashboard" element={<RutaProtegida />}>
              <Route index element={<Dashboard />} />
              <Route path="viajes" element={<Viajes />} />
              <Route path="choferes" element={<Choferes />} />
              <Route path="acompanantes" element={<Acompanantes />} />
            </Route>
          </Routes>
        </ViajesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
