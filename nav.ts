import { Action, Block, Text, Icon } from './atoms';
import { Cell } from './controls';
import { ICell } from './types';

export function Nav(title: string, data: ICell[], pages: ICell[]) {
	return Block(
		['Nav', 'View'],
		Block(
			['Header'],
			Action(['Small', 'Primary'], 'showPublish', Icon('up')),
			Action(
				['ProjectBtn', 'Secondary'],
				'showProjects',
				Text(title, ['m14']),
				Icon('unfold', '12', '20'),
			),
			Action(['Small', 'Primary'], 'showUser', Icon('user')),
		),
		Block(
			['Body'],
			Block(
				['BarHeader'],
				Text('Данные', ['m14', 'secondary']),
				Action(['Small'], 'addData', Icon('add')),
			),
			Block(['Cells'], ...data.map((data) => Cell(data))),
			Block(
				['BarHeader'],
				Text('Страницы', ['m14', 'secondary']),
				Action(['Small'], 'addPage', Icon('add')),
			),
			Block(['Cells'], ...pages.map((page) => Cell(page))),
		),
	);
}
export function User() {}
export function Publish() {}
