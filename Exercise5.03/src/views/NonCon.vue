<template>
  <div class="noncon">
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
  metaInfo: {
    title: 'Non-Conference Games'
  },
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