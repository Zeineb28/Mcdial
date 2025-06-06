import * as client_hooks from '../../../src/hooks.client.ts';

export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33'),
	() => import('./nodes/34'),
	() => import('./nodes/35'),
	() => import('./nodes/36'),
	() => import('./nodes/37'),
	() => import('./nodes/38'),
	() => import('./nodes/39'),
	() => import('./nodes/40'),
	() => import('./nodes/41'),
	() => import('./nodes/42'),
	() => import('./nodes/43'),
	() => import('./nodes/44'),
	() => import('./nodes/45'),
	() => import('./nodes/46'),
	() => import('./nodes/47'),
	() => import('./nodes/48'),
	() => import('./nodes/49'),
	() => import('./nodes/50'),
	() => import('./nodes/51'),
	() => import('./nodes/52'),
	() => import('./nodes/53'),
	() => import('./nodes/54'),
	() => import('./nodes/55'),
	() => import('./nodes/56'),
	() => import('./nodes/57')
];

export const server_loads = [];

export const dictionary = {
	"/": [4],
	"/admin/carrier": [5,[2]],
	"/admin/conferences": [6,[2]],
	"/admin/login": [7,[2]],
	"/admin/server": [8,[2]],
	"/agent": [9,[3]],
	"/agent/calls/history": [10,[3]],
	"/agent/calls/new": [11,[3]],
	"/agent/dashboard": [12,[3]],
	"/agent/login": [13,[3]],
	"/compagnes/add": [14],
	"/compagnes/auto_dial": [15],
	"/compagnes/copy": [16],
	"/compagnes/detail/[campaign_id]": [17],
	"/compagnes/list_mix/show_list_mix": [18],
	"/compagnes/pause_code": [19],
	"/compagnes/show": [20],
	"/compagnes/statues": [21],
	"/liste/Filedata": [30],
	"/liste/afficherlist": [22],
	"/liste/ajouterListe": [24],
	"/liste/ajouterprospect": [25],
	"/liste/ajouter": [23],
	"/liste/chargerprospect": [26],
	"/liste/corbeille": [27],
	"/liste/details/[list_id]": [28],
	"/liste/dnc": [29],
	"/liste/fileliste/[id]": [31],
	"/liste/list-details/[list_id]": [32],
	"/liste/modifier/[id]": [33],
	"/liste/prospects": [34],
	"/liste/recherchelist": [35],
	"/login": [36],
	"/phone/afficher": [37],
	"/phone/ajouter": [38],
	"/phone/copy": [39],
	"/phone/detail": [40],
	"/rapport/RealTimeReport": [45],
	"/rapport/agent_time_detail": [41],
	"/rapport/export-calls": [42],
	"/rapport/export-leads": [43],
	"/rapport/rapport": [44],
	"/rapport/timeclock-detail": [46],
	"/stats/userStats": [47],
	"/userGroupe/afficher": [48],
	"/userGroupe/ajouter": [49],
	"/userGroupe/bulk_userGroupe": [50],
	"/userGroupe/details": [51],
	"/userGroupe/hourlyStats": [52],
	"/users/add": [53],
	"/users/copy": [54],
	"/users/detail": [55],
	"/users/list": [56],
	"/users/search": [57],
	"/users/stats": [58]
};

export const hooks = {
	handleError: client_hooks.handleError || (({ error }) => { console.error(error) }),
	init: client_hooks.init,
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.svelte';