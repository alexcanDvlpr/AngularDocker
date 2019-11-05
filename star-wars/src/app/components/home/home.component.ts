import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pikachu: any;

  constructor(private service: PokemonService) { }

  ngOnInit() {
    this.getPikachu();
  }

  async getPikachu() {
    this.pikachu = await this.service.getPikachu();
  }

}
