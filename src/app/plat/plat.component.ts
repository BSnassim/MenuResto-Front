import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatService } from '../service/plat-sv.service';
import { Plat } from './plat';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {
  plats : Plat[]= [];

  constructor(private platService : PlatService, private route:Router ) {
  }

  ngOnInit(): void {
    this.platService.getPlats().subscribe(
      data => this.plats = data
    );
  }
  onDelete(id:number){
    this.platService.deletePlat(id).subscribe();
    window.location.reload();
  }

}
