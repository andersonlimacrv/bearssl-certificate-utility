import React, { ReactNode } from 'react';

// Definir as propriedades aceitas pelo CardLayout
interface NodeHasChild {
	children: ReactNode;
}

// Define o layout básico do card
const CardLayout: React.FC<NodeHasChild> = ({ children }) => {
	return (
		<div className="flex flex-col w-full p-6 bg-gray-100/50 border backdrop-blur-sm border-muted-foreground rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-900/50 dark:border-gray-700 dark:hover:bg-gray-900 transition-all duration-200 dark:group-[:hover]::bg-gray-900 group-[:hover]:bg-gray-100 gap-y-2">
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
