import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import cn from 'classnames';
import { TableTypeI } from 'src/store/nodes/officeNode';
import { AutocompleteField } from 'src/components/atoms/AutocompleteField';
import { Button } from 'src/components/atoms/Button';
import { useAppDispatch } from 'src/hooks';
import { Nullable } from 'src/common/types/types';
import { Container, Errors, FormRow, Input } from './styles';
import { updateTable } from 'src/store/thunks';

export interface FormI {
	pc: string;
	monitor: string;
	keyboard: string;
	mouse: string;
	microphone: string;
	headphones: string;
	camera: string;
}

export interface ValueI extends FormI {
	id: Nullable<string>;
	developer: string;
}

export type SuggestionType = {
	fullName: string;
	id: Nullable<string>;
};

type FormComponentPropsType = {
	table: TableTypeI;
	suggestions: SuggestionType[];
	closeModal: () => void;
};

export const FormComponent: React.FC<FormComponentPropsType> = ({
	table,
	suggestions,
	closeModal
}) => {
	const signInSchema = Yup.object().shape({
		developer: Yup.string().required('Developer is required'),
		pc: Yup.string().required('PC is required'),
		monitor: Yup.string().required('Monitor is required'),
		keyboard: Yup.string().required('Keyboard is required'),
		mouse: Yup.string().required('Mouse is required'),
		microphone: Yup.string().required('Microphone is required'),
		headphones: Yup.string().required('Headphones is required'),
		camera: Yup.string().required('Camera is required')
	});

	const dispatch = useAppDispatch();

	const initialValues = {
		developer: table.developer
			? `${table.developer.firstName} ${table.developer.lastName}`
			: 'null',
		pc: table.pc || 'null',
		monitor: table.monitor || 'null',
		keyboard: table.keyboard || 'null',
		mouse: table.mouse || 'null',
		microphone: table.microphone || 'null',
		headphones: table.headphones || 'null',
		camera: table.camera || 'null',
		id: table.developer ? table.developer._id : 'null'
	};

	const items: (keyof FormI)[] = [
		'pc',
		'monitor',
		'keyboard',
		'mouse',
		'microphone',
		'headphones',
		'camera'
	];

	const submitForm = (values: ValueI, { resetForm }: { resetForm: () => void }) => {
		dispatch(
			updateTable({
				camera: values.camera,
				headphones: values.headphones,
				keyboard: values.keyboard,
				microphone: values.microphone,
				monitor: values.monitor,
				mouse: values.mouse,
				pc: values.pc,
				tableId: table._id,
				developerId: values.id
			})
		);
		closeModal();
		resetForm();
	};

	return (
		<Formik initialValues={initialValues} validationSchema={signInSchema} onSubmit={submitForm}>
			{(formik) => {
				const { errors, submitCount } = formik;

				return (
					<div className={Container}>
						<Form autoComplete="off">
							<div className={FormRow}>
								<label htmlFor="developer">developer</label>
								<Field
									name={'developer'}
									id={'developer'}
									component={AutocompleteField}
									suggestions={suggestions}
									className={cn(Input, { InputError: errors.developer && submitCount > 0 })}
								/>
							</div>

							{items.map((item, index) => (
								<div key={index} className={FormRow}>
									<label htmlFor={item}>{item}</label>
									<div>
										<Field
											name={item}
											id={item}
											className={cn(Input, { InputError: errors[item] && submitCount > 0 })}
										/>
										{submitCount > 0 && (
											<ErrorMessage name={item} component="span" className={Errors} />
										)}
									</div>
								</div>
							))}
							<Button type={'submit'} onClick={() => submitForm}>
								Save
							</Button>
						</Form>
					</div>
				);
			}}
		</Formik>
	);
};
