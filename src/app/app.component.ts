import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './components/resume/resume.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ResumeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Resume';
}
