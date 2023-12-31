import { Component, Input } from '@angular/core';
import { MaterialModule } from 'src/app/material/material/material.module';
import { RouterModule } from '@angular/router';
import { MenuItems } from '../../menu-items/menu-items';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule
  ],
  providers: [
    MenuItems
  ]
})
export class SidebarComponent {

  @Input() setMenu!: string;
  name!: string;
  pic!: string;
  role!: string;

  constructor(
    public menuItems: MenuItems,
    private _auth: AuthService
  ) {
    this.getDataUser();
  }

  getDataUser() {
    const data = JSON.parse(this._auth.getDataFromLocalStorage());
    if(data.name.length) {
      this.name = data.name;
    }else {
      this.name = data.email.split("@")[0];
    }
    this.pic = data.thumbnail;
    this.role = data.role.main;
  }

}
