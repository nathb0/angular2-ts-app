import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';

bootstrap(AppComponent)
	.then(success => console.log(`Bootstrap with DI success`))
    .catch(error => console.log(error));
;

