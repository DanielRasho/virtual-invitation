<script setup>
import AnimatedTitle from './components/AnimatedTitle.vue';
import Countdown from './components/countdown.vue';
import { ref, onMounted, onUnmounted } from 'vue'
import Vynil from './components/vynil.vue';
import Banner from './components/banner.vue';
import Info from './components/Info.vue';
import HeroButton from './components/HeroButton.vue';

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)

const targetDate = new Date('2026-06-14T18:00:00')

function updateCountdown() {
  const diff = targetDate - new Date()

  days.value = Math.max(
    0,
    Math.floor(diff / (1000 * 60 * 60 * 24))
  )

  hours.value = Math.max(
    0,
    Math.floor((diff / (1000 * 60 * 60)) % 24)
  )

  minutes.value = Math.max(
    0,
    Math.floor((diff / (1000 * 60)) % 60)
  )
}

let interval

onMounted(() => {
  updateCountdown()
  interval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
    <!-- HEADER -->
    <!-- TITLE -->

    <div class="title">
      <AnimatedTitle></AnimatedTitle>
      <Banner class="title-banner"></Banner>
    </div>
    
    <p class="subtitle">
      "Proyecto final de montaje de eventos y servicios de catering"
    </p>
    <p class="countdown">
      <Countdown label="Dias" :value="days"/>
      <Countdown label="Horas" :value="hours" />
      <Countdown label="Minutos" :value="minutes" />
    </p>

    <Info></Info>
    
    <div class="hero-btn">
      <HeroButton 
      href="https://docs.google.com/forms/d/e/1FAIpQLSfObldUuUTPkA2LRGaqGU9b8W13EzrTvspks7qM0wEViRImwQ/viewform?usp=dialog"
      text="Confirmar Asistencia" class="hero-btn-uwu"></HeroButton>
      <HeroButton 
      href="https://www.google.com/maps/place/Banquetes+Club+Industrial/@14.6159082,-90.5168959,17z/data=!3m1!4b1!4m6!3m5!1s0x8589a23249e8c915:0x5c210708d21911ee!8m2!3d14.615903!4d-90.514321!16s%2Fg%2F11b8zm73gt?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
      text="Ver Ubicación" class="hero-btn-uwu"></HeroButton>
    </div>

    <!-- FOOTER -->
    <div class="record-wrapper">
      <Vynil image="vinyl.jpg"></Vynil>      
    </div>
</template>

<style scoped>

.title {
  padding-top: 3rem;
  padding-bottom: 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title-banner {
  z-index: 100;
}

.countdown {
  display: flex;
  align-items: center;
  justify-content: center;
}

.record-wrapper {
  width: 75vw;
  margin: auto;
  background-color: transparent;
  left: 0;
  right: 0;
  bottom: 0;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

@media (min-width: 700px) {
  .record-wrapper {
    width: 30vw;
  }
}

.hero-btn{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.hero-btn-uwu{
  width: min(60%, 30ch);
}

.subtitle {
  text-align: center;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  font-style: italic;
  
  margin-bottom: 2rem;
  padding: 0 1ch;
}

</style>
