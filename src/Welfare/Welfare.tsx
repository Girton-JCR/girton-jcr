import React from 'react';
import '../index.css';
import usePageTitle from '../usePageTitle';
import { Link } from 'react-router-dom';

function Welfare() {
  usePageTitle('Welfare | Girton JCR');
  return (
    <div className="Welfare">
      <h1>Welfare Resources</h1>
      <p>
        Supporting the welfare of undergrads during their time at Girton is a
        priority for the JCR Committee. We support College who provide a number
        of services and resources for students.
      </p>
      <p>
        Your first ports of call for seeking support, guidance and information
        are your{' '}
        <a
          href="https://www.girton.cam.ac.uk/college-members/student-information/college-tutors"
          target="_blank"
          rel="noreferrer"
        >
          Tutor
        </a>
        , your Director of Studies , the{' '}
        <a href="mailto:senior.tutor@girton.cam.ac.uk">Senior Tutor</a> and the{' '}
        <a href="mailto:nurses@girton.cam.ac.uk">College Nurses</a>.
      </p>
      <p>
        We also have a{' '}
        <a
          href="https://www.counselling.cam.ac.uk/cbccouns/girton"
          target="_blank"
          rel="noreferrer"
        >
          College Counsellor
        </a>
        , as well as the{' '}
        <a href="maito:jcr-welfare@girton.cam.ac.uk">JCR Welfare Officers</a>.
      </p>
      <p>
        The Porters are contactable 24/7 both in person and on the phone:
        +44(0)1223 338999 (College); +44(0)1223 760021 (Swirles Court).
      </p>
      <p>
        The JCR Welfare Officers have also compiled a{' '}
        <a
          href="https://docs.google.com/document/d/1OBlxA0SkuzN2qt5A9nx9QP_7ds77M-XUqkECy8RuQtw/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Welfare Directory
        </a>{' '}
        which is a compilation of some of the most important resources to refer
        to for certain welfare issues. It is regularly updated and includes full
        details of College, university and national resources.
      </p>
      <p>
        The College also has a dedicated{' '}
        <a
          href="https://www.girton.cam.ac.uk/life-girton/welfare-support"
          target="_blank"
          rel="noreferrer"
        >
          Welfare Support
        </a>{' '}
        page as well as more information about the{' '}
        <a
          href="https://www.girton.cam.ac.uk/college-members/student-information/health-centre"
          target="_blank"
          rel="noreferrer"
        >
          College Health & Welfare Centre
        </a>
        .
      </p>
      <h3>Sexual Health</h3>
      <p>
        The JCR Welfare Officers are also responsible for supporting the
        provision of sexual health supplies in college. Free sexual health
        supplies can be found outside the Nurses&apos; Office, in the Welfare
        Room (D11), or ordered through{' '}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeqtEq0t4KKApWjjonAA_3yNVA40EdcI_fT5b33s6hrGadveg/viewform?fbclid=IwAR1pddu2P0zZzHyJMu0cLetagcIW189aJTzHhht0PC-bdT-myeEXFJuhnaQ"
          target="_blank"
          rel="noreferrer"
        >
          this form
        </a>
        . Items available to order include condoms, pregnancy tests, lube as
        well as drink covers and drink testing wristbands. They will be
        delivered in a discreet plain envelope as soon as possible.
      </p>
      <p>
        You can also order a free STI test kit delivered through the post{' '}
        <a href="https://www.sh.uk/welcome" target="_blank" rel="noreferrer">
          here
        </a>
        .
      </p>
      <h3>Welfare Events</h3>
      <p>
        The JCR Welfare officers hold regular office hours for Welfare drop-in
        sessions. They also run other Welfare-related events such as the
        incredibly popular Welfare Petting Zoo in previous terms. <br />
        Details on future Welfare events and office hours will be available on
        the <Link to="/events-calendar">JCR Events Calendar</Link>.{' '}
      </p>
    </div>
  );
}

export default Welfare;
