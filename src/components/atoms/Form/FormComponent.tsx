import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { AutocompleteField } from 'src/components/atoms/AutocompleteField';
import { Button } from 'src/components/atoms/Button';
import cn from 'classnames';
import { Container, Errors, FormRow, Input } from './styles';

const suggestions = [
	'Ryu',
	'E.Honda',
	'Blanka',
	'Guile',
	'Balrog',
	'Vega',
	'Ken',
	'Chun Li',
	'Zangief',
	'Dhalsim',
	'Sagat',
	'M.Bison',
	'Cammy'
];

export interface FormI {
	pc: string;
	monitor: string;
	keyboard: string;
	mouse: string;
	microphone: string;
	headphones: string;
	camera: string;
}

export interface FormPropsI extends FormI {
	developer: string;
}

type FormComponentPropsType = {
	item: FormPropsI;
};

export const FormComponent: React.FC<FormComponentPropsType> = ({ item }) => {
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

	const initialValues = {
		developer: item.developer,
		pc: item.pc,
		monitor: item.monitor,
		keyboard: item.keyboard,
		mouse: item.mouse,
		microphone: item.microphone,
		headphones: item.headphones,
		camera: item.camera
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

	return (
		<Formik initialValues={initialValues} validationSchema={signInSchema} onSubmit={() => {}}>
			{(formik) => {
				const { errors, touched, isValid, dirty } = formik;

				const disabledBtn = !(dirty && isValid);

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
									className={cn(Input, { InputError: errors.developer && touched.developer })}
								/>
								{/*<ErrorMessage name="developer" component="span" className={Errors} />*/}
							</div>

							{items.map((item, index) => (
								<div key={index} className={FormRow}>
									<label htmlFor={item}>{item}</label>
									<div>
										<Field
											name={item}
											id={item}
											className={cn(Input, { InputError: errors[item] && touched[item] })}
										/>
										<ErrorMessage name={item} component="span" className={Errors} />
									</div>
								</div>
							))}
							<Button type={'submit'} disabled={disabledBtn}>
								Save
							</Button>
						</Form>
					</div>
				);
			}}
		</Formik>
	);
};
