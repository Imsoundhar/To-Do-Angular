import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(private router: Router, 
    private route: ActivatedRoute) { }

  openGeneralDetails() {
    this.router.navigate(['general'], 
    { relativeTo: this.route });
  }

  openProfileDetails() {
    this.router.navigate(['profile'], 
    { relativeTo: this.route });
  }

  backButton() {
    this.router.navigate([''], 
    { relativeTo: this.route });
  }
}
