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
  valueInput: string = "";
  constructor(
    private api: GetDataAPiService,
    private validate: ValidateLoginService,
    private router: Router
  ) {}
  ngOnInit(): void {
    /*  this.api.getData(this.valor).subscribe({
        next: res => console.log(res),
        error: error => console.log(error)
      }) 
      console.log(teste) */
    }
    
    ngOnDestroy() {}
    status(event: any) {
      console.log();
      event.target.value !== '' ? (this.statusKey = true) : (this.statusKey = false);
      this.valueInput =   event.target.value;
      
    }
    teste(event: any) {
      localStorage.setItem('token', `${this.valueInput}`);
    this.validate.validateLogin(this.valor).subscribe({
      next: (res) => {
        /* if(res.response.subscription.active === true) {
      this.router.navigate(["/home"]) 
    } */
        console.log(res);
        if (res.subscription.active === true) {
          this.router.navigate(['/home']);
        } 
        console.log(res.subscription.active);
      },
      error: (error) => error,
    });
    event.preventDefault();
  }
}
