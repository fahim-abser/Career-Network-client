import FullCalendar from '@fullcalendar/react'
import React from 'react'
import dayGridPlugin from '@fullcalendar/daygrid'

function Holiday() {
    
  return (
    <div>
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth"
        ></FullCalendar>
    </div>
  )
}

export default Holiday