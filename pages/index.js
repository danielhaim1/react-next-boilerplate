import '../src/sass/style.scss'

import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Symbols from '../components/symbols'

const Home = () => (
  <div>

    <Head>
      <title>Home</title>
    </Head>

    <Symbols />
    <Nav />

    <section className="section-block">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="block">
              <h1 className="_title">Genealogy <span className="kern">of</span> Morals</h1>
              <h2 className="_subtitle">
                <span>Friedrich Nietzsche</span>
              </h2>
              <div className="_excerpt">
                <p>At this point I can no longer avoid giving a first, provisional statement of my own hypothesis concerning the origin of the “bad conscience”: it may sound rather strange and needs to be pondered, lived with, and slept on for a long time. I regard the bad conscience as the serious illness that man was bound to contract under the stress of the most fundamental change he ever experienced—that change which occurred when he found himself finally enclosed within the walls of society and of peace. The situation that faced sea animals when they were compelled to become land animals or perish was the same as that which faced these semi-animals, well adapted to the wilderness, to war, to prowling, to adventure: suddenly all their instincts were disvalued and “suspended.” From now on they had to walk on their feet and “bear themselves” whereas hitherto they had been borne by the water: a dreadful heaviness lay upon them. They felt unable to cope with the simplest undertakings; in this new world they no longer possessed their former guides, their regulating, unconscious and infallible drives: they were reduced to thinking, inferring, reckoning, coordinating cause and effect, these unfortunate creatures; they were reduced to their “consciousness,” their weakest and most fallible organ! I believe there has never been such a feeling of misery on earth, such a leaden discomfort and at the same time the old instincts had not suddenly ceased to make their usual demands. Only it was hardly or rarely possible to humor them: as a rule they had to seek new and, as it were, subterranean gratifications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  
    <div className="grid-overlay" id="siteGridOverlay">
        <div className="container">
            <div className="row">
                <div className="col-3"><div>3</div></div>
                <div className="col-3"><div>3</div></div>
                <div className="col-3"><div>3</div></div>
                <div className="col-3"><div>3</div></div>
            </div>
        </div>
    </div>
    <style jsx>{`
      @import url("https://fonts.googleapis.com/css2?family=Gentium+Book+Basic:ital,wght@0,400;0,700;1,400;1,700&display=swap");
      @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");

      :root {
        --white: white;
        --black: #000000;
        --grey-100: #f6f4f4;
        --grey-200: #e3dedd;
        --grey-300: #d0c7c6;
        --grey-400: #8d7975;
        --grey-500: #766562;
        --grey-600: #6a5b58;
        --grey-700: #524744;
        --grey-800: #3b3231;
        --grey-900: #181414;
        --primary-100: #fef0ed;
        --primary-200: #fbd1c8;
        --primary-300: #f8b2a3;
        --primary-400: #ef4723;
        --primary-500: #c73b1d;
        --primary-600: #b3351a;
        --primary-700: #8b2914;
        --primary-800: #641e0f;
        --primary-900: #280c06;
      }

      .section-block {
        min-height: calc(100vh - 65px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: var(--grey-200);
      }

      .section-block .block {
        margin: 0 auto;
        padding: 100px 20px;
        position: relative;
        text-align: left;
        max-width: 820px;
      }

      .section-block ._symbol svg {
        display: block;
        width: 6rem;
        height: 6rem;
        margin: 0 auto 3rem;
      }

      .section-block ._title {
        color: var(--grey-900);
        font-weight: 800;
        font-size: 28px;
        line-height: 28px;
        font-family: "open sans";

        margin: 0 0 32px 0;
        text-align: center;
        text-transform: uppercase;
        max-width: 800px;
      }

      .section-block ._title span {
        font-weight: 400;
        font-size: 28px;
        line-height: 28px;
        font-family: "gentium book basic";
        font-style: italic;
        text-transform: none;
      }

      @media (min-width: 992px) {
        .section-block ._title {
          font-size: 64px;
          line-height: 64px;
        }
        .section-block ._title span {
          font-size: 60px;
          line-height: 60px;
        }
      }

      .section-block ._title span.kern {
        margin: 0 4px 0 0;
      }

      .section-block ._subtitle {
        border-top: 1px solid var(--grey-400);
        color: var(--grey-900);
        font-weight: 800;
        font-size: 1rem;
        line-height: 1rem;
        font-family: "open sans";
        margin: 0 0 20px 0;
        text-align: center;
        text-transform: uppercase;
      }

      .section-block ._subtitle span {
        background-color: var(--grey-200);
        padding: 0 20px;
        position: relative;
        top: -10px;
      }

      .section-block ._excerpt {
        margin-top: 3rem;

        text-align: justify;
      }

      @media (min-width: 992px) {
        .section-block ._excerpt {
          column-count: 2;
          column-gap: 2rem;
        }
      }
      .section-block ._excerpt p {
        color: var(--grey-900);
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.563;
        font-family: "gentium book basic";
        margin: 0;
      }

      .section-block ._excerpt p + p {
        margin-top: 1rem;
      }`}
    </style>
  </div>
)

export default Home
