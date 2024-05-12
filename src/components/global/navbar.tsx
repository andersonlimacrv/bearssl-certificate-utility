import ButtonAccent from '@/components/ui/ButtonAccent';
import ToggleTheme from '@/components/global/ToggleTheme';
import Logo from '@/components/global/Logo';

const Navbar: React.FC = () => {
	return (
		<header className="fixed top-0 w-full z-10 bg-gray-900/10 backdrop-blur-sm">
			<div className="flex items-center justify-between px-8 lg:px-16 2xl:px-36 h-20 border-b sticky">
				<div className="flex justify-center h-full">
					<Logo />
				</div>

				<div className="flex justify-center px-2 py-2 gap-x-4">
					<ButtonAccent>
						hello from the outside
					</ButtonAccent>
					<ToggleTheme />
				</div>
			</div>
		</header>
	);
};

export default Navbar;
