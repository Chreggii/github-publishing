import { Component } from '@angular/core';

import { environment } from '../environments/environment.onprem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    console.log(environment.envVar.test);
  }

  title = 'github-publishing';
}
