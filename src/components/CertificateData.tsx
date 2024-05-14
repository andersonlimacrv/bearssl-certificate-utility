import React, { useState, useEffect } from 'react';
import { PiCopySimpleLight } from 'react-icons/pi';
import SpinnerLoad from './global/spinnerLoad';

export interface ICertificateProps {
	domains: string[];
	options: {
		array_name: string;
		length_name: string;
		guard_name: string;
	};
}

interface CertificateDataProps {
	certificateProps: ICertificateProps;
}

interface CertificateDataState {
	header: string | null;
	error: string | null;
	loading: boolean;
}

const CertificateData: React.FC<CertificateDataProps> = ({
	certificateProps,
}) => {
	const initialCertificateDataState: CertificateDataState = {
		header: null,
		error: null,
		loading: true, // Começa com loading true
	};
	const [certificateData, setCertificateData] =
		useState<CertificateDataState>(initialCertificateDataState);

	const [copy, setCopy] = useState(false);

	useEffect(() => {
		const fetchHeaderForDomains = async () => {
			const { domains, options } = certificateProps;

			if (domains.length <= 0) {
				setCertificateData({
					header: null,
					error: 'No domains provided.',
					loading: false, // Indica que o carregamento está completo
				});
				return;
			}

			const urlParams = domains
				.map((d) => `domain=${d}`)
				.concat(
					Object.entries(options).map(
						([key, value]) => `${key}=${value}`
					)
				)
				.join('&');

			const url = `https://certutil.prototypical.pro/getheader?${urlParams}`;

			try {
				const res = await fetch(url);
				const data = await res.json();
				console.log(data);
				setCertificateData({
					header: data.header,
					error: null,
					loading: false,
				});
			} catch (err: unknown) {
				console.error(err);
				if (err instanceof Error) {
					setCertificateData({
						header: null,
						error: err.message,
						loading: false,
					});
				} else {
					setCertificateData({
						header: null,
						error: 'Unknown error occurred.',
						loading: false,
					});
				}
			}
		};

		setCertificateData((prevState) => ({
			...prevState,
			loading: true,
		}));
		fetchHeaderForDomains();
	}, [certificateProps]);

	const { header, error, loading } = certificateData;

	const handleCopy = async () => {
		if (header) {
			await navigator.clipboard.writeText(header);
			setCopy(true);

			setTimeout(() => {
				setCopy(false);
			}, 3000);
		}
	};

	return (
		<div className="flex flex-col w-full bg-transparent">
			{error && <div className="h-6">Error: {error}</div>}

			{loading ? (
				<div className="flex justify-center items-center w-full h-full">
					<SpinnerLoad />
				</div>
			) : (
				<pre className="flex justify-center w-full h-full py-4">
					{header && (
						<div className="text-left overflow-x-auto scroolbar py-1 relative">
							<button
								onClick={handleCopy}
								className="absolute right-0 top-0 mr-2 mt-2"
								disabled={copy}
							>
								{copy ? (
									'Copied ✅'
								) : (
									<PiCopySimpleLight />
								)}
							</button>
							{header}
						</div>
					)}
				</pre>
			)}
		</div>
	);
};

export default CertificateData;
