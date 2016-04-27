import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import {FacultyService} from './faculty.service'
import {FacultyDetailComponent} from './faculty.detail.component'
import {FacultyListComponent} from './faculty.list.component'

@Component({
	selector: 'univ-faculty-root',
	template: `
		<router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/', name: 'FacultyList', component: FacultyListComponent, useAsDefault: true },
	{ path: '/:id', name: 'FacultyDetail', component: FacultyDetailComponent }
])
export class FacultyComponent { }
