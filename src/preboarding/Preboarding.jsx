import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";

export default function Preboarding({ onFinish }) {
  const [step, setStep] = useState(1);

  function nextStep() {
    setStep((prevStep) => prevStep + 1);
  }

  return (
    <div className="preboarding">
      {step === 1 && <Step1 onNext={nextStep} />}
      {step === 2 && <Step2 onNext={nextStep} />}
      {step === 3 && <Step3 onNext={nextStep} />}
      {step === 4 && <Step4 onNext={nextStep} />}
      {step === 5 && <Step5 onNext={nextStep} />}
      {step === 6 && <Step6 onNext={nextStep} />}
      {step === 7 && <Step7 onFinish={onFinish} />}
    </div>
  );
}
