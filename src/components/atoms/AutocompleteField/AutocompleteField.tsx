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
import { SuggestionType } from 'src/components/atoms/Form/FormComponent';

type AutocompleteFieldPropType = {
	suggestions: SuggestionType[];
};

const ENTER = 13;
const UP = 38;
const DOWN = 40;

export const AutocompleteField: React.FC<AutocompleteFieldPropType & FieldProps> = ({
	field,
	form: { errors, setErrors, setValues, values },
	suggestions,
	...props
}) => {
	const [activeSuggestion, setActiveSuggestion] = useState(0);
	const [filteredSuggestions, setFilteredSuggestions] = useState<SuggestionType[]>([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [userInput, setUserInput] = useState(values[field.name]);
	const [isShowInput, setShowInput] = useState(false);

	const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
		const userInput = e.currentTarget.value;

		const filteredSuggestions = suggestions.filter((suggestion) =>
			suggestion.fullName.toLowerCase().includes(userInput.toLowerCase())
		);

		setActiveSuggestion(0);
		setFilteredSuggestions(filteredSuggestions);
		setShowSuggestions(true);
		setUserInput(e.currentTarget.value);
	};

	const onClickHandle = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, id: string) => {
		setActiveSuggestion(0);
		setFilteredSuggestions([]);
		setShowSuggestions(false);
		setUserInput(e.currentTarget.innerText);
		setShowInput(false);
		setValues({ ...values, [field.name]: e.currentTarget.innerText, id });
		setErrors({ ...errors, [field.name]: '' });
	};

	const onKeyDownHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.keyCode === ENTER) {
			setActiveSuggestion(0);
			setShowSuggestions(false);
			setUserInput(filteredSuggestions[activeSuggestion]);
			setValues({
				...values,
				[field.name]: filteredSuggestions[activeSuggestion].fullName,
				id: filteredSuggestions[activeSuggestion].id
			});
			setShowInput(false);
		} else if (e.keyCode === UP) {
			if (activeSuggestion === 0) {
				return;
			}
			setActiveSuggestion(activeSuggestion - 1);
			setUserInput(filteredSuggestions[activeSuggestion - 1].fullName);
		} else if (e.keyCode === DOWN) {
			if (activeSuggestion === filteredSuggestions.length - 1) {
				return;
			}
			setActiveSuggestion(activeSuggestion + 1);
			setUserInput(filteredSuggestions[activeSuggestion + 1].fullName);
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
							<li
								className={className}
								key={suggestion.id}
								onClick={(e) => onClickHandle(e, suggestion.id)}
							>
								{suggestion.fullName}
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
