import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "./../user"
import { Poll } from "./../poll"
import { UserService } from "./../user.service"

@Component({
  selector: 'app-createpoll',
  templateUrl: './createpoll.component.html',
  styleUrls: ['./createpoll.component.css']
})
export class CreatepollComponent implements OnInit {
  current_user: User
  new_poll: Poll
  constructor(private user_service: UserService, private router: Router) {}

  ngOnInit() {
    this.current_user = new User
    this.new_poll = new Poll
    console.log(this.new_poll)

    this.user_service.get_logged_in_user()
    .then(data => {
      if(data) {
        this.current_user = data
        console.log(this.current_user)
      } else {
        this.router.navigate(["/login"])
      }
    })
    .catch(err => console.log(err))
  }

  add_poll() {
    console.log(this.new_poll)
    this.new_poll.createdBy = this.current_user.name
    this.user_service.add_poll(this.new_poll)
      .then(() => {
          console.log("sending new bucket item to server")
          console.log(this.new_poll.poll)
          this.router.navigate(["/dashboard"])
        })
      .catch(err => console.log(err))
      }




  }
