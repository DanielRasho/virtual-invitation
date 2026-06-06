<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  value: {
    type: [Number, String],
    required: true
  },
  label: {
    type: String,
    required: true
  }
})

const flipping = ref(false)
const previous = ref(props.value)

const displayValue = computed(() =>
  String(props.value).padStart(2, '0')
)

const previousValue = computed(() =>
  String(previous.value).padStart(2, '0')
)

watch(
  () => props.value,
  (newVal, oldVal) => {
    if (newVal === oldVal) return

    previous.value = oldVal

    flipping.value = false

    requestAnimationFrame(() => {
      flipping.value = true

      setTimeout(() => {
        flipping.value = false
      }, 600)
    })
  }
)
</script>

<template>
  <span
    class="flip-clock__piece"
    :class="{ flip: flipping }"
  >
    <b class="flip-clock__card card">

      <b class="card__top">
        {{ displayValue }}
      </b>

      <b
        class="card__bottom"
        :data-value="previousValue"
      />

      <b
        class="card__back"
        :data-value="previousValue"
      >
        <b
          class="card__bottom"
          :data-value="displayValue"
        />
      </b>

    </b>

    <span class="flip-clock__slot">
      {{ label }}
    </span>
  </span>
</template>

<style scoped>
.flip-clock__piece {
  display: inline-block;
  margin: 0 10px;
}

.flip-clock__slot {
  display: block;
  margin-top: 0.75rem;
  text-align: center;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-style: italic;
  font-family: 'montserrat', sans-serif;
}

.card {
  display: block;
  position: relative;
  padding-bottom: 0.72em;
  font-size: clamp(2rem, 8vw, 6rem);
  font-family: "Geologica", sans-serif;
  line-height: 0.95;
}

.card__top,
.card__bottom,
.card__back::before,
.card__back::after {
  display: block;
  height: 0.72em;
  width: 1.9em;
  padding: 0.25em;
  color: #ccc;
  background: #222;
  border-radius: 0.15em 0.15em 0 0;

  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform: translateZ(0);

  text-align: center;
  overflow: hidden;
}

.card__top {
  position: relative;
  z-index: 3;
}

.card__bottom {
  color: #fff;
  position: absolute;
  top: 50%;
  left: 0;

  background: #393939;
  border-top: 1px solid #000;
  border-radius: 0 0 0.15em 0.15em;

  pointer-events: none;
  overflow: hidden;
}

.card__bottom::after {
  content: attr(data-value);
  display: block;
  margin-top: -0.72em;
}

.card__back {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.card__back::before {
  content: attr(data-value);
  display: block;
  overflow: hidden;
}

.flip .card__back::before {
  animation: flipTop 0.3s cubic-bezier(.37,.01,.94,.35);
  animation-fill-mode: both;
  transform-origin: center bottom;
}

.flip .card__back .card__bottom {
  animation: flipBottom 0.6s cubic-bezier(.15,.45,.28,1);
  animation-fill-mode: both;
  transform-origin: center top;
}

@keyframes flipTop {
  0% {
    transform: rotateX(0deg);
    z-index: 2;
  }

  100% {
    transform: rotateX(-90deg);
    opacity: 0;
  }
}

@keyframes flipBottom {
  0% {
    transform: rotateX(90deg);
    opacity: 0;
  }

  100% {
    transform: rotateX(0deg);
    opacity: 1;
  }
}
</style>