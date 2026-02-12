<template>
  <main class="home-page">
    <section class="home-page__header">
      <h1 class="home-page__title">Фотоальбом</h1>
      <p class="home-page__subtitle">
        Выберите альбом, чтобы посмотреть фотографии.
      </p>
    </section>

    <section class="home-page__albums">
      <RouterLink
        v-for="album in albums"
        :key="album.to"
        :to="album.to"
        class="home-page__link"
      >
        <AppButton>
          {{ album.label }}
        </AppButton>
      </RouterLink>
    </section>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppButton from '@/components/ui/AppButton.vue'

const albums = [
  { to: '/albums/nature', label: 'Природа' },
  { to: '/albums/family', label: 'Семья' },
  { to: '/albums/travel', label: 'Путешествия' },
]
</script>

<style scoped>
.home-page {
  max-width: 960px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  text-align: center;
}

.home-page__header {
  margin-bottom: 2.5rem;
}

.home-page__title {
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.home-page__subtitle {
  color: #6b7280;
}

.home-page__albums {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.home-page__link {
  text-decoration: none;
}
</style>

