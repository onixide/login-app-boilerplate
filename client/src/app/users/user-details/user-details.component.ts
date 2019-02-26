import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: User;
  invalidUser: Boolean = false;

  constructor(
    // private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe(res => {
      if (res.user.error) {
        console.log(res.user.error.message);
        this.invalidUser = res.user.error;
      }
      console.log(res.user);
      this.user = res.user;
    });
  }
}
