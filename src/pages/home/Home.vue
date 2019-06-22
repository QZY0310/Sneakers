<template>
<div>
   <BottomTabBar></BottomTabBar>
   <Middle :list="boxList" v-if="boxList.length > 0"></Middle>
</div>
</template>
<script>
import BottomTabBar from './components/BottomTabBar'
import Middle from './components/Middle'

export default {
  name: 'Home',
  components: {
    BottomTabBar,
    Middle
  },
  data () {
    return {
      boxList: []
    }
  },
  created () {
    this.get()
  },
  methods: {
    get () {
      console.log(Bmob)
      Bmob.Query('sneakers').find().then(res => {//eslint-disable-line
        this.boxList = res
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>
