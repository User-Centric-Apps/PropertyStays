import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';
import { WpapiService } from '../services/wpapi.service';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss']
})
export class FeedbackPage implements OnInit {
  hasSent = false;
  name: any = '';
  email: any = '';
  feedbacks: any = '';

  public feedForm: FormGroup;

  constructor(
    private wpApiService: WpapiService,
    private navCtrl: NavController,
    private authService: AuthService,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.checkLogin();
    this.feedForm = this.formBuilder.group({
      name: [this.name, [Validators.required, Validators.minLength(3)]],
      email: [this.email, [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
    this.authService.authenticationState.subscribe((state: any) => {
      console.log(state);
      if (state) {
        console.log('User Data', this.authService.userData);
        this.feedForm.patchValue({
          name: this.authService.userData.user_display_name,
          email: this.authService.userData.email
        });
      }
    });
  }

  async checkLogin() {
    await this.authService.checkToken().then(() => {
      if (this.authService.authenticationState.value) {
        this.authService.getUserData2().then((data:any) => {
          const userData = data;
          console.log('any');
          console.log(userData);
          this.name = userData['user_display_name'];
          this.email = userData['email'];
        });
      }
    });
  }

  sendFeedback() {
    const formData = this.feedForm.value;
    console.log(formData);
    // this.wpApiService.sendFeedback(formData).subscribe(res => {
    //   console.log(res);
    // });
    this.wpApiService.sendFeedback(formData).subscribe((data:any) => {
      let sdata = data;
      this.feedbacks = sdata.data;
      if (this.feedbacks.status === 1) {
        this.hasSent = true;
      }
      console.log(data.data.status);
    });
  }

  goBack() {
    this.navCtrl.back();
  }
}
