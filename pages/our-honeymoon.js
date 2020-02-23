import Page from '../layout/Page';
import TitleCard from '../layout/components/TitleCard';
import Gallery from '../layout/components/Gallery';

const seo = {
  title: 'Our Honeymoon',
}

const galleryImages = [
  { url: '/static/images/honeymoon/001.jpg',
    alt: 'Danielle at the Parthenon',
    width: 'half'
  },
  { url: '/static/images/honeymoon/002.jpg',
    alt: 'Paul at the Parthenon',
    width: 'half'
  },
  {
    url: '/static/images/honeymoon/008.jpg',
    alt: 'Holding hands, showing off Danielle\'s Ring',
    width: 'full'
  },
  {
    url: '/static/images/honeymoon/003.jpg',
    alt: 'Paul at the Pink Beach on Crete',
    width: 'half'
  },
  {
    url: '/static/images/honeymoon/004.jpg',
    alt: 'Danielle at the Pink Beach on Crete',
    width: 'half'
  },
]

const Honeymoon = () => (
  <Page seo={seo} >
    <TitleCard
      title="Honeymoon Memories"
      image="/static/images/honeymoon-hero.jpg"
    />
      <div className="content ">
        <div className="content__copy width__narrow">
          <h3 >From Mini-Moon to Maxi-Moon…</h3>
          <p>After our wedding, we were lucky enough to celebrate our newlywed life with a quick mini-moon in Hawaii! (Shout out to our friends, Ko and Jess who got married while we were there!)</p>
          <p>Once Paul had accrued some vacation days after all the time off for the wedding (#thisamericanlife), we hopped on a plane at LAX with a dream and a cardigan, one of which was lost with our luggage when we arrived in Croatia. Thankfully it was the latter.</p>
          <p>Together we toured the coast of the country, drinking wine (it’s like $2 a glass), eating truffles (which are surprisingly cheap there!), and devouring seafood (also cheap!) We visited a number of Game of Thrones locations, and even got drunk where the dragons were held.</p>
          <p>After Croatia, we did some island hoping in Greece, through Crete and Santorini, where we dusted off our wedding wear and were shocked to see that it still fit. Our hotel in Santorini, Honeymoon Petra, was fantastic and let us take photos throughout the resort (and even upgraded us to an awesome suite to boot!)</p>
          <p>We couldn’t have done any of this without the generous gifts to our honeymoon fund from our awesome friends and family. We truly thank you, and want you to know that each of your gifts was enjoyed full-heartedly and we thought about all of you on each and every day of our trips. (Couples massage? CHECK. Fish pedicure? CHECK. Swanky hotel? CHECK. Lots of wine? QUADRUPLE CHECK.)</p>
          <p>We love you all and hope that your thank you cards (albeit quite late, we apologize, newlywed life has been busy!) got to you safely.</p>
          <p>If you’d like to see some photos from our trip, please feel free to scroll the gallery below or follow Danielle on <a href="http://instagram.com/hodgepodger" target="_blank">Instagram</a>.</p>
          <p><em>Love,</em></p>
          <p><em>Danielle &amp; Paul</em></p>
          <Gallery galleryImages={galleryImages} />
        </div>
      </div>

  </Page>
);

export default Honeymoon;