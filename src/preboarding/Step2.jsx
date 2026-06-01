export default function Step2({ onNext }) {
  return (
    <div className="step">
      <h2>Step 2</h2>
      <button onClick={onNext}>Næste</button>
    </div>
  );
}
