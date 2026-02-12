<template>
  <figure class="photo-card">
    <img :src="src" :alt="title" class="photo-card__image" />
    <figcaption class="photo-card__caption">
      <h3 class="photo-card__title">{{ title }}</h3>
      <p v-if="description" class="photo-card__description">
        {{ description }}
      </p>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  title: string
  description?: string
}>()
</script>

<style scoped>
.photo-card {
  border-radius: 16px;
  overflow: hidden;
  background: #111827;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(156, 163, 175, 0.25);
}

.photo-card__image {
  display: block;
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.photo-card__caption {
  padding: 0.75rem 1rem 1rem;
}

.photo-card__title {
  font-size: 1rem;
  font-weight: 600;
  color: #e5e7eb;
  margin-bottom: 0.25rem;
}

.photo-card__description {
  font-size: 0.875rem;
  color: #9ca3af;
}
</style>

