import { Injectable } from '@angular/core';
import { Http } from "@angular/http" // added when ready to try sending data to server

import "rxjs"

import { User } from "./user"
import { Poll } from "./poll"

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  login(user: User){ // returns a promise
    return this.http.post("/login", user)
        .map(data => data.json())
        .toPromise()
    }

  update_user(user: User){ // returns a promise
    return this.http.post("/update_user", user)
        .map(data => data.json())
        .toPromise()
    }

  add_poll(poll: Poll){ // returns a promise
    return this.http.post("/add_poll", poll)
        .map(data => data.json())
        .toPromise()
    }
  //
  // get_bucket_item_by_title(bucket_title: String) {
  //   return this.http.post("/get_bucket_item", {title: bucket_title})
  //     .map(data => data.json())
  //     .toPromise()
  // }
  //
  // get_user_by_name(new_user_to_update: User) {
  //   return this.http.post("/get_user_by_name", new_user_to_update)
  //     .map(data => data.json())
  //     .toPromise()
  // }
  //
  get_poll_by_id(poll_id: String) {
    return this.http.post("/get_poll_by_id", {id: poll_id})
      .map(data => data.json())
      .toPromise()
  }
  //
  // get_all_users() {
  //   return this.http.get("/get_all_users")
  //     .map(data => data.json())
  //     .toPromise()
  // }
  //
  get_poll_list() {
    return this.http.get("/get_poll_list")
      .map(data => data.json())
      .toPromise()
  }

  get_logged_in_user() {
    return this.http.get("/get_logged_in_user")
      .map(data => data.json())
      .toPromise()
  }


}
