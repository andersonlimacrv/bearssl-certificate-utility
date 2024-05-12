function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="flex w-full mt-24 px-8 lg:px-36">
				{children}
			</div>
		</>
	);
}

export default Layout;
