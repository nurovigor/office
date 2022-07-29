import React, { ChangeEvent, useState } from 'react';
import { FieldProps } from 'formik';
import {
	Container,
	ErrorSuggestion,
	SuggestionActive,
	Suggestions,
	SelectBlock,
	Input,
	Delete
} from './styles';

type AutocompleteFieldPropType = {
	suggestions: string[];
};

export const AutocompleteField: React.FC<AutocompleteFieldPropType & FieldProps> = ({
	field,
	form: { errors, setErrors, setValues, values },
	suggestions,
	...props
}) => {
	const [activeSuggestion, setActiveSuggestion] = useState(0);
	const [filteredSuggestions, setFilteredSuggestions] = useState<string[] | []>([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [userInput, setUserInput] = useState(values[field.name]);
	const [isShowInput, setShowInput] = useState(false);

	const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
		const userInput = e.currentTarget.value;

		/*setErrors({ ...errors, [field.name]: '' });
		setValues({ ...values, [field.name]: userInput });*/

		const filteredSuggestions = suggestions.filter(
			(suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
		);

		setActiveSuggestion(0);
		setFilteredSuggestions(filteredSuggestions);
		setShowSuggestions(true);
		setUserInput(e.currentTarget.value);
	};

	const onClickHandle = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
		setActiveSuggestion(0);
		setFilteredSuggestions([]);
		setShowSuggestions(false);
		setUserInput(e.currentTarget.innerText);
		setShowInput(false);
		setValues({ ...values, [field.name]: e.currentTarget.innerText });
		setErrors({ ...errors, [field.name]: '' });
	};

	const onKeyDownHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.keyCode === 13) {
			setActiveSuggestion(0);
			setShowSuggestions(false);
			setUserInput(filteredSuggestions[activeSuggestion]);
			setValues({ ...values, [field.name]: filteredSuggestions[activeSuggestion] });
			setShowInput(false);
		} else if (e.keyCode === 38) {
			if (activeSuggestion === 0) {
				return;
			}
			setActiveSuggestion(activeSuggestion - 1);
			setUserInput(filteredSuggestions[activeSuggestion - 1]);
		} else if (e.keyCode === 40) {
			if (activeSuggestion === filteredSuggestions.length - 1) {
				return;
			}
			setActiveSuggestion(activeSuggestion + 1);
			setUserInput(filteredSuggestions[activeSuggestion + 1]);
		}
	};

	let suggestionsListComponent;

	if (showSuggestions && userInput) {
		if (filteredSuggestions.length) {
			suggestionsListComponent = (
				<ul className={Suggestions}>
					{filteredSuggestions.map((suggestion, index) => {
						let className;

						if (index === activeSuggestion) {
							className = SuggestionActive;
						}
						return (
							<li className={className} key={suggestion} onClick={onClickHandle}>
								{suggestion}
							</li>
						);
					})}
				</ul>
			);
		} else {
			suggestionsListComponent = <div className={ErrorSuggestion}>No suggestions available.</div>;
		}
	} else if (userInput === '') {
		suggestionsListComponent = <div className={ErrorSuggestion}>{field.name} is required</div>;
	}

	return (
		<div className={Container}>
			<div className={SelectBlock} onClick={() => setShowInput(true)}>
				<span>{values[field.name]}</span>
				<div className={Delete} onClick={() => setValues({ ...values, [field.name]: '' })}></div>
			</div>
			{isShowInput && (
				<div className={Input}>
					<input
						{...field}
						{...props}
						type="text"
						onChange={onChangeHandle}
						onKeyDown={onKeyDownHandle}
						value={userInput}
					/>
				</div>
			)}
			{suggestionsListComponent}
		</div>
	);
};
