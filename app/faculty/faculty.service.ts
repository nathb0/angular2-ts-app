import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

export interface Faculty {
  id: number;
  name: string;
  role: string;
}

@Injectable()
export class FacultyService {
	constructor(private _http: Http) { 
		this.httpUrl = 'api/faculty.json';
	}

	getFacultyList() {
		return this._http.get(this.httpUrl)
			.map((response: Response) => <Faculty[]>response.json().data);			
	}

	getFaculty(id: number) {
		return this.getFacultyList()
		.map(facultyList => facultyList.find(faculty => faculty.id == id));
	}
}
