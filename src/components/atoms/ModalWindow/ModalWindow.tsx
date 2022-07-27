import React, { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Overlay, Wrapper, HeaderModal, CloseBtn, Content, Title } from './styles';

type ModalPropsType = {
	isShow: boolean;
	title: string;
	closeModal: () => void;
	children: ReactNode;
};

export const ModalWindow: React.FC<ModalPropsType> = ({ isShow, title, closeModal, children }) => {
	const onCloseHandle = () => {
		closeModal();
	};

	useEffect(() => {
		if (isShow) {
			document.body.style.overflow = 'hidden';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	});

	if (!isShow) {
		return null;
	}
	return ReactDOM.createPortal(
		<>
			<div className={Overlay} onClick={onCloseHandle} />
			<div className={Wrapper}>
				<div className={HeaderModal}>
					<div className={Title}>{title}</div>
					<div className={CloseBtn} onClick={onCloseHandle}></div>
				</div>
				<div className={Content}>{children}</div>
			</div>
		</>,
		document.getElementById('portal') as HTMLElement
	);
};
