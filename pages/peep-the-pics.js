import Page from '../layout/Page';
import TitleCard from '../layout/components/TitleCard';

const Index = () => (
  <Page>
    <TitleCard
      title="Check out the Photos"
      image="/static/images/photos-hero.jpg"
    />
      <div className="content ">
        <div className="content__copy width__narrow">
          <h3>It’s been a long time but you know you wanna relive these memories…</h3>
          <p>I mean, there were giraffes. </p>
          <p>Thank you so much for coming and for bringing so much energy and love to our day! We love reliving our memories through our photos, but especially from watching our video. If you would like to check out the wedding day film from our incredible videographer, Frankie, of <a href="http://www.letsbefrankmedia.com" target="_blank">Let’s Be Frank Media</a>, you can keep scrolling and watch it right now!</p>
          <p>If you wanna check out the photos from the day (and download any that you want to keep for yourselves!) you can find them at this link:</p>
          <p>WEDDING PHOTOS —&gt; <a href="http://picti.net/OpDZf" target="_blank">http://picti.net/OpDZf</a></p>
          <p>There are pics of the wedding from start to finish as well as the brunch the next day. You can download in low-resolution which is perfect for sharing on social media or high resolution which is perfect for family who might want some prints for their wall or fridge. You can also order prints directly from the site, whatever is easiest for you! Please contact Danielle if you have any questions.</p>
          <p>Love you all and hoping each of your Thank You cards reached you via snail mail!</p>
          <p><em>Love,</em></p>
          <p><em>Danielle &amp; Paul</em></p>
        </div>
      </div>
  </Page>
);

export default Index;