import '../../index.css';
import usePageTitle from '../../usePageTitle';

function Accommodation() {
  usePageTitle('Accommodation | Girton JCR');
  return (
    <div className="Accommodation">
      <h1>Accommodation</h1>
      <p>
        Girton provides accommodation for all years of our undergraduate
        courses, with the options to live on the main college site, a College
        owned-house or Swirles Court, our off-site entirely en-suite
        &apos;modern&apos; accommodation block.
      </p>
      <h3>Room Allocation</h3>
      <p>
        Freshers are automatically assigned rooms on the main College site when
        their offers are confirmed so there is no need to worry about applying
        for accommodation before coming to Girton!
      </p>
      <p>
        Students in upper years choose their rooms via the annual Room Ballot
        run by the JCR Accommodation Officer and the College Accommodation
        Officer, Emma Salmon. Third-year students pick first, followed by
        second-year students. The specific order that students pick within the
        years is determined by their previous Room Grade(s). Each room in
        College is graded from A- (the most modest rooms in College) to G (the
        more palatial) based on its size and other features such as en-suites,
        basins, number of windows and bed size. This system is designed so that
        people who have had smaller rooms in previous rooms can choose their
        rooms sooner, bettering their chance of getting a nicer room for next
        year. The ballot system means everyone in one year group pays roughly
        the same weekly rent and gets a chance to experience the nice rooms in
        College regardless of financial situation.
      </p>
      <p>
        Details and photos of rooms in College can be found on the Room
        Database:{' '}
        <a href="http://gcrb.soc.srcf.net/" target="_blank" rel="noreferrer">
          gcrb.soc.srcf.net
        </a>
        .
      </p>
      <h3>Room Maintenance</h3>
      <p>
        College&apos;s fantastic Maintenance Department is there to help keep
        everything in your room in working order. If you have any problems, from
        a broken lightbulb to a window that won&apos;t shut, they will send help
        quickly.
        <br />
        <br />{' '}
      </p>
      <ul>
        <li>
          You can report issues using their{' '}
          <a
            href="https://app.casc.cam.ac.uk/rms_live/default.aspx?ReturnUrl=%2frms_live%2fInstHome.aspx%3fckck%3dfalse&ckck=false"
            target="_blank"
            rel="noreferrer"
          >
            online room management system
          </a>
          .
        </li>
        <li>
          Near misses in college (such as faulty electronics, the smell of a gas
          leak, or obstruction to a fire exit) should be reported{' '}
          <a
            href="https://girtoncollege.wufoo.com/forms/girton-college-near-miss-and-hazard-form/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </li>
      </ul>
      <h3>Further Links</h3>
      <p>
        More information about living in college can be found in the{' '}
        <a
          href="https://www.girton.cam.ac.uk/college-members/student-information/accommodation-handbook"
          target="_blank"
          rel="noreferrer"
        >
          Accommodation Handbook
        </a>{' '}
        and the{' '}
        <a
          href="https://www.girton.cam.ac.uk/life-girton/accommodation-0"
          target="_blank"
          rel="noreferrer"
        >
          Accommodation page
        </a>{' '}
        on the college website.
      </p>
      <p>
        For more information contact the{' '}
        <a href="mailto:jcr-accommodation@girton.cam.ac.uk">
          JCR Accommodation Officer
        </a>{' '}
        or the{' '}
        <a href="mailto:accommodation@girton.cam.ac.uk">Accommodation Office</a>
        .
      </p>
    </div>
  );
}

export default Accommodation;
