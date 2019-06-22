<template>
    <div class="bottom">
      <div class="Header">
        <div class="Head">发售日历</div>
      </div>
    <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <div class="kuang">
            <div class="content">
                <div class="brand">{{item.brand}}</div>
                <div class="name">{{item.name}}</div>
                <div class="time">{{item.time}}</div>
                <button class="button" @click="h">进入查看详情</button>
                <div class="picture"><img class="pic" v-bind:src="item.imgUrl"></div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>
<script>
export default {
  name: 'calendarswiper',
  methods: {
    h () {
      this.$router.push('/Advance')
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        brand: 'NIKE AIR JORDAN 1 RETRO HIGH',
        name: 'NO L"S VARSITY RED',
        time: '2018年 11月 07日发售',
        imgUrl: require('@/assets/no.png')
      }, {
        id: '0002',
        brand: 'NIKE AIR JORDAN 1 RETRO HIGH',
        name: 'ROOKIE OF THE YEAR',
        time: '2018年 11月 17日发售',
        imgUrl: require('@/assets/xx.png')
      }, {
        id: '0003',
        brand: 'ADIDAS YEEZY 500',
        name: 'SALT',
        time: '2018年 11月 30日发售',
        imgUrl: require('@/assets/yeezy550.png')
      }, {
        id: '0004',
        brand: 'NIKE AIR JORDAN 1 RETRO HIGH',
        name: 'origin story',
        time: '2018年 12月 14日发售',
        imgUrl: require('@/assets/zzx.png')
      }, {
        id: '0005',
        brand: 'ADIDAS YEEZY 350 BOOST V2',
        name: 'STATIC',
        time: '2018年 12月 29日发售',
        imgUrl: require('@/assets/yeezy350.png')
      }]
    }
  }
}
</script>
<style scoped>
.bottom{
    width: 100%;
    background: #EBECEE;
    height: 50rem;
    position:fixed;
    right: 0;
    top: 0;
    overflow: hidden;
}
.Header{
      left: 0;
      position:fixed;
      right: 0;
      top: 0;
      background: #ffffff;
      height: 2rem;
}
.Head{
       height: 2rem;
       width: 100%;
       text-align: center;
       font-size: 1.2rem;
       font-weight: bold;
       background: #ffffff;
       left: 0;
       right: 0;
       margin-top: .5rem
}
.kuang{
    width: 80%;
    height: 33rem;
    background: #ffffff;
    margin-left: 2.4rem;
    margin-top: 4rem;
    border-radius: .3rem;
    overflow: hidden;
}
.content{
    width: 90%;
    height: 31rem;
    margin-left: .9rem;
    margin-top: .85rem;
    border: 1px solid #F9F9F9
}
.brand{
      font-size: .2rem;
      color: #B0B0B0;
      margin-top: 1.5rem;
      width: 100%;
      text-align: center
}
.name{
      font-weight: bold;
      width: 100%;
      text-align: center;
      font-size: 1.3rem
}
.time{
    font-size: .8rem;
    font-weight: bold;
    margin-top: 1.5rem;
    text-align: center
}
.button{
    margin-left: 4.3rem;
    margin-top: 2.7rem;
    border: 1px solid;
    border-radius: 1rem;
    background: #ffffff;
    height: 2rem;
    width: 8rem;
}
.picture{
    width:100%;
    height: 20rem;
    margin-top: 1rem
}
.pic{
    width: 100%;
    height: 16rem;
    margin-top: 2.5rem
}
</style>
