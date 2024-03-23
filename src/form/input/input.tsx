import './input.css';

export default function Input({
	type,
	placeholder,
}: {
	type: string;
	placeholder: string;
}) {
	return (
		<input
			className='input'
			type={type}
			placeholder={placeholder}
		/>
	);
}
