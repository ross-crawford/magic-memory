import './Card.css';

const Card = ({ card, flipped, handleChoice }) => {
  const handleClick = () => handleChoice(card);

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img src={card.src} alt="card front" className="front" />
        <img
          src="/img/cover3.png"
          alt="card back"
          className="back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;
