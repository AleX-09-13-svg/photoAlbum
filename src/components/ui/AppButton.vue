<template>
  <button class="app-button">
    <slot />
  </button>
</template>

<style scoped>
.app-button {
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg, #42b883, #2c3e50);
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.03em;
  transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.app-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 14px 24px rgba(0, 0, 0, 0.18);
  opacity: 0.96;
}

.app-button:active {
  transform: translateY(1px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.18);
}
</style>

