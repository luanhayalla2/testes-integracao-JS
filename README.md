<div align="center">
  <img src="C:\Users\aluno.SENACLAB\.gemini\antigravity\brain\4688511f-1201-413f-bfc4-54383e9191da\integration_tests_banner_1777404551003.png" width="100%" alt="Banner Integration Tests" />

  # 🧪 Tutorial de Testes de Integração
  
  > Um guia prático de implementação e automação de testes de integração utilizando os ecossistemas **Node.js** e **Python**.
  
  [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
  [![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
  [![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)
  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
  [![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
</div>

---

## 📖 Sobre o Projeto

Este repositório foi desenvolvido como material didático para o aprendizado de **Testes de Integração**. O objetivo é demonstrar como validar a comunicação entre diferentes camadas da aplicação (como Rotas HTTP e Lógica de Negócio) garantindo que o sistema funcione corretamente como um todo.

---

## 🛠️ Stack Tecnológica

### **Ecossistema JavaScript**
- **Runtime:** Node.js
- **API Framework:** Express.js
- **Test Runner:** Jest
- **HTTP Assertions:** Supertest

### **Ecossistema Python**
- **Runtime:** Python 3.x
- **API Framework:** Flask
- **Test Runner:** Pytest
- **Coverage Tool:** Pytest-cov

---

## 📁 Estrutura do Repositório

```text
📂 tutorial-testes-unitarios
 ┣ 📂 testes-integracao-JS
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📜 app.js            # Servidor Express
 ┃ ┃ ┣ 📜 app.test.js       # Suite de testes Jest
 ┃ ┃ ┗ 📜 produtos.js       # Mock de dados
 ┃ ┗ 📜 package.json        # Configurações Node
 ┗ 📂 testes-integracao-PYTHON
   ┣ 📂 src
   ┃ ┣ 📜 app.py            # Servidor Flask
   ┃ ┣ 📜 test_app.py       # Suite de testes Pytest
   ┃ ┗ 📜 produtos.py       # Mock de dados
   ┗ 📜 README.md
```

---

## 🚀 Como Executar

### 🟢 Opção 1: JavaScript (Node.js)

1. Navegue até a pasta: `cd testes-integracao-JS`
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute os testes:
   ```bash
   npm test
   ```
4. Verifique a cobertura de código:
   ```bash
   npm run test:coverage
   ```

### 🟡 Opção 2: Python (Flask)

1. Navegue até a pasta: `cd testes-integracao-PYTHON`
2. Instale as dependências:
   ```bash
   pip install flask pytest pytest-cov
   ```
3. Execute os testes e gere a cobertura:
   ```bash
   pytest --cov=src --cov-report=term-missing
   ```

---

## 🛡️ O que está sendo validado?

Ambos os projetos seguem os mesmos critérios de qualidade:
- **Camada HTTP:** Validação de status codes (200 OK, 404 Not Found).
- **Contrato da API:** Verificação se os objetos retornados possuem as chaves e tipos de dados corretos.
- **Lógica de Busca:** Testes de sucesso (buscar ID existente) e falha (buscar ID inexistente).
- **Cobertura:** Garantia de que 100% das linhas de código das rotas estão cobertas por testes.

---

<div align="center">
  <p>Desenvolvido para fins educacionais 🚀</p>
</div>
