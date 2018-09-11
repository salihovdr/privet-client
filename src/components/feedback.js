import React from 'react';

export default function Feedback(props) {

  let feedbackText;
  if (!props.feedback.correct) {
    feedbackText = 
      <section className='feedback'>
        <div className='row'>
          <div className='col-12'>
            <div className='feedback-message'>
              <p>{props.feedback.message}</p>
              <p>Your answer was {props.userAnswer}. Correct answer was {props.feedback.answer}</p>
            </div>
          </div>
        </div>
      </section>;
  } else {
    feedbackText = <section className='feedback'>
      <div className='row'>
        <div className='col-12'>
          <div className='feedback-message'>
            <p>Good Job! Proceed to the next word.</p>
          </div>
        </div>
      </div>
    </section>;
  }

  return (
    <section>
      {feedbackText}
    </section>
  );
}