import { PolicyLayout } from "../components/layout/PolicyLayout";

export function Disclaimer() {
  return (
    <PolicyLayout title="Disclaimer" lastUpdated="July 21, 2026">
      <h2>1. General Information</h2>
      <p>
        The information provided by AgeCalc Pro ("we," "us," or "our") on this website is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
      </p>

      <h2>2. Medical Disclaimer</h2>
      <p>
        Calculations related to age, lifespan, or generational categorizations are not medical advice. You must not rely on the information on this website as an alternative to medical advice from your doctor or other professional healthcare provider.
      </p>

      <h2>3. Legal & Financial Disclaimer</h2>
      <p>
        The age calculation tools provided here should not be used as official legal proof of age for financial, legal, or governmental purposes. Always consult official documentation and legal counsel for matters requiring definitive age verification (such as retirement age planning, contract signing, etc.).
      </p>

      <h2>4. Affiliate Disclosure</h2>
      <p>
        This site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. 
      </p>

      <h2>5. Editorial Policy</h2>
      <p>
        Our blog content is reviewed for factual accuracy and relevance. However, we do not guarantee the completeness of historical or cultural facts (such as Zodiac assignments).
      </p>
    </PolicyLayout>
  );
}
