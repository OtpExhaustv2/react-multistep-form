import React from 'react';

declare global {
	declare module MultiStepForm {
		type FormStep<T> = {
			title: string;
			component: React.FC;
			disabled?: (data: T, index: number) => boolean;
		};

		type RegisterConfig<T> = {
			derivedValue?: (value: InputValue) => InputValue;
			id?: string;
			name?: string;
		};

		type InputValue = string | ReadonlyArray<string> | number | undefined;
	}
}
