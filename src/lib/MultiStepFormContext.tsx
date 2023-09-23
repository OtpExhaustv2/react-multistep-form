import { createContext, useContext } from 'react';

export type MultiStepFormContextType<T = unknown> = {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	data: T;
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
