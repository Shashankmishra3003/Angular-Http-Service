import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  errorMessage = '';
  user:any = {};
  constructor(private _userService:UserService, private _route: ActivatedRoute) {
    this._route.params.subscribe(
                      params => {
                        this._userService.getUserById(params['id'])
                                                .subscribe(
                                                  user => this.user = user ,
                                                  error => console.log(this.errorMessage = <any>error));
                      });

    // this._route.params.subscribe(
    //               params => console.log(params)
    // );
   }

  ngOnInit(): void {

  }

}
