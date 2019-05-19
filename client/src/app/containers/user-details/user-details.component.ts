import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from 'src/app/models/user.model';

import {UsersService} from '../users/users.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
    user: User;
    editedUser: any = {_id: '', password: ''};
    invalidUser: any;
    editing = false;
    userDetailsForm: FormGroup;
    error: string;
    changePassword = false;
    showMenu = true;


    constructor(
        // private recipeService: RecipeService,
        private route: ActivatedRoute,
        private router: Router,
        private usersService: UsersService
    ) {
    }

    // TODO zrobić tutaj z errorCatch z resolvera i w drugim to samo
    ngOnInit() {
        this.route.data.subscribe(
            res => {
                console.log(res);
                if (res.user.error) {
                    this.invalidUser = res.user.error;
                    console.log(this.invalidUser.message);
                } else {
                }
                this.user = res.user;
            },
            err => {
                console.log('z error ');
                console.log(err);
            }
        );
        this.createForm();
    }

    createForm() {
        this.userDetailsForm = new FormGroup({
            userPassword: new FormControl({value: '', disabled: true})
        });
    }

    onDelete() {
        this.usersService.removeUser(this.user).subscribe(
            () => this.router.navigate(['/users']),
            err => {
                console.log(err);
                this.error = err.error.msg;
            }
        );
    }

    onEdit() {
        this.editing = !this.editing;
        this.showMenu = false;

        if (this.editing) {
            this.userDetailsForm.get('userPassword').enable();
        } else {
            this.userDetailsForm.get('userPassword').disable();
        }
    }

    onCancel() {
        this.changePassword = false;
        this.editing = false;
        this.showMenu = true;
        this.editedUser.password = '';
    }

    // onSubmit() {
    //     this.editedUser._id = this.user._id;
    //     this.editedUser.password = this.userDetailsForm.get('userPassword').value;
    //     this.usersService.editUser(this.editedUser).subscribe(
    //         () => {
    //             this.router.navigate([`users`]);
    //         },
    //         err => {
    //             console.log(err);
    //             this.error = err.error.msg;
    //         }
    //     );
    // }

    onChangePassword() {
        this.changePassword = !this.changePassword;
        this.createForm();
        this.showMenu = false;

    }

    onPasswordSubmit() {
        this.editedUser._id = this.user._id;
        this.editedUser.password = this.userDetailsForm.get('userPassword').value;
        this.usersService.editUser(this.editedUser).subscribe(
            () => {
                this.router.navigate([`users`, `${this.user._id}`]);
            },
            err => {
                console.log(err);
                this.error = err.error.msg;
            }
        );
        this.showMenu = true;
    }
}
