import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Roundtable provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class RoundtableProvider {
  data: any;

  public message: any = "I'm new here";

  constructor(public http: Http) {
    this.data = null;
  }

  setMessage(message) {
    this.message = message;
    console.log(message);
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('http://localhost:3000/roundtables.json')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }




  findAll() {
    console.log('entered');

    var response = this.http.get('http://localhost:3000/roundtables.json')
      .map(res => res.json());
    console.log(response);
     return response;

  }

}
