import React from 'react';
import ButtonAccent from '../ui/ButtonAccent';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert } from '../global/alert';
import { ICertificateProps } from '../CertificateData';

interface FormState {
	domains: string;
	trustAnchorArrayName: string;
	arrayLengthName: string;
	headerGuardName: string;
	[key: string]: string | string[];
}

interface SSLToolFormProps {
	onSubmit: (formData: ICertificateProps) => void;
}

interface SSLToolFormState extends FormState {
	errorFields: string[];
}

class SSLToolForm extends React.Component<SSLToolFormProps, SSLToolFormState> {
	constructor(props: SSLToolFormProps) {
		super(props);
		this.state = {
			domains: '',
			trustAnchorArrayName: 'TAs',
			arrayLengthName: 'TAs_NUM',
			headerGuardName: 'CERTIFICATES',
			errorFields: [],
		};
	}

	handleChange = (field: keyof FormState, value: string) => {
		this.setState((prevState) => ({
			...prevState,
			[field]: value,
			errorFields: prevState.errorFields.filter(
				(errorField) => errorField !== field
			),
		}));
	};

	handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const requiredFields = [
			'domains',
			'trustAnchorArrayName',
			'arrayLengthName',
			'headerGuardName',
		];
		const missingFields = requiredFields.filter(
			(field) => !this.state[field]
		);

		if (missingFields.length > 0) {
			this.setState({ errorFields: missingFields });
			return;
		}

		const formData: ICertificateProps = {
			domains: this.state.domains
				.split(',')
				.map((domain) => domain.trim()),
			options: {
				array_name: this.state.trustAnchorArrayName,
				length_name: this.state.arrayLengthName,
				guard_name: this.state.headerGuardName,
			},
		};

		this.props.onSubmit(formData);
	};

	render() {
		const {
			domains,
			trustAnchorArrayName,
			arrayLengthName,
			headerGuardName,
			errorFields,
		} = this.state;

		return (
			<form
				onSubmit={this.handleSubmit}
				className="flex flex-col text-center w-[90%] gap-x-4 gap-y-2 mx-auto mt-4 lg:pt-10"
			>
				<div className="flex flex-col lg:flex-row">
					<Label htmlFor="domains">
						Domains To Include:
					</Label>
					<Input
						type="text"
						id="domains"
						placeholder="www.google.com, www.amazon.com"
						value={domains}
						onChange={(e) =>
							this.handleChange(
								'domains',
								e.target.value
							)
						}
					/>
				</div>
				<div className="flex w-full justify-center items-center py-4">
					<h2 className="mb-2 text-lg text-one font-bold uppercase">
						Header Customization Options
					</h2>
				</div>
				<div className="flex flex-col lg:flex-row">
					<Label htmlFor="trustAnchorArrayName">
						Name For Trust Anchor Array Variable
					</Label>
					<Input
						type="text"
						maxLength={16}
						id="trustAnchorArrayName"
						placeholder="TAs"
						value={trustAnchorArrayName}
						onChange={(e) =>
							this.handleChange(
								'trustAnchorArrayName',
								e.target.value
							)
						}
					/>
				</div>
				<div className="flex flex-col lg:flex-row">
					<Label htmlFor="arrayLengthName">
						Name For Array Length Variable
					</Label>
					<Input
						type="text"
						maxLength={16}
						id="arrayLengthName"
						placeholder="TAs_NUM"
						value={arrayLengthName}
						onChange={(e) =>
							this.handleChange(
								'arrayLengthName',
								e.target.value
							)
						}
					/>
				</div>
				<div className="flex flex-col lg:flex-row">
					<Label htmlFor="headerGuardName">
						Name For The Header Guard (Usually Caps)
					</Label>
					<Input
						type="text"
						maxLength={16}
						id="headerGuardName"
						placeholder="CERTIFICATES"
						value={headerGuardName}
						onChange={(e) =>
							this.handleChange(
								'headerGuardName',
								e.target.value
							)
						}
					/>
				</div>
				<div className="h-6">
					{errorFields.length > 0 && (
						<Alert
							message={`Complete the following field(s): ${errorFields.join(
								', '
							)}`}
						/>
					)}
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
}

export default SSLToolForm;
