# Formulário de Cadastro de Novos Membros  | Projeto Frontend Fusion

> Este projeto é um formulário de cadastro de novos membros para o projeto Frontend Fusion, utilizando React para a construção da interface, e Zod para a validação dos dados, assegurando que todas as informações fornecidas sejam validadas corretamente. O formulário inclui campos para nome, e-mail, telefone, cargo pretendido, LinkedIn e GitHub, com os dados sendo armazenados localmente no navegador via Local Storage. O projeto também incorpora animações interativas com Framer Motion, proporcionando uma experiência de usuário mais dinâmica e fluida.

![Design sem nome (1)](https://github.com/user-attachments/assets/24a47d39-ed73-4f35-b0be-49b7468b0376)

## Tecnologias Utilizadas
- [React.js](https://react.dev/): Biblioteca JavaScript para a construção de interfaces de usuário.
- [Tailwind CSS](https://tailwindcss.com/): Framework de CSS para o design responsivo e estilização da interface.
- [Framer Motion](https://www.framer.com/motion/): Biblioteca para criar animações fluidas e interativas na interface.
- [Zod](https://zod.dev/): Validação de dados para garantir a conformidade com as regras definidas.
- Local Storage.
- [Storybook](https://storybook.js.org/): Ferramenta para construção de componentes de interface de maneira isolada, permitindo o desenvolvimento e a documentação dos componentes.


## Funcionalidades
- Validação dos campos de formulário (nome, e-mail, telefone e cargo pretendido).
- Animações em elementos como botões, seções e textos.
- Armazenamento dos dados do usuário localmente no navegador.
- Feedback de sucesso ou erro no cadastro.
Este projeto é escalável e preparado para integração com um back-end, se necessário.



## Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/Jezebel1990/desafio-formulario-com-validacao-frontend.git
   cd desafio-formulario-com-validacao-frontend
   ```
2. Instale as dependências:
  ```bash
    npm install
   ```
3. Execute o projeto em desenvolvimento:
  ```bash
    npm run dev
   ```
4. Abra o navegador em http://localhost:5173 para ver a aplicação.


## Documentação do Storybook:
A documentação dos componentes está disponível no [Storybook do projeto](https://doc-form.netlify.app/?path=/docs/processo-de-desenvolvimento-do-formul%C3%A1rio--docs). Essa documentação permite explorar visualmente os componentes individuais do projeto, oferecendo exemplos de uso, propriedades aceitas e estados visuais para facilitar o desenvolvimento e a manutenção da interface.

## Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

Feito com ♥ por [Jezebel Guedes](https://www.linkedin.com/in/jezebel-guedes/) 👋 Entre em contato!

<hr />
<br />
<br /> 

# Instruções 
> Terceiro Desafio: Formulário de Cadastro de Membros - Processo Seletivo Frontend Fusion - [vaga voluntária]

> OBS : Você receberá um e-mail com a data de início dos desafios, mas eles já estão disponíveis para acesso imediato. 
Se ainda não preencheu o formulário, por favor, acesse o link para completá-lo.
[Forms de inscrição](https://forms.gle/EJKDNKdmVZM3zQTr7)
é importante está inscrito no formulário , pois o seu email precisa ser validado

## Objetivo

Desenvolver um formulário de cadastro de membros para o projeto Frontend Fusion, utilizando React, validação de dados com Yup ou Zod, e salvando os dados localmente. 📝

## Requisitos

1. **Layout e Componentes:**
   - Utilize React para criar os componentes necessários para o formulário.
   - Desenvolva um layout limpo e responsivo utilizando Tailwind CSS ou outra biblioteca de sua escolha. 🎨

2. **Campos do Formulário:**
   - Nome completo (obrigatório) 🗣️
   - E-mail (obrigatório, com validação de formato) 📧
   - Telefone (obrigatório) 📞
   - Cargo pretendido (obrigatório, seleção de uma lista pré-definida):
     - Desenvolvedor Frontend
     - Desenvolvedor Backend
     - Desenvolvedor Full Stack
     - Desenvolvedor Mobile
     - Desenvolvedor de Software
     - Engenheiro de Software
     - Arquiteto de Software
     - UI/UX Designer
     - Analista de Sistemas
     - Analista Programador
     - DevOps Engineer
     - Engenheiro de Dados
     - QA Engineer
     - Scrum Master
     - Product Owner
   - LinkedIn (opcional) 🌐
   - GitHub (opcional) 🐙

3. **Validação de Dados:**
   - Utilize Yup ou Zod para validar os campos obrigatórios e opcionais.
   - Implemente validação de formato para o campo de e-mail. ✅

4. **Armazenamento Local:**
   - Ao cadastrar um membro, salve os dados no `localStorage` ou `sessionStorage`. 💾
   - Exiba mensagens de sucesso ou erro após salvar os dados localmente. 🗨️

5. **Mensagens de Estado:**
   - Exiba mensagens para indicar o estado do cadastro, como "Cadastro realizado com sucesso!" ou "Falha ao cadastrar. Verifique os dados informados." 🚦

6. **Documentação e Deploy:**
   - [opcional] Documente o processo de desenvolvimento e as decisões tomadas durante a implementação. 📝
   - Faça o deploy da aplicação em uma plataforma como GitHub Pages, Vercel, Netlify, ou outra de sua escolha. 🌍
   - Envie o link do deploy junto com o código-fonte do projeto e o link da postagem no LinkedIn mostrando os desafios concluídos para **projetofrontendfusion@gmail.com**. O e-mail deve incluir:
     - Nome
     - Link do GitHub
     - Link do LinkedIn
     - Data de Início
     - Data de Entrega
     - Link do GitHub com o Código
     - Link do Deploy
     - Link da Postagem no LinkedIn

**Observação:** É obrigatório entregar todos os três desafios em até **20 dias** após o início. Este é o **Desafio 03 de 03 desafios**. ⏳

## Prazo

Você tem 20 dias para concluir todos os três desafios. 📅

## Avaliação

Os critérios de avaliação incluirão:

- Funcionalidade do formulário
- Qualidade do código
- Implementação dos requisitos
- Estética e design
- Responsividade
- Integração adequada das mensagens de estado

## Como Participar

1. Faça um fork deste repositório. 🍴
2. Crie um branch com seu nome: nome-sobrenome.
3. Após completar o desafio, envie o link do deploy, o repositório do código-fonte e o link da postagem no LinkedIn por e-mail para **projetofrontendfusion@gmail.com** com o assunto: **"Entrega + Desafios[03] + Seu Nome"**. 📧

## Exemplo de E-mail:

**Assunto:** Entrega + Desafios[03] + João Silva

---

Olá,

Segue abaixo a entrega do Desafio 03 para o processo seletivo do Frontend Fusion.

**Nome:** João Silva  
**Link do GitHub:** [https://github.com/joaosilva](https://github.com/joaosilva)  
**Link do LinkedIn:** [https://linkedin.com/in/joaosilva](https://linkedin.com/in/joaosilva)  
**Data de Início:** 01/09/2024  
**Data de Entrega:** 20/09/2024  
**Link do GitHub com o Código:** [https://github.com/joaosilva/desafio03](https://github.com/joaosilva/desafio03)  
**Link do Deploy:** [https://joaosilva.netlify.app](https://joaosilva.netlify.app)  
**Link da Postagem no LinkedIn:** [https://linkedin.com/posts/joaosilva/desafio-03](https://linkedin.com/posts/joaosilva/desafio-03)

Agradeço a oportunidade e estou à disposição para qualquer dúvida.

Atenciosamente,  
João Silva

---

Boa sorte e estamos ansiosos para ver seu trabalho! 🚀

Este desafio faz parte do processo seletivo do projeto Frontend Fusion para a vaga de Desenvolvedor React Júnior.
