function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="flex w-full mt-24 px-8 lg:px-36 scrollbar-thin scrollbar-track-primary scrollbar-thumb-darkaccent">
				{children}
			</div>
		</>
	);
}

export default Layout;
