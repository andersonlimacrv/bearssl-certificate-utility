import React from 'react';
import { BsHourglassSplit } from 'react-icons/bs';

const Skeleton: React.FC = () => {
	return (
		<div className="flex flex-row items-center justify-center w-full h-full">
			<div className=" bg-gray-800 h-full w-full animate-pulse rounded-full">
				<BsHourglassSplit className="text-white h-full w-6 mx-auto my-auto" />
			</div>
		</div>
	);
};

export default Skeleton;
