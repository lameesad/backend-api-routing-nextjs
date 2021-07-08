import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRef } from 'react'

export default function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your email Address</label>
          <input type="email" name="" id="email" ref={emailInputRef} />
        </div>

        <div>
          <label htmlFor="feedback">Your email Address</label>
          <textarea rows='5' type="email" name="" id="feedback" ref={feedbackInputRef} />
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  )
}
