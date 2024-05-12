import React from 'react';

interface Props {
	children: React.ReactNode;
}

const ButtonAccent: React.FC<Props> = ({ children }) => {
	return (
		<>
			<div className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
				<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#d123e1_20%,#E2CBFF_100%)]" />
				<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-accent-foreground px-3 py-1 text-sm font-medium dark:text-primary backdrop-blur-3xl">
					{children}
				</span>
			</div>
		</>
	);
};

export default ButtonAccent;
