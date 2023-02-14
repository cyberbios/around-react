export function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_card ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__card">
        <button
          type="button"
          onClick={onClose}
          className="popup__close"
        ></button>
        <img src={card.link} alt={card.name} className="popup__image" />
        <p className="popup__description">{card.name}</p>
      </div>
    </div>
  );
}
