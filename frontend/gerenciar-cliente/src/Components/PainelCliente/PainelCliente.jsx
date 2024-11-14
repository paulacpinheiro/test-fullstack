import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PainelClientes.css';

function PainelClientes() {
  const [clientes, setClientes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClientes = async () => {
      const response = await axios.get('http://localhost:3001/api/clientes');
      setClientes(response.data);
    };
    fetchClientes();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ativo':
        return 'green';
      case 'Inativo':
        return 'red';
      case 'Aguardando ativação':
        return 'yellow';
      case 'Desativado':
        return 'gray';
      default:
        return 'gray';
    }
  };

  return (
    <div className="painel-container">
      <div className="titulo-container">
        <header className="painel-header">
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/911/740/non_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
            alt="Ícone de Perfil"
            className="icone-perfil"
          />
          <h1 className='titulo-painel'>Painel de clientes</h1>
        </header>
      </div>
      <div className='header-container'>
        <div>
          <p className='listagem'>Listagem de usuários</p>
          <p style={{color: '#666'}}>Escolha um cliente para visualizar os detalhes</p>
        </div>
        <button className="novo-cliente-btn" onClick={() => navigate('/clientes/novo')}>Novo Cliente</button>
      </div>
      <div className="clientes-lista">
        {clientes.map((cliente) => (
          <div key={cliente.id} className="cliente-card">

            <div className='info-container'>
              <div className="cliente-info-container">
                <div className="cliente-info">
                  <h3>{cliente.nome}</h3>
                  <p>{cliente.email}</p>
                </div>
                <div className="cliente-info">
                  <h3>{cliente.cpf}</h3>
                  <p>{cliente.telefone}</p>
                </div>
              </div>
              <div className="cliente-status">
                <span className="status-indicator" style={{ backgroundColor: getStatusColor(cliente.status) }}>
                </span>
                {cliente.status}
              </div>

            </div>
            <button className="editar-btn"
              onClick={() => {
                navigate(`/clientes/${cliente.id}`, { state: { id: cliente.id } });
              }}
            >
              Editar
            </button>
          </div>
        ))}
      </div>
      <p className="total-clientes">Exibindo {clientes.length} clientes</p>
    </div>
  );
}

export default PainelClientes;
