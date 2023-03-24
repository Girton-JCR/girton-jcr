import React from 'react';
import '../../index.css';
import usePageTitle from '../../usePageTitle';

function Transport() {
  usePageTitle('Transport  | Girton JCR');
  return (
    <div className="Transport">
      <h1>Transport</h1>
      <p>
        Girton, being a 45-minute walk from the centre of Cambridge, is
        sometimes known as the &quot;far-away college&quot;. However, despite
        the unfunny jokes you might hear around town, getting into town quickly
        is super easy!
      </p>
      <h3>Bikes</h3>
      <p>
        Bikes are the most popular form of transport for Girtonians, and we
        boast the only JCR Bike Officer in Cambridge! Girton has multiple bike
        sheds both on the main site and Swirles Court where students can keep
        their bikes all year round. Bikes kept on site need to be registered
        with the Porters Lodge via the{' '}
        <a
          href="https://girton.cam-fms.co.uk/"
          target="_blank"
          rel="noreferrer"
        >
          Bike Registration Form
        </a>
        .
      </p>
      <p>
        The JCR also owns a limited number of bikes which can be rented from the
        Porters&apos; Lodge, which are handy for when your bike is in the shop
        or a friend has come round to stay. A set of bike tools and pumps are
        also available at the Porters&apos; Lodges in both the main site and
        Swirles Court.
      </p>
      <p>
        Alternatively, there are many bike shops spread around Cambridge where
        you can buy parts/equipment, or get quick fixes and maintenance. Here is
        a short list of some shops. Look them up for more opening times,
        services and locations. Shops will usually pump up your tyres or do a
        quick check-up for free, so don&apos;t be afraid to ask, it can be a
        real time-saver:
      </p>
      <ul>
        <li>
          Chris&apos;s Bikes (the closest to Girton, but bring cash and only
          open in the afternoons!)
        </li>
        <li>Bike Ambulance (nice and central, often recommended)</li>
        <li>Rutland Cycles Grand Arcade (friendly, easy hire)</li>
        <li>Townsends Light Blue Cycle Centre (good value and quality)</li>
        <li>Declathon Grafton Centre (National Chain store)</li>
      </ul>
      <p>
        Also, be aware the pavement along Huntingdon Road immediately outside of
        college is a two-way cycle path shared with pedestrians. Please cycle on
        the pavement on this side of the road when coming in and out of college.
        Do not cycle on the road as it is a bus lane, and do not attempt to
        cross the main road at the entrance to college - it is a major hazard.
      </p>
      <p>
        For more cycling information please see the{' '}
        <a href="Freshers Cycle Guide.pdf" target="_blank" rel="noreferrer">
          Freshers&apos; Cycle Survival Booklet
        </a>{' '}
        or contact the{' '}
        <a href="mailto:jcr-bike@girton.cam.ac.uk">JCR Bike Rep</a>.
      </p>
      <h3>Buses</h3>
      <p>
        There are currently a number of buses that can be caught from
        Girton&apos;s two sites that you can get into town.{' '}
      </p>
      <p>
        <a
          href="https://eddington-cambridge.co.uk/universal-bus-at-eddington"
          target="_blank"
          rel="noreferrer"
        >
          The Universal Bus
        </a>{' '}
        (or the U Bus) is subsidised by the University so students can get a
        single ticket for £1 when they show their university card. The Bus
        currently runs from Eddington (by Swirles Court) through town to
        Addenbrookes Hospital. It is also currently the cheapest and easiest way
        to get to and from the train station by bus. The U Bus will be stopping
        at Girton main site from July 2023.
      </p>
      <p>
        The Stagecoach Citi 5 and 6 stop just outside the main site and go into
        town via Huntingdon road. It is however less frequent and more expensive
        than the U Bus, though Stagecoach have now introduced a{' '}
        <a
          href="https://www.stagecoachbus.com/regionaltickets/east/cambridgeshire/youngperson?passengerClass=YOUNG_PERSON"
          target="_blank"
          rel="noreferrer"
        >
          Young Person ticket
        </a>
        .
      </p>
      <h3>Taxis</h3>
      <p>
        A slightly more expensive but popular option for group night outs is
        getting a taxi. Uber is fully operational in Cambridge but at certain
        hours can be difficult to get at a moment&apos;s notice.{' '}
        <a
          href="https://www.panthertaxis.co.uk/"
          target="_blank"
          rel="noreferrer"
        >
          Panther Taxis
        </a>{' '}
        are a good local alternative whose taxis can be booked in advance via
        their website or on their app.
      </p>
      <h3>Voi</h3>
      <p>
        <a href="https://www.voiscooters.com/" target="_blank" rel="noreferrer">
          Voi Scooters and E-Bikes
        </a>{' '}
        operate throughout Cambridge and there is a convenient Voi parking
        location on Girton Corner as well as multiple near Swirles Court. Vois
        can be unlocked via the Voi app (at least a UK Provisional Driving
        Licence is required for the scooters) and charge a £1 unlocking fee plus
        20p per minute. Please follow the safety instructions on the app: wear a
        helmet, don&apos;t ride under the influence of drugs or alcohol and only
        one person per voi.
      </p>
    </div>
  );
}

export default Transport;
