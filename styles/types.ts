type fonts = 'm16' | 'm14' | 'r16' | 'r14' | 'fill' | 'accent' | 'secondary' | 'disabled';

type sizes =
	| 'Segment'
	| 'Cell'
	| 'Field'
	| 'Small'
	| 'AcceptBtn'
	| 'RegisterBtn'
	| 'Content'
	| 'Block'
	| 'Cells'
	| 'List'
	| 'Buttons'
	| 'Header';

type styles =
	| 'Accent'
	| 'Danger'
	| 'Primary'
	| 'Secondary'
	| 'Disabled'
	| 'View'
	| 'Control'
	| 'activeLeft'
	| 'activeBottom';

type blocks =
	| 'Overlay'
	| 'Accept'
	| 'Form'
	| 'Body'
	| 'Window'
	| 'WindowBody'
	| 'Toast'
	| 'Nav'
	| 'ProjectBtn'
	| 'BarHeader';

export type Styles = fonts | sizes | styles | blocks;
