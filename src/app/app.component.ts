import { Component } from '@angular/core'

@Component({
		selector:'my-app',
		template:`
			<router-outlet></router-outlet>
		`
})

/*<a routerLink='/dashboard'>Dahsboard</a>
<a routerLink='/heroes'>Heroes</a>*/

export class AppComponent {
	title = 'Demo...'
}