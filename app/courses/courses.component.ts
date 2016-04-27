import { Component, EventEmitter, Input, OnInit, Output } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import {Course, CourseService} from './course.service'
import {CourseComponent} from './course.component'

@Component({
	selector: 'univ-courses',
	//inputs: ['courseId'],
	//outputs: ['changed'],
	//template: '<h1> Hello Courses</h1>'  	  
	templateUrl: './app/courses/courses.component.html',
	directives: [CourseComponent]
})
export class CoursesComponent implements OnInit {
	@Output() changed = new EventEmitter<Course>();
	@Input() storyId: number;
	courses: Course[];
	selectedCourse: Course;
	
	constructor(private _service: CourseService) { }

	ngOnInit() { 
        this.courses = [];
		this.getCourses(); 
	}

	getCourses() {
		this._service.getCourses()
			.subscribe(
				courses => this.courses = courses,
				error =>  this.errorMessage = error
			);
	}
	
	select(selectedCourse) {
		this.selectedCourse = selectedCourse;
		this.changed.emit(selectedCourse);
	}	    	
}