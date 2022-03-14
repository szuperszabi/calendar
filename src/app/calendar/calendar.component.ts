import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

let note: any;
let siteObject: any ;
let date = new Date();
let notesArray:any = [];
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  note = '';
  noteAdded = '';
  onSubmit(f: NgForm) {
    let day = new Date(f.value.currentDay);
    let idForBullet =day.getFullYear().toString()
      +'-'+(day.getMonth()+1).toString()
      +'-'+day.getDate().toString();
    f.value.id = idForBullet

    notesArray.push(f.value);
    localStorage.setItem(idForBullet, f.value.noteAdded);
    const modalClose = <HTMLInputElement>document.getElementById('closeModal');
    modalClose.click();


  }

  hasClassCircle(year:any, month: any, day: any){
    for (let a in localStorage) {
      if(a === year+'-'+month+'-'+day){
        return true;
      }
    }return false;
  }

  changeAll(){
    date.setDate(1);
    const month = date.getMonth();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const year = date.getFullYear();
    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();

    let daysOfThiMonth:any = [];
    for (let i=1; i<=lastDay; i++){

      daysOfThiMonth.push(i);
    }

    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();
    const nextDays = 7 - lastDayIndex - 1;
    const firstDayIndex = date.getDay();

    let previousMonthDays:any = [];
    for (let i = firstDayIndex; i > 0; i --){
      previousMonthDays.push(prevLastDay - i + 1);
    }

    let nextMonthDays:any = [];
    for (let i = 1; i <= nextDays; i++){
      nextMonthDays.push(i);
    }

    siteObject = {
      'date'              : new Date(),
      'month'             : month,
      'year'              : year,
      'lastDay'           : lastDay,
      'currentMonth'      : months[month],
      'currentDay'        : new Date().toDateString(),
      'daysOfThiMonth'    : daysOfThiMonth,
      'previousMonthDays' : previousMonthDays,
      'nextMonthDays'     : nextMonthDays
    };

return siteObject;
  }

  siteObject        = this.changeAll();

  goToPreviousMonth(){
    date.setMonth(date.getMonth() - 1);
    this.siteObject = this.changeAll();
    this.siteObject.currentDay = date.toDateString();
  }
  goToNextMonth(){
    date.setMonth(date.getMonth() + 1);
    this.siteObject = this.changeAll();
    this.siteObject.currentDay = date.toDateString();

  }

  setDateForClick(dayNumber: any ,monthType:string){
    let textArea: any = <HTMLInputElement>document.getElementById('message-text');
    if(monthType === 'pre'){
      this.siteObject.currentDay = new Date(date.getFullYear().toString()+'-'+(date.getMonth()).toString()+'-'+dayNumber.innerText ).toDateString();
      for (let a in localStorage) {
        if(a === date.getFullYear().toString()+'-'+(date.getMonth()).toString()+'-'+dayNumber.innerText){
          let text = localStorage.getItem(a);
          textArea.value = text;
          break;
        }
        else{
          textArea.value = '';
        }
      }
    }
    else if (monthType === 'next' ){
      this.siteObject.currentDay = new Date(date.getFullYear().toString()+'-'+(date.getMonth()+2).toString()+'-'+dayNumber.innerText ).toDateString();
      for (let a in localStorage) {
        if(a === date.getFullYear().toString()+'-'+(date.getMonth()+2).toString()+'-'+dayNumber.innerText){
          let text = localStorage.getItem(a);
          textArea.value = text;
          break;
        }
        else{
          textArea.value = '';
        }
      }
    }
    else{
      this.siteObject.currentDay = new Date(date.getFullYear().toString()+'-'+(date.getMonth()+1).toString()+'-'+dayNumber.innerText ).toDateString();
      for (let a in localStorage) {
        if(a === date.getFullYear().toString()+'-'+(date.getMonth()+1).toString()+'-'+dayNumber.innerText){
          let text = localStorage.getItem(a);
          textArea.value = text;
          break;
        }
        else{
          textArea.value = '';
        }
      }
    }
  }

    constructor() {
   }

  ngOnInit(): void {
  }

}
