import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation.model'; // Import the Reservation model interface

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  // Array to hold reservations
  private reservations: Reservation[] = [];
 // Method to add a reservation
  addReservation(res: Reservation) {
    this.reservations.push(res);
  }
 // Method to get all reservations
  getReservations(): Reservation[] {
    return this.reservations;
  }
// Method to get available time slots
  getTimeSlots(): string[] {
    return [
      '09:00 - 12:00',
      '12:00 - 15:00',
      '15:00 - 18:00',
    ];
  }
}