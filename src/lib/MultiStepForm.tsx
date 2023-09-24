import React, { useCallback } from 'react';
import { MultiStepFormContext } from './MultiStepFormContext';
import Stepper from './Stepper';

type MultiStepFormProps<T> = {
	steps: MultiStepForm.FormStep<T>[];
	onSubmit: (data: T) => void;
	initialData: T;
	showStepper?: boolean;
};

const MultiStepForm = <T extends {}>({
	steps,
	onSubmit,
	initialData,
	showStepper = true,
}: MultiStepFormProps<T>) => {
	const [data, setData] = React.useState<T>(initialData);
	const [currentStep, setCurrentStep] = React.useState(0);

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
			<MultiStepFormContext.Provider
				value={{
					updateField: (fieldName, value) => {
						setData((prevData) => ({ ...prevData, [fieldName]: value }));
					},
					data,
					currentStep,
					setCurrentStep,
					resetForm: () => {
						setData(initialData);
						setCurrentStep(0);
					},
					register: (
						fieldName: keyof T,
						config?: MultiStepForm.RegisterConfig<T>
					) => {
						const initialValue = data[fieldName] as MultiStepForm.InputValue;
						const value = config?.derivedValue
							? config.derivedValue(initialValue)
							: initialValue;

						return {
							id: fieldName as string,
							name: fieldName as string,
							value,
							onChange: handleOnChange,
						};
					},
				}}>
				<form>
					<div className='stepper'>
						{showStepper && <Stepper steps={steps} />}
					</div>
					<div className='stepper__indicator'>
						{currentStep + 1}/{steps.length}
					</div>
					{steps.map((step, index) => {
						const StepComponent = step.component;
						if (currentStep === index) {
							return (
								<div key={index} className='step fade-in'>
									<h1
										style={{
											marginBottom: '10px',
										}}>
										{step.title}
									</h1>
									<StepComponent />
									<div
										style={{
											marginTop: '10px',
											display: 'flex',
											gap: '10px',
										}}>
										{currentStep !== 0 && (
											<button
												onClick={() => setCurrentStep((prev) => prev - 1)}>
												Back
											</button>
										)}
										<button onClick={handleNextOrSubmit}>
											{currentStep === steps.length - 1 ? 'Submit' : 'Next'}
										</button>
									</div>
								</div>
							);
						}
					})}
				</form>
			</MultiStepFormContext.Provider>
		</div>
	);
};

export default MultiStepForm;
