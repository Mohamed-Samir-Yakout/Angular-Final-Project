import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Iusers } from 'src/app/ViewModels/iusers';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  changePass: boolean = false
  changeEmail: boolean = true
  chandeAddress: boolean = false


  constructor(private userData: UserService) {

  }

  ngOnInit(): void {
  }

  changePassFrom(): boolean {
    return this.changePass = true, this.changeEmail = false, this.chandeAddress = false
  }

  changeEmailForm(): boolean {
    return this.changeEmail = true, this.changePass = false, this.chandeAddress = false
  }

  changeAddForm(): boolean {
    return this.chandeAddress = true, this.changeEmail = false, this.changePass = false
  }

}
