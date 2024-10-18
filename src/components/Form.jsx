import React, { useState } from 'react';
import Logo from '../assets/logo-fusion.png';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { variantsButton, variantsSection, sentence, letter } from '../variants'; 

const createUserFormSchema = z.object({
  name: z.string()
    .nonempty('O Nome Completo é obrigatório.')
    .transform(name => {
      return name
        .trim()
        .split(' ')
        .map((word) => {
          if (word.length === 0) return '';
          return word[0].toUpperCase() + word.substring(1).toLowerCase();
        })
        .join(' ');
    }),
  email: z.string()
    .nonempty('O e-mail é obrigatório.')
    .email('Formato de e-mail inválido'),
  phone: z.string()
    .nonempty('O telefone é obrigatório.')
    .regex(/^\d{11}$/, 'O telefone deve ter 11 dígitos (incluindo o DDD).')
    .transform(phone => phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')),
  position: z.string().nonempty('O Cargo Pretendido é obrigatório.'),
  linkedIn: z.string().optional(),
  gitHub: z.string().optional(),
});

const Form = () => {
  const [output, setOutput] = useState(''); 
  const [statusMessage, setStatusMessage] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(createUserFormSchema),
  });

  function createUser(data) { 
    try {
      localStorage.setItem('userData', JSON.stringify(data));
      setOutput(JSON.stringify(data, null, 2));
      setStatusMessage('Cadastro realizado com sucesso!');
    } catch (error) {
      setStatusMessage('Falha ao cadastrar. Verifique os dados informados.');
    }
  }
  console.log(output);

  const heading = "Cadastro de Novos Membros";

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.section 
        variants={variantsSection}
        initial="initial"
        whileHover="hover"
        className="bg-[rgba(75,105,130,0.2)] rounded-xl px-4 py-8 max-w-full w-full sm:max-w-md h-auto">
        <form 
          onSubmit={handleSubmit(createUser)} 
          className="flex flex-col gap-4 w-full mt-[10px]"
        >
          <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
            src={Logo}
            alt='Logo do Projeto Front-End Fusion'
            className='w-[200px] mx-auto'
          />
          <motion.h1
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="text-2xl uppercase text-white font-bold text-center mb-2"
          >
            {heading.split('').map((char, index) => (
              <motion.span key={index} variants={letter}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>

          <div className="flex flex-col gap-1 text-white font-normal">
            <label htmlFor="name">Nome completo</label>
            <input
              type="text"
              placeholder="Fulano da Silva"
              className="border border-darkBlue shadow-sm rounded h-10 px-3 bg-darkBlue"
              {...register('name')}
            />
            {errors.name && <span className="text-red-500 text-[10px]">{errors.name.message}</span>}
          </div>

          <div className="flex flex-col gap-1 text-white font-normal">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="fulano@fulano.com"
              className="border border-darkBlue shadow-sm rounded h-10 px-3 bg-darkBlue"
              {...register('email')}
            />
            {errors.email && <span className="text-red-500 text-[10px]">{errors.email.message}</span>}
          </div>

          <div className="flex flex-col gap-1 text-white font-normal">
            <label htmlFor="phone">Telefone</label>
            <input
              type="text"
              placeholder="(XX) XXXXX-XXXX"
              className="border border-darkBlue shadow-sm rounded h-10 px-3 bg-darkBlue"
              {...register('phone')}
            />
            {errors.phone && <span className="text-red-500 text-[10px]">{errors.phone.message}</span>}
          </div>

          <div className="flex flex-col gap-1 text-white font-normal">
            <label htmlFor="position">Cargo Pretendido</label>
            <select
              className="border border-darkBlue shadow-sm rounded h-10 px-3 bg-darkBlue text-white font-normal"
              {...register('position')}
            >
              <option value="">Selecione uma opção</option>
              <option value="frontend">Desenvolvedor Frontend</option>
              <option value="backend">Desenvolvedor Backend</option>
              <option value="fullstack">Desenvolvedor Full Stack</option>
              <option value="mobile">Desenvolvedor Mobile</option>
              <option value="software">Desenvolvedor de Software</option>
              <option value="engineer">Engenheiro de Software</option>
              <option value="architect">Arquiteto de Software</option>
              <option value="uiux">UI/UX Designer</option>
              <option value="analyst">Analista de Sistemas</option>
              <option value="programmer">Analista Programador</option>
              <option value="devops">DevOps Engineer</option>
              <option value="data">Engenheiro de Dados</option>
              <option value="qa">QA Engineer</option>
              <option value="scrum">Scrum Master</option>
              <option value="product-owner">Product Owner</option>
            </select>
            {errors.position && (
              <span className="text-red-500 text-[10px]">{errors.position.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1 text-white font-normal">
            <label htmlFor="linkedIn">LinkedIn</label>
            <input
              type="text"
              placeholder="https://www.linkedin.com/in/fulano"
              className="border border-darkBlue shadow-sm rounded h-10 px-3 bg-darkBlue"
              {...register('linkedIn')}
            />
          </div>

          <div className="flex flex-col gap-1 text-white font-normal">
            <label htmlFor="gitHub">GitHub</label>
            <input
              type="text"
              placeholder="https://github.com/fulano"
              className="border border-darkBlue shadow-sm rounded h-10 px-3 bg-darkBlue"
              {...register('gitHub')}
            />
          </div>
          
          <motion.button
            variants={variantsButton}
            whileHover="hover"
            whileTap="tap"
            type="submit"
            className="bg-yellow-600 rounded uppercase text-white font-bold h-10"
          >
            Cadastre-se
          </motion.button>
          {statusMessage && (
            <div className={`mt-4 text-center ${statusMessage.includes('sucesso') ? 'text-green-500' : 'text-red-500'}`}>
              {statusMessage}
            </div>
          )}
        </form>
      </motion.section>
    </div>
  );
};

export default Form;
