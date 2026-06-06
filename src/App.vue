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
    <div/>
      

    </div>
    <p class="countdown">
      <Countdown label="Dias" :value="days"/>
      <Countdown label="Horas" :value="hours" />
      <Countdown label="Minutos" :value="minutes" />
    </p>

    <Info></Info>
    
    <div class="hero-btn">
      <HeroButton text="Confirmar Asistencia" class="hero-btn-uwu"></HeroButton>
      <HeroButton text="Ver Ubicación" class="hero-btn-uwu"></HeroButton>
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

</style>
