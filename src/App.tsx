import DetailedInfo from './components/DetailedInfo';
import PersonalInfo from './components/PersonalInfo';
import MultiStepForm from './lib/MultiStepForm';

const App = () => {
	return (
		<div className='container'>
			<MultiStepForm
				initialData={{ firstName: '', lastName: '', email: '', password: '' }}
				steps={[
					{
						title: 'Step 1',
						render: () => <PersonalInfo />,
					},
					{
						title: 'Step 2',
						render: () => <DetailedInfo />,
					},
					{
						title: 'Step 3',
						render: () => <DetailedInfo />,
					},
				]}
				onSubmit={(data) => console.log(data)}
			/>
		</div>
	);
};

export default App;
