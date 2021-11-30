<template>
  <div class="card">
    <div class="card-inner">
      <div id="demo" class="card-front">
        <img :src="url" width="500" height=auto alt="Team Logo" />
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
  props: ['url', 'url2', 'title', 'description'], 
  title: 'Foo Page'
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

.card {
  background-color: rgb(138, 138, 138);
  width: 300px;
  height: 200px;
  border: 3px solid #080808;
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
  vertical-align: middle;
  text-align: center;
}

/* Style the front side (fallback if image is missing) */
.card-front {
  background-color: rgb(104, 93, 93);
  color: black;
  vertical-align: middle;
}

/* Style the back side */
.card-back {
  background-color: orange;
  color: rgb(0, 0, 0);
  transform: rotateY(180deg);
}
img {
  width: 60%;
  margin: auto;
  display: block;
}
</style>
