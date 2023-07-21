import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @ts-ignore
  content: Object;

  constructor(private httpClient: HttpClient) {
  }

  get() {
    this.httpClient.get("http://localhost:3000/api/pandas")
      .subscribe(res => this.content = res);
  }

  post() {
    this.httpClient.post("http://localhost:3000/api/pandas",
      {
        "name": "test",
        "sex": "F",
        "birthDate": "09/03/2009",
        "currentLocation": "no Where"
      })
      .subscribe(res => this.content = res);
  }

  put() {
    this.httpClient.put("http://localhost:3000/api/pandas/4",
      {
        "name": "YOOOOOO",
        "sex": "F",
        "birthDate": "09/03/2009",
        "currentLocation": "PUT"
      })
      .subscribe(res => this.content = res);
  }

  delete() {
    this.httpClient.delete("http://localhost:3000/api/pandas/4")
      .subscribe(res => this.content = res);
  }

  searchByName() {
    this.httpClient.get("http://localhost:3000/api/pandas?name=Numi")
      .subscribe(res => this.content = res);
  }

  proxyGet() {
    this.httpClient.get("http://localhost:3000/api/pandas")
      .subscribe(res => this.content = res);
  }

}
