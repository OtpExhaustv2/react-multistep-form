import React from 'react';
import { Data } from '../App';
import { useMultiStepFormContext } from '../lib/MultiStepFormContext';

type DetailedInfoProps = {};

const DetailedInfo: React.FC<DetailedInfoProps> = () => {
	const { register } = useMultiStepFormContext<Data>();
	return (
		<>
			<div className='form-group'>
				<input type='text' {...register('email')} />
				<label htmlFor='email'>Email</label>
			</div>
			<div className='form-group'>
				<input type='password' {...register('password')} />
				<label htmlFor='password'>Password</label>
			</div>
		</>
	);
};

export default DetailedInfo;
