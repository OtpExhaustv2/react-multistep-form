import React, { useCallback } from "react";
import { FormStep } from "./types";
import Stepper from "./Stepper";

type MultiStepFormProps<T> = {
  steps: FormStep<T>[];
  onSubmit: (data: T) => void;
  initialData: T;
  showStepper?: boolean;
};

const MultiStepForm = <T,>({
  steps,
  onSubmit,
  initialData,
  showStepper = true,
}: MultiStepFormProps<T>) => {
  const [data, setData] = React.useState<T>(initialData);
  const [currentStep, setCurrentStep] = React.useState(0);

  const handleSubmit = useCallback(() => {
    onSubmit(data);
  }, []);

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setData((prevData) => ({ ...prevData, [name]: value }));
    },
    [data]
  );

  const handleNextOrSubmit = useCallback(
    (e: React.FormEvent) => {
      if (currentStep === steps.length - 1) {
        e.preventDefault();
        return onSubmit(data);
      }
      setCurrentStep((prev) => prev + 1);
    },
    [currentStep, data]
  );

  return (
    <div>
      <form>
        <div className="stepper">
          {showStepper && (
            <Stepper
              currentStep={currentStep}
              steps={steps.map((step) => step.title)}
            />
          )}
        </div>
        <div className="stepper__indicator">
          {currentStep + 1}/{steps.length}
        </div>
        {steps.map((step, index) => {
          if (currentStep === index) {
            return (
              <div key={index} className="step fade-in">
                <h1
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  {step.title}
                </h1>
                {step.render(data, handleOnChange)}
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  {currentStep !== 0 && (
                    <button onClick={() => setCurrentStep((prev) => prev - 1)}>
                      Back
                    </button>
                  )}
                  <button onClick={handleNextOrSubmit}>
                    {currentStep === steps.length - 1 ? "Submit" : "Next"}
                  </button>
                </div>
              </div>
            );
          }
        })}
      </form>
    </div>
  );
};

export default MultiStepForm;
