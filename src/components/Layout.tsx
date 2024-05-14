function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="flex w-full max-w-screen-2xl mx-auto mt-24 px-8 lg:px-36 pb-8">
				{children}
			</div>
		</>
	);
}

export default Layout;
