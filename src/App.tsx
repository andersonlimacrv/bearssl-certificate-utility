import Navbar from '@/components/global/navbar';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Background from '@/components/global/Background';

function App() {
	return (
		<section className="relative w-full h-full">
			<Background />
			<Navbar />
			<Layout>
				<Hero />
			</Layout>
		</section>
	);
}

export default App;
