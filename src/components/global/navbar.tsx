/* import ButtonAccent from '@/components/ui/ButtonAccent'; */
import ToggleTheme from '@/components/global/ToggleTheme';
import Logo from '@/components/global/Logo';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
	return (
		<header className="fixed top-0 w-full z-10 bg-gray-900/10 backdrop-blur-sm">
			<div className="flex items-center justify-between px-8 lg:px-16 2xl:px-36 h-20 border-b sticky">
				<div className="flex justify-center h-full">
					<motion.div
						initial={{ x: -100 }}
						animate={{ x: 0 }}
						transition={{ duration: 0.6 }}
						whileHover={{ scale: 1.1 }}
					>
						<Logo />
					</motion.div>
				</div>

				<div className="flex justify-center px-2 py-2 gap-x-4">
					<motion.div
						initial={{ x: 100 }}
						animate={{ x: 0 }}
						transition={{ duration: 0.6 }}
					>
						<ToggleTheme />
					</motion.div>
					{/* <ButtonAccent>
						hello from the outside
					</ButtonAccent> */}
				</div>
			</div>
		</header>
	);
};

export default Navbar;
