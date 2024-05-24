import { Block, Text, Icon, Action } from './atoms';
import { ISmartIcon, IIcons, ICell, ISegment, IField } from './types';
import { Styles } from './styles/types';

export function Segment({ icon, active }: ISegment) {
	return Block(
		['Segment', 'Control'],
		...icon.map((icon, index) => {
			const styles: Styles[] = ['Small'];
			if (active === index) styles.push('activeBottom', 'Primary');
			return Action(styles, { type: 'setActive', payload: index }, SmartIcon(icon));
		}),
	);
}

export function Cell(
	{ title, action, icon, opts }: ICell,
	style: Styles = 'Secondary',
	active?: boolean,
) {
	const styles: Styles[] = ['Cell', style];
	if (active) styles.push('activeLeft');

	const cell = Action(styles, action, SmartIcon(icon), Text(title || '', ['r14', 'fill']));

	opts &&
		cell.append(
			Array.isArray(opts)
				? Action(['Small', 'Primary'], { type: 'context', payload: opts }, Icon('more'))
				: Action(['Small', 'Primary'], opts.action, Icon(opts.icon.child as IIcons)),
		);

	return cell;
}

export function Field({ value, placeholder }: IField) {
	const input = document.createElement('input');
	input.classList.add('Field');
	input.placeholder = placeholder || '';
	input.value = value;
	return input;
}

function SmartIcon({ isText, child, bg, border }: ISmartIcon) {
	const elem = Block(['Small'], isText ? Text(child, ['m14']) : Icon(child as IIcons));
	elem.style.background = bg;
	elem.style.border = border;
	return elem;
}
