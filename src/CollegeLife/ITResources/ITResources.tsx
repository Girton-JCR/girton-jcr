import React from 'react';
import '../../index.css';
import usePageTitle from '../../usePageTitle';
import img from './IT Resources.png';

function ITResources() {
  usePageTitle('IT Resources | Girton JCR');
  return (
    <div className="ITResources">
      <h1>IT Resources</h1>
      <p>
        Girton has a wealth of IT Resources available for use by undergrad
        students. If you have any queries don&apos;t hesitate to contact either
        the JCR IT Officer or the IT Department.
      </p>
      <h3>Internet Connection</h3>
      <p>
        In College, there are multiple ways to connect to the internet. We have
        three wireless connections that are found all throughout the university:
      </p>
      <ul>
        <li>
          UniOfCam: students and staff use their Raven log-ins to sign in though
          you will need to manually sign in again every couple of hours.
        </li>
        <li>
          UniOfCam-Guest: guests in college can connect up to 3 devices by
          signing in with their Amazon, Facebook, LinkedIn, GitHub or Twitter
          accounts.&nbsp;
          <a
            href="https://help.uis.cam.ac.uk/guest-wifi"
            target="_blank"
            rel="noreferrer"
          >
            More details can be found on the UIS Website.
          </a>
        </li>
        <li>
          Eduroam: Eduroam is an international roaming service that provides
          wifi to higher education institutions across the globe. It takes a few
          steps to set up and usually involves setting up a &apos;token&apos; on
          each device that needs connecting but it is well worth the effort in
          terms of the time it will save you in the long run, as it will
          automatically reconnect.&nvsp;
          <a href="https://help.uis.cam.ac.uk/service/wi-fi/device-instructions">
            Instructions to set it up can be found on the UIS Website.
          </a>
        </li>
      </ul>
      <p>
        There are ethernet ports in all college rooms if you prefer/need a wired
        connection for your computer. You can also connect a wireless router to
        the ethernet port, if the wi-fi strength in your room is weaker. The IT
        Department have a number of routers available for students to borrow for
        the academic year, if you email&nbsp;
        <a href="mailto:ithelp@girton.cam.ac.uk">ithelp@girton.cam.ac.uk</a>
        &nbsp;with your name and room number.
      </p>
      <h3>Computer Facilities</h3>
      <p>
        There are a number of computers available in College for use by
        students. These provide access to the university&apos;s Managed Cluster
        Services (MCS) which allows access to a personal desktop, filestore,
        department-specific software and printing. More information about the
        MCS can be found&nbsp;
        <a
          href="https://help.uis.cam.ac.uk/service/desktop-services"
          target="_blank"
          rel="noreferrer"
        >
          here.
        </a>
      </p>
      <p>
        The college&apos;s two designated IT areas are as follows:
        <br />
        <br />
      </p>
      <img src={img} alt="Designated IT Areas" width="100%" />
      <p>
        There are also a limited number of laptops managed by the IT Department
        which are available to borrow by students in the event of an IT
        emergency and for online exams.
      </p>
      <h3>Printing Facilities</h3>
      <p>
        There are also a number of printers available in the College for use by
        students. These can be found in the Library IT Resource Centre, the Old
        Kitchens Reception Area and Swirles Court.
      </p>
      <p>
        Printing costs 4p per B&W side and 15p per colour side. This is
        monitored by the{' '}
        <a
          href="https://help.uis.cam.ac.uk/service/printing/my-ds-print"
          target="_blank"
          rel="noreferrer"
        >
          DS Print system
        </a>{' '}
        and you can top up and check your balance&nbsp;
        <a
          href="https://www.ds.cam.ac.uk/mydsprint/"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        . I&apos;d advise checking that you have enough credit before heading
        down to the printer!
      </p>
      <p>
        There are a number of ways to use the DS-Print system in order to print:
      </p>
      <ul>
        <li>
          You can print directly from any computer on the MCS (see above). You
          can email documents to yourself or access your personal filestore via
          these computers to print.{' '}
        </li>
        <li>
          You can insert a USB stick with the document(s) you want to print
          directly into the printer and select via the printer screen (this
          works on the Sharp MX Devices at all locations)
        </li>
        <li>
          You can install one of the printing software provided by the
          university directly onto your personal computer to print from your own
          device. Instructions on how to do this can be found on the{' '}
          <a
            href="https://help.uis.cam.ac.uk/service/printing"
            target="_blank"
            rel="noreferrer"
          >
            University Information Service site
          </a>
          . DS-Print works best on Windows devices, so I recommend the Cloud
          Print for macOS and Chrome OS. There is also Mobility Print software
          for tablets and mobile devices.
        </li>
      </ul>
      <p>
        Once you&apos;ve done the above, the printers at Old Kitchens and
        Swirles Court require you to scan your University Card at the Printer to
        release the documents. You can also use these printers to copy and scan.
      </p>
      <p>
        Further information about IT resources in College can be found on the
        <a
          href="https://www.vle.cam.ac.uk/course/view.php?id=197071"
          target="_blank"
          rel="noreferrer"
        >
          IT Information for Students Moodle page
        </a>{' '}
        and information about University IT resources can be found on the{' '}
        <a href="https://help.uis.cam.ac.uk/" target="_blank" rel="noreferrer">
          UIS Website
        </a>
        .
      </p>
      <p>
        If you have any further questions don&apos;t hesitate to contact the{' '}
        <a href="mailto:jcr-webmaster@girton.cam.ac.uk">JCR IT Officer</a> or
        the <a href="mailto:ithelp@girton.cam.ac.uk">Girton IT Department</a>.
      </p>
    </div>
  );
}

export default ITResources;
