import { Component } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  taughtClasses = ['Klasa1', 'Klasa2', 'Klasa3'];


}
