import React from 'react';
import '../../index.css';
import usePageTitle from '../../usePageTitle';

function Freshers() {
  usePageTitle('Freshers  | Girton JCR');
  return (
    <div className="Freshers">
      <h1>Freshers</h1>
      <p>
        Hello and welcome! So many congratulations for having gotten into the
        best College in Cambridge! All of us here at Girton love it, and we know
        you&apos;re going to love it too!
      </p>
      <p>
        Fresher&apos;s week can be an exciting and scary time, so this part of
        the website is dedicated to guiding you through it as easily as
        possible! Find links for everything you need, including guides you
        should read beforehand, events available, timetables, people to contact
        and more! Don&apos;t worry if it&apos;s a bit overwhelming - take your
        time and see what Girton has in store for you!
      </p>
      <p>
        Firstly we recommend you join Facebook and follow the Instagram JCR
        account. Facebook, while admittedly an old-people thing, is massively
        popular in Cambridge as it&apos;s used to promote events, look up
        information, and join societies. We&apos;ll share details of our
        Facebook groups and chats later. Our Instagram is:{' '}
        <a
          href="https://www.Instagram.com/girtonjcr/"
          target="_blank"
          rel="noreferrer"
        >
          @girtonjcr
        </a>
        . We also have an Instagram for freshers&apos; week info:{' '}
        <a
          href="https://www.Instagram.com/girtonfreshers2023/"
          target="_blank"
          rel="noreferrer"
        >
          @girtonfreshers2023
        </a>
      </p>
      <p>A couple of things I would do if I were you:</p>
      <ul>
        <li>
          Check your emails! Emails are the main way College staff get out
          information (the Facebook is more for students). Here you&apos;ll get
          emailed about compulsory events and College-run stuff which is to do
          with meeting your Tutor, Director of Studies (DoS) etc.
        </li>
        <li>
          Have a look around the website (it&apos;s all brand new!) for some
          more general information about Girton written by students for
          students.
        </li>
        <li>
          DON&apos;T buy any club night tickets yet if you want to go clubbing
          during Freshers&apos; Week! We have special Girton tickets available
          for each and every one of you (should you want them)! Details to
          follow.
        </li>
      </ul>
      <p>
        Lastly, make sure to keep checking back here for updates. The website is
        a work in progress at the moment, so there will be changes in the coming
        weeks as we update you with new information.
      </p>
      <p>
        With that being said, have a wonderful rest of your summer, and we look
        forward to seeing you in person in October!
      </p>
    </div>
  );
}

export default Freshers;
