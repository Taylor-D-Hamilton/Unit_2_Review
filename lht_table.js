"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author:Taylor Hamilton 
   Date: 2/3/20    

	
*/


var thisDay= new Date("August 30, 2018");
var endDate=thisDay.getTime()+14*24*60*60*1000;
var tableHTML="<table id='eventTable'><caption>UpcomingEvents</caption><tr><th>Date</th><th>Event</th><th>Price</th></tr>";

for(var i=0;i<eventDates.length;i++)
{
   var eventDate=new Date(eventDates[i]);
   var eventDay=eventDate.toLocaleDateString();
   var eventTime=eventDate.toLocaleTimeString();
   if(thisDay<=eventDate&&eventDate<=endDate){
      tableHTML+="<tr><td>"+eventDay+"@"+eventTime+"</td><td>"+eventDescriptions[i]+"</td><td>"+eventPrices[i]+"</td></tr>";
   }
}

tableHTML+="</table>";
document.getElementById('eventList').innerHTML=tableHTML;
