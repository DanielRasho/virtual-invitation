<script setup>
defineProps({
  image: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="vinyl-container">
    <div
      class="vinyl"
      :style="{ backgroundImage: `url(${image})` }"
    >
      <div class="vinyl-center"></div>
    </div>
  </div>
</template>

<style scoped>
.vinyl-container {
  width: 100%;
  height: 100%;

  overflow: hidden;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
}

.vinyl {
  width: 100%;
  aspect-ratio: 1;

  border-radius: 50%;

  background-size: cover;
  background-position: center;

  filter: grayscale(100%);

  animation: spin 12s linear infinite;

  position: relative;

  transform: translateY(50%);

  box-shadow:
    inset 0 0 0 2px rgba(255,255,255,.15),
    inset 0 0 40px rgba(0,0,0,.6);
}

.vinyl::before {
  content: '';

  position: absolute;
  inset: 0;

  border-radius: 50%;

  background:
    repeating-radial-gradient(
      circle,
      rgba(255,255,255,.03) 0px,
      rgba(255,255,255,.03) 2px,
      transparent 2px,
      transparent 8px
    );
}

.vinyl-center {
  position: absolute;

  width: 18%;
  height: 18%;

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  border-radius: 50%;

  background: #111;

  border: 3px solid #d8d8d8;
}

@keyframes spin {
  from {
    transform: translateY(50%) rotate(0deg);
  }

  to {
    transform: translateY(50%) rotate(360deg);
  }
}
</style>