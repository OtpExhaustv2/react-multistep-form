import React from 'react';
import { useMultiStepFormContext } from '../lib/MultiStepFormContext';
import { Data } from '../lib/types';

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
