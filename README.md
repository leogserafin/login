
# 📄 Projeto: Aplicação de Login Simples para Análise de Testes

## Descrição

Esta é uma aplicação web simples que simula um fluxo básico de autenticação de usuários, composta por duas páginas principais:

- **Login Page (`login.html`)**: Tela onde o usuário informa credenciais (usuário e senha).
- **Secure Area (`secure.html`)**: Área segura acessível apenas após o login.

A aplicação foi desenvolvida com **HTML5**, **CSS3** e **JavaScript puro** (**vanilla JS**), sem dependência de backend real. Ela utiliza **localStorage** para controle da sessão e redirecionamentos de acesso.

Este ambiente foi criado especificamente para servir de base em **testes de automação e análise de fluxos de autenticação**, no contexto de um **Trabalho de Conclusão de Curso (TCC)**.

## Funcionalidades

- Validação de login local (usuário fixo `leoserafin` e senha `abc1234`).
- Controle de acesso: redireciona usuários não autenticados de volta para o login.
- Mensagens de sucesso ou erro dinâmicas.
- Simulação de logout com limpeza da sessão.
- Estrutura de projeto simples para facilitar análises e automações.

## Objetivo no TCC

O ambiente foi desenvolvido para possibilitar:

- **Testes exploratórios** sobre autenticação de usuário.
- **Automação de testes E2E** (End-to-End) utilizando ferramentas como Cypress, Selenium ou Playwright.
- **Análise de fluxo de navegação controlada** entre áreas públicas e privadas do sistema.
- **Estudo de cenários de falha** (tentativas inválidas de login, acesso não autorizado).
- **Simulação de mensagens dinâmicas** para tratamento de sucesso e erro.

## Tecnologias Utilizadas

- **HTML5** (estrutura)
- **CSS3** (estilização)
- **JavaScript puro** (lógica de autenticação e controle de sessão)
- **LocalStorage** (controle de login persistente na sessão)

## Estrutura de Arquivos

```
login-project/
├── login.html       # Tela de Login
├── secure.html      # Área Segura
├── style.css        # Estilos visuais
├── script.js        # Lógica de autenticação
└── README.md        # Documentação do projeto
```

## Como Executar

1. Faça o download ou clone este repositório.
2. Abra o arquivo `login.html` em um navegador moderno (Chrome, Firefox, Edge).
3. Use as seguintes credenciais para login:
   - **Usuário:** `tomsmith`
   - **Senha:** `SuperSecretPassword!`
4. A navegação correta permitirá o acesso à área segura.  
   Tentativas inválidas ou acessos diretos a `secure.html` sem login resultarão em redirecionamento automático para `login.html` com aviso de erro.

## Observações

- **Não** é feita comunicação com servidor real.
- Toda a validação e controle de estado são feitos no lado do cliente (navegador).
- Ideal para simular comportamentos em testes automatizados, mas **não recomendado para aplicações de produção**.

## Licença

Projeto de uso acadêmico e educacional.  
**Livre para uso em estudos, testes e experimentação.**
