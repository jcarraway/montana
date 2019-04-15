import React from 'react';
import Link from 'next/link';

interface Props {}

export const Project: React.FC<Props> = () => {
  return (
    <div id="project">
      <h1 style={{ marginBottom: 0 }}>Project XBII</h1>
      <small style={{ marginTop: 0 }}>
        <Link href="#what-it-is">
          <a>What It Is</a>
        </Link>{' '}
        |{' '}
        <Link href="#how-it-works">
          <a>How the App Works</a>
        </Link>{' '}
        |{' '}
        <Link href="#mission">
          <a>Mission</a>
        </Link>{' '}
        |{' '}
        <Link href="#insight">
          <a>Insight</a>
        </Link>{' '}
        |{' '}
        <Link href="#inspiration">
          <a>Inspiration</a>
        </Link>
      </small>
      <h2 id="what-it-is">What It Is</h2>
      <p>
        A day planner app that helps you translate your long-term goals into
        manageable, short-term to-dos.
      </p>
      <h2 id="how-it-works">How the App Works</h2>
      <ul>
        <li>
          <strong>Write down your principles & goals.</strong> A pretty basic
          concept, but most people don’t do it. We believe this is because no
          one asks about your principles & goals. It’s just not table-talk
          material the way <em>Game of Thrones</em> is - although we think it
          should be. Writing down your principles & goals forces you to{' '}
          <em>define</em> them. Writing is refined thinking.
        </li>
        <br />
        <li>
          <strong>Walk the walk.</strong> The best way to reach something is to
          move in towards it - goals are no different. We’re building a tool to
          help you work towards your goals every day with a quick, daily
          routine. Think of it like a gym for your life.
        </li>
        <br />
        <li>
          <strong>Assemble your squad.</strong> Everything is better together.
          👯‍ We want to build a new type of social network that encourages
          progress instead of ego. In other words, one you’ll actually like.
        </li>
      </ul>
      <h2 id="mission">Mission</h2>
      <p>
        Our mission is to help people live richer lives by enabling them to
        protect their most valuable resources - time, energy, and attention.
      </p>
      <h2 id="insight">Insight</h2>
      <p>
        We've just arrived at the most important crossroad in human history. The
        direction we go next will determine quality of the future of our
        species.
      </p>
      <p>
        For the first ~95% of human history, we were hunter-gatherers and spent
        most of our time satisfying basic needs like food, shelter, and safety.
        In other words, <em>we were in survival mode.</em>
      </p>
      <p>
        12,000 years ago, we settled down with our new farms and got jobs. This
        allowed us to trade our labor for food and such, but we were definitely
        still in survival mode. And we stayed that way until very recently.
      </p>
      <p>
        The Digital Revolution has given us lots of cool stuff like computers
        and the internet, but the most valuable thing it has given us is more
        time. In some cases, tasks that took days now take seconds and we are
        left with more hours in the day and more days in our life. We’ve finally
        made it out of survival mode, and just in the last 0.3% of our history.
      </p>
      <p>So where do we go from here? We have 2 options.</p>
      <p>
        We can take our newly liberated hours and lose ourselves in an endless
        scroll or a Netflix binge. We can let ourselves be distracted by
        short-term dopamine hits.
      </p>
      <p>
        Or we can put these hours working towards something better and redefine
        what the future can be. But first, we have to decide, and it starts with
        you.
      </p>
      <p>
        <em>What are you doing today?</em>
      </p>
      <h2 id="inspiration">Inspiration</h2>
      <p>
        We were inspired to start working on this project after spending too
        many years reading self-improvements books, studying our idols, and
        seeking life advice from other people instead of living our life. We
        realized that a lot stuff we learned was recycled from somewhere else -
        same cake, different icing. We started to ask ourselves if this was
        possible to systematize all of this advice. We wondered{' '}
        <em>what if you could you just download a better life experience</em>?
        How many years wiser would we if there had been “an app for that” when
        we were young? It was too late for us, we’d put in the time. But it
        wasn’t too late for our little brothers, so we decided to give it a
        shot.
      </p>
      <p>Of all the things we read, these inspired us the most: </p>
      <ul>
        <li>
          <a href="https://waitbutwhy.com/2014/05/life-weeks.html">
            Your Life in Weeks
          </a>
          ,{' '}
          <a href="https://waitbutwhy.com/2016/10/100-blocks-day.html">
            100 Blocks a Day
          </a>
          , and{' '}
          <a href="https://waitbutwhy.com/2014/10/religion-for-the-nonreligious.html">
            Religion for the Nonreligious
          </a>{' '}
          by Tim Urban
        </li>
        <li>
          <a href="http://atulgawande.com/book/the-checklist-manifesto/">
            The Checklist Manifesto
          </a>{' '}
          by Atul Gawande
        </li>
        <li>
          <a href="http://paulgraham.com/todo.html">The Top of My Todo List</a>
          {' and '}
          <a href="http://paulgraham.com/vb.html">Life is Short</a> by Paul
          Graham
        </li>
        <li>
          <a href="https://bronnieware.com/blog/regrets-of-the-dying/">
            Regrets of the Dying
          </a>{' '}
          by Bronnie Ware
        </li>
        <li>
          <a href="https://www.the1thing.com/">The ONE Thing</a> by Gary Keller
        </li>
        <li>
          <a href="https://dcgross.com/introspect-yourself/">
            Introspect Yourself
          </a>
          ,{' '}
          <a href="https://dcgross.com/how-to-level-up/">
            Setting Personal KPIs
          </a>
          , and <a href="https://dcgross.com/feedback-loops/">Feedback Loops</a>{' '}
          by Daniel Gross
        </li>
        <li>
          <a href="https://fs.blog/2014/05/improving-your-performance/">
            The Best way to Improve Your Performance
          </a>{' '}
          and{' '}
          <a href="https://fs.blog/2018/06/succeed-at-work/">
            Smarter, Not Harder: How to Succeed at Work
          </a>{' '}
          by Shane Parrish
        </li>
        <li>
          <a href="https://marginalrevolution.com/marginalrevolution/2018/10/high-return-activity-raising-others-aspirations.html">
            The high-return activity of raising others’ aspirations
          </a>{' '}
          by Tyler Cowen
        </li>
        <li>
          <a href="http://www.thirteenvirtues.com/">13 Virtues</a> courtesy of
          Benjamin Franklin
        </li>
        <li>
          <a href="https://www.principles.com/">Principles</a> by Ray Dalio
        </li>
        <li>
          <a href="https://www.amazon.com/Time-Management-Magic-Lee-Cockerell/dp/194312731X/ref=as_li_ss_tl?_encoding=UTF8&qid=1527642084&sr=8-1&dpID=51BeFE%252BE5HL&preST=_SY344_BO1,204,203,200_QL70_&dpSrc=detail&linkCode=sl1&tag=maberica-20&linkId=d087d7d8858b72cf8e8604e8e7d5237e">
            Time Management Magic
          </a>{' '}
          by Lee Cockerell
        </li>
      </ul>
    </div>
  );
};
