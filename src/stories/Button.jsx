import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './button.css';

/** Initial UI component simulating motion hover and tap */

export const Button = ({ initial, backgroundColor, size, label, ...props }) => {
  // Definição dos estados de hover e tap
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(initial);

  // Atualiza o estado sempre que o 'initial' mudar
  useEffect(() => {
    setIsTapped(initial);
  }, [initial]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsTapped(initial); // Volta ao estado inicial quando o mouse sair
  };

  const handleMouseDown = () => {
    setIsTapped(true);
  };

  const handleMouseUp = () => {
    setIsTapped(false);
  };

  // Definir a classe com base nos estados de hover e tap
  const mode = isTapped
    ? 'storybook-button--tap'
    : isHovered
    ? 'storybook-button--initial'
    : 'storybook-button--hover';

  return (
    <div className="button-container">
      <h3 className="button-title">Componente Inicial UI simulando movimento ao passar o mouse e tocar</h3>
      <button
        type="button"
        className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
        style={backgroundColor ? { backgroundColor } : null}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        {...props}
      >
        {label}
      </button>
    </div>
  );
};

Button.propTypes = {
  /** Define o estado inicial do botão (tap ativo) */
  initial: PropTypes.bool,
  
  /** Cor de fundo opcional */
  backgroundColor: PropTypes.string,
  
  /** Tamanho do botão */
  size: PropTypes.oneOf(['medium', 'large']),
  
  /** Conteúdo do botão */
  label: PropTypes.string.isRequired,
  
  /** Função de clique opcional */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  initial: false, 
  size: 'large',
  onClick: undefined,
};
