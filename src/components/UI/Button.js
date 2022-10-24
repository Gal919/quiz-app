import './Button.scss';

const Button = ({ className, onClick, children }) => {
  return (
    <div className='btn-container'>
      <button
        className={className ? `btn ${className}` : 'btn'}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
