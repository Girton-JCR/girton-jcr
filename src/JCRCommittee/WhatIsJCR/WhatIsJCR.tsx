import React from 'react';
import '../../index.css';
import './WhatIsJCR.css';
import usePageTitle from '../../usePageTitle';
import { Link } from 'react-router-dom';

function WhatIsJCR() {
  usePageTitle('What is the JCR? | Girton JCR');
  return (
    <div className="WhatIsJCR">
      <h1>What is the JCR?</h1>
      <p>
        JCR is one of those pieces of Cambridge lingo that would sound weird out
        of context. It stands for Junior Combination Room and can refer to three
        separate things:
      </p>
      <ol>
        <li>
          A physical common room for undergraduates. At Girton, our JCR was
          replaced a few years ago with the far more improved and beloved Social
          Hub (&quot;Schlub&quot;) available for use by everyone in College.
          Confusingly there is also an &quot;Old JCR&quot; in College which is
          now a space that can be booked for meetings and teaching.
        </li>
        <li>
          The undergraduate body as a whole. Often you&apos;ll see emails from
          Senior College Officials addressed to &apos;JCR Members&apos;, and it
          just means undergrads. This is in contrast to the MCR (postgraduate
          students) and the SCR (fellows).
        </li>
        <li>
          The JCR Committee (whose website this is!). We&apos;re a committee of
          about 20 students appointed via election in which all undergrads can
          take part. We&apos;re essentially just like a Student Council voted in
          to represent the undergraduates at Girton and liaise with College
          Officials to bring your ideas forward and make things happen. All
          Cambridge colleges have one and they help keep College running
          smoothly as well as running all sorts of events and advocating for
          students&apos; needs in college.
        </li>
      </ol>
      <p>
        You can download the JCR Constitution (last amended 2021) as a pdf{' '}
        <a href="JCR CONSTITUTION.pdf" target="_blank" rel="noreferrer">
          here
        </a>
        . Please note the JCR President is currently conducting an overhaul of
        the constitution, which will be available soon.
      </p>
      <p>
        You can submit anonymous feedback and questions to the JCR via this{' '}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScqr-LWxdnBIfs0WiObt6Mev_LVmFFvkeZmYyzZq2XOLBQ85g/viewform"
          target="_blank"
          rel="noreferrer"
        >
          Google Form
        </a>
        .
      </p>
      <p>
        You can meet the current committee and learn more about each of the JCR
        Officers <Link to="/meet-the-committee">here</Link>.<br />
        <br />
      </p>
      <img src="committee photo.png" className="CommitteePhoto" />
    </div>
  );
}

export default WhatIsJCR;
