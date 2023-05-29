import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';
import { tap } from 'rxjs';
import { Player } from 'src/app/model/player';
import { GetStaticsService } from 'src/app/services/get-statics.service';
import { StatisticsTeamService } from 'src/app/services/statistics-team.service';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent {
  productId: any = '';
  league = 0;
  season = 0;
  team = 0;
  players: Player[] = [];
  filterPLayer = this.players;
  playerId: any[] = [];
  pageData: any[] = [];
  previous: number = 0;
  next: number = 10;
  dataLength: any[] = [];
  numberPage: number = 0;
  tableData: any[] = [];
  wins: any[] = [];
  loses: any[] = [];
  draws: any[] = [];
  playeds: any[] = [];
  formation: any[] = [];
  dataGoals: any[] = [];
  loadedGoalsFor: any[] = [];
  loadedGoalsAgainst: any[] = [];
  show: number = 0;
  showGoals: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private statisticsTeam: StatisticsTeamService,
    private statistics: GetStaticsService
  ) {}

  show1() {
    this.show = 1;
    this.showGoals = true;
  }
  show2() {
    this.show = 2;
    this.showGoals = false;
  }
  show3() {
    this.show = 3;
    this.showGoals = false;
  }
  show4() {
    this.show = 4;
    this.showGoals = false;
  }

  
  @ViewChild('meuCanvas', { static: true })
  elemento!: ElementRef;
  
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.league = params['league'];
      this.season = params['season'];
      this.team = params['team'];
    });
    
    this.statisticsTeam
      .getStatisticsTeam(this.league, this.season, this.team)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.players = Object.values(res.response);
          this.pageData = this.players;
          this.pageData.slice(0, 10);
          this.numberPage = this.players.length / 10;
          for (let i = 0; i <= this.numberPage; i++) {
            this.dataLength.push(i);
          }
          this.dataLength.shift();
        },
      });

    this.statistics
      .getStatics(this.league, this.season, this.team)
      .pipe(
        tap((res) => {
          this.playeds = Object.values(res.response.fixtures.played);
          this.wins = Object.values(res.response.fixtures.wins);
          this.loses = Object.values(res.response.fixtures.loses);
          this.draws = Object.values(res.response.fixtures.draws);
          this.formation = Object.values(res.response.lineups);
          Object.values(res.response.goals.for.minute).map((i: any) => {
            this.loadedGoalsFor.push(i.total);
          });
          Object.values(res.response.goals.against.minute).map((i: any) => {
            this.loadedGoalsAgainst.push(i.total);
          });

          new Chart(this.elemento.nativeElement, {
            type: 'line',
            data: {
              labels: [
                '0-15',
                '16-30',
                '31-45',
                '46-60',
                '61-75',
                '76-90',
                '91-105',
                '106-120',
              ],
              datasets: [
                {
                  label: 'Gols Marcados',
                  data: this.loadedGoalsFor,
                  borderColor: '#00FF00',
                  fill: false,
                },
                {
                  label: 'Gols Sofridos',
                  data: this.loadedGoalsAgainst,
                  borderColor: 'red',
                  fill: false,
                },
              ],
            },
          }); 
        })
      )
      .subscribe();
  }
}
