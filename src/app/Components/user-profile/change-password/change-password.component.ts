import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Iusers } from 'src/app/ViewModels/iusers';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit, OnChanges {
  changePass: Iusers
  confirmNewPass: string;
  oldPass: string
  currentUserData: Iusers = { id: 0, name: "", password: "", email: "" }
  constructor(private user: UserService) {

    this.changePass = { id: 1, name: "Mohamed", password: "", email: "mohamed@osama.com" }
  }
  ngOnChanges(changes: SimpleChanges): void {

  }


  ngOnInit(): void {
    this.user.getUserById(this.changePass.id).subscribe(
      (res) => {
        this.currentUserData = res
      },
      (err) => { console.log(err) }
    )
  }

  changePassword() {

    if (this.oldPass == this.currentUserData.password && this.changePass.password == this.confirmNewPass) {

      this.user.updateUserData(this.currentUserData.id, this.changePass).subscribe(
        (res) => {
          console.log(res)
        },
        (err) => { console.log(err) }
      )
    } else {
      alert('something went wrong')
    }
    this.oldPass = "", this.confirmNewPass = "", this.changePass.password = ""
  }

}
