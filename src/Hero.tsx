type HeroProps = {
  onDiscoverRitual: () => void;
};

const Hero: React.FC<HeroProps> = ({ onDiscoverRitual }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onDiscoverRitual();
  };

  return (
    <header className="hero">
      <div className="hero-content">
        <p className="hero-kicker">Debugging extraño, resultados reales</p>
        <h1>Habla. El pato escucha.</h1>
        <p className="hero-subtitle">
          Una guía sobre la técnica de depuración más curiosa (y
          sorprendentemente efectiva) que usan los programadores cuando el
          código no quiere hablar.
        </p>
        <button className="hero-button" onClick={handleClick}>
          Descubre el ritual 🕯️
        </button>
        <p className="hero-whisper">
          Pista: todo empieza contándole tu problema a un pato de hule.
        </p>
      </div>

      {/* Círculo ritual debajo del texto */}
      <div className="ritual-circle">
        <div className="ritual-core">
          <div className="ritual-ring ritual-ring--outer" />
          <div className="ritual-ring ritual-ring--middle" />
          <div className="ritual-ring ritual-ring--inner" />

          <div className="ritual-pentagram">
            <svg
              viewBox="0 0 100 100"
              className="pentagram-svg"
              aria-hidden="true"
            >
              <circle
                cx="50"
                cy="50"
                r="47"
                fill="none"
                stroke="rgba(248, 250, 252, 0.9)"
                strokeWidth="3"
              />
              <polygon
                points="
                  50,8
                  61,38
                  94,38
                  67,58
                  77,90
                  50,72
                  23,90
                  33,58
                  6,38
                  39,38
                "
                fill="none"
                stroke="rgba(248, 250, 252, 0.9)"
                strokeWidth="3"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="ritual-symbol">🦆</div>
        </div>

        <p className="ritual-label">ORDEN DEL PATO SILENCIOSO</p>
        <p className="ritual-whisper-top">susurra tus bugs aquí…</p>
      </div>
    </header>
  );
};

export default Hero;
