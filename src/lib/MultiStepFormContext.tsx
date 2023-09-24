import { createContext, useContext } from 'react';

export type MultiStepFormContextType<T = unknown> = {
	updateField: (
		fieldName: keyof T,
		value: string | ReadonlyArray<string> | number | undefined
	) => void;
	data: T;
	currentStep: number;
	setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
	resetForm: () => void;
	register: (
		fieldName: keyof T,
		config?: MultiStepForm.RegisterConfig<T>
	) => {
		onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
		value: string | ReadonlyArray<string> | number | undefined;
		id: string;
		name: string;
	};
};

export const MultiStepFormContext =
	createContext<MultiStepFormContextType | null>(null);

export const useMultiStepFormContext = <T extends {}>() => {
	const context = useContext(
		MultiStepFormContext
	) as MultiStepFormContextType<T>;
	if (!context)
		throw new Error(
			'useMultiStepFormContext must be used within a MultiStepFormContextProvider'
		);
	return context;
};
