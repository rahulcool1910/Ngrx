import { LoginAction, LogoutAction } from "./../auth.actions";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Store } from "@ngrx/store";

import { AuthService } from "../auth.service";
import { tap } from "rxjs/operators";
import { noop } from "rxjs";
import { Router } from "@angular/router";
import { AppState } from "../../reducers";


@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  @ViewChild("button", { static: true }) button: HTMLButtonElement;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private http: HttpClient,
    private store: Store<AppState>
  ) {
    this.form = fb.group({
      email: ["test@angular-university.io", [Validators.required]],
      password: ["test", [Validators.required]],
    });
  }

  ngOnInit() {
    console.log(this.button);
  }

  login() {
    this.auth.login("test@angular-university.io", "test").subscribe((x) => {
      if (x) {
        this.store.dispatch(new LogoutAction());
        this.store.dispatch(new LoginAction(x));
        this.router.navigate(["courses"]);
      }
      else{
      }
    });
  }
}
