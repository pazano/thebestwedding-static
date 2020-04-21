import Page from '../layout/Page';
import TitleCard from '../layout/components/TitleCard';
import { FAQBlock, FAQItem } from '../layout/components/FAQ';

const seo = {
  title: 'FAQs'
}

const FAQs = () => (
  <Page seo={seo} >
    <TitleCard
      title="FAQs"
      lede="You got questions. We got answers. And if we don't answer them here... ask it anyway and we'll try to answer as best we can!"
    />
    <div className="content">
      <FAQBlock
        image="/images/danielle_paul-IMG_0427.jpg"
        alignment="left"
        border={true}
      >
        <FAQItem question="WILL STUFF BE HAPPENING THE REST OF THE WEEKEND?">
          <p>Yes! Please check out the <a href="/when-where">When &amp; Where</a> page for more details!</p>
          <p>If you're looking to make a mini (or big) vacation out of the trip, there's some cool stuff in the area for sure! Check out <a href="https://www.tripadvisor.com/Attractions-g32846-Activities-Palm_Desert_Greater_Palm_Springs_California.html">THIS LINK</a> for some ideas! </p>
        </FAQItem>
        <FAQItem question="WILL THERE BE AN OPEN BAR?">
          <p>Have you even met Danielle? Yes. Party hard. Please drink responsibly.</p>
        </FAQItem>
        <FAQItem question="ARE YOU GUYS REGISTERED?">
          <p>Yes! We set up a Honeymoon Fund through a ZOLA account to prioritize making memories over getting more stuff and looking more like hoarders than ever (seriously, our closets don't know what to do with themselves!) You can find our registry on the <a href="/registry">REGISTRY</a> page!</p>
        </FAQItem>
      </FAQBlock>

      <FAQBlock
        image="/images/danielle_paul-IMG_0096.jpg"
        alignment="right"
        border={true}
      >
        <FAQItem question="CAN I BRING MY KIDS? THEY WOULD BE A GREAT RINGBEARER OR FLOWER GIRL!">
          <p>As fun as your kids are, this will be an adults only affair. We really wanna make sure you all can take advantage of the open bar.</p>
          <p>If you are interested in finding a group sitter for your hotel, we can connect you with other guests who reach out with that interest as well!</p>
        </FAQItem>
        <FAQItem question="DO I GET A PLUS ONE?">
          <p>We want this wedding to be fun for you! That said, we do have some cute single friends and random guests are $$$. We're happy to accommodate traveling guests and those with serious significant others with a plus one. Please be kind to our bank accounts by not bringing Tinder Dates or randoms. If you notice that one is not listed directly on your invite, please contact us so that we can add them to the venue list and add their name to your digital RSVP.</p>
          <p>We must register all guest names with our venue ahead of time. Any random plus ones or guests who did not RSVP will have difficulty entering the venue.</p>
        </FAQItem>
      </FAQBlock>

      <FAQBlock
        image="/images/danielle_paul-IMG_6767.jpg"
        alignment="left"
        border={false}
      >
        <FAQItem question="YO, I AM TRYING TO PLAN MY OUTFIT. WHAT'S THE DRESSCODE?">
          <p>Mmm, we know how hard it is to figure out wedding dress code language. We're going with "FORMAL".</p>
          <p>We'd like to describe it as "<em>Rock and Roll Festive Formal Cocktail.</em>" But what does that even mean?</p>
          <p>Well, first and foremost, please don't wear jeans. For men, a perfect outfit is a suit and tie. Got a skinny tie and been dying for a Beatles bowl cut? DO IT.&nbsp;For women, an upscale cocktail or formal dress that is midi/maxi in length. Got a bougie bohemian maxi dress? YASSSS. Ladies, please, please, please, do not wear white or any color near it (i.e. ivory, blush, light pastels, etc.).</p>
          <p>The weather will be warm, so sunscreen and deodorant are also muy bien recommended attire!</p>
        </FAQItem>
        <FAQItem question="WHERE DID YOU GET THOSE SWEET OUTFITS IN YOUR PICS?">
          <p>A vintage mix of Goodwill and Danielle's stylish parents' closet.</p>
        </FAQItem>
        <FAQItem question="IS THIS GOING TO BE ONE OF THOSE BORING WEDDINGS?">
          <p>Not on your life.</p>
        </FAQItem>
      </FAQBlock>
    </div>
  </Page>
);

export default FAQs;
