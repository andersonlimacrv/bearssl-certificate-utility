import React, { useState } from 'react';
import ButtonAccent from '../ui/ButtonAccent';
import { Input } from '@/components/ui/input';

export default function SSLToolForm() {
	const [domains, setDomains] = useState('');
	const [trustAnchorArrayName, setTrustAnchorArrayName] = useState('TAs');
	const [arrayLengthName, setArrayLengthName] = useState('TAs_NUM');
	const [headerGuardName, setHeaderGuardName] = useState('CERTIFICATES');

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log('Form submitted:', domains);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col text-center w-[90%] gap-x-4 gap-y-2 mx-auto mt-4 lg:pt-10"
		>
			<div className="flex flex-col lg:flex-row">
				<label
					className="mb-2 text-lg font-medium w-full"
					htmlFor="domains"
				>
					Domains To Include:
				</label>
				<Input
					type="text"
					id="domains"
					value={domains}
					onChange={(e) => setDomains(e.target.value)}
					placeholder="www.google.com, www.amazon.com"
				/>
			</div>
			<div className="flex w-full justify-center items-center py-4">
				<h2 className="mb-2 text-lg text-one font-bold uppercase">
					Header Customization Options
				</h2>
			</div>
			<div className="flex flex-col lg:flex-row">
				<label
					className="mb-2 text-lg font-medium w-full"
					htmlFor="trustAnchorArrayName"
				>
					Name For Trust Anchor Array Variable
				</label>
				<Input
					type="text"
					id="trustAnchorArrayName"
					value={trustAnchorArrayName}
					onChange={(e) =>
						setTrustAnchorArrayName(e.target.value)
					}
					placeholder="TAs"
				/>
			</div>
			<div className="flex flex-col lg:flex-row">
				<label
					className="mb-2 text-lg font-medium w-full"
					htmlFor="arrayLengthName"
				>
					Name For Array Length Variable
				</label>
				<Input
					type="text"
					id="arrayLengthName"
					value={arrayLengthName}
					onChange={(e) =>
						setArrayLengthName(e.target.value)
					}
					placeholder="TAs_NUM"
				/>
			</div>
			<div className="flex flex-col lg:flex-row">
				<label
					className="mb-2 text-lg font-medium w-full"
					htmlFor="headerGuardName"
				>
					Name For The Header Guard (Usually Caps)
				</label>
				<Input
					type="text"
					id="headerGuardName"
					value={headerGuardName}
					onChange={(e) =>
						setHeaderGuardName(e.target.value)
					}
					placeholder="CERTIFICATES"
				/>
			</div>
			<div className="flex flex-col gap-y-2 py-4">
				<p className="">
					Please add some domains, and click submit!
				</p>

				<ButtonAccent
					type="submit"
					className="lg:w-96 w-full px-auto mx-auto"
				>
					Submit
				</ButtonAccent>
			</div>
		</form>
	);
}
