# LoginSystemFrontend

![Badge](https://img.shields.io/badge/Status-Concluído-green)
![GitHub issues](https://img.shields.io/github/issues/SeuUsuario/LoginSystemFrontend)
![GitHub stars](https://img.shields.io/github/stars/SeuUsuario/LoginSystemFrontend)
![GitHub forks](https://img.shields.io/github/forks/SeuUsuario/LoginSystemFrontend)

## 📝 Descrição

O **LoginSystemFrontend** é uma aplicação React moderna desenvolvida para consumir a API do LoginSystem e realizar autenticação de usuários utilizando JWT.

A aplicação conta com:

- Tela de login responsiva
- Armazenamento e envio automático do token JWT
- Proteção de rotas privadas (PrivateRoute)
- Logout para remoção do token e retorno à tela de login
- Design clean e responsivo com Material UI

---

## 🚀 Funcionalidades

- **Tela de Login**: Entrada de usuário e senha para autenticação
- **Armazenamento de Token JWT**: Context API + LocalStorage para persistência
- **Rotas Protegidas**: Somente usuários autenticados podem acessar determinadas páginas
- **Logout**: Botão para deslogar e remover token
- **UI Moderna com Material UI**: Inputs, Botões, Headers e Alertas estilizados

---

## 📋 Pré-requisitos

- [Node.js 18+](https://nodejs.org/)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

---

## 🧰 Tecnologias Utilizadas

- React 18
- React Router DOM
- Axios
- Context API
- Material UI (MUI)
- Vite
  
---

## 🛠️ Configuração do Projeto

1. Clone o repositório

```bash
git clone https://github.com/SeuUsuario/LoginSystemFrontend.git
cd LoginSystemFrontend
 ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Configure a URL da API (se necessário):
   ```json
   baseURL: "http://localhost:5000/api"
   ```

4. Rode o projeto em modo desenvolvimento:
   ```bash
   npm run dev
   ```

5. A aplicação estará disponível em::
   ```bash
    http://localhost:3000
   ```
## 📂 Estrutura do Projeto

```plaintext
login-system-frontend/
├── public/                        # Arquivos públicos
├── src/
│   ├── api/                       # API Client (Axios + Token)
│   ├── auth/                      # AuthContext + Hooks
│   ├── components/                # Componentes reutilizáveis (Header)
│   ├── pages/                     # Páginas (Login, Success, Dashboard)
│   ├── routes/                    # PrivateRoute (Proteção de rotas)
│   ├── App.jsx                    # Rotas principais
│   └── main.jsx                   # Ponto de entrada
├── .gitignore
└── package.json
```
---
