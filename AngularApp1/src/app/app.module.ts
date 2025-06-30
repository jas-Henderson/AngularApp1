import { NgModule } from '@angular/core'; // Angular module decorator
import { BrowserModule } from '@angular/platform-browser'; // Required for running Angular in a browser
import { FormsModule } from '@angular/forms'; // Needed for ngModel two-way binding

import { AppComponent } from './app.component'; // Root component
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component'; // Reservation form component

@NgModule({
  declarations: [
    AppComponent, // Declares the main app component
    ReservationFormComponent // Declares our custom reservation form component
  ],
  imports: [
    BrowserModule, // Required for browser rendering
    FormsModule // Enables [(ngModel)] two-way binding in forms
  ],
  providers: [], // No extra providers needed (service is providedIn root)
  bootstrap: [AppComponent] // Bootstraps the root component
})
export class AppModule { }