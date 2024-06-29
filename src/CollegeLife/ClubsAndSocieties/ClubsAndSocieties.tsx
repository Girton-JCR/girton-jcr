import '../../index.css';
import usePageTitle from '../../usePageTitle';
import { Link } from 'react-router-dom';

function ClubsAndSocieties() {
  usePageTitle('Clubs & Societies  | Girton JCR');
  return (
    <div className="ClubsAndSocieties">
      <h1>Sports, Clubs & Societies</h1>
      <p>
        As well as hundreds of sports, clubs and societies run university-wide,
        the JCR also funds student-run, Girton-based societies.{' '}
      </p>
      <h3>Society Registration & Funding</h3>
      <p>
        An updated list of current Girton societies registered with the JCR and
        their contacts is be available <Link to="/societies-list">here</Link>.
      </p>
      <p>
        If one does not yet exist and you would like to start it, then you must
        register with the JCR (even if you don&apos;t need funding) by adding it
        to the spreadsheet. If you have already registered, please ensure the
        information is up to date.
      </p>
      <p>
        At the beginning of each term, the JCR Treasurer will send out a funding
        application form for that term for registered societies.
      </p>
      <p>
        Funds are limited, so make a strong and detailed case. Include as much
        information as possible about why your society/club is requesting
        funding and how it will be spent.
      </p>
      <ul>
        <li>
          Spending on equipment: If you are planning to make more expensive
          one-off purchases which will last for a longer time (equipment, kit,
          etc.) please make this clear in your application for funding. We
          cannot guarantee that all your expenses will be covered, but we have
          decided to increase our support for societies so they can maintain the
          &quot;infrastructure&quot; they need.
        </li>
        <li>
          Spending on snacks: The JCR can only reimburse up to £50 for
          food/drinks/refreshments.
        </li>
      </ul>
      <p>
        After the deadline, the JCR will consider all requests, allocate the
        funding fairly, and then notify all those who applied on the outcome.
      </p>
      <h3>Reimbursements</h3>
      <p>
        There are two main ways of charging the College for payments relating to
        the JCR, direct or reimbursed. Payments of a larger scale, especially
        one where the supplier is willing to provide an invoice, will be paid
        for directly by the College. This is the preferred method of payment
        (especially for large sums of money) as students do not need to be
        temporarily out of pocket.
      </p>
      <p>
        Most purchases, however, will be covered by reimbursements. Three things
        are required for a successful reimbursement:
      </p>
      <ol>
        <li>You must be under budget.</li>
        <li>You should have a receipt of the purchase.</li>
        <li>You must have filled out the reimbursement form.</li>
      </ol>
      <p>
        If you are unsure of your budget, spending above the budget or are
        confused whether the purchase counts as a JCR purchase, do not go ahead
        with the payment. Contact the Treasurer before spending any money. Most
        likely, we will be able to accommodate you if due notice has been given.
      </p>
      <p>
        Once you have filled out the form, please send an email with the form
        and receipts attached to{' '}
        <a href="mailto:jcr-treasurer@girton.cam.ac.uk">
          jcr-treasurer@girton.cam.ac.uk
        </a>
        . Usually, reimbursements will be in the form of the money coming off
        your College bill for the term, however you can specify in your email if
        you prefer another method.
      </p>
    </div>
  );
}

export default ClubsAndSocieties;
