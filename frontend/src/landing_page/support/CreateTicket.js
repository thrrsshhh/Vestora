import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const faqs = [
  {
    question: "How do I fund my account?",
    answer:
      "To fund your account, log in and go to the 'Wallet' section. Select your preferred payment method such as bank transfer, UPI, or debit/credit card, and follow the on-screen instructions to complete the transaction.",
  },
  {
    question: "Are there any trading fees?",
    answer:
      "Yes, a small trading fee is applied to every trade. The fee varies depending on the asset and transaction size. You can view the exact fee on the order confirmation screen before completing a trade.",
  },
  {
    question: "How do I enable two-factor authentication?",
    answer:
      "To enable 2FA, go to your account settings, select 'Security', and then choose 'Enable Two-Factor Authentication'. Follow the prompts to set up 2FA using Google Authenticator or another supported app.",
  },
  {
    question: "What are your trading hours?",
    answer:
      "Our platform operates 24/7, allowing you to trade at any time. However, certain assets may be affected by market-specific hours or maintenance windows. Any scheduled downtime will be notified in advance.",
  },
  {
    question: "How do I withdraw funds?",
    answer:
      "To withdraw funds, navigate to the 'Wallet' section, click 'Withdraw', and choose your withdrawal method. Enter the amount and confirm the transaction. Withdrawals typically process within 1–3 business days.",
  },
  {
    question: "Is my money safe with Vestora?",
    answer:
      "Absolutely. Vestora uses bank-grade encryption, two-factor authentication, and cold storage for digital assets. Your funds are protected with the highest security standards and monitored 24/7.",
  },
];

const CreateTicket = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-2">Frequently Asked Questions</h2>
        <p className="text-center text-muted mb-4">
          Quick answers to common questions
        </p>

        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item mb-2" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreateTicket;
