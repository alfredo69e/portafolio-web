import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerBar',
  templateUrl: './headerBar.component.html',
  styleUrls: ['./headerBar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  constructor(private _router: Router) { }

  public onHome() {
    console.log('llegue aca');
    
    this._router.navigate(['./home']);
  }

  ngOnInit() {
  }

}
