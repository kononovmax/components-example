import { icons } from './icons';

export type IIcons = keyof typeof icons;
export type INode = HTMLSpanElement | SVGSVGElement | HTMLDivElement;
export type IControl = ICell | IField | ISegment | IButton;

export interface ISmartIcon {
	bg: string;
	border: string;
	isText?: boolean;
	child: string;
}

export interface ICell {
	icon: ISmartIcon;
	title?: string;
	description?: string;
	action: IAction;
	opts?: ICell[] | ICell;
}

export interface IButton {
	icon: IIcons;
	action: IAction;
	opts?: ICell[];
}

export interface ISegment {
	icon: ISmartIcon[];
	active: number;
}

export interface IField {
	value: string;
	placeholder?: string;
}

export type IAction =
	| {
			type: 'context';
			payload: ICell[];
	  }
	| {
			type: 'setActive';
			payload: number;
	  }
	| 'close'
	| 'submit'
	| 'accept'
	| 'showPublish'
	| 'showProjects'
	| 'showUser'
	| 'reject'
	| 'addPage'
	| 'addData';
