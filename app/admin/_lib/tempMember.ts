import { MemberType } from '../_types/member-type';
import { KanbanColumnType } from '../_types/kanban-column-type';
import { ProjectType } from '../_types/project-type';

export const columnList: KanbanColumnType[] = [
	{ id: '1', title: 'Kandydaci' },
	{ id: '2', title: 'Oczekujący na decyzję' },
	{ id: '3', title: 'Uczący się' },
	{ id: '4', title: 'Projekty' },
	{ id: '5', title: 'Stażyści' },
	{ id: '6', title: 'Absolwenci' },
	{ id: '7', title: 'Zatrudnieni' },
];

export const confirmedProjectList: ProjectType[] = [
	{ id: '1', title: 'Nie przypisani' },
	{ id: '2', title: 'ca-tool', technologies: ['Next.js', 'Node.js'] },
	{ id: '3', title: 'food-tool' },
	{ id: '4', title: 'rate-tool' },
	{ id: '5', title: 'bio-tool' },
];

export const memberList: MemberType[] = [
	{
		id: 1,
		columnId: '4',
		fullName: 'Andrzej Nowicki',
		specialization: {
			domain: 'Frontend',
			role: 'React/Next.js',
		},
		note: 'Tekst notatki',
		assignedToProjectId: '1',
		range: 3,
		nameOfUniversityOrOccupation: 'ZST Jasło',
		practicesStart: '2024-02-01',
		practicesEnd: '2024-03-01',
	},
	{
		id: 2,
		columnId: '2',
		fullName: 'Jacek Gregorczyk',
		specialization: {
			domain: 'Frontend',
			role: 'React/Next.js',
		},
		range: 2,
		nameOfUniversityOrOccupation: 'ZST Rzeszów',
		practicesStart: '2024-02-01',
		practicesEnd: '2024-03-01',
	},
	{
		id: 3,
		columnId: '2',
		fullName: 'Przemek Król',
		specialization: {
			domain: 'Frontend',
			role: 'React/Next.js',
		},
		range: 3,
		nameOfUniversityOrOccupation: 'ZST Rzeszów',
		practicesStart: '2024-01-01',
		practicesEnd: '2024-02-01',
	},
	{
		id: 17,
		columnId: '1',
		fullName: 'Przemek Tracz',
		specialization: {
			domain: 'Frontend',
			role: 'Mobile(React Native)',
		},
		range: 2,
		nameOfUniversityOrOccupation: 'ZST Jasło',
		practicesStart: '2024-01-01',
		practicesEnd: '2024-02-01',
	},
	{
		id: 16,
		columnId: '1',
		fullName: 'Przemek Michałowicz',
		specialization: {
			domain: 'Frontend',
			role: 'Mobile(React Native)',
		},
		range: 0,
		nameOfUniversityOrOccupation: 'ZST Jasło',
		practicesStart: '2024-01-01',
		practicesEnd: '2024-02-01',
	},
	{
		id: 18,
		columnId: '1',
		fullName: 'Piotr Kowalski',
		specialization: {
			domain: 'Frontend',
			role: 'Mobile(React Native)',
		},
		range: 3,
		nameOfUniversityOrOccupation: 'ZST Leżajsk',
		practicesStart: '2024-01-01',
		practicesEnd: '2024-02-01',
	},

	{
		id: 4,
		columnId: '1',
		fullName: 'Anna Nowak',
		specialization: {
			domain: 'Backend',
			role: '.Net',
		},
		range: 1,
		nameOfUniversityOrOccupation: 'ZST Leżajsk',
		practicesStart: '2024-01-01',
		practicesEnd: '2024-02-01',
	},
	{
		id: 5,
		columnId: '2',
		fullName: 'Piotr Kowalski',
		specialization: {
			domain: 'Backend',
			role: '.Net',
		},
		range: 1,
	},

	{
		id: 6,
		columnId: '3',
		fullName: 'Katarzyna Kowalczyk',
		specialization: {
			domain: 'Others',
			role: 'Grafika',
		},
		range: 1,
	},
	{
		id: 7,
		columnId: '3',
		fullName: 'Michał Lewandowski',
		specialization: {
			domain: 'Others',
			role: 'Grafika',
		},
		range: 2,
	},
	{
		id: 19,
		columnId: '1',
		fullName: 'Michał Kuternoga',
		specialization: {
			domain: 'Others',
			role: 'Grafika',
		},
		range: 1,
	},
	{
		id: 8,
		columnId: '4',
		fullName: 'Magdalena Nowakowska',
		specialization: {
			domain: 'Backend',
			role: '.Net',
		},
		assignedToProjectId: '1',
		range: 3,
		nameOfUniversityOrOccupation: 'ZST Leżajsk',
		practicesStart: '2024-01-01',
		practicesEnd: '2024-02-01',
	},
	{
		id: 9,
		columnId: '4',
		fullName: 'Grzegorz Dąbrowski',
		specialization: {
			domain: 'Others',
			role: 'UI/UX',
		},
		assignedToProjectId: '1',
		range: 3,
		nameOfUniversityOrOccupation: 'ZST Leżajsk',
		practicesStart: '2024-01-01',
		practicesEnd: '2024-02-01',
	},
	{
		id: 10,
		columnId: '5',
		fullName: 'Karolina Wójcik',
		specialization: {
			domain: 'Frontend',
			role: 'Mobile(React Native)',
		},
		range: 2,
	},
	{
		id: 11,
		columnId: '5',
		fullName: 'Marek Jankowski',
		specialization: {
			domain: 'Backend',
			role: '.Net',
		},
		range: 2,
	},

	{
		id: 12,

		columnId: '6',
		fullName: 'Ewa Malinowska',
		specialization: {
			domain: 'Others',
			role: 'PM',
		},
		range: 2,
	},
	{
		id: 13,
		columnId: '6',
		fullName: 'Adam Nowak',
		specialization: {
			domain: 'Others',
			role: 'Copywriting',
		},
		range: 2,
	},
	{
		id: 14,
		columnId: '6',
		fullName: 'Ewa Malinowska',
		specialization: {
			domain: 'Others',
			role: 'UI/UX',
		},
		range: 0,
	},
	{
		id: 15,
		columnId: '6',
		fullName: 'Adam Nowak',
		specialization: {
			domain: 'Backend',
			role: '.Net',
		},
		range: 0,
	},
	{
		id: 20,
		columnId: '3',
		fullName: 'Adam Małysz',
		specialization: {
			domain: 'Others',
			role: 'Social Media/Marketing',
		},
		range: 0,
	},
	{
		id: 21,
		columnId: '3',
		fullName: 'Adam Mickiewicz',
		specialization: {
			domain: 'Others',
			role: 'Copywriting',
		},
		range: 1,
	},
	{
		id: 22,
		columnId: '1',
		fullName: 'Jacek Placek',
		specialization: {
			domain: 'Backend',
			role: '.Net',
		},
		range: 1,
	},
	{
		id: 23,
		columnId: '2',
		fullName: 'Eugeniusz Geniusz',
		specialization: {
			domain: 'Backend',
			role: 'Node.js',
		},
		range: 1,
	},
	{
		id: 24,
		columnId: '2',
		fullName: 'Irek Mirek',
		specialization: {
			domain: 'Backend',
			role: '.Net',
		},
		range: 2,
	},
	{
		id: 25,
		columnId: '4',
		fullName: 'Józef Betlejem',
		specialization: {
			domain: 'Others',
			role: 'Copywriting',
		},
		assignedToProjectId: '1',
		range: 2,
	},
	{
		id: 26,
		columnId: '4',
		fullName: 'Mikołaj Kopernik',
		specialization: {
			domain: 'Frontend',
			role: 'Mobile(React Native)',
		},
		assignedToProjectId: '1',
		range: 2,
	},
	{
		id: 27,
		columnId: '4',
		fullName: 'Janusz Mikke',
		specialization: {
			domain: 'Others',
			role: 'Social Media/Marketing',
		},
		assignedToProjectId: '1',
		range: 3,
	},
	{
		id: 28,
		columnId: '5',
		fullName: 'Człowiek Bardzodługienazwiskodlacelowsprawdzenia',
		specialization: {
			domain: 'Backend',
			role: 'Node.js',
		},
		range: 3,
	},
];
