import CardLayout, { Header, Body } from '@/components/ui/Card';
import Avatar from '@/components/global/Avatar';

function Hero() {
	return (
		<div className="flex flex-col items-center justify-center px-auto w-full bg-transparent">
			<div className="flex w-full justify-center lg:justify-end lg:pr-16">
				<Avatar />
			</div>

			<CardLayout>
				<Header title="Bearssl certificate utility" />
				<Body>
					<p>
						This utility allows you to download and
						verify certificates from any certificate
						authority.
					</p>
				</Body>
			</CardLayout>
		</div>
	);
}

export default Hero;
