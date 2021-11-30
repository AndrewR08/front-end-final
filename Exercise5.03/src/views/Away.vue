<template>
  <div class="away">
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
    <div id="goldstrip">
    </div>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Rich from '../components/Rich.vue'


export default {
  components: {
    Rich,
   // Compressed,
   // List,
    Header,
  },
  data() {
    return {
      layout: 'rich',
      items: [
        {
          id: 'Miami',
          title: 'ASU at #22 Miami',
          description: 'App State loss: 23-25',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Miami_Hurricanes_logo.svg/1200px-Miami_Hurricanes_logo.svg.png',
          url2: 'https://s3.amazonaws.com/sidearm.sites/appstate.sidearmsports.com/documents/2021/9/11/APP02.PDF'
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
          id: 'Arkansas State',
          title: 'ASU at Arkansas State',
          description: 'App State win: 48-14',
          url: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Arkansas_State_Red_Wolves_logo.svg/1200px-Arkansas_State_Red_Wolves_logo.svg.png',
          url2: 'https://s3.amazonaws.com/sidearm.sites/appstate.sidearmsports.com/documents/2021/11/6/APP09.PDF'
        },
        {
          id: 'Troy',
          title: 'ASU at South Alabama',
          description: 'App State win: 45-7',
          url: 'https://troytrojans.com/images/logos/site/site.png',
          url2: 'https://s3.amazonaws.com/sidearm.sites/appstate.sidearmsports.com/documents/2021/11/20/APP11.PDF'
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
  gap: 20px;
  padding-left: 69px;
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: -20px;
  background-color: goldenrod;
}
.grid-column {
  flex-direction: column;
}
#goldstrip {
  display: flex;
  height: 100px;
  margin-left: -10px;
  margin-right: -20px;
  margin-bottom: -30px;
  background-color: goldenrod;
}
</style>