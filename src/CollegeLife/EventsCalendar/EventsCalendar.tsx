import '../../index.css';
import usePageTitle from '../../usePageTitle';
import dayGridPlugin from '@fullcalendar/daygrid';
import iCalendarPlugin from '@fullcalendar/icalendar';
import FullCalendar from '@fullcalendar/react';
import CalendarSmall from './CalendarSmall';
import useWindowDimensions from '../../useWindowDimensions';
import './EventsCalendar.css';

function CalendarLarge() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, iCalendarPlugin]}
      initialView={'dayGridMonth'}
      events={{
        url: 'https://www.girtonjcr.co.uk/jcr_calendar.ics',
        format: 'ics',
      }}
      //eventColor="#154732"
    />
  );
}

function EventsCalendar() {
  usePageTitle('Events Calendar  | Girton JCR');
  const win = useWindowDimensions();

  return (
    <div className="EventsCalendar">
      <h1>Events Calendar</h1>
      {win.width <= 700 && <CalendarSmall />}
      {win.width > 700 && <CalendarLarge />}
      <p>
        Want to subscribe to this calendar? Use{' '}
        <a href="https://calendar.google.com/calendar/u/1?cid=OTcxMzFmYTYyOGUzNTgwN2U5ZDgzZTU3MTYxMjk4YWJjNmFhMjYxMmQyZjA5ZmIwZGY2ZTc5NThlMDVlYTA5MUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t">
          this link
        </a>{' '}
        to subscribe to the JCR Events Calendar on whichever system you use.
      </p>
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
