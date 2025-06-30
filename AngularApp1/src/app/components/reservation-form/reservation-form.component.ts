import { Component } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { Reservation } from '../../models/reservation.model';

@Component({
  selector: 'app-reservation-form', // Component selector
  templateUrl: './reservation-form.component.html', // Template URL
})
export class ReservationFormComponent { // Component class
  // Predefined areas for reservation
  areas = [
    { id: 1, name: 'Crystal Lake' },
    { id: 2, name: 'Elm Woods' },
    { id: 3, name: 'Woodsboro National Park ' },
    { id: 4, name: 'Timberline Park' }
  ];
// Component properties
  name = '';
  email = '';
  areaId = 1;
  timeSlot = '';
  date = '';
  submitted = false;
 // Component constructor injecting ReservationService
  constructor(private reservationService: ReservationService) {}
// Getter for available time slots from the service
  get timeSlots() {
    return this.reservationService.getTimeSlots();
  }
// Method to handle form submission
  submitForm() {
    const reservation: Reservation = {
      name: this.name,
      email: this.email,
      areaId: this.areaId,
      timeSlot: this.timeSlot,
      date: this.date
    };
    this.reservationService.addReservation(reservation);
    this.submitted = true;
  }
}