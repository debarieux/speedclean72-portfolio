import React from 'react';
import { Link } from 'react-scroll';

const Button = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  size = 'md',
  to = null,
  href = null,
  icon = null,
  iconPosition = 'right',
  ...props 
}) => {
  // Base classes communes à toutes les variantes
  const baseClasses = `
    inline-flex items-center justify-center
    font-medium transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2
    transform hover:translate-y-[-2px]
  `;
  
  // Classes spécifiques aux variantes
  const variantClasses = {
    primary: `
      bg-gradient-to-r from-primary-600 to-primary-500 
      hover:from-primary-700 hover:to-primary-600
      text-white shadow-md hover:shadow-lg
      focus:ring-primary-500
    `,
    secondary: `
      bg-gradient-to-r from-secondary-500 to-secondary-400
      hover:from-secondary-600 hover:to-secondary-500
      text-white shadow-md hover:shadow-lg
      focus:ring-secondary-500
    `,
    outline: `
      bg-transparent border-2 border-primary-500
      text-primary-600 hover:bg-primary-50
      focus:ring-primary-500
    `,
    ghost: `
      bg-transparent hover:bg-gray-100
      text-gray-700 hover:text-gray-900
      focus:ring-gray-500
    `,
    link: `
      bg-transparent p-0 hover:underline
      text-primary-600 hover:text-primary-700
      shadow-none transform-none hover:translate-y-0
      focus:ring-0
    `
  };
  
  // Classes spécifiques aux tailles
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5 rounded-md',
    md: 'text-base px-5 py-2.5 rounded-lg',
    lg: 'text-lg px-6 py-3 rounded-lg'
  };
  
  // Construction de la classe finale
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  // Rendu de l'icône en fonction de sa position
  const renderIcon = () => {
    if (!icon) return null;
    return React.cloneElement(icon, { 
      className: `${iconPosition === 'left' ? 'mr-2' : 'ml-2'} ${icon.props.className || ''}` 
    });
  };
  
  // Contenu du bouton avec icône
  const content = (
    <>
      {icon && iconPosition === 'left' && renderIcon()}
      {children}
      {icon && iconPosition === 'right' && renderIcon()}
    </>
  );
  
  // Rendu différent selon le type de bouton (lien interne, externe ou bouton)
  if (to) {
    return (
      <Link
        to={to}
        smooth
        duration={800}
        className={buttonClasses}
        {...props}
      >
        {content}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        {...props}
      >
        {content}
      </a>
    );
  }
  
  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
