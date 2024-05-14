import React, { useState, useEffect } from 'react';
import CardLayout, { Header, Body } from '@/components/ui/Card';
import Avatar from '@/components/global/Avatar';
import { motion } from 'framer-motion';
import { charVariants } from '@/utils/variants';
import SSLToolForm from './forms/sslToolForm';
import splitStringUsingRegex from '@/utils/splitStringUsingRegex';
import CertificateData, { ICertificateProps } from './CertificateData';

const heading = 'BearSSL Certificate Utility';
const text =
	'This is a small website that features a specialized tool for generating C/C++ header files containing trust anchors for SSL/TLS certificates, specifically tailored for use with BearSSL.';

const Hero: React.FC = () => {
	const headingChars = splitStringUsingRegex(heading);
	const textChars = splitStringUsingRegex(text);
	const initialCertificateDataProps: ICertificateProps = {
		domains: [],
		options: {
			array_name: 'TAs',
			length_name: 'TAs_NUM',
			guard_name: 'CERTIFICATES',
		},
	};
	const [certificateDataProps, setCertificateDataProps] =
		useState<ICertificateProps>(initialCertificateDataProps);

	const handleFormSubmit = (formData: ICertificateProps) => {
		setCertificateDataProps(formData);
	};

	useEffect(() => {}, [certificateDataProps]);

	return (
		<div className="flex flex-col w-full bg-transparent">
			<div className="flex flex-col lg:flex-row justify-center lg:justify-between">
				<div className="order-1 lg:order-2 flex w-full lg:w-1/3 justify-center lg:justify-end lg:pr-16 2xl:pr-36 my-2 lg:my-4">
					<Avatar />
				</div>
				<div className="order-2 lg:order-1 flex flex-col w-full lg:w-2/3 px-4 lg:pl-16 2xl:pl-36 py-2 lg:py-8">
					<Header>
						<motion.div
							initial="hidden"
							whileInView="reveal"
							transition={{ staggerChildren: 0.02 }}
						>
							{headingChars.map((char) => (
								<motion.span
									key={char + Math.random()}
									variants={charVariants}
									transition={{
										duration: 0.5,
									}}
								>
									{char}
								</motion.span>
							))}
						</motion.div>
					</Header>

					<motion.p
						initial="hidden"
						animate="reveal"
						transition={{ staggerChildren: 0.015 }}
					>
						<span>
							{textChars.map((char) => (
								<motion.span
									key={char + Math.random()}
									variants={charVariants}
									transition={{
										duration: 0.35,
									}}
								>
									{char}
								</motion.span>
							))}
						</span>
					</motion.p>
				</div>
			</div>
			<div className="flex flex-col w-full px-4 lg:px-16 2xl:px-36">
				<CardLayout>
					<Header>{heading}</Header>
					<Body>
						<SSLToolForm onSubmit={handleFormSubmit} />
					</Body>
				</CardLayout>

				<CardLayout className="mt-2">
					<div className="text-center min-h-6 h-full">
						{certificateDataProps.domains.length > 0 ? (
							<CertificateData
								certificateProps={
									certificateDataProps
								}
							/>
						) : (
							<div>Header will appear here.</div>
						)}
					</div>
				</CardLayout>
			</div>
		</div>
	);
};

export default Hero;
