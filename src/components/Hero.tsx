import CardLayout, { Header, Body } from '@/components/ui/Card';
import Avatar from '@/components/global/Avatar';
import { motion } from 'framer-motion';
import { charVariants } from '@/utils/variants';
import SSLToolForm from './forms/sslToolForm';

import splitStringUsingRegex from '@/utils/splitStringUsingRegex';

const heading = 'BearSSL Certificate Utility';
const text =
	'This is a small website that features a specialized tool for generating C/C++ header files containing trust anchors for SSL/TLS certificates, specifically tailored for use with BearSSL.';

function Hero() {
	const headingChars = splitStringUsingRegex(heading);
	const textChars = splitStringUsingRegex(text);

	return (
		<div className="flex flex-col w-full bg-transparent">
			<div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-y-2">
				<div className="order-1 lg:order-2 flex w-full lg:w-1/3 justify-center lg:justify-end lg:pr-16 2xl:pr-36 my-4 lg:my-12">
					<Avatar />
				</div>
				<div className="order-2 lg:order-1 flex flex-col w-full lg:w-2/3 px-4 lg:pl-16 2xl:pl-36 py-4 lg:py-12">
					<Header>
						<motion.h1
							initial="hidden"
							whileInView="reveal"
							transition={{ staggerChildren: 0.02 }}
						>
							{headingChars.map((char) => (
								<motion.span
									key={char}
									variants={charVariants}
									transition={{
										duration: 0.5,
									}}
								>
									{char}
								</motion.span>
							))}
						</motion.h1>
					</Header>

					<motion.p
						initial="hidden"
						whileInView="reveal"
						transition={{ staggerChildren: 0.015 }}
					>
						<span>
							{textChars.map((char) => (
								<motion.span
									key={char}
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
						<SSLToolForm />
					</Body>
				</CardLayout>
			</div>
		</div>
	);
}

export default Hero;
