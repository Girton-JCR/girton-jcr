import React from 'react';
import '../../index.css';
import usePageTitle from '../../usePageTitle';
import dayGridPlugin from '@fullcalendar/daygrid';
import iCalendarPlugin from '@fullcalendar/icalendar';
import FullCalendar from '@fullcalendar/react';

function EventsCalendar() {
  usePageTitle('Events Calendar  | Girton JCR');
  return (
    <div className="EventsCalendar">
      <h1>Events Calendar</h1>
      <p>
        This event calendar will be updated before each term. If you have any
        queries or suggestions on events you think the JCR should run for
        undergraduates, please contact the{' '}
        <a href="mailto:jcr-ents@girton.cam.ac.uk">JCR Events Officer</a>.
      </p>
      <p>Check back soon to see the events calendar!</p>
      <FullCalendar
        plugins={[dayGridPlugin, iCalendarPlugin]}
        initialView="dayGridMonth"
        events={{
          url: 'https://girtonjcr.soc.srcf.net/jcr_calendar.ics',
          format: 'ics',
        }}
      />
    </div>
  );
}

export default EventsCalendar;
