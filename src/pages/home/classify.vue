<template>
  <div class="bottom">
    <div class="Head">
      <div class="iconfont back" @click="e">&#xe605;</div>
      <div class="Header">分类</div>
    </div>
    <div class="brand">
        <div class="title">品牌选择 .</div>
        <div class="icon">
            <div class="icon1" @click="g"><img class="pic" src="@/assets/nike.png"></div>
            <div class="icon1"><img class="pic" src="@/assets/aj.png"></div>
            <div class="icon1"><img class="pic" src="@/assets/adadis.png"></div>
        </div>
        <div class="icon2">
            <div class="icon1"><img class="pic" src="@/assets/nb.png"></div>
            <div class="icon1"><img class="pic" src="@/assets/vans.png"></div>
            <div class="icon1"><img class="pic" src="@/assets/convers.png"></div>
        </div>
        <div class="icon2">
            <div class="icon1"><img class="pic" src="@/assets/reebok.png"></div>
            <div class="icon1"><img class="pic" src="@/assets/asics.png"></div>
            <div class="icon1"><img class="pic" src="@/assets/pum.png"></div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Homeclassify',
  methods: {
    e () {
      this.$router.push('/Home')
    },
    g () {
      this.$router.push('/search')
    }
  }
}
</script>
<style scoped>
.bottom{
    width: 100%;
    height: 41rem;
}
.Head{
  width: 100%;
  height: 2.3rem;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  background: #ffffff
}
.Header{
  font-size: 1.2rem;
  text-align: center;
  margin-top: .5rem;
  margin-left: 8.8rem;
  font-weight: bold
}
.back{
  font-size: 1.2rem;
  margin-top: .6rem;
  margin-left: .2rem
}
.brand{
    width: 100%;
    margin-top: 4rem
}
.title{
    font-weight: bold;
    font-size: 1.2rem;
    margin-left: .5rem
}
.icon{
    width: 100%;
    height: 6rem;
    margin-top: 2rem;
    display: flex
}
.icon1{
    width: 5.5rem;
    height: 5.5rem;
    background: #ffffff;
    box-shadow: darkgrey .01rem .01rem .6rem .01rem;
    border-radius: .3rem;
    margin-left: 1.5rem;
}
.pic{
    width: 100%;
    height: 100%;
}
.icon2{
    width: 100%;
    height: 6rem;
    margin-top: .8rem;
    display: flex
}
</style>
