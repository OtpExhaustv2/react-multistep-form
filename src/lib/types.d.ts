import React from 'react';

declare global {
	declare module MultiStepForm {
		type TFormStep<T> = {
			title: string;
			component: React.FC;
			disabled?: (data: T, index: number) => boolean;
		};

		type TRegisterConfig = {
			derivedValue?: (value: TInputValue) => TInputValue;
			id?: string;
			name?: string;
		};

		type TContext<T extends TData = {}> = {
			updateField: <K extends keyof T>(fieldName: K, value: T[K]) => void;
			data: T;
			currentStep: number;
			setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
			resetForm: () => void;
			register: (
				fieldName: keyof T,
				config?: MultiStepForm.TRegisterConfig
			) => {
				onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
				value: T[K] | undefined;
				id: string;
				name: string;
			};
		};

		type TInputValue = string | ReadonlyArray<string> | number | undefined;

		type TData = Record<string | number, TInputValue>;
	}
}
