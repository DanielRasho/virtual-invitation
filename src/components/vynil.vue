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
      <svg class="vinyl-text" viewBox="0 0 100 100">
        <defs>
          <path
            id="circlePath"
            d="
              M 50,50
              m -35,0
              a 35,35 0 1,1 70,0
              a 35,35 0 1,1 -70,0
            "
          />
        </defs>

        <text>
          <textPath
            href="#circlePath"
            startOffset="0%"
          >
          </textPath>
        </text>
      </svg>
      <div class="vinyl-center"></div>
    </div>
  </div>
</template>

<style scoped>
.vinyl-container {
  width: 100%;
  height: 200px;

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

  transform: translateY(40%);

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
    transform: translateY(35%) rotate(0deg);
  }

  to {
    transform: translateY(35%) rotate(360deg);
  }
}
  
.vinyl-text {
  position: absolute;
  inset: 0;
  background-color: transparent;

  width: 100%;
  height: 100%;

  pointer-events: none;
}

.vinyl-text text {
  fill: rgba(255, 255, 255, 0.7);

  font-size: 6px;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: 'geologica', sans-serif;
  font-style: italic;
}
</style>