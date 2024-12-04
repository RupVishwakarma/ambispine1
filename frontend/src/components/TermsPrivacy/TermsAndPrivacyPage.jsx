import React, { useState } from "react";
import "./TermsAndPrivacy.css";

const TermsAndPrivacyPage = () => {
  const [activeTab, setActiveTab] = useState("terms");
  const [expandedSections, setExpandedSections] = useState({
    scope: true,
    response: true,
    client: true,
    ambiSpin: true,
    liability: true,
    communication: true,
    // Privacy policy sections
    intro: true,
    collection: true,
    usage: true,
    protection: true,
    cookies: true,
    thirdParty: true,
    rights: true,
    international: true,
    children: true,
    changes: true,
    contact: true,
    legal: true,
    consent: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const Section = ({ title, id, children }) => (
    <div className="section">
      <button
        onClick={() => toggleSection(id)}
        className={`section-header ${expandedSections[id] ? "active" : ""}`}
      >
        <h3>{title}</h3>
        <span className="chevron"></span>
      </button>
      {expandedSections[id] && (
        <div className="section-content">{children}</div>
      )}
    </div>
  );

  return (
    <div className="terms-privacy-container">
      <h1 className="page-title">Terms & Privacy Policy</h1>

      <div className="tabs">
        <div className="tabs-list">
          <button
            className={`tab-button ${activeTab === "terms" ? "active" : ""}`}
            onClick={() => setActiveTab("terms")}
          >
            Terms & Conditions
          </button>
          <button
            className={`tab-button ${activeTab === "privacy" ? "active" : ""}`}
            onClick={() => setActiveTab("privacy")}
          >
            Privacy Policy
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "terms" && (
            <div className="card">
              <div className="card-header">
                <h2>Terms and Conditions</h2>
              </div>
              <div className="card-content">
                <div className="scroll-area">
                  <Section title="1. Scope of Work" id="scope">
                    <p>
                      Ambi Spin will provide website maintenance services to
                      clients as outlined in the Website Maintenance Agreement,
                      based on the client's specific requests.
                    </p>
                  </Section>

                  <Section title="2. Response Time" id="response">
                    <ul>
                      <li>
                        Maintenance requests submitted after 6:00 PM (Indian
                        Time) will be deemed received on the next business day.
                      </li>
                      <li>
                        Requests submitted on weekends or government holidays
                        will be deemed received on the first business day
                        following the weekend and/or government holiday.
                      </li>
                      <li>
                        Ambi Spin aims to complete requested work within 24 to
                        48 hours of receiving the request, unless it's a major
                        request.
                      </li>
                    </ul>
                  </Section>

                  <Section title="3. Client Responsibilities" id="client">
                    <ul>
                      <li>
                        Provide clear and specific instructions for website
                        modifications.
                      </li>
                      <li>
                        Review and inspect Ambi Spin's services and work
                        promptly to ensure accuracy and appropriateness.
                      </li>
                      <li>
                        Communicate any omissions, errors, or changes to Ambi
                        Spin via email and/or telephone as soon as reasonably
                        possible.
                      </li>
                    </ul>
                  </Section>

                  <Section title="4. Ambi Spin Responsibilities" id="ambiSpin">
                    <ul>
                      <li>
                        Take reasonable steps to clarify ambiguous requests.
                      </li>
                      <li>
                        Notify clients or their agents when modifications are
                        made to their website.
                      </li>
                      <li>Attempt to resolve genuine errors quickly.</li>
                    </ul>
                  </Section>

                  <Section title="5. Liability" id="liability">
                    <ul>
                      <li>
                        Ambi Spin will not be liable for any loss, damage, or
                        injury due to delays or similar circumstances.
                      </li>
                      <li>
                        Ambi Spin will not be responsible for unclear or
                        ambiguous requests submitted by clients or their agents.
                      </li>
                    </ul>
                  </Section>

                  <Section title="6. Communication" id="communication">
                    <p>
                      Email communications will be deemed reasonable for all
                      purposes.
                    </p>
                    <p className="acknowledgment">
                      By using Ambi Spin's website maintenance services, clients
                      acknowledge that they have read, understood, and agreed to
                      these terms and conditions.
                    </p>
                  </Section>
                </div>
              </div>
            </div>
          )}

          {activeTab === "privacy" && (
            <div className="card">
              <div className="card-header">
                <h2>Privacy Policy</h2>
                <p className="last-updated">Last updated: October 22, 2024</p>
              </div>
              <div className="card-content">
                <div className="scroll-area">
                  <Section title="1. Introduction" id="intro">
                    <p>
                      Welcome to Ambi Spin's Privacy Policy. We respect your
                      privacy and are committed to protecting your personal
                      data. This privacy policy will inform you about how we
                      look after your personal data when you visit our website
                      and tell you about your privacy rights and how the law
                      protects you.
                    </p>
                  </Section>

                  <Section title="2. Cookie Policy" id="cookies">
                    <h4>2.1 What Are Cookies</h4>
                    <p>
                      Cookies are small text files placed on your device to
                      collect standard internet log information and visitor
                      behavior information.
                    </p>

                    <h4>2.2 How We Use Cookies</h4>
                    <p>We use cookies to:</p>
                    <ul>
                      <li>Improve site functionality</li>
                      <li>Analyze site usage</li>
                      <li>Remember user preferences</li>
                      <li>Facilitate authentication</li>
                      <li>Enable security features</li>
                    </ul>

                    <h4>2.3 Types of Cookies We Use</h4>
                    <ul>
                      <li>Essential cookies</li>
                      <li>Functional cookies</li>
                      <li>Analytical cookies</li>
                      <li>Performance cookies</li>
                    </ul>
                  </Section>

                  <Section title="3. Third-Party Services" id="thirdParty">
                    <p>
                      We maybe share your information with trusted third parties
                      for:
                    </p>
                    <ul>
                      <li>Payment processing</li>
                      <li>Analytics</li>
                      <li>Email communication</li>
                      <li>Customer support</li>
                      <li>Hosting services</li>
                    </ul>
                    <p>
                      All third-party providers are carefully selected and
                      required to maintain appropriate security measures.
                    </p>
                  </Section>

                  <Section title="4. Your Rights" id="rights">
                    <p>You have the right to:</p>
                    <ul>
                      <li>Access your personal data</li>
                      <li>Correct inaccurate data</li>
                      <li>Request deletion of your data</li>
                      <li>Object to processing</li>
                      <li>Data portability</li>
                      <li>Withdraw consent</li>
                      <li>Lodge a complaint with supervisory authorities</li>
                    </ul>
                  </Section>

                  <Section
                    title="5. International Transfers"
                    id="international"
                  >
                    <p>
                      If we transfer your data internationally, we ensure
                      appropriate safeguards are in place to protect your
                      information.
                    </p>
                  </Section>

                  <Section title="6. Children's Privacy" id="children">
                    <p>
                      Our services are not intended for children under 16 years
                      of age. We do not knowingly collect information from
                      children under 16.
                    </p>
                  </Section>

                  <Section title="7. Changes to This Policy" id="changes">
                    <p>
                      We may update this privacy policy from time to time,but my core policy will not be changes. We
                      will notify you of any significant changes by:
                    </p>
                    <ul>
                      <li>Posting the new policy on our website</li>
                      <li>Sending an email notification</li>
                      <li>Displaying a notice on our website</li>
                    </ul>
                  </Section>

                  <Section title="8. Contact Information" id="contact">
                    <p>
                      For any questions about this privacy policy or our privacy
                      practices, please contact us at:
                    </p>
                    <div className="contact-info">
                      <p>
                        <strong>AmbiSpine</strong>
                      </p>
                      <p>Email: ambispinetechnologies@gmail.com</p>
                      <p>Phone: +91 9685221056</p>
                      <p>Address: District Rewa, Village Bidawa (M.P.),India</p>
                    </div>
                  </Section>

                  <Section title="9. Consent" id="consent">
                    <p>
                    By using our website and services, you agree to our Privacy Policy and its terms. 
                    If you disagree with this policy, please refrain from continuing to use our website and services.
                    </p>
                    <p className="legal-note">
                      Please note: This document should be reviewed by legal
                      professionals before implementation.
                    </p>
                  </Section>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TermsAndPrivacyPage;
