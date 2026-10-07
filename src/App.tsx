import { useRef, useState, type FormEvent } from 'react';

const correctAnswer = 17 * 8;

export default function App() {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const answerInput = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredAnswer = Number(answer.trim());

    if (enteredAnswer === correctAnswer) {
      setFeedback('Correct.');
    } else {
      setFeedback('Try again.');
    }

    answerInput.current?.focus();
  }

  return (
    <main>
      <h1>Betamac</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="answer">17 × 8 = ?</label>
        <input
          ref={answerInput}
          id="answer"
          name="answer"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          autoFocus
          required
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        />
        <button type="submit">Check answer</button>
      </form>
      <p id="feedback" role="status">{feedback}</p>
    </main>
  );
}
