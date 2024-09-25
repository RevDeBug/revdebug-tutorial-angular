import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module'; 
import { LoggerService, LogLevel } from './services/logger.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, LayoutModule] 
})
export class AppComponent {
  title = 'RevDeBug';
  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
    // Set log level to DEBUG
    this.logger.setLogLevel(LogLevel.OFF);

  }

}


