import { Component, OnInit } from '@angular/core';
import { Plat } from '../models/plat';
import { PlatService } from '../service/plat-sv.service';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css'],
})
export class PlatComponent implements OnInit {
  plats : Plat[]= [];

  displayPlats : Plat[] = [];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  constructor(private platService:PlatService, private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.platService.getPlats().subscribe(
      data => this.plats = data
    );
    this.sortOptions = [
      {label: 'Price High to Low', value: '!_titre'},
      {label: 'Price Low to High', value: '_titre'}
  ];

  this.primengConfig.ripple = true;
  }
  onDelete(id:number){
    this.platService.deletePlat(id).subscribe();
    window.location.reload();
  }

}
