import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from "./Components/home/home.component";
import { HeaderComponent } from "./Components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, MatButtonModule, HomeComponent, RouterOutlet, HeaderComponent]
})
export class AppComponent {
  title = 'Product_Management';
  massage = 'Love';
}
