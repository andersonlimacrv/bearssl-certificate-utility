import AnimatedTooltip from '@/components/ui/animated-tooltip';
import React, { useState, useEffect } from 'react';
import Skeleton from './Skeleton';

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
		<div className="my-12">
			<div className="flex flex-row items-center justify-center w-full h-full">
				{loading ? (
					<div className="h-16 w-16 lg:h-28 lg:w-28">
						<Skeleton />
					</div>
				) : (
					<AnimatedTooltip item={userData!} />
				)}
			</div>
		</div>
	);
};

export default Avatar;
