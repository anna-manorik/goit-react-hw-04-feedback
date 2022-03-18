import React, { useState, useEffect } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePers, setPositivePers] = useState(0);

  const handleBtnClick = label => {
    // console.log(label)

    switch (label) {
      case 'good':
        setGood(prevStateGood => prevStateGood + 1);
        break;

      case 'neutral':
        setNeutral(prevStateNeutral => prevStateNeutral + 1);
        break;

      case 'bad':
        setBad(prevStateBad => prevStateBad + 1);
        break;

      default:
        console.log('any results');
    }
  };

  useEffect(() => {
    const total = good + neutral + bad;
    setTotal(total);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPositivePers(((good / total) * 100).toFixed(0));
  }, [total]);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          labels={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleBtnClick}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePers={positivePers}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

