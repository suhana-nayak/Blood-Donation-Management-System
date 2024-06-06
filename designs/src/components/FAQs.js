import React from 'react'
import "./FAQs.css"
import { Accordion } from './Accordion'

function FAQs() {
  const data = [
    {
      question: "Who can donate blood?",
      answer:
        "Generally, individuals aged 18 to 65 (age requirements may vary) who meet certain health criteria are eligible to donate blood. Common restrictions include weight, recent illnesses, and travel history.",
    },
    {
      question: "How often can I donate blood?",
      answer:
        "Whole blood donation can typically be done every 8 to 12 weeks, depending on local guidelines. Platelet and plasma donations might have different time intervals.",
    },
    {
      question: "How long does the donation process take?",
      answer:
        "The whole process, including registration, health screening, donation, and post-donation refreshments, usually takes about 30 minutes to an hour.",
    },
    {
      question: "What tests are performed on donated blood?",
      answer:
        "Donated blood is screened for various infectious diseases, including HIV, hepatitis, and syphilis. The exact tests may vary depending on the location and regulations.",
    },
    {
      question: "Is it safe to donate blood?",
      answer:
        "Yes, donating blood is generally safe. Blood donation centers adhere to strict guidelines to ensure the safety of both donors and recipients.",
    },
    {
      question: "How is donated blood used?",
      answer:
        "Donated blood is used for various medical purposes, including surgeries, trauma care, cancer treatments, and managing medical conditions like anemia.",
    },
    {
      question: "Can I donate if I have a medical condition or take medications?",
      answer:
        "It depends on the medical condition and the medications you take. Some conditions and medications might temporarily disqualify you from donating blood.",
    },
    {
      question: "Can I donate if I've recently travelled to certain countries?",
      answer:
        "Travel to certain regions might affect your eligibility due to concerns about exposure to infectious diseases. Guidelines can vary depending on your location and the destination.",
    },
    {
      question: "Can I donate if I have tattoos or piercings?",
      answer:
        "Depending on the region, there might be a waiting period after getting a new tattoo or piercing before you can donate blood. This is to reduce the risk of transmitting infections.",
    },
    {
      question: "How can I prepare for a blood donation?",
      answer:
        "Stay hydrated, eat a balanced meal before donating, and get a good night's sleep. Avoid alcohol consumption the night before and on the day of donation.",
    },
  ];
  return (
    <div style={{ marginTop: "120px" }}>
      <div>
        <div>
          <h3 className="main-title">Frequently asked questions</h3>

          <div className="main-info">
            {data.map((section, index) => (
              <Accordion key={index} section={section} />
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default FAQs