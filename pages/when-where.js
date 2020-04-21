import Page from '../layout/Page';
import Hero from '../layout/components/Hero';
import CTA from '../layout/components/CTA';

const seo = {
  title: 'When and Where',
}

const WhenWhere = () => (
  <Page seo={seo} >
    <Hero
      text="October 13, 2018"
      image="/images/danielle_paul-IMG_0460.jpg"
      height="large"
    />
    <Hero
      text="Palm Desert, CA"
      image="/images/babygotbokeh_INSTAGRAM_001-8.jpg"
      height="large"
    />
      <div className="content padding__low">
        <div className="content__callout padding__medium width__medium">
          <h2>Ceremony and Reception</h2>
          <h3>SATURDAY, OCTOBER 13, 2018<br />3:30 - 10:00 PM </h3>
          <p>Please arrive at the venue at 3:30pm and look for our wedding sign.</p>
          <p>A tram will arrive at 3:45pm to take you to our ceremony location or if you are comfortable walking, it is a ~5 minute walk down the pathway.</p>
          <p>Parking is provided complimentary on-site, however we encourage ride sharing to and from the venue if you plan on drinking. Lyft and Uber are available in the area.</p>
          <p><em>THE LIVING DESERT</em><br />47900 Portola Ave<br />Palm Desert, CA 92260</p>
          <CTA
            label="View Map"
            target="https://www.google.com/maps/place/The+Living+Desert+Zoo+%26+Gardens/@33.6999789,-116.3766053,17z/data=!3m1!4b1!4m5!3m4!1s0x80dafe59dbe32959:0xe1ac25e4ac83048a!8m2!3d33.6999789!4d-116.3744166"
          />
        </div>
        <div className="content__callout padding__medium width__medium">
          <h2>Pre-Wedding Welcome Drinks</h2>
          <h3>Arrived early? Say cheers after our rehearsal dinner!</h3>
          <h3>Great views. Delicious drinks and food available (but not hosted.)</h3>
          <h3><a target="_blank" href="https://www.laquintaresort.com/">La quinta resort</a> | <a target="_blank" href="https://www.laquintaresort.com/dining/adobe-grill/">adobe grill courtyard Patio</a> | October 12, 2018 | 8pm-9pm</h3>
          <CTA
            label="View Map"
          target="https://www.laquintaresort.com/"
          />
        </div>
        <div className="content__callout padding__medium width__medium">
          <h2>Morning-After-the-Wedding Brunch</h2>
          <h3>Hungover? Join Danielle &amp; Paul for brunch graciously hosted by her parents the next day.</h3>
          <h3>sunday, OCTOBER 14, 2018<br />hilton miramonte | pop in and join us anytime |&nbsp;9:30am-11:30am</h3>
          <CTA
            label="View Map"
            target="https://www.google.com/maps/place/Miramonte+Indian+Wells+Resort+%26+Spa,+Curio+Collection+by+Hilton/@33.7204401,-116.3309535,15z/data=!4m2!3m1!1s0x0:0x589b1abec34898da?sa=X&ved=0ahUKEwi_zv25zIvcAhXqlVQKHUCuD_UQ_BIIogEwDQ"
          />
        </div>
      </div>
    <Hero
      text="Wear Your Dancing Shoes"
      image="/images/danielle_paul-IMG_6684.jpg"
      height="large"
    />
      <div className="content padding__high">
        <div className="content__callout width__wide">
          <h2>Accommodations</h2>
          <h3>Woot! We booked a room block! <strong>Discounted rooms are available at the Hilton miramonte</strong>&nbsp;for <strong>$165 + room fees</strong>.</h3>
          <p>Our room block is only for Saturday night, but you can get the same discounted rate if you wanna stay the night before and party on! The hotel has a bunch of fun stuff available complimentary for guests, a great pool, a spa, and even a few bars/restaurants!&nbsp;</p>
          <p>To make your reservation with the discounted rate, please call the hotel directly and mention the VALENZANO-ROUILLARD WEDDING.</p>
          <p><strong>OUR ROOM BLOCK IS  NOW FULLY BOOKED! Thank you to those of you who helped us reach this goal. If you would like to book a room at the Hilton Miramonte for our room block rate, please contact Laura (Danielle’s mom) at laurarrouillard@gmail.com and she will increase the number of rooms we have available at that rate.&nbsp;</strong></p>
          <h3><strong>Danielle's parents will be graciously hosting a brunch for those who would like to join on Sunday morning at the hilton miramonte.</strong></h3>
          <CTA
            label="View"
            target="https://www.miramonteresort.com/"
          />
        </div>
      </div>
    <Hero
      text="Party On Dudes!"
      image="/images/danielle_paul-IMG_6906.jpg"
      height="large"
    />
  </Page>
);

export default WhenWhere;