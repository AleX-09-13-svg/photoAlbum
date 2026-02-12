
<template>
  <section class="album-page">
    <header class="album-page__header">
      <h2 class="album-page__title">Альбом: Семья</h2>
      <p class="album-page__subtitle">
        Семейные фотографии.
      </p>
    </header>

    <div class="album-page__grid">
      <PhotoCard
        v-for="photo in photos"
        :key="photo.src"
        :src="photo.src"
        :title="photo.title"
        :description="photo.description"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import PhotoCard from '@/components/ui/PhotoCard.vue'

const photos = [
  {
    src: new URL('@/assets/images/albums/family/DSC_0001.jpg', import.meta.url)
      .href,
    title: 'Семья 1',
    description: 'Описание фото 1',
  },
  {
    src: new URL('@/assets/images/albums/family/DSC_0002.jpg', import.meta.url)
      .href,
    title: 'Семья 2',
    description: 'Описание фото 2',
  },
  {
    src: new URL('@/assets/images/albums/family/DSC_0003.jpg', import.meta.url)
      .href,
    title: 'Семья 3',
    description: 'Описание фото 3',
  },
]
</script>

<style scoped>
.album-page {
  max-width: 960px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
}

.album-page__title {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.album-page__subtitle {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.album-page__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}
</style>
