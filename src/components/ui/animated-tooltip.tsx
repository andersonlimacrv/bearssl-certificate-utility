import React, { useState } from 'react';
import { motion, useTransform, useSpring } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

interface Person {
	id: number;
	name: string;
	designation: string;
	image: string;
	github_url: string;
}

type Props = {
	item: Person;
};

const AnimatedTooltip: React.FC<Props> = ({ item }) => {
	const [hovered, setHovered] = useState(false);
	const springConfig = { stiffness: 100, damping: 5 };
	const x = useTransform(useSpring(0), [-100, 100], [-50, 50]);
	const rotate = useSpring(
		useTransform(x, [-100, 100], [-45, 45]),
		springConfig
	);
	const translateX = useSpring(
		useTransform(x, [-100, 100], [-50, 50]),
		springConfig
	);

	const handleMouseMove = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		const halfWidth = event.currentTarget.offsetWidth / 2;
		x.set(event.nativeEvent.offsetX - halfWidth);
	};

	return (
		<div
			className="relative group"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{hovered && (
				<motion.div
					initial={{ opacity: 0, y: 20, scale: 0.6 }}
					animate={{
						opacity: 1,
						y: 0,
						scale: 1,
						transition: {
							type: 'spring',
							stiffness: 260,
							damping: 10,
						},
					}}
					exit={{ opacity: 0, y: 20, scale: 0.6 }}
					style={{
						translateX,
						rotate,
						whiteSpace: 'nowrap',
					}}
					className="absolute -top-16 -left-[100%] lg:-left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-gray-900/60 z-50 shadow-xl px-4 lg:px-8 py-1"
				>
					<div className="absolute inset-x-10 z-30 w-[20%] -bottom-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
					<div className="absolute left-12 w-[65%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
					<div className="font-bold text-white relative z-30 text-base">
						{item.name}
					</div>
					<div className="text-white text-sm">
						{item.designation}
					</div>
					<div className="text-white text-sm">
						<FaGithub className="inline mr-1" /> Github
					</div>
				</motion.div>
			)}
			<a
				href={item.github_url}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					onMouseMove={handleMouseMove}
					height={150}
					width={150}
					src={item.image}
					alt={item.name}
					className="object-cover !m-0 !p-0 object-top rounded-full lg:h-28 lg:w-28 h-16 w-16 border-[1px] border-muted-foreground/30 relative transition duration-500 drop-shadow-2xl cursor-pointer"
				/>
			</a>
		</div>
	);
};

export default AnimatedTooltip;
