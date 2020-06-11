import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  title = 'AngularHttpService';
  users: object;
  errorMessage = '';
  constructor(private _userService: UserService) {}

  ngOnInit() {

    this._userService.getUser().subscribe(
      user => {
      this.users = user;   // User data returned form the server
    },
    error => console.log(this.errorMessage = <any>error)); // Error response returned from the server

  }

}
