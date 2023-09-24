import DetailedInfo from './components/DetailedInfo';
import PersonalInfo from './components/PersonalInfo';
import MultiStepForm from './lib/MultiStepForm';

const App = () => {
	const a = {
		t: PersonalInfo,
	};
	return (
		<div className='container'>
			<MultiStepForm
				initialData={{ firstName: '', lastName: '', email: '', password: '' }}
				steps={[
					{
						title: 'Step 1',
						component: PersonalInfo,
					},
					{
						title: 'Step 2',
						component: DetailedInfo,
						disabled: (data) => !data.firstName || !data.lastName,
					},
					{
						title: 'Step 3',
						component: DetailedInfo,
					},
				]}
				onSubmit={(data) => console.log(data)}
			/>
		</div>
	);
};

export default App;
