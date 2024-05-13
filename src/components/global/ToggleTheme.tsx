import { useState, useEffect } from 'react';
import { BsSun, BsMoonStars } from 'react-icons/bs';

const ToggleTheme: React.FC = () => {
	const [theme, setTheme] = useState<'light' | 'dark'>('light');

	const toggleDarkMode = () => {
		setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
	};

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark'); // Configurar o tema inicial com base nas preferências do usuário
		}
	}, []);

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	return (
		<>
			<label className="themeSwitcherThree relative inline-flex cursor-pointer select-none items-center drop-shadow-lg">
				<input
					type="checkbox"
					checked={theme === 'dark'}
					onChange={toggleDarkMode}
					className="sr-only"
				/>
				<div className="flex h-[38px] w-[74px] items-center justify-center rounded-[25px] bg-accent-foreground overflow-hidden px-2">
					<div
						className={`flex h-8 w-8 items-center justify-center rounded-full absolute transition-all duration-200 transform ${
							theme === 'dark'
								? 'translate-x-4'
								: '-translate-x-4'
						} bg-primary-foreground`}
					></div>
					<div className="flex gap-x-2 px-2">
						<div
							className={`z-10 flex h-6 w-6 items-center justify-center ${
								theme === 'dark'
									? 'text-muted-foreground'
									: 'text-primary'
							} `}
						>
							<BsSun size={17} />
						</div>
						<div
							className={`z-10 flex h-6 w-6 items-center justify-center ${
								theme === 'dark'
									? 'text-primary'
									: 'text-secondary'
							} `}
						>
							<BsMoonStars size={16} />
						</div>
					</div>
				</div>
			</label>
		</>
	);
};

export default ToggleTheme;
