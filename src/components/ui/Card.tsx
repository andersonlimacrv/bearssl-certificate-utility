import React, { ReactNode } from 'react';
import { cn } from '@/utils/cn';

// Definir as propriedades aceitas pelo CardLayout
interface NodeHasChild {
	children: ReactNode;
	className?: string;
}

// Define o layout básico do card
const CardLayout: React.FC<NodeHasChild> = ({ children, className }) => {
	return (
		<div
			className={cn(
				'flex flex-col w-full p-6 bg-card border backdrop-blur-sm border-muted-foreground rounded-lg shadow-2xl  gap-y-2"',
				className
			)}
		>
			{children}
		</div>
	);
};

const Header: React.FC<NodeHasChild> = ({ children }) => {
	return (
		<h5 className="flex text-2xl 2xl:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
			{children}
		</h5>
	);
};

// Componente Body utilizando a interface NodeHasChild
const Body: React.FC<NodeHasChild> = ({ children }) => {
	return (
		<div className="flex font-normal text-gray-700 dark:text-gray-400">
			{children}
		</div>
	);
};

// Exporta o CardLayout, Header e Body
export default CardLayout;
export { Header, Body };
