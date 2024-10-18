import Form from './Form';

const meta = {
  title: 'components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['form'],
};

export default meta;

export const Label = {
  args: {
    fields: [
      {
        id: 'name',
        label: 'Nome completo',
        placeholder: 'Fulano da Silva',
      },
      {
        id: 'email',
        label: 'Email',
        placeholder: 'fulano@fulano.com',
      },
      {
        id: 'phone',
        label: 'Telefone',
        placeholder: '(XX) XXXXX-XXXX',
      },
      {
        id: 'position',
        label: 'Cargo Pretendido',
        options: [
          { value: '', text: 'Selecione uma opção' },
          { value: 'frontend', text: 'Desenvolvedor Frontend' },
          { value: 'backend', text: 'Desenvolvedor Backend' },
          { value: 'fullstack', text: 'Desenvolvedor Full Stack' },
          { value: 'mobile', text: 'Desenvolvedor Mobile' },
          { value: 'software', text: 'Desenvolvedor de Software' },
          { value: 'engineer', text: 'Engenheiro de Software' },
          { value: 'architect', text: 'Arquiteto de Software' },
          { value: 'uiux', text: 'UI/UX Designer' },
          { value: 'analyst', text: 'Analista de Sistemas' },
          { value: 'programmer', text: 'Analista Programador' },
          { value: 'devops', text: 'DevOps Engineer' },
          { value: 'data', text: 'Engenheiro de Dados' },
          { value: 'qa', text: 'QA Engineer' },
          { value: 'scrum', text: 'Scrum Master' },
          { value: 'product-owner', text: 'Product Owner' },
        ],
      },
      {
        id: 'linkedIn',
        label: 'LinkedIn',
        placeholder: 'https://www.linkedin.com/in/fulano',
      },
      {
        id: 'gitHub',
        label: 'GitHub',
        placeholder: 'https://github.com/fulano',
      },
    ],
  },
};

export const Button = {
  args: {
   label: 'Cadastre-se',
   type: 'submit',
  
  },
};

