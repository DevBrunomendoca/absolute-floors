import { ContentInput } from "./ContactStyle";

const Input = ({type, id, name, placeholder, label}) => {
	return (
		<ContentInput>
			<label htmlFor={id}>{label}</label>
			<input required type={type} id={id} name={name} placeholder={placeholder}/>
		</ContentInput>
	);
};

export default Input