import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Client } from './models/Client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front-capgemini';
  clients: Client[] = [];
  a = ''
  textdesc= 'Selecione um caso de uso para visualizar a descrição aqui.'
  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.getAll().subscribe(response => {
      this.clients = response;
    })
  }


  teste(aa: Client) {
    this.a =  aa.title
    this.textdesc = aa.description
  }

}
