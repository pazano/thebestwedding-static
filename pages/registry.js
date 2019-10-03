import Page from '../layout/Page';
import Hero from '../layout/components/Hero';
import CTA from '../layout/components/CTA';

const seo = {
  title: 'Registry',
}

const Registry = () => (
  <Page seo={seo} >
    <Hero
      text="Memories > Stuff"
      image="/static/images/danielle_paul-IMG_6115.jpg"
      height="large"
    />
    <div className="content padding__low">
      <div className="content__copy width__narrow">
        <p>Hey there! We are so honored to have you be a part of our special day and appreciate whatever you can contribute as a gift. Whatever you get, it's sure to craft an experience for us together that will create memories we'll hold in our hearts and heads forever (or at least until we are senile, which could happen if we grow like really <em>really</em> old together.)</p>
        <p>We love you all so much that we want you to be a part of not just our wedding memories, but a part of our honeymoon memories as well (well, the parts where we're clothed.) If you'd like to gift us something not on this list, that's great too! But we request that only cards be brought to the venue to limit the amount of items we have to try to pack in the car along with our luggage and diy wedding supplies!</p>
        <p>This page is not totally filled out yet, but we are adding to our Zola registry and it should be good to go soon. Thank you all again and we can't wait to see you!</p>
      </div>
      <div className="content__callout width__narrow">
        <CTA
          label="View our Registry"
          target="https://www.zola.com/registry/danielleandpaulrock"
        />
      </div>
    </div>
  </Page>
);

export default Registry;