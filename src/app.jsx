import { Router } from 'preact-router';
import { lazy, Suspense } from 'preact/compat';
import { Header } from './components/Header.jsx';
import { Loading } from './components/Loading.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

export function App() {
  return (
    <div id="app">
      <Header />
      <Suspense fallback={<Loading />}>
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Contact path="/contact" />
        </Router>
      </Suspense>
    </div>
  );
}
