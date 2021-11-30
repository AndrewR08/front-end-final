<template>
  <div id="app">
    <Header />
    <div id="nav">
      <router-link to="/" tag="button">All </router-link>
      <router-link to="../away" tag="button">Away </router-link>
      <router-link to="../home" tag="button">Home </router-link>
      <router-link to="../noncon" tag="button">Non-Con</router-link>
    </div>
    <div id="blackstrip">
    </div>
    <div id="goldstrip">
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

//import Rich from './components/Rich.vue'
//import Compressed from './components/Compressed.vue'
//import List from './components/List.vue'

export default {
  name: 'Test App',
  metaInfo: {
    title: 'Final VueJS Project'
  },
  components: {
    //Rich,
    //Compressed,
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
        },
        {
          id: 'Troy',
          title: 'ASU at South Alabama',
          description: 'App State win: 45-7',
          url: 'https://troytrojans.com/images/logos/site/site.png',
          url2: 'https://s3.amazonaws.com/sidearm.sites/appstate.sidearmsports.com/documents/2021/11/20/APP11.PDF'
        },
        {
          id: 'Georgia Southern',
          title: 'ASU vs Georgia Southern',
          description: 'App State win: 27-3',
          url: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Georgia_Southern_Eagles_logo.svg/1200px-Georgia_Southern_Eagles_logo.svg.png',
          url2: 'https://s3.amazonaws.com/sidearm.sites/appstate.sidearmsports.com/documents/2021/11/27/APP12.PDF'
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
  background-color: goldenrod;
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: -20px;
}
.grid-column {
  flex-direction: column;
}
#blackstrip {
  display: flex;
  height: 20px;
  margin-left: -10px;
  margin-right: -20px;
  background-color: black;
}
#goldstrip {
  display: flex;
  height: 20px;
  margin-left: -10px;
  margin-right: -20px;
  background-color: goldenrod;
}
#nav {
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: black;
  margin-top: -20px;
  margin-left: -10px;
  margin-right: -20px;
}

</style>
