import React from 'react';
import Logo from '../assets/logo-fusion.png'

const Form = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <section className="bg-[rgba(6,33,55,0.1)]  rounded-xl sm:px-6 px-4 py-8 max-w-md w-[600px] h-[800px] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
         <form className="flex flex-col gap-4 w-full mt-[20px]">
          <img
           src={Logo}
           alt='Logo do Projeto Frot-End Fusion'
           className='w-[200px] mx-auto'
           />
          <div className="flex flex-col gap-1 text-white">
            <label htmlFor="name">Nome completo</label>
             <input
             type="text" 
             name="name"
             className="border border-blueOne shadow-sm rounded h-10 px-3 bg-darkBlue"
             />
          </div>

          <div className="flex flex-col gap-1 text-white">
            <label htmlFor="email">Email</label>
             <input
             type="text" 
             name="email"
             className="border border-blueOne shadow-sm rounded h-10 px-3 bg-darkBlue"
             />
          </div>

          <div className="flex flex-col gap-1 text-white">
            <label htmlFor="phone">Telefone</label>
             <input
             type="text" 
             name="phone"
             className="border border-blueOne shadow-sm rounded h-10 px-3 bg-darkBlue"
             />
          </div>

          <div className="flex flex-col gap-1 text-white">
                    <label htmlFor="position">Cargo Pretendido</label>
                    <select
                        name="position"
                        className="border border-blueOne shadow-sm rounded h-10 px-3 bg-darkBlue text-white"
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
                </div>
  
          <div className="flex flex-col gap-1 text-white">
            <label htmlFor="phone">LinkedIn</label>
             <input
             type="text" 
             name="linkedIn"
             className="border border-blueOne shadow-sm rounded h-10 px-3 bg-darkBlue"
             />
          </div>

          <div className="flex flex-col gap-1 text-white">
            <label htmlFor="phone">GitHub</label>
             <input
             type="text" 
             name="gitHub"
             className="border border-blueOne shadow-sm rounded h-10 px-3 bg-darkBlue"
             />
          </div>


          <button
           type="submit"
           className="bg-bluePool rounded font-semibold text-white h-10 hover:bg-lightBlue"
          >
            Enviar
          </button>
         </form>
       
        </section>
        </div>
    );
}

export default Form;