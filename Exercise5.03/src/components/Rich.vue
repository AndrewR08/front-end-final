<template>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <img :src="url" width="200" height="200" alt="Team Logo" class="center" />
      </div>
      <div class="card-back">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <a :href="url2" target="_blank">More Details</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['url', 'url2', 'title', 'description']
}
</script>

<style scoped>
/*.card {
  display: flex;
  flex-direction: column;
  background-color: gray;
  max-width: 800px;
  padding-bottom: 2em;
  padding-top: 2em;
  
  border: black;
  border-style: solid;
  text-align: center;
}*/ 
h3 {
  font-weight: normal;
  margin-bottom: 0;
  padding-bottom: 0;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.card {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}
.card-inner {
  /*position: relative;
  width: 100%;
  height: 100%;*/
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
/* Do an horizontal flip when you move the mouse over the flip box container */
.card:hover .card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.card-back {
  background-color: dodgerblue;
  color: black;
  transform: rotateY(180deg);
}
</style>
