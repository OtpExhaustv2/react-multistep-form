import Step from './Step';
import { FormStep } from './types';

type StepperProps<T> = {
	steps: FormStep<T>[];
};

const Stepper = <T extends {}>({ steps }: StepperProps<T>) => {
	return (
		<div className='stepper'>
			{steps.map((step, index) => (
				<Step<T> key={index} step={step} index={index} />
			))}
		</div>
	);
};

export default Stepper;
