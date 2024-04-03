import { createContext, useContext } from 'react';

export const MultiStepFormContext =
	createContext<MultiStepForm.TContext | null>(null);

export const useMultiStepFormContext = <T extends MultiStepForm.TData>() => {
	const context = useContext(
		MultiStepFormContext
	) as unknown as MultiStepForm.TContext<T> | null;
	if (!context)
		throw new Error(
			'useMultiStepFormContext must be used within a MultiStepFormContextProvider'
		);
	return context;
};
