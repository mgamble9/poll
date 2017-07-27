import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from "./../user"
import { Poll } from "./../poll"
import { UserService } from "./../user.service"

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  poll: Poll
  poll_id: String
  option_to_update: String

  constructor(private _route: ActivatedRoute, private user_service: UserService, private router: Router) {
    this._route.params.subscribe((param)=>{
      console.log("loaded url... id given is: ", param.poll_id);
      this.poll_id = param.poll_id
    })
  }

  ngOnInit() {
    this.user_service.get_poll_by_id(this.poll_id)
  .then(data => {
    if(data) {
      this.poll = data

      console.log(this.poll)
    } else {
      this.router.navigate(["/dashboard"])
    }
  })
  .catch(err => console.log(err))

  }

  update_poll1() {
    console.log("hey")
    console.log(this.poll_id)
    this.poll.option1.count +=1
    console.log(this.poll)
  }

}
