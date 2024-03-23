import Input from './input/input';

import './form.css';

export default function Form() {
	return (
		<form className='form'>
			<h3>
				Welcome Back!
				<span>Login to your account.</span>
			</h3>

			<label for='username'>Username</label>
			<Input
				type='text'
				placeholder='For ex. CodingArtist'
			/>

			<label for='password'>Password</label>
			<Input
				type='password'
				placeholder='Minimum 6 characters'
			/>

			<button>Sign In</button>
		</form>
	);
}
