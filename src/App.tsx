import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { HomePage } from './components/HomePage';
import { GuidePage } from './components/GuidePage';
import { ResultPage } from './components/ResultPage';
import { useMemo, useState } from 'react';
import { computeResult, type GuideAnswerMap } from './utils/scoring';

export default function App() {
  const [answers, setAnswers] = useState<GuideAnswerMap>({});
  const result = useMemo(() => computeResult(answers), [answers]);

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guide" element={<GuidePage answers={answers} setAnswers={setAnswers} />} />
        <Route path="/result" element={<ResultPage result={result} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppLayout>
  );
}
