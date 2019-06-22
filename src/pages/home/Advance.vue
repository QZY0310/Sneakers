<template>
    <div class="bottom">
      <div class="Head">
        <div class="iconfont back" @click="i">&#xe605;</div>
        <div class="Header">AIR JORDAN 1</div>
      </div>
      <div class="content">
          <div class="ctitle">复刻男子运动鞋</div>
          <div class="etitle">AIR JORDAN 1 RETRO HIGH OG NRG</div>
          <swiper :options="swiperOption" class="swiper">
            <swiper-slide><img class="pic" src="@/assets/part1.png"></swiper-slide>
            <swiper-slide><img class="pic" src="@/assets/part2.png"></swiper-slide>
            <swiper-slide><img class="pic" src="@/assets/part3.png"></swiper-slide>
            <swiper-slide><img class="pic" src="@/assets/part4.png"></swiper-slide>
  </swiper>
      </div>
      <div class="zi">
          <div class="title">复刻男子运动鞋</div>
          <div class="title2">AIR JORDAN 1 RETRO HIGH OG</div>
          <div class="title3">NRG</div>
          <div class="price">￥1,299</div>
          <div class="time">预计5月25日 上午9:00开售</div>
          <div class="zi1">该新款Air Jordan 1 不得转售。买了就要穿。把它<br/>从盒子里取出，穿上它
          四处走走，就算它会起皱、<br/>磨损和变脏也无妨。只要穿上它，你就可以大肆炫耀。<br/>不要把它存放起来
          更不要在网上拍卖。重申<br/>一遍，新推Air Jordan 1 不得转售。</div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'HomeAdvance',
  methods: {
    i () {
      this.$router.push('/calender')
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 300
      }
    }
  }

}
</script>
<style scoped>
.bottom{
  width: 100%;
  height: 48rem;
  background: #000000
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
  font-size: 1rem;
  text-align: center;
  margin-top: .3rem;
  margin-left: 6.6rem;
  font-weight: bold
}
.back{
  font-size: 1.2rem;
  margin-top: .45rem;
  margin-left: .2rem
}
.content{
    width: 100%;
    height: 35rem;
    background: #F5F5F5;
    overflow: hidden;
}
.ctitle{
    margin-top: 2.5rem;
    margin-left: .5rem;
    font-size: 1rem;
    font-weight: bold
}
.etitle{
    font-weight: bold;
    margin-left: .5rem
}
.swiper{
    margin-top: 6rem
}
.pic{
    width: 100%;
}
.zi{
    width: 100%;
    height: 15rem;
    background: #ffffff;
    overflow: hidden;
}
.title{
    text-align: center;
    color: #B0B0B0;
    margin-top: 1.5rem
}
.title2{
    text-align: center;
    font-weight: bold;
}
.title3{
    text-align: center;
    font-weight: bold
}
.price{
  text-align: center;
  font-size: .8rem;
  font-weight: bold;
  margin-top: .5rem
}
.time{
  text-align: center;
  font-size: .8rem;
  font-weight: bold;
  margin-top: .5rem
}
.zi1{
    font-size: .8rem;
    color: #B0B0B0;
    text-align: center;
    margin-top: .5rem
}
</style>
