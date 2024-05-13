import React from 'react';

const Skeleton: React.FC = () => {
	return (
		<div className="flex flex-row items-center justify-center w-full h-full">
			<div className=" bg-gray-800 h-full w-full animate-pulse rounded-full"></div>
		</div>
	);
};

export default Skeleton;
