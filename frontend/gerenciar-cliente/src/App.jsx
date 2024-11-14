import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PainelClientes from './Components/PainelCliente/PainelCliente'
import FormularioCliente from './Components/FormularioCliente/FormularioCliente';
import Header from './Components/Header/Header';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PainelClientes />} />
        <Route path="/clientes/:id" element={<FormularioCliente />} />
        <Route path="/clientes/novo" element={<FormularioCliente />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
