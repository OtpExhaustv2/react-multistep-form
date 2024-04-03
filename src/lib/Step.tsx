import { useMultiStepFormContext } from './MultiStepFormContext';

interface StepProps<T> {
	step: MultiStepForm.TFormStep<T>;
	index: number;
}

const Step = <T extends {}>({ step, index }: StepProps<T>) => {
	const { data, setCurrentStep, currentStep } = useMultiStepFormContext<T>();

	const disabled = step.disabled ? step.disabled(data, index) : false;

	return (
		<div
			onClick={disabled ? undefined : () => setCurrentStep(index)}
			key={index}
			className={`stepper__step ${currentStep === index && 'active'}`}
			style={{
				cursor: disabled ? 'not-allowed' : 'pointer',
				opacity: disabled ? 0.5 : 1,
			}}>
			<span className='stepper__circle'>{index + 1}</span>
			<span>{step.title}</span>
		</div>
	);
};

export default Step;
