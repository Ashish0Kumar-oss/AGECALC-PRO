import { PolicyLayout } from "../components/layout/PolicyLayout";

export function CookiePolicy() {
  return (
    <PolicyLayout title="Cookie Policy" lastUpdated="July 21, 2026">
      <h2>1. What Are Cookies</h2>
      <p>
        As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies.
      </p>

      <h2>2. How We Use Cookies</h2>
      <p>
        We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.
      </p>

      <h2>3. The Cookies We Set</h2>
      <ul>
        <li>
          <strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site, we provide the functionality to set your preferences (such as Light/Dark mode).
        </li>
      </ul>

      <h2>4. Third Party Cookies</h2>
      <p>
        In some special cases, we also use cookies provided by trusted third parties.
      </p>
      <ul>
        <li>
          This site uses <strong>Google Analytics</strong> which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience.
        </li>
        <li>
          The <strong>Google AdSense</strong> service we use to serve advertising uses a DoubleClick cookie to serve more relevant ads across the web and limit the number of times that a given ad is shown to you.
        </li>
      </ul>

      <h2>5. Managing Cookies</h2>
      <p>
        You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.
      </p>
    </PolicyLayout>
  );
}
