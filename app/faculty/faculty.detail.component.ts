import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams, Router, ROUTER_DIRECTIVES } from 'angular2/router';

import {Faculty, FacultyService} from './faculty.service'

@Component({
	selector: 'univ-faculty-detail',
	templateUrl: './app/faculty/faculty.detail.component.html',
	directives: [ROUTER_DIRECTIVES]
	//inputs: ['id']
})
export class FacultyDetailComponent implements OnInit {
  @Input() faculty: Faculty;

  constructor(
    private _routeParams: RouteParams,
    private _router: Router,
    private _service: FacultyService) { }

  ngOnInit() {
    if (!this.faculty) {
      let id = +this._routeParams.get('id');
      this._service.getFaculty(id)
        .subscribe((faculty: Faculty) => this._setEditFaculty(faculty));
    }
  }

  /*
  private _gotoFaculty() {
    let route = ['Vehicles', { id: this.vehicle ? this.vehicle.id : null }]
    this._router.navigate(route);
  }
*/
  private _setEditFaculty(faculty: Faculty) {
    if (faculty) {
      this.faculty = faculty;
    } else {
      //this._gotoVehicles();
    }
  }
}
