import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{

  newAppointmenttitle : string = "";
  newAppointmentdate : Date = new Date();

  appointments : Appointment[] = []

  ngOnInit(): void {
    let savedappointments = localStorage.getItem("appointments")

    this.appointments = savedappointments ? JSON.parse(savedappointments) : []
  }

  addAppointment(){
    if(this.newAppointmenttitle.trim().length && this.newAppointmentdate){
      let newAppointment : Appointment = {
        id: 1,
        title: this.newAppointmenttitle,
        date: this.newAppointmentdate
      }

      this.appointments.push(newAppointment)

      this.newAppointmenttitle = " ";
      this.newAppointmentdate = new Date();

      localStorage.setItem("appointments", JSON.stringify(this.appointments))
    }
  }

  deleteAppointment(index : number){
    this.appointments.splice(index, 1)

  }

}
