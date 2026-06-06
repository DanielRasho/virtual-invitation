<script setup>
defineProps({
  href: {
    type: String,
    required: true
  },

  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="retro-btn"
  >
    <span class="layer layer-3"></span>
    <span class="layer layer-2"></span>
    <span class="layer layer-1"></span>

    <span class="content">
      {{ text }}
    </span>
  </a>
</template>

<style scoped>
.retro-btn {
  position: relative;

  display: block;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  font-family: 'Geologica', sans-serif;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;
  
  margin-bottom: 2rem;

  color: black;

  transition: transform 0.3s ease;

  padding: 0;
  cursor: pointer;
}

/* Main button face */

.content {
  position: relative;
  z-index: 10;

  display: block;

  background: rgb(54, 54, 54);
  color: white;


  padding: 1rem;

  transition: transform 0.3s ease;
  
  border-radius: 10px;
}

/* Shadow layers */

.layer {
  border-radius: 10px;
  position: absolute;

  inset: 0;

  transition: transform 0.3s ease;

  pointer-events: none;
}

/* Darkest layer (closest) */

.layer-1 {
  z-index: 1;

  background: #6f6f6f;


  animation: colorCycle 3s linear infinite;
}

/* Medium layer */

.layer-2 {
  z-index: 0;

  background: #b3b3b3;


  animation: colorCycle 3s linear infinite;
  animation-delay: 1s;
}

/* Lightest layer (furthest) */

.layer-3 {
  background: #e0e0e0;

  animation: colorCycle 3s linear infinite;
  animation-delay: 2s;
}

/* Hover effect */

.retro-btn:hover .layer-1 {
  transform: translate(-4px, 4px);
}

.retro-btn:hover .layer-2 {
  transform: translate(-12px, 12px);
}

.retro-btn:hover .layer-3 {
  transform: translate(-20px, 20px);
}

.retro-btn:hover .content {
  transform: translate(3px, -3px);
}

/* Continuous color rotation */

@keyframes colorCycle {
  0% {
    background: #6f6f6f;
  }

  33% {
    background: #b3b3b3;
  }

  66% {
    background: #e0e0e0;
  }

  100% {
    background: #6f6f6f;
  }
}
</style>