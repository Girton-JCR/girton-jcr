import React from 'react';
import '../../index.css';
import usePageTitle from '../../usePageTitle';
import dayGridPlugin from '@fullcalendar/daygrid';
import iCalendarPlugin from '@fullcalendar/icalendar';
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import useWindowDimensions from '../../useWindowDimensions';

function EventsCalendar() {
  usePageTitle('Events Calendar  | Girton JCR');
  const win = useWindowDimensions();

  return (
    <div className="EventsCalendar">
      <h1>Events Calendar</h1>
      {win.width <= 700 && (
        <FullCalendar
          plugins={[listPlugin, iCalendarPlugin]}
          initialView={'listMonth'}
          events={{
            url: 'https://girtonjcr.soc.srcf.net/jcr_calendar.ics',
            format: 'ics',
          }}
          eventColor="#154732"
        />
      )}
      {win.width > 700 && (
        <FullCalendar
          plugins={[dayGridPlugin, iCalendarPlugin]}
          initialView={'dayGridMonth'}
          events={{
            url: 'https://girtonjcr.soc.srcf.net/jcr_calendar.ics',
            format: 'ics',
          }}
          eventColor="#154732"
        />
      )}

      <p>
        This event calendar will be updated before each term. If you have any
        queries or suggestions on events you think the JCR should run for
        undergraduates, please contact the{' '}
        <a href="mailto:jcr-ents@girton.cam.ac.uk">JCR Events Officer</a>.
      </p>
    </div>
  );
}

export default EventsCalendar;
