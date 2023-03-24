import React from 'react';
import '../../index.css';
import usePageTitle from '../../usePageTitle';

function BookingFacilities() {
  usePageTitle('Booking Facilities | Girton JCR');
  return (
    <div className="BookingFacilities">
      <h1>Booking Facilities</h1>
      <p>
        Girton provides a range of spaces, rooms and facilities bookable by
        students for study, society meetings, events and sports matches.{' '}
      </p>
      <h3>Room & Event Booking</h3>
      <p>
        The following rooms can be booked for events via the{' '}
        <a
          href="https://girtoncollege.wufoo.com/forms/internal-event-booking/"
          target="_blank" rel="noreferrer"
        >
          Internal Event Booking Form
        </a>
        : <br />
        Old Hall, Stanley Library, Dining Hall (The Great Hall), Old Kitchens,
        Old JCR, Chapel Box Room, College Bar, The Reception Room, Fellows&apos;
        Dining Room, Fellows&apos; Drawing Room, Emily Davies Rooms 1 and 2, and the
        Social Hub Meeting Room. More information on some rooms including
        capacities can be found via the{' '}
        <a
          href="https://www.girton.cam.ac.uk/conferencing/conferences/rooms"
          target="_blank" rel="noreferrer"
        >
          Conferencing webpages
        </a>
        .
      </p>
      <p>
        The form is monitored by the{' '}
        <a href="mailto:conferences@girton.cam.ac.uk">Conference Office</a> and
        should be filled in at least one week prior to the event itself. Please
        read all the guidance at the front of the form before filling it out.
      </p>
      <h3>Study Rooms</h3>
      <p>
        Run by the Library, there are a number of rooms in College bookable for
        group and individual study. For more information see the{' '}
        <a
          href="https://www.girton.cam.ac.uk/about-girton/library-archive/library"
          target="_blank" rel="noreferrer"
        >
          Library Page{' '}
        </a>
        on the Main College website.
      </p>
      <p>
        D33, D34 and D35 along the Hyphen corridor between the Library and the
        Chapel can be booked here. Please note room capacities and session
        durations.{' '}
      </p>
      <h3>Sports Pitches</h3>
      <p>
        Sports Pitches can be booked by Girton College members via the{' '}
        <a
          href="https://girtoncollege.wufoo.com/forms/booking-sports-pitches-college-members-only/"
          target="_blank" rel="noreferrer"
        >
          Sports Pitch Booking Form
        </a>
        . Please read the guidance at the front of the form before filling it
        out.
      </p>
      <h3>Swimming Pool</h3>
      <p>
        The Swimming Pool no longer needs booking for use by Girton College
        members only. Key card access can be provided from the Porters&apos; Lodge.
        The maximum capacity is 15 and lone swimming is not allowed as there is
        no lifeguard. For more information and the full Swimming Pool rules
        please see{' '}
        <a
          href="https://www.girton.cam.ac.uk/sports-facilities"
          target="_blank" rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <h3>Weights, Ergo and Multi-Gyms</h3>
      <p>
        Girton is unusual amongst Colleges in having three on-site gymnasiums.
        You will need your University Card to gain access:
      </p>
      <ul>
        <li>The Multi-Gym is open to Girton College members only.</li>
        <li>
          The Ergo Gym is open to the Girton College Boat Club members only.
        </li>
        <li>
          The Weights Gym is open to Girton College members after induction and
          registration.
        </li>
      </ul>
      <p>
        Please note Girton College members that wish to use the Weights Gym must
        undertake an induction with the Head Groundsman before access will be
        granted. In order to apply for a weights gym membership, please complete
        the{' '}
        <a
          href="https://girtoncollege.wufoo.com/forms/weights-gym-application-form/"
          target="_blank" rel="noreferrer"
        >
          online form and medical questionnaire
        </a>
        . Induction sessions are approx. 20-30 minutes long.
      </p>
      <p>
        After completing this, you will be eligible to book gym sessions via the
        Porters&apos; Lodge at the main site (Girton College) and a door card will be
        issued for the booked slot, this card will need to be returned after
        your session. For more information see{' '}
        <a
          href="https://www.girton.cam.ac.uk/sports-facilities"
          target="_blank" rel="noreferrer"
        >
          here
        </a>
        .{' '}
      </p>
      <p>The JCR are currently reviewing the booking system for the gyms.</p>
    </div>
  );
}

export default BookingFacilities;
