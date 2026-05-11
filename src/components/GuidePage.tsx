import { Link, useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import type { GuideAnswerMap } from '../utils/scoring';
import { useState } from 'react';

type GuidePageProps = {
  answers: GuideAnswerMap;
  setAnswers: (answers: GuideAnswerMap) => void;
};

export const GuidePage = ({ answers, setAnswers }: GuidePageProps) => {
  const [i, setI] = useState(0);
  const q = questions[i];
  const nav = useNavigate();

  const hasAnswer = Boolean(answers[q.id]);

  return (
    <section className="container">
      <h1>Find din mest oplagte vej</h1>
      <p>
        Spørgsmål {i + 1} af {questions.length}
      </p>

      <div className="progress" aria-label="Fremskridt">
        <span style={{ width: `${((i + 1) / questions.length) * 100}%` }} />
      </div>

      <article className="qCard">
        <h2>{q.q}</h2>

        <div className="answers">
          {q.options.map((o) => (
            <button
              key={o}
              type="button"
              className={answers[q.id] === o ? 'ans active' : 'ans'}
              onClick={() => setAnswers({ ...answers, [q.id]: o })}
            >
              {o}
            </button>
          ))}
        </div>
      </article>

      <div className="btnRow">
        <button
          type="button"
          className="btn ghost"
          disabled={i === 0}
          onClick={() => setI(i - 1)}
        >
          Tilbage
        </button>

        {i < questions.length - 1 ? (
          <button
            type="button"
            className="btn"
            disabled={!hasAnswer}
            onClick={() => setI(i + 1)}
          >
            Næste
          </button>
        ) : (
          <button
            type="button"
            className="btn"
            disabled={!hasAnswer}
            onClick={() => nav('/result')}
          >
            Se resultat
          </button>
        )}

        <Link className="btn ghost" to="/">
          Til kortet
        </Link>
      </div>
    </section>
  );
};
