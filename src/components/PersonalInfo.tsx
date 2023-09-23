import React from 'react';
import { useMultiStepFormContext } from '../lib/MultiStepFormContext';
import { Data } from '../lib/types';

type PersonalInfosProps = {};

const PersonalInfo: React.FC<PersonalInfosProps> = () => {
	const { data, onChange } = useMultiStepFormContext<Data>();
	return (
		<div className='form-group'>
			<input
				type='text'
				id='firstName'
				name='firstName'
				onChange={onChange}
				value={data.firstName}
			/>
			<label htmlFor='firstName'>Firstname</label>
		</div>
	);
};

export default PersonalInfo;
