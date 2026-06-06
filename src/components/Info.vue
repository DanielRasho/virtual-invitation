<template>
  <section class="event-info">
    <div class="info-row">
      <div class="info-card">
        <h3>Día</h3>
        <p>14 de junio</p>
      </div>

      <div class="info-card">
        <h3>Hora</h3>
        <p>6:00 PM – 10:00 PM</p>
      </div>
    </div>

    <div class="info-card location-card">
      <h3>Lugar</h3>
        <p>
            Edificio Cámara de Industria,
            9-21 Nivel 6 C.A., Ruta 6,<br>
            Ciudad de Guatemala 01004
        </p>
    </div>
  </section>
</template>

<style scoped>
.event-info {
  width: min(600px, 90%);
  margin: 4rem auto;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
}

.info-row {
  display: flex;
  gap: 1.5rem;
}

.info-card {
  flex: 1;


  padding: 1rem;

  backdrop-filter: blur(4px);

  text-align: center;

}

.info-card h3 {

  border-bottom: 2px solid rgba(122, 122, 122, 0.35);
  
  margin-bottom: 0.75rem;

  font-family: 'Geologica', sans-serif;
  font-size: 1.2rem;
  letter-spacing: .15em;
  text-transform: uppercase;

  color: #666;
  background-color: transparent;
}

.info-card p {

  background-color: transparent;
  font-family: 'montserrat', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;

  color: #2f2f2f;
}

.location-card {
  width: 100%;
}

/* Mobile */
@media (max-width: 500px) {
  .info-row {
    flex-direction: column;
  }

  .info-card {
    padding: 0.5rem;
  }

  .info-card p {
    font-size: 1rem;
  }
}
</style>