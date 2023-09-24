import React from 'react';
import { useMultiStepFormContext } from '../lib/MultiStepFormContext';
import { Data } from '../lib/types';

type PersonalInfosProps = {};

const PersonalInfo: React.FC<PersonalInfosProps> = () => {
	const { register } = useMultiStepFormContext<Data>();
	return (
		<>
			<div className='form-group'>
				<input type='text' {...register('firstName')} />
				<label htmlFor='firstName'>Firstname</label>
			</div>
			<div className='form-group'>
				<input type='text' {...register('lastName')} />
				<label htmlFor='lastName'>LastName</label>
			</div>
		</>
	);
};

export default PersonalInfo;
