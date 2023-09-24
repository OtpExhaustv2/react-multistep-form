import React from 'react';

declare global {
	declare module MultiStepForm {
		type FormStep<T> = {
			title: string;
			component: React.FC;
			disabled?: (data: T, index: number) => boolean;
			initialData?: T;
		};

		type RegisterConfig<T> = {
			derivedValue: (value: InputValue) => InputValue;
		};

		type InputValue = string | ReadonlyArray<string> | number | undefined;
	}
}
