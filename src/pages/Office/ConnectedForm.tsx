import React from 'react';
import { useAppSelector } from 'src/hooks';
import { FormComponent, SuggestionType } from 'src/components/atoms/Form/FormComponent';

type ConnectedFormProps = {
	closeModal: () => void;
	suggestions: SuggestionType[];
	tableId: string;
};
export const ConnectedForm: React.FC<ConnectedFormProps> = ({
	tableId,
	suggestions,
	closeModal
}) => {
	suggestions.push({ fullName: 'Empty', id: 'null' });
	const table = useAppSelector((state) => state.officeNode.tables[tableId]);
	return <FormComponent table={table} suggestions={suggestions} closeModal={closeModal} />;
};
