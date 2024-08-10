import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { AboutComponent } from "./components/about/about.component";
import { FeatureComponent } from "./components/feature/feature.component";
import { ToursComponent } from "./components/tours/tours.component";
import { StoriesComponent } from "./components/stories/stories.component";
import { BookingComponent } from "./components/booking/booking.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { PopupComponent } from "./components/popup/popup.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AboutComponent, FeatureComponent, ToursComponent, StoriesComponent, BookingComponent, FooterComponent, NavigationComponent, PopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '1-natours';
}
