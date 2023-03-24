import React from 'react';
import '../../index.css';
import usePageTitle from '../../usePageTitle';

function EventsCalendar() {
  usePageTitle('Events Calendar  | Girton JCR');
  return (
    <div className="EventsCalendar">
      <h1>Events Calendar</h1>
      <p>
        This event calendar will be updated before each term. If you have any
        queries or suggestions on events you think the JCR should run for
        undergraduates, please contact the{' '}
        <a href="https://www.girtonjcr.co.uk/meet-the-committee">
          JCR Events Officer
        </a>
        .
      </p>
      <p>Check back soon to see the events calendar!</p>
    </div>
  );
}

export default EventsCalendar;
