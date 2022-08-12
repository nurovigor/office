import { buildNodes } from 'redux-nodes';
import { appNode } from './appNode';
import { officeNode } from './officeNode';
import { technicsNode } from './technicsNode';

export default buildNodes({
	appNode,
	officeNode,
	technicsNode
});
