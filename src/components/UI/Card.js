import './Card.scss';

const Card = ({ className, onClick, children }) => {
  return (
    <div
      className={className ? `card ${className}` : 'card'}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
