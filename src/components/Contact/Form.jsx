import { ContentInput } from "./ContactStyle";

const Input = ({type, id, name, placeholder, label}) => {
	return (
		<ContentInput>
			<label htmlFor="name">{label}</label>
			<input type={type} id={id} name={name} placeholder={placeholder}/>
		</ContentInput>
	);
};

export default Input