import { Block, Action, Icon, Text } from './atoms';
import { Field } from './controls';
import { Styles } from './styles/types';
import { IField, IIcons } from './types';

export function Form(
	title: string,
	fields: ({ title: string } & IField)[],
	buttonText: string,
	disabled: boolean,
) {
	Block(
		['Overlay'],
		Block(
			['Form', 'View'],
			Block(
				['Header'],
				Text(title, ['m14', 'secondary']),
				Action(['Small'], 'close', Icon('close')),
			),
			Block(
				['Body'],
				Block(
					['Block'],
					...fields.map(({ title, ...opts }) =>
						Block(['Content'], Text(title, ['m16']), Field(opts)),
					),
				),
				Block(
					['Buttons'],
					Action(
						['AcceptBtn', disabled ? 'Disabled' : 'Accent'],
						'submit',
						Text(buttonText, ['m14']),
					),
				),
			),
		),
	);
}

export function Accept(title: string, desc: string, btnStyle: Styles, btnText: string) {
	Block(
		['Overlay'],
		Block(
			['Accept', 'View'],
			Block(['Block'], Text(title, ['m16']), Text(desc, ['r14', 'secondary'])),
			Block(
				['Buttons'],
				Action(['AcceptBtn', 'Primary'], 'reject', Text('Отмена', ['m14'])),
				Action(['AcceptBtn', btnStyle], 'accept', Text(btnText, ['m14'])),
			),
		),
	);
}

export function Toast(status: IIcons, message: string) {
	Block(['Toast', 'View'], Block(['Small', 'Primary'], Icon(status)), Text(message, ['r16']));
}
