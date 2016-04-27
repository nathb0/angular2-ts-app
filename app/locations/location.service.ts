import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
//import {map} from 'rxjs/operator/map';

export interface Location {
  id: number;
  city: string;
  dept: any;
}

@Injectable()
export class LocationService {
	constructor(private _http: Http) { 
		this.httpUrl = 'api/locations.json';
	}

	getLocations() {
		return this._http.get(this.httpUrl)
			//.map(this.extractData)
			.map((response: Response) => <Location[]>response.json().data);			
            //.catch(this.handleError);		
	}

	getLocation(id: number) {
		return this.getLocations()
		.map(locations => locations.find(locat => locat.id == id));
	}
}

/*	extractData(response) {
		if (response.status < 200 || response.status >= 300) {
		  throw new Error('Bad response status: ' + response.status);
		}
		let body = response.json();
		return body.data || { };
	}
	
	handleError (error) {
		let errMsg = error.message || 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
*/	
}
