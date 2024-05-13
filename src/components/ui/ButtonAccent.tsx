import React from 'react';
import { cn } from '@/lib/utils';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

const ButtonAccent: React.FC<Props> = ({ className, children, ...rest }) => {
	return (
		<>
			<div
				className={cn(
					'relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50',
					className
				)}
			>
				<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#d123e1_20%,#E2CBFF_100%)]" />
				<button
					{...rest}
					className={cn(
						'inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-accent-foreground px-3 py-1 text-sm font-medium dark:text-primary backdrop-blur-3xl',
						className
					)}
				>
					{children}
				</button>
			</div>
		</>
	);
};

export default ButtonAccent;
