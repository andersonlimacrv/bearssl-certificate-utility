import React, { ReactNode } from 'react';

// Definir as propriedades aceitas pelo CardLayout
interface NodeHasChild {
	children: ReactNode;
}

// Define o layout básico do card
const CardLayout: React.FC<NodeHasChild> = ({ children }) => {
	return (
		<div className="block max-w-sm p-6 bg-muted/80 border border-muted-foreground rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-900/70 dark:border-gray-700 dark:hover:bg-gray-900 transition-all duration-200 dark:group-[:hover]::bg-gray-900 group-[:hover]:bg-gray-100">
			{children}
		</div>
	);
};

const Header: React.FC<{ title: string }> = ({ title }) => {
	return (
		<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			{title}
		</h5>
	);
};

// Componente Body utilizando a interface NodeHasChild
const Body: React.FC<NodeHasChild> = ({ children }) => {
	return (
		<div className="font-normal text-gray-700 dark:text-gray-400">
			{children}
		</div>
	);
};

// Exporta o CardLayout, Header e Body
export default CardLayout;
export { Header, Body };
