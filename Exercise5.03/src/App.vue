<template>
  <div id="app">
    Layout: <select v-model="layout">
      <option value="rich">Rich</option>
      <option value="compressed">Compressed</option>
      <option value="list">List</option>
    </select>
    <div class="grid" :class="{ 'grid-column': layout === 'grid' }">
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
import Header from './components/Header'

import Rich from './components/Rich.vue'
import Compressed from './components/Compressed.vue'
import List from './components/List.vue'

export default {
  components: {
    Rich,
    Compressed,
    List,
    'my-header':Header
  },
  data() {
    return {
      layout: 'rich',
      items: [
        {
          id: 'ECU',
          title: 'ASU vs ECU',
          description: 'App State win: 33-19',
          url: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/East_Carolina_Pirates_logo.svg/1200px-East_Carolina_Pirates_logo.svg.png',
          url2: 'https://s3.amazonaws.com/sidearm.sites/appstate.sidearmsports.com/documents/2021/9/2/APP01.pdf',
        },
        {
          id: 'Miami',
          title: 'ASU at #22 Miami',
          description: 'App State loss: 23-25',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Miami_Hurricanes_logo.svg/1200px-Miami_Hurricanes_logo.svg.png',
          url2: 'https://s3.amazonaws.com/sidearm.sites/appstate.sidearmsports.com/documents/2021/9/11/APP02.PDF'
        },
        {
          id: 'Elon',
          title: 'ASU vs Elon',
          description: 'App State win: 44-10',
          url: 'https://www.elon.edu/u/university-communications/wp-content/uploads/sites/137/2018/07/phoenix-logo.png',
          url2: 'https://s3.amazonaws.com/sidearm.sites/appstate.sidearmsports.com/documents/2021/9/18/APP03.PDF'
        },
        {
          id: 'Marshall',
          title: 'ASU vs Marshall',
          description: 'App State win: 31-30',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Marshall_University_logo.svg/1200px-Marshall_University_logo.svg.png',
          url2: 'https://s3.amazonaws.com/sidearm.sites/appstate.sidearmsports.com/documents/2021/9/23/APP04.PDF'
        },
        {
          id: 'Georgia State',
          title: 'ASU at Georgia State',
          description: 'App State win: 45-16',
          url: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Georgia_State_Athletics_logo.svg/1200px-Georgia_State_Athletics_logo.svg.png',
          url2: 'https://s3.amazonaws.com/sidearm.sites/appstate.sidearmsports.com/documents/2021/10/2/APP05.PDF'
        },
        {
          id: 'Louisiana',
          title: 'ASU at Louisiana',
          description: 'App State loss: 13-41',
          url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Ragin_Cajuns_logo.svg/250px-Ragin_Cajuns_logo.svg.png',
          url2: 'https://s3.amazonaws.com/sidearm.sites/appstate.sidearmsports.com/documents/2021/10/13/APP06.pdf'
        },
        {
          id: 'Coastal Carolina',
          title: 'ASU vs #14 Coastal Carolina',
          description: 'App State win: 30-27',
          url: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Coastal_Carolina_Chanticleers_logo.svg/1200px-Coastal_Carolina_Chanticleers_logo.svg.png',
          url2: 'https://s3.amazonaws.com/sidearm.sites/appstate.sidearmsports.com/documents/2021/10/20/APP07.PDF'
        },
        {
          id: 'ULM',
          title: 'ASU vs ULM',
          description: 'App State win: 59-28',
          url: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Louisiana-Monroe_Warhawks_logo.svg/1200px-Louisiana-Monroe_Warhawks_logo.svg.png',
          url2: 'https://s3.amazonaws.com/sidearm.sites/appstate.sidearmsports.com/documents/2021/10/30/APP08.PDF'
        },
        {
          id: 'Arkansas State',
          title: 'ASU at Arkansas State',
          description: 'App State win: 48-14',
          url: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Arkansas_State_Red_Wolves_logo.svg/1200px-Arkansas_State_Red_Wolves_logo.svg.png',
          url2: 'https://s3.amazonaws.com/sidearm.sites/appstate.sidearmsports.com/documents/2021/11/6/APP09.PDF'
        },
        {
          id: 'South Alabama',
          title: 'ASU vs South Alabama',
          description: 'App State win: 31-7',
          url: 'https://www.logolynx.com/images/logolynx/8e/8e8d75494c00e1e2fec82043ec470093.png',
          url2: 'https://s3.amazonaws.com/sidearm.sites/appstate.sidearmsports.com/documents/2021/11/13/APP10.PDF'
        }
      ]
    }
  }
}
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.grid-column {
  flex-direction: column;
}
</style>
