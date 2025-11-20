import { useState } from "react";
import Hero from "./Hero";
import duckHero from "./assets/duck-hero.png";

const App: React.FC = () => {
  const [isBurning, setIsBurning] = useState(false);

  const handleDiscoverRitual = () => {
    // Mostrar pantalla quemándose
    setIsBurning(true);

    // Después de 2.3s, ocultar efecto y hacer scroll al ritual
    setTimeout(() => {
      const ritualSection = document.getElementById("ritual");
      ritualSection?.scrollIntoView({ behavior: "smooth" });
      setIsBurning(false);
    }, 2300);
  };

  return (
    <div className="page">
      {/* Overlay de "pantalla quemándose" */}
      {isBurning && (
        <div className="burn-overlay">
          <div className="burn-flames" />
        </div>
      )}

      <Hero onDiscoverRitual={handleDiscoverRitual} />

      <main>
        <section id="ritual" className="section ritual">
          <div className="ritual-card">
            <h2>El ritual del pato</h2>
            <p>
              El método es simple, pero funciona mejor si lo sigues con calma.
              Piensa en esto como un pequeño ritual para obligar a tu cerebro a
              ver el problema desde fuera.
            </p>
            <ol className="ritual-steps">
              <li>
                Consigue un pato de hule (o cualquier figura que adoptes como
                pato).
              </li>
              <li>
                Siéntalo frente a ti, en tu escritorio, y dile que necesitas su
                ayuda.
              </li>
              <li>
                Explícale qué se supone que hace tu código, y luego repasa línea
                por línea qué está ocurriendo en realidad.
              </li>
              <li>
                En algún punto notarás que lo que dices no coincide con lo que
                pasa. Ahí es cuando el pato ha cumplido su trabajo.
              </li>
            </ol>
            <p className="ritual-note">
              Nota: en emergencias un compañero puede sustituir al pato, pero
              suele ser menos cómodo admitirle tus errores a un humano.
            </p>
          </div>
        </section>

        <section id="que-es" className="section section-with-image">
          <div className="section-grid">
            <div className="section-image-wrapper">
              <img src={duckHero} alt="Pato de hule con el texto Talk to me" />
            </div>

            <div className="section-text">
              <h2>¿Qué es el Rubber Duck Debugging?</h2>
              <p>
                El <strong>rubber duck debugging</strong> es una técnica usada
                por programadores para encontrar errores explicando el problema
                en voz alta a un pato de hule u objeto inanimado. Al ordenar lo
                que piensas, muchas veces descubres la solución tú mismo.
              </p>
              <p>
                No es magia: al tener que explicar con calma qué querías hacer,
                qué hiciste y qué está pasando realmente, tu cerebro detecta
                cosas que antes dabas por hechas.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Hecho con 🧠 + ☕ + 🦆 por Exa.</p>
      </footer>
    </div>
  );
};

export default App;
