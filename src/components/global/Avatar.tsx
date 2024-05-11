import AnimatedTooltip from '@/components/ui/animated-tooltip';
import React, { useState, useEffect } from 'react';
import { BsHourglassSplit } from 'react-icons/bs';

// Componente de Skeleton para simular o conteúdo enquanto o fetch está em andamento
const Skeleton: React.FC = () => {
	return (
		<div className="flex flex-row items-center justify-center mb-10 w-full">
			<div className="bg-gray-800 h-28 w-28 animate-pulse rounded-full">
				<BsHourglassSplit className="text-white h-full w-6 mx-auto my-auto" />
			</div>
		</div>
	);
};

interface Person {
	id: number;
	name: string;
	designation: string;
	image: string;
	github_url: string;
}

const fetchData = async (username: string) => {
	try {
		const response = await fetch(
			`https://api.github.com/users/${username}`
		);
		if (!response.ok) {
			throw new Error('Failed to fetch user data');
		}
		const userData = await response.json();
		return userData;
	} catch (error) {
		console.error('Error fetching data:', error);
		return null;
	}
};

const Avatar: React.FC = () => {
	const [userData, setUserData] = useState<Person | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchUser = async () => {
			const data = await fetchData('andersonlimacrv');
			if (data) {
				const personData: Person = {
					id: data.id,
					name: data.name,
					designation: data.bio || 'Software Engineer',
					image: data.avatar_url,
					github_url: data.html_url,
				};
				setUserData(personData);
				setLoading(false);
			}
		};
		fetchUser();
	}, []);

	return (
		<div>
			{loading ? (
				<Skeleton />
			) : (
				<div className="flex flex-row items-center justify-center mb-10 w-full">
					<AnimatedTooltip item={userData!} />
				</div>
			)}
		</div>
	);
};

export default Avatar;
