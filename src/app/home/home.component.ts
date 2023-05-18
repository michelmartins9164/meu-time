import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetCountriesService } from '../services/get-countries.service';
import { Countrie } from '../model/countrie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  listCountries: any = [];
  constructor(
    private router: Router,
    private countrie: GetCountriesService
    ){}
ngOnInit() { 
  if(!localStorage.getItem("token")) {
    this.router.navigate(["/"])
  };

  this.countrie.getCountries(localStorage.getItem("token")).subscribe({
    next: (res) => {
      const data: any = res;
      console.log(res)
      this.listCountries  = data.response;
      console.log(this.listCountries)
    }, error: (error => error)
  })
  
  
}

}
