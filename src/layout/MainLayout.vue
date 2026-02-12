<template>
  <div class="layout">
    <header class="layout__header">
      <h1 class="layout__logo">Фотоальбом</h1>
    </header>

    <main class="layout__content">
      <slot />
    </main>

    <footer class="layout__footer">
      <small>© {{ new Date().getFullYear() }} Мой фотоальбом</small>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: radial-gradient(circle at top left, #1f2937 0, #020617 55%, #000 100%);
  color: #e5e7eb;
}

.layout__header {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(31, 41, 55, 0.9);
  backdrop-filter: blur(8px);
}

.layout__logo {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.layout__content {
  flex: 1;
}

.layout__footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid rgba(31, 41, 55, 0.9);
  font-size: 0.75rem;
  color: #6b7280;
  text-align: center;
}
</style>

