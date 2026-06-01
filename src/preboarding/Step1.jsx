export default function Step1({ onNext }) {
  return (
    <div className="step">
      <h2>Step 1</h2>
      <button onClick={onNext}>Næste</button>
    </div>
  );
}
