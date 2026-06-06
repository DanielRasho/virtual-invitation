<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const dateText = ref(null)

onMounted(() => {
  gsap.timeline({
    repeat: -1
  })
  .to(dateText.value, {
    duration: 1.5,
    ease: 'sine.inOut',

    textShadow: `
      -11px 11px 0 #bdbdbd,
      -22px 22px 0 #e6e6e6,
      -33px 33px 0 #7f7f7f
    `
  })
  .to(dateText.value, {
    duration: 1.5,
    ease: 'sine.inOut',

    textShadow: `
      -11px 11px 0 #e6e6e6,
      -22px 22px 0 #7f7f7f,
      -33px 33px 0 #bdbdbd
    `
  })
  .to(dateText.value, {
    duration: 1.5,
    ease: 'sine.inOut',

    textShadow: `
      -11px 11px 0 #7f7f7f,
      -22px 22px 0 #bdbdbd,
      -33px 33px 0 #e6e6e6
    `
  })
})

</script>

<template>
  <div class="title-container">
    <div class="save-the">
      SAVE THE
    </div>

    <div class="date">
      <span ref="dateText" class="date-text">
        DATE
      </span>
    </div>
  </div>
</template>

<style scoped>
.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
}

/* SAVE THE */

.save-the {
  font-family: 'Geologica', sans-serif;
  font-size: clamp(4rem, 25vw, 6rem);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 900;

  background: linear-gradient(
    270deg,
    #8b8b8b 0%,
    #363636 100%
  );

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* DATE */

.date {
  display: flex;
  justify-content: center;

  font-family: 'Agbalumo', serif;
  font-size: clamp(10rem,20vw, 10rem);
  line-height: 0.9;
}

.date {
  display: flex;
  justify-content: center;

  font-family: 'Agbalumo', serif;
  font-size: clamp(7rem, 20vw, 10rem);
  line-height: 0.9;
}

.date-text {
  display: inline-block;
  position: relative;
  background-color: transparent;
  top: -3rem;

  color: #cfcfcf;

  -webkit-text-stroke: 2px white;

  text-shadow:
    -11px 11px 0 #7f7f7f,
    -22px 22px 0 #bdbdbd,
    -33px 33px 0 #e6e6e6;
}
</style>