<template>
<div>
   <BottomTabBar></BottomTabBar>
   <MiddleElse :list="contentList"></MiddleElse>
</div>
</template>
<script>
import BottomTabBar from './components/BottomTabBar'
import MiddleElse from './components/MiddleElse'
export default {
  name: 'exchange',
  components: {
    BottomTabBar,
    MiddleElse
  },
  data () {
    return {
      contentList: []
    }
  },
  created () {
    this.get()
  },
  methods: {
    get () {
      Bmob.Query('exchange').find().then(res => {//eslint-disable-line
        this.contentList = res
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>

</style>
