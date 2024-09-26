import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import config from '../../config';

function CalendarSmall () {
  return (
    <FullCalendar
      plugins={[listPlugin, googleCalendarPlugin]}
      headerToolbar={{ left: 'title', center: '', right: 'prev,next' }}
      initialView={'listMonth'}
      googleCalendarApiKey={config.GOOGLE_KEY}
      events={{
        googleCalendarId: '97131fa628e35807e9d83e57161298abc6aa2612d2f09fb0df6e7958e05ea091@group.calendar.google.com'
      }}
      eventColor="#154732"
    />
  );
}

export default CalendarSmall;
