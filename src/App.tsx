import { useState } from 'react';

function App() {
	const [islight, setIslight] = useState(false);

	const updateTheme = () => {
		// get the current theme value
		const themeOptions = ['fantasy', 'dracula'];

		const theme = document.documentElement.getAttribute('data-theme');

		if (theme !== themeOptions[0]) {
			document.documentElement.setAttribute('data-theme', themeOptions[0]);
			setIslight(true);
		} else {
			document.documentElement.setAttribute('data-theme', themeOptions[1]);
			setIslight(false);
		}
	};

	return (
		<>
			<div className='container'>
				<div className='prose mx-auto'>
					<div className='mx-auto card w-96 bg-base-100 shadow-xl mt-20'>
						<div className='card-body'>
							<h1 className='card-title mb-0'>Theme Change Demo</h1>

							<div className='divider m-0 p-0'></div>

							<p>A simple app to toggle dark and light theme</p>

							<div className='card-actions justify-end'>
								<button className='btn btn-primary' onClick={() => updateTheme()}>
									{islight ? 'Dark' : 'Light'}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
