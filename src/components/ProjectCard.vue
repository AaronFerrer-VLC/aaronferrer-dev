<template>
  <article class="card">
    <header class="card__header">
      <h3 class="card__title">{{ title }}</h3>
      <span v-if="status" class="card__status">{{ status }}</span>
    </header>

    <p class="card__description">{{ description }}</p>

    <ul class="card__stack">
      <li v-for="(tech, index) in stack" :key="index">
        {{ tech }}
      </li>
    </ul>

    <div class="card__actions">
      <a v-if="githubUrl" :href="githubUrl" target="_blank" rel="noopener" class="btn btn--ghost">
        Ver código
      </a>
      <a v-if="demoUrl" :href="demoUrl" target="_blank" rel="noopener" class="btn btn--primary">
        Ver demo
      </a>
    </div>

    <div v-if="videoUrl || screenshots?.length" class="card__media">
      <video
        v-if="videoUrl"
        :src="videoUrl"
        controls
        class="card__video"
      ></video>

      <div v-if="screenshots?.length" class="card__screenshots">
        <img
          v-for="(shot, index) in screenshots"
          :key="index"
          :src="shot"
          alt="Captura de {{ title }}"
        />
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  title: String,
  status: {
    type: String,
    default: "",
  },
  description: String,
  stack: {
    type: Array,
    default: () => [],
  },
  githubUrl: String,
  demoUrl: String,
  videoUrl: String,
  screenshots: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.card {
  border: 1px solid #111827;
  border-radius: 0.9rem;
  padding: 1.25rem 1.4rem;
  background: radial-gradient(circle at top left, #0f172a, #020617);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.card__header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
}

.card__title {
  font-size: 1.1rem;
}

.card__status {
  font-size: 0.75rem;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  border: 1px solid #22c55e;
  color: #bbf7d0;
}

.card__description {
  color: #9ca3af;
  font-size: 0.9rem;
}

.card__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.75rem;
  color: #a5b4fc;
}

.card__stack li {
  border-radius: 999px;
  background: #020617;
  padding: 0.15rem 0.6rem;
  border: 1px solid #1f2937;
}

.card__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.card__media {
  margin-top: 0.5rem;
}

.card__video {
  width: 100%;
  border-radius: 0.75rem;
  border: 1px solid #111827;
}

.card__screenshots {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

.card__screenshots img {
  width: 120px;
  border-radius: 0.5rem;
  border: 1px solid #111827;
  object-fit: cover;
}
</style>

