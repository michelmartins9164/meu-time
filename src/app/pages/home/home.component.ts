import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetCountriesService } from '../../services/get-countries.service';
import { Countrie } from '../../model/countrie';
import { GetCountryForNameService } from 'src/app/services/get-country-for-name.service';
import { League } from 'src/app/model/league';
import { GetSeasonService } from 'src/app/services/get-season.service';
import { Seasons } from 'src/app/model/seasons';
import { GetTeamService } from 'src/app/services/get-team.service';
import { GetStaticsService } from 'src/app/services/get-statics.service';
import { Team } from 'src/app/model/team';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  listCountries: Countrie[] = [];
  selectForOptionCountrie: string = '';
  selectForOptionSeason: string = '';
  selectForTeam: string = '';
  selectForOptionLeague: string = '';
  listSeasons: Seasons[] = [];
  listLeagues: League[] = [];
  idLeague: number = 0;
  listTeams: Team[] = [];
  validateCountrie = false;
  validateLeagues = false;
  constructor(
    private router: Router,
    private countrie: GetCountriesService,
    private country: GetCountryForNameService,
    private season: GetSeasonService,
    private team: GetTeamService,
    private staticTeam: GetStaticsService
  ) {}

  back() {
    this.validateLeagues = false;
  }

  selectCountrie() {
    this.validateCountrie = true
  }

  async buscar() {
    this.country.geCountryForName().subscribe({
      next: (res) => {
        this.listLeagues = Object.values(res.response);
    
          this.validateLeagues = true;
    
      },
    });
  }

  getStatistics() {
    this.staticTeam
      .getStatics(this.idLeague, this.selectForOptionSeason, this.selectForTeam)
      .subscribe({
        next: (res) => {
          this.router.navigate(['/statistics'], {
            queryParams: {
              league: this.idLeague,
              season: this.selectForOptionSeason,
              team: this.selectForTeam,
            },
          });
        },
      });
  }

  changeTeams() {
    this.team.getTeam(this.selectForOptionSeason, this.idLeague).subscribe({
      next: (res) => {
        this.listTeams = Object.values(res.response);
      },
    });
  }

  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/']);
    }
    this.season.geSeason().subscribe({
      next: (res) => {
        this.listSeasons = Object.values(res.response);
      },
    });

    this.countrie.getCountries(localStorage.getItem('token')).subscribe({
      next: (res) => {
        this.listCountries = Object.values(res.response);
      },
      error: (error) => error,
    });
  }
}
