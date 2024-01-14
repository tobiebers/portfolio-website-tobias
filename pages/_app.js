import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import Layout from "@/components/staticComponents/Layout";
import '/styles/navigation.css'
import 'styles/globals.css'
import 'styles/HeroCard.css'
import Spline from "@splinetool/react-spline";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Kreis-Element erstellen und zum Body hinzufügen
    const circle = document.createElement('div');
    circle.classList.add('mouse-circle');
    document.body.appendChild(circle);

    // Event-Listener, um die Position des Kreises zu aktualisieren
    const moveCircle = (e) => {
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', moveCircle);

    // Aufräumen, um Memory Leaks zu vermeiden
    return () => {
      document.removeEventListener('mousemove', moveCircle);
      document.body.removeChild(circle);
    };
  }, []);

  return (
    <div className="gradient-background">
      <Layout style={{ position: 'relative', zIndex: 1 }}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

