import React from 'react';

export type FormStep<T> = {
	title: string;
	component: React.FC;
	disabled?: (data: T, index: number) => boolean;
};

export type Data = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};
