import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
})
export class TipsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(page) {
    this.router.navigateByUrl(page);
  }

}
