import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

export interface Course {
  id: number;
  name: string;
  credits: string;
}

@Injectable()
export class CourseService {
	constructor(private _http: Http) { 
		this.httpUrl = 'api/courses.json';
	}

	getCourses() {
		return this._http.get(this.httpUrl)
			.map((response: Response) => <Course[]>response.json().data);			
	}

	getCourse(id: number) {
		return this.getCourses()
		.map(courses => courses.find(course => course.id == id));
	}
}
