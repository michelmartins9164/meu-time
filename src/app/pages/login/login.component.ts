import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataAPiService } from 'src/app/services/get-data-api.service';
import { ValidateLoginService } from 'src/app/services/validate-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  valor: string = '';
  statusKey: boolean = false;
  valueInput: string = '';
  constructor(
    private api: GetDataAPiService,
    private validate: ValidateLoginService,
    private router: Router
  ) {}
  ngOnInit(): void {
  }

  ngOnDestroy() {}
  status(event: any) {
    event.target.value !== ''
      ? (this.statusKey = true)
      : (this.statusKey = false);
    this.valueInput = event.target.value;
  }
  teste(event: any) {
    localStorage.setItem('token', `${this.valueInput}`);
    this.validate.validateLogin(this.valueInput).subscribe({
      next: (res) => {
        const active = res.response.subscription.active;
        if (active === true) {
          this.router.navigate(['/home']);
        }
      },
      error: (error) => error,
    });
    event.preventDefault();
  }
}
