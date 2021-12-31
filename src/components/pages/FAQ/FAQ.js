import React, { useState } from 'react';
import Footer from '../../Footer';
import './FAQ.css';
import FAQ from '../../Faq';
import HeaderFAQ from '../../HeaderFAQ';
function App() {
  const [faqs, setfaqs] = useState([
    {
      question: 'When is FMC Weekend?',
      answer: '9th to 11th April, 2021. But you can start participating right now by registering.',
      open: true
    },
    {
      question: 'Is the participation in events and workshops paid?',
      answer:
        'There a variety of passes of varied pocket- friendly prices that one can buy to participate in an event or attend a workshop.',
      open: false
    },
    {
      question:
        "Is it possible to attend another genre's workshop while participating in one event?",
      answer:
        "No, for example, if you participate in one of the photography club's events, then you cannot attend a workshop of the design club. However, buying the All workshop pass allows you to participate in any and all workshops and the All Fest pass allows you to participate in any and all events and workshops.",
      open: false
    },
    {
      question: 'Who will be taking the workshop?',
      answer:
        "The details of the workshops can be checked on the website and the instagram page(@fmc_weekend) , so don't hold back and get your passes soon.",
      open: false
    },
    {
      question: 'Is the submission of previously clicked,written or made entries acceptable?',
      answer:
        'Yes, as long as the entry is free of plagiarism, any creation that has been made beforehand can be submitted.',
      open: false
    },
    {
      question: 'How does the leaderboard work?',
      answer:
        "Participants each receive a referral code which they distribute among their acquaintances who would receive a 10% discount on their pass prices. The leaderboard will display the number of times a referral code has been used and rank the participants accordingly. Whosoever's referral code is used the maximum number of times will receive cash prizes worth 3k.",
      open: false
    }
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="App">
      <HeaderFAQ />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
