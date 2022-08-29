import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Wrapper, HeaderModal, CloseBtn, Content, Title } from './styles';

type ModalPropsType = {
	title?: string;
	closeModal: () => void;
	children: ReactNode;
};

let portal = document.getElementById('portal');

if (!portal) {
	portal = document.createElement('div');
	portal.setAttribute('id', 'portal');
	document.body.appendChild(portal);
}

export const ModalWindow: React.FC<ModalPropsType> = ({ title, closeModal, children }) => {
	const onCloseHandle = () => {
		closeModal();
	};

	/*useEffect(() => {
		if (isShow) {
			document.body.style.overflow = 'hidden';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	});*/

	return createPortal(
		<>
			<div className={Overlay} onClick={onCloseHandle} />
			<div className={Wrapper}>
				<div className={HeaderModal}>
					<div className={Title}>{title}</div>
					<div data-testid="close-modal" className={CloseBtn} onClick={onCloseHandle} />
				</div>
				<div data-testid="portal" className={Content}>
					{children}
				</div>
			</div>
		</>,
		portal as HTMLElement
	);
};
