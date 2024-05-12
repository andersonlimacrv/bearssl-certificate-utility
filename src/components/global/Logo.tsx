import ImageLogo from '/LOGO_AC.svg';

function Logo() {
	return (
		<>
			<img
				src={ImageLogo}
				alt="Allcode Logo."
				className="w-full h-full drop-shadow-1xl"
			/>
		</>
	);
}

export default Logo;
