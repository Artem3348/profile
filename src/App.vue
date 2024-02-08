<template>
  <div id="app">
    <UserInfo 
      :avatar="userData.avatar"
      :location="userData.location"
      :name="userData.name"
      :occupation="userData.occupation"
    ></UserInfo>
    <UserLink v-for="(link, index) in userLinks" :key="index"
      :url="link.url"
      :text="link.text"
      :icon="link.icon"
    ></UserLink>
    <p>{{ year }}</p>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from '@vue/composition-api';
import data from '../data/data.json';
import UserInfo from './components/UserInfo.vue';
import UserLink from './components/UserLink.vue';

export default ({
  components: {
    UserInfo,
    UserLink
  },
  setup() {
      const userData = reactive(data.user);
      const userLinks = reactive(data.links);
      const year = ref(new Date().getFullYear());

    return {
      userData,
      userLinks,
      year,
    }
  },
})
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
p {
  position: fixed;
  bottom: 10px;
  width: 99%;
}
</style>
