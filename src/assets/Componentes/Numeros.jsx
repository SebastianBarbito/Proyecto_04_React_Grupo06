import React, { useState, useEffect } from "react";

function Numeros() {
  const [numeroSecreto, setNumeroSecreto] = useState(null);
  const [numeroUsuario, setNumeroUsuario] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [intentos, setIntentos] = useState(0);
  const [juegoTerminado, setJuegoTerminado] = useState(false);

  useEffect(() => {
    const random = Math.floor(Math.random() * 100) + 1;
    setNumeroSecreto(random);
  }, []);

  const verificarNumero = () => {
    if (juegoTerminado) return;
    const intento = parseInt(numeroUsuario);

    if (isNaN(intento)) {
      setMensaje("Ingresa un número válido.");
      return;
    }

    setIntentos(intentos + 1);

    if (intento === numeroSecreto) {
      setMensaje(`¡Acertaste! El número era ${numeroSecreto}. Intentos: ${intentos + 1}`);
      setJuegoTerminado(true);
    } else if (intento < numeroSecreto) {
      setMensaje("Muy bajo, prueba con un número mayor.");
    } else {
      setMensaje("Muy alto, prueba con un número menor.");
    }

    setNumeroUsuario(""); // limpiar input
  };

  const rendirse = () => {
    setMensaje(`Te rendiste. El número era ${numeroSecreto}.`);
    setJuegoTerminado(true);
  };

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", marginTop: "50px" }}>
      <h1> Adivina el Número</h1>
      {!juegoTerminado && (
        <div>
          <input
            type="number"
            value={numeroUsuario}
            onChange={(e) => setNumeroUsuario(e.target.value)}
            placeholder="Ingresa un número"
          />
          <button onClick={verificarNumero}>Verificar</button>
          <button onClick={rendirse}>Me rindo</button>
        </div>
      )}

      <p>{mensaje}</p>

      {juegoTerminado && <p>Juego terminado.</p>}
    </div>
  );
}

export default Numeros;