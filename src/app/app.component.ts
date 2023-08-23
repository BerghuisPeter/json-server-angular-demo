import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  content: Object | undefined;

  constructor(private httpClient: HttpClient) {
    // https://javascript.plainenglish.io/mock-backend-responses-in-angular-320694a515c
  }

  get() {
    this.httpClient.get("http://localhost:3000/pandas")
      .subscribe({
          next: res => this.content = res,
          error: httpError => this.error(httpError)
        }
      );
  }

  post() {
    this.httpClient.post("http://localhost:3000/pandas",
      {
        "name": "test",
        "sex": "F",
        "birthDate": "09/03/2009",
        "currentLocation": "no Where"
      })
      .subscribe({
          next: res => this.content = res,
          error: httpError => this.error(httpError)
        }
      );
  }

  put() {
    this.httpClient.put("http://localhost:3000/pandas/4",
      {
        "name": "YOOOOOO",
        "sex": "F",
        "birthDate": "09/03/2009",
        "currentLocation": "PUT"
      })
      .subscribe({
          next: res => this.content = res,
          error: httpError => this.error(httpError)
        }
      );
  }

  delete() {
    this.httpClient.delete("http://localhost:3000/pandas/4")
      .subscribe({
          next: res => this.content = res,
          error: httpError => this.error(httpError)
        }
      );
  }

  searchByName() {
    this.httpClient.get("http://localhost:3000/pandas?name=Numi")
      .subscribe({
          next: res => this.content = res,
          error: httpError => this.error(httpError)
        }
      );
  }

  proxyGet() {
    this.httpClient.get("/api/pandas")
      .subscribe({
          next: res => this.content = res,
          error: httpError => this.error(httpError)
        }
      );
  }

  private error(error: HttpErrorResponse) {
    this.content = 'ErrorCode: ' + error.status;
  }

}
