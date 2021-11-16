<template>
  <div class="card">
    <img :src="url" width="200" height="200" alt="Team Logo" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <a :href="url2" target="_blank">More Details</a>
  </div>
</template>

<script>
export default {
  props: ['url', 'url2', 'title', 'description']
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  padding: 1em
}
h3 {
  font-weight: normal;
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>
