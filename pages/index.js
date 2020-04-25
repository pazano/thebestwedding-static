import Page from '../layout/Page';
import Hero from '../layout/components/Hero';
import Link from 'next/link';

const seo = {
  title: 'Home',
}

const Index = () => (
  <Page seo={seo} >
    <Hero
      text="Our Love Rocks."
      image="/images/danielle_paul-IMG_6010.jpg"
      height="large"
    />
      <div className="content padding__medium">
        <div className="content__copy width__narrow">
            <h2 >So we got a rock to celebrate it. #ringjokes</h2>
            <p >And now we want to celebrate our love story with you! We are so excited to spend our wedding day among the people most special to us and we are hoping you will be able to join the celebration! We sincerely hope all of you will be able to join us, no matter how long it has been since we made our last memory together. We invited you because in some way or another we feel that you have changed our life for the better and we want to spend a day that changes our lives for the better with all of you together.</p><p >&nbsp;</p>
        </div>
        <div className="content__callout width__narrow">
            <p >As Flo Rida said, it's goin' down for real:</p>
            <h2 >OCTOBER 13, 2018</h2>
            <h3 >THE LIVING DESERT</h3>
            <h3 >PALM DESERT, CA</h3>
            <h3 ><Link href="our-day"><a>DETAILS HERE</a></Link></h3>
            <h3 >THANK YOU SO MUCH FOR EVERYONE WHO JOINED OUR DAY IN PERSON OR IN SPIRIT TO MAKE EVERY MOMENT SPECIAL! We can’t wait to show you the photos and relive the day again soon.&nbsp;</h3>
        </div>

      </div>
  </Page>
);

export default Index;