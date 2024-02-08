<template>
  <div>
    <img :src="avatar" alt="photo">
    <h1>{{ name }}</h1>
    <h2><i class="fa fa-location-arrow"></i>{{ location }}</h2>
    <p>{{ occupation }}</p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    avatar: String,
    location: String,
    name: String,
    occupation: String,
  },
  setup() {
    
  }
};
</script>

<style scoped>
img {
  height: 200px;
  border-radius: 100%;
}
i {
  margin-right: 10px;
}
p {
  font-size: 18px;
}
</style>