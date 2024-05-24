import { icons } from './icons';
import { Styles } from './styles/types';
import { INode, IIcons, IAction } from './types';

export function Action(style: Styles[], action: IAction, ...node: INode[]) {
	const div = document.createElement('div');
	div.classList.add('block', ...style);
	div.append(...node);
	return div;
}

export function Block(style: Styles[], ...node: INode[]) {
	const div = document.createElement('div');
	div.classList.add('block', ...style);
	div.append(...node);
	return div;
}

export function Icon(icon: IIcons, width: string = '20', height: string = '20') {
	const xmlns = 'http://www.w3.org/2000/svg';
	const svg = document.createElementNS(xmlns, 'svg');
	const path = document.createElementNS(xmlns, 'path');
	svg.setAttributeNS(null, 'viewBox', `0 0 ${width} ${height}`);
	svg.setAttributeNS(null, 'width', width);
	svg.setAttributeNS(null, 'height', height);
	path.setAttributeNS(null, 'd', icons[icon]);
	path.setAttributeNS(null, 'fill', 'var(--primary)');
	svg.append(path);
	return svg;
}

export function Text(text: string, style: Styles[]) {
	const span = document.createElement('span');
	span.classList.add(...style);
	span.textContent = text;
	return span;
}
