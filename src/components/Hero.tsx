import CardLayout, { Header, Body } from '@/components/ui/Card';
import Avatar from '@/components/global/Avatar';
function Hero() {
	return (
		<div className="flex flex-col items-center justify-center px-auto w-full">
			<div className="flex w-full justify-end pr-16">
				<Avatar />
			</div>
			<CardLayout>
				<Header title="bearssl certificate utility" />
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
