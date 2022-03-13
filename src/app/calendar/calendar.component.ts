import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

import {first, observable} from "rxjs";
let $: any;
let siteObject: any ;
let date = new Date();

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

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
      // if(i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()){
      //   let todayMonth = ;
      // }
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
    console.log(this.siteObject);
  }
  goToNextMonth(){
    date.setMonth(date.getMonth() + 1);
    this.siteObject = this.changeAll();
    console.log(this.siteObject);
  }

    constructor() {
   }

  ngOnInit(): void {
  }

}
