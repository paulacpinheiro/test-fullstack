import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './FormularioCliente.css';
import Swal from 'sweetalert2';

function FormularioCliente() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    status: '',
  });

  const [cpfError, setCpfError] = useState('');
  const [telefoneError, setTelefoneError] = useState('');

  const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  const regexTelefone = /^\([1-9]{2}\) [9]{0,1}[6-9]{1}[0-9]{3}\-[0-9]{4}$/;


  const navigate = useNavigate();
  const { state } = useLocation();
  const id = state?.id;


  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/api/clientes/${id}`)
        .then((response) => {
          console.log("Dados do cliente carregados:", response.data);
          setFormData(response.data);
        })
        .catch((err) => {
          console.error('Erro ao buscar cliente', err);
        });
    }
  }, [id]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'cpf') {
      if (!regexCpf.test(value)) {
        setCpfError('CPF inválido. Formato correto: 000.000.000-00');
      } else {
        setCpfError('');
      }
    }

    if (name === 'telefone') {
      if (!regexTelefone.test(value)) {
        setTelefoneError('Telefone inválido. Formato correto: (00) 90000-0000');
      } else {
        setTelefoneError('');
      }
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cpfError && !telefoneError) {
      try {
        if (id) {
          await axios.put(`http://localhost:3001/api/clientes/${id}`, formData);
          Swal.fire({
            icon: 'success',
            title: 'Cliente atualizado com sucesso!',
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          await axios.post('http://localhost:3001/api/clientes', formData);
          Swal.fire({
            icon: 'success',
            title: 'Cliente criado com sucesso!',
            showConfirmButton: false,
            timer: 1500
          });
        }
        navigate('/');
      } catch (err) {
        console.error('Erro ao salvar cliente', err);
      }
    }
  };

  return (
    <div className="formulario-container">
      <div className="titulo-container">
        <img
          src="https://static.vecteezy.com/system/resources/previews/020/911/740/non_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
          alt="Ícone de Perfil"
          className="icone-perfil"
        />
        <div>
          <h1>Painel de clientes</h1>
        </div>
      </div>
      <h2>Novo usuário</h2>
      <p>Informe os campos a seguir para criar novo usuário:</p>
      <form onSubmit={handleSubmit} className="formulario">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cpf"
          maxLength={14}
          placeholder="123.456.789-00"
          value={formData.cpf}
          onChange={handleChange}
          required
        />
        {cpfError && <span style={{ color: 'red' }}>{cpfError}</span>}
        <input
          type="tel"
          name="telefone"
          maxLength={15}
          placeholder="(00) xxxxx-xxxx"
          value={formData.telefone}
          onChange={handleChange}
          required
        />
        {telefoneError && <span style={{ color: 'red' }}>{telefoneError}</span>}

        <select name="status" value={formData.status} onChange={handleChange} required>
          <option value="">Status</option>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
          <option value="Aguardando ativação">Aguardando ativação</option>
          <option value="Desativado">Desativado</option>
        </select>
        <div className="botoes-container">
          <button type="submit" className="botao-criar"
            disabled={cpfError || telefoneError}
            onClick={handleSubmit}
          >
            {id ? 'Salvar' : 'Criar'}
          </button>

          <button type="button" className="botao-voltar"
            onClick={() => navigate('/')}>
            Voltar
          </button>

        </div>
      </form>
    </div>
  );
}

export default FormularioCliente;