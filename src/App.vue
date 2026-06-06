<script setup>
import AnimatedTitle from './components/AnimatedTitle.vue';
import Countdown from './components/countdown.vue';
import { ref, onMounted, onUnmounted } from 'vue'

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
    <p></p>
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

</style>
