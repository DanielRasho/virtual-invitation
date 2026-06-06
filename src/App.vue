<script setup>
import AnimatedTitle from './components/AnimatedTitle.vue';
import Countdown from './components/countdown.vue';
import { ref, onMounted, onUnmounted } from 'vue'
import Vynil from './components/vynil.vue';

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)

const targetDate = new Date('2026-08-08T00:00:00')

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
    <div/>
      

    </div>
    <p class="countdown">
      <Countdown label="Dias" :value="days"/>
      <Countdown label="Horas" :value="hours" />
      <Countdown label="Minutos" :value="minutes" />
    </p>
    <!-- FOOTER -->
    <div class="record-wrapper">
      <Vynil image="vinyl.jpg"></Vynil>      
    </div>
</template>

<style scoped>

.title {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.countdown {
  display: flex;
  align-items: center;
  justify-content: center;
}

.record-wrapper {
  position: absolute;
  width: 75vw;
  margin: auto;
  background-color: transparent;
  left: 0;
  right: 0;
  bottom: 0;
}

@media (min-width: 700px) {
  .record-wrapper {
    width: 30vw;
  }
}

</style>
