import { PolicyLayout } from "../components/layout/PolicyLayout";

export function Privacy() {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="July 21, 2026">
      <h2>1. Introduction</h2>
      <p>
        Welcome to AgeCalc Pro. We are committed to protecting your personal information and your right to privacy. 
        If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, 
        please contact us via our Contact page.
      </p>

      <h2>2. Data Collection and Usage</h2>
      <p>
        <strong>Client-Side Processing:</strong> Our age calculation tools process all dates directly within your web browser. 
        We do not transmit your birth date, target dates, or calculation results to our servers.
      </p>
      <p>
        <strong>Information automatically collected:</strong> We automatically collect certain information when you visit, use, or navigate the application. 
        This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, 
        such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, 
        and information about how and when you use our app.
      </p>

      <h2>3. Third-Party Analytics and Advertising (AdSense)</h2>
      <p>
        We may partner with selected third-party vendors, such as Google Analytics and Google AdSense, to allow tracking technologies and remarketing services 
        on the site through the use of first-party cookies and third-party cookies, to, among other things, analyze and track users' use of the Site, 
        determine the popularity of certain content, and better understand online activity.
      </p>
      <p>
        Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based 
        on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.
      </p>

      <h2>4. GDPR and CCPA Rights</h2>
      <p>
        Depending on your location (such as the EU or California), you may have certain rights regarding your personal information, including the right to access, 
        correct, or delete data we hold about you. Please refer to your local data protection laws for specifics.
      </p>

      <h2>5. Children's Privacy</h2>
      <p>
        We do not knowingly solicit data from or market to children under 13 years of age. By using the tool, you represent that you are at least 13 or that you are the 
        parent or guardian of such a minor and consent to such minor dependent's use of the application.
      </p>
    </PolicyLayout>
  );
}
