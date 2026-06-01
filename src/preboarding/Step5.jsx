export default function Step5({ onNext }) {
  return (
    <div className="step">
      <div className="top">
        <h1>Hvad leder du efter?</h1>
      </div>
      <div className="middle">
        <div className="text-container">
          <h3>*her indsættes filtre*</h3>
        </div>
      </div>
      <div className="bottom">
        <button onClick={onNext}>Næste</button>
      </div>
    </div>
  );
}
