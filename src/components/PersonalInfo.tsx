import React from 'react';
import { Data } from '../App';
import { useMultiStepFormContext } from '../lib/MultiStepFormContext';

type PersonalInfosProps = {};

const PersonalInfo: React.FC<PersonalInfosProps> = () => {
	const { register, updateField, resetForm } = useMultiStepFormContext<Data>();

	const derivedFirstName = (value: MultiStepForm.InputValue) => {
		if (value === 'Jonh') {
			return 'John';
		}
		return value;
	};

	return (
		<>
			<div className='form-group'>
				<input
					type='text'
					{...register('firstName', {
						derivedValue: derivedFirstName,
					})}
				/>
				<label htmlFor='firstName'>Firstname</label>
			</div>
			<div className='form-group'>
				<input type='text' {...register('lastName')} />
				<label htmlFor='lastName'>LastName</label>
			</div>
			<button
				type='button'
				onClick={() => updateField('password', '')}
				style={{
					marginTop: '10px',
				}}>
				Update field from another step
			</button>
			<button
				type='button'
				style={{
					marginTop: '10px',
				}}
				onClick={resetForm}>
				Reset form
			</button>
		</>
	);
};

export default PersonalInfo;
