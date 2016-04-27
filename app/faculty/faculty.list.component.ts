import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import {Faculty, FacultyService} from './faculty.service'

@Component({
	selector: 'univ-faculty-list',
	templateUrl: './app/faculty/faculty.list.component.html',
	directives: [ROUTER_DIRECTIVES]
})
export class FacultyListComponent implements OnInit {
  facultyList: Faculty[];

  constructor(private _service: FacultyService) { }

  ngOnInit() {
    this.facultyList = [];
	this._service.getFacultyList()
		.subscribe(facultyList => this.facultyList = facultyList);
	}
}
