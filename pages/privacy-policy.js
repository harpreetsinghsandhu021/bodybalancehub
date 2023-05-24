import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const privacy = () => {
  return (
    <>
      <Header />
      <section className="blog">
        <main className="main--blog">
          <h3 className="main--heaidng">Privacy Policy</h3>

          <p>Who are we?.</p>
          <p>Our website address is:</p>
          <p>What private data we keep and why we track it</p>
          <p>Comments</p>

          <p>
            We have chosen to turn comments off on our posts, so there won’t be
            collection any information here.
          </p>

          <h3>Media</h3>
          <p>Contact forms</p>
          <p>
            If you contact us on our contact us page on our site, we will answer
            using the email address that you gave us with. This will NOT
            subscribe you to any newsletters, and we will NOT provide your
            details out to other third parties.
          </p>
          <h3>Cookies</h3>
          <p>
            We place cookies on a few of our pages in order to track the success
            of our paid traffic from Facebook, Google and other sources.
            <br />
            This allows us to see if people are clicking through to our site,
            and if they are going further or not, and lets us make more educated
            decisions.
            <br />
            We do not get give any private information from this, and we do not
            pass on our pixel with any third parties.
            <br />
          </p>

          <h3>Logging in</h3>
          <p>
            When you log in, we will also set up several cookies to keep your
            login details and your screen display preferences. Login cookies
            last for 2 days, and screen preference cookies last for 12 months.
            If you tick “Remember Me”, your login will persist for a fortnight.
            If you sign out of your account, the sign in cookies will be
            deleted.
          </p>
          <p>
            If you edit or publish an article, an additional cookie will be
            saved in your browser. This cookie includes no personal information
            and just indicates the post ID of the blog post you just edited. It
            is removed after 1 day.
          </p>
          <p>Embedded content from unrelated websites</p>
          <p>
            Posts on this website may include embedded content (e.g. videos,
            images, articles, etc.). Embedded content from other websites
            behaves in the exact same way as if the visitor has visited the
            other website.
          </p>
          <p>
            These websites may obtain information about you, use cookies, embed
            extra third-party tracking, and monitor your interaction with that
            embedded content, including analysing your interaction with the
            embedded content if you have an account and are logged in to that
            site.
          </p>
          <h3>Analytics</h3>
          <p>Who we share your data with</p>
          <p>
            We do not share information with third parties, however we do place
            Facebook and/or Google pixels so that we can track the performance
            of our paid advertising.
          </p>
          <p>
            This does not give us any personal information, but allows us to
            make better choices based on the general trend.
          </p>
          <p>How long we retain your personal information</p>
          <p>
            If you leave a comment, the comment and its metadata are stored
            indefinitely. This is so we can recognize and approve any follow up
            comments automatically instead of keeping them in a moderation
            queue.
          </p>
          <p>
            For people that register on our site (if any), we also keep the
            personal data they give us in their user profile.
          </p>
          <p>
            All users can see, edit, or erase their personal information at any
            time (except they cannot change their username).
          </p>
          <p>Website admin can also view and update those details.</p>

          <p>What rights you have over your data</p>
          <p>
            If you have a profile on this website, or have left comments
            (currently turned off), you may request to obtain an exported file
            of the personal data we hold about you, including any data you have
            provided to us.
          </p>
          <p>
            You can also request that we erase any private information we hold
            about you.
          </p>
          <p>
            This excludes any information we are required to keep for
            administrative, legal, or security purposes.
          </p>
        </main>
      </section>
      <Footer />
    </>
  );
};

export default privacy;
