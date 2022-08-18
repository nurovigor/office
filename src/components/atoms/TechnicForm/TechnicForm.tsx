import React from 'react';
import { TechnicTypeI } from 'src/common/types/types';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Container, Errors, FormRow, Input } from 'src/components/atoms/Form/styles';
import cn from 'classnames';
import { Button } from 'src/components/atoms/Button';
import { useAppDispatch } from 'src/hooks';
import { updateOrCreateItem } from 'src/store/thunks/technic';

type TechnicFormProps = {
	item?: TechnicTypeI;
	closeModal: (value: boolean) => void;
};

export const TechnicForm: React.FC<TechnicFormProps> = ({ item, closeModal }) => {
	const technicSchema = Yup.object().shape({
		name: Yup.string().required('Name is required'),
		type: Yup.string().required('Type is required'),
		serial: Yup.string(),
		bind: Yup.string()
	});

	const initialValues: InitialValuesType = {
		name: item?.name || '',
		type: item?.type || '',
		serial: item?.serial || '',
		bind: item?.bind || 'No'
	};

	type InitialValuesType = {
		name: string;
		type: string;
		serial: string;
		bind: string;
	};

	const dispatch = useAppDispatch();

	const submitForm = (values: InitialValuesType, { resetForm, setErrors }: any) => {
		dispatch(updateOrCreateItem(item ? item?._id : null, values)).then((data) => {
			if (!data._id) {
				setErrors({ ...data });
			} else {
				resetForm();
				closeModal(false);
			}
		});
	};

	return (
		<Formik initialValues={initialValues} validationSchema={technicSchema} onSubmit={submitForm}>
			{(formik) => {
				const { errors, submitCount } = formik;
				return (
					<div className={Container}>
						<Form autoComplete="off">
							<div className={FormRow}>
								<label htmlFor={'name'}>Name</label>
								<div>
									<Field
										name={'name'}
										id={'name'}
										placeholder={'Brand'}
										className={cn(Input, { InputError: errors.name && submitCount > 0 })}
									/>
									{submitCount > 0 && (
										<ErrorMessage name={'name'} component="span" className={Errors} />
									)}
								</div>
							</div>
							<div className={FormRow}>
								<label htmlFor={'type'}>Type</label>
								<div>
									<Field
										name={'type'}
										id={'type'}
										placeholder={'Monitor'}
										className={cn(Input, { InputError: errors.type && submitCount > 0 })}
									/>
									{submitCount > 0 && (
										<ErrorMessage name={'type'} component="span" className={Errors} />
									)}
								</div>
							</div>
							<div className={FormRow}>
								<label htmlFor={'serial'}>S/N</label>
								<div>
									<Field
										name={'serial'}
										id={'serial'}
										placeholder={'4CE0460D0G'}
										className={cn(Input, { InputError: errors.serial && submitCount > 0 })}
									/>
									{submitCount > 0 && (
										<ErrorMessage name={'serial'} component="span" className={Errors} />
									)}
								</div>
							</div>
							<Button type={'submit'}>Save</Button>
						</Form>
					</div>
				);
			}}
		</Formik>
	);
};
