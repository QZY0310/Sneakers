<template>
<div>
   <BottomTabBar></BottomTabBar>
   <swiper></swiper>
</div>
</template>
<script>
import BottomTabBar from './components/BottomTabBar'
import swiper from './components/swiper'
export default {
  name: 'Homecalendar',
  components: {
    BottomTabBar,
    swiper
  }
}
</script>
<style>

</style>
