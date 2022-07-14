import React from "react";

type StepperProps = {
  currentStep: number;
  steps: string[];
};

const Stepper: React.FC<StepperProps> = ({ currentStep, steps }) => {
  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`stepper__step ${currentStep === index && "active"}`}
        >
          <span className="stepper__circle">{index + 1}</span>
          <span>{step}</span>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
