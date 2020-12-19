<h1 align="center">:rocket: GoBarber-Backend :rocket:</h1>

<p align="center">
<img src="logo/gobarber-logo.png" alt="gobarber-logo"/>
</p>

<p align="center">This project was developed in GoStack Bootcamp from Rocketseat. It is the backend of an application for barbershops named GoBarber. The frontend can be accessed <a href="https://github.com/fabiomotta0311/gobarber-web-react-ts">here</a> and the mobile version <a href="https://github.com/fabiomotta0311/gobarber_app">here</a>.</p>

<p align="center">
 <a href="#objective">Objective</a> •
 <a href="#technologies">Technologies</a> •
 <a href="#how-to-run">How to run the application</a> •
</p>

<h1 id="objective">:bulb: Objective</h1>
</p>This project allows the customer to make an appointment with a specific barber and the barber can see the appointments of a particular day. This project was developed using DDD, TDD and some SOLID principles.</p>

# Recuperação de senha

**RF**

- o usuário deve poder recuperar sua senha informando o seu e-mail;
- o usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar mailtrap.io para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por email para resetar senha deve expirar em 2hs;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**RF**

- O usuário deve poder atualizar o seu nome, email e senha;

**RN**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico
- O prestador deve receber uma notificação sempre que houver um novo agendamento
- O prestador deve poder visulizar as notificações não lidas

**NF**

- Os agendamentos do prestador no dia devem ser armazenados em cache
- As notificações do prestador devem ser armazenadas no MongoDB
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io

**RN**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviços cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponiveis de um dia especifico de um prestador
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponiveis entre 8h às 18 (Primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;


<h1 id="technologies">:rocket: Technologies</h1>

<p>It was used these technologies in this project.</p>

- [Node.js](https://nodejs.org/en/ "Node.js")
- [Typescript](https://www.typescriptlang.org/ "Typescript")
- [Express](http://expressjs.com/ "Express")
- [Typeorm](https://typeorm.io/#/ "Typeorm")
- [Tsyringe](https://github.com/microsoft/tsyringe/ "Tsyringe")
- [Jest](https://jestjs.io/ "Jest")
- [Celebrate](https://www.npmjs.com/package/celebrate "Celebrate")
- [Ethereal](https://ethereal.email/ "Ethereal") (For sending email in development environment)
- [Amazon Simple Email Service](https://aws.amazon.com/pt/ses/) (For sending email in production environment)
- [Postgres](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)

<h1 id="how-to-run">:computer: How to run the application</h1>

<h2>Pre Requiriments</h2>

<p>You will need these tools instaled in your machine:</p>

- [Node.js](https://nodejs.org/en/ "Node.js")
- [Yarn](https://yarnpkg.com/ "Yarn")
- [Git](https://git-scm.com/ "Git")
<hr>
