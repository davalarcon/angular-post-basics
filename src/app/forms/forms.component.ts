import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  theUser: any = {};
  emailMessage: string = '';
  passwordMessage: string = '';

  constructor() { }

  ngOnInit() {
  }

  handleTheSubmission(){
    this.emailMessage = '';
    //
    if(!this.theUser.fakeEmail){
      this.emailMessage= 'Please provide your email'
    }
    else if (this.theUser.fakeEmail.includes('@')===false){
      this.emailMessage='Please provide an actual email address'
    }
    else{
      this.emailMessage = "";
    }
    if(!this.theUser.fakePassword){
      this.passwordMessage="Please enter Password"
    }
    else if (this.theUser.fakePassword==='swordfish') {
      this.passwordMessage="You dummy! don't use swordfish as your password!"
    }
    else if (this.theUser.fakePassword.length!==3){
      this.passwordMessage="password must be exactly 3 digits long"
    }
    else if (this.theUser.fakePassword !== this.theUser.fakePassword.toLowerCase()){
      this.passwordMessage="don't use caps on your password"
    }
    else if (/[0-9]/.test(this.theUser.fakePassword)===true){
      this.passwordMessage="don't use numbers!"
    }
    else if (/[^0-9A-Za-z]/.test(this.theUser.fakePassword)=== false){
      this.passwordMessage="you need symbols, dummy!"
    }
    else {
      this.passwordMessage="";
    }
  }

}
