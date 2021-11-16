<template>
  <div id="app">
    Layout: <select v-model="layout">
      <option value="rich">Rich</option>
      <option value="compressed">Compressed</option>
      <option value="list">List</option>
    </select>
    <div class="grid" :class="{ 'grid-column': layout === 'list' }">
      <component
        v-for="item in items"
        :key="item.id"
        :is="layout"
        :title="item.title"
        :description="item.description"
        :url="item.url"
        :url2="item.url2"
      />
    </div>
  </div>
</template>
<script>
import Rich from './components/Rich.vue'
import Compressed from './components/Compressed.vue'
import List from './components/List.vue'

export default {
  components: {
    Rich,
    Compressed,
    List
  },
  data() {
    return {
      layout: 'rich',
      items: [
        {
          id: '10',
          title: 'ASU vs. ECU',
          description: 'App State win: 33-19',
          url: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/East_Carolina_Pirates_logo.svg/1200px-East_Carolina_Pirates_logo.svg.png',
          url2: 'https://s3.amazonaws.com/sidearm.sites/appstate.sidearmsports.com/documents/2021/9/2/APP01.pdf',
        },
        {
          id: '1000',
          title: 'ASU @ #22 Miami',
          description: 'App State loss: 23-25',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Miami_Hurricanes_logo.svg/1200px-Miami_Hurricanes_logo.svg.png',
          url2: 'https://s3.amazonaws.com/sidearm.sites/appstate.sidearmsports.com/documents/2021/9/11/APP02.PDF'
        },
      ]
    }
  }
}
</script>
<style scoped>
.grid {
  display: flex;
}
.grid-column {
  flex-direction: column;
}
</style>
