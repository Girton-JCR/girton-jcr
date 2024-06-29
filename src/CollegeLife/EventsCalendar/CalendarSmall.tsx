import iCalendarPlugin from '@fullcalendar/icalendar';
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';

function CalendarSmall () {
  return (
    <FullCalendar
      plugins={[listPlugin, iCalendarPlugin]}
      headerToolbar={{ left: 'title', center: '', right: 'prev,next' }}
      initialView={'listMonth'}
      events={{
        url: '/jcr calendar.ics',
        format: 'ics',
      }}
      eventColor="#154732"
    />
  );
}

export default CalendarSmall;
