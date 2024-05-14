import React from 'react';
import { ExclamationIcon } from '@/components/svgs/exclamationMark';
import { motion } from 'framer-motion';

interface AlertProps {
	message: string; // Tipo string para a mensagem
}
export const Alert: React.FC<AlertProps> = ({ message }) => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.6 }}
				className="flex items-center justify-center p-2 mb-4 text-sm text-destructive dark:text-red-500 border border-destructive rounded-md bg-secondary"
				role="alert"
			>
				<ExclamationIcon />
				<span className="sr-only">Info</span>
				<div>
					<span className="font-medium">Alert!</span>
					<span className="inline px-2">{message}</span>
				</div>
			</motion.div>
		</>
	);
};
