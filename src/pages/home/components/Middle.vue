/* eslint-disable */
<template>
    <div class="Bottom">
      <div class="Header">
        <div class="Head">首页</div>
        <div class="search">
            <div class="search-left">
                <div class="iconfont more" @click="f">&#xe6ed;</div>
            </div>
            <div class="search-input">
                <div class="iconfont sou">&#xe611;</div>
                <input v-model="keyword" class="name" type="text" @keydown="search" placeholder="搜索“jordan”">
            </div>
            <div class="search-right">
                <div class="iconfont exchange" @click="c">&#xe7f0;</div>
            </div>
        </div>
      </div>
      <div class="kuang"></div>
      <div class="content"  v-for="item of listc" :key="item.id">
          <div class="brand">{{item.brand}}</div>
          <div class="s-name">{{item.name}}</div>
          <div class="price-a">市场售价</div>
          <div class="price-b">{{item.price}}</div>
          <div class="pictrue">
              <img class="pic" :src="item.imgUrl" @click="d(item.objectId)"/>
          </div>
        </div>
    </div>

</template>
<script>
export default {
  name: 'Middle',
  props: {
    list: Array
  },
  methods: {
    c () {
      this.$router.push('/exchange')
    },
    d (id) {
      this.$router.push('/details?id='+ id)
    },
    f () {
      this.$router.push('/classify')
    },
    search () {
      let array = []
      if (event.keyCode == 13) {//eslint-disable-line
        this.listc.forEach((item) => {
          if (item.name.includes(this.keyword)) {
            array.push(item)
          }
        })
        this.listc = array
      }
    }
  },
  data () {
    return {
      keyword: '',
      listc: []
    }
  },
  created () {
    this.listc = this.list.slice(0)
  }
}
</script>
<style scoped>
  .Bottom{
    width: 100%;
    background: #ffffff
  }
  .Header{
      left: 0;
      position:fixed;
      right: 0;
      top: 0;
      background: #ffffff;
      height: 5rem;
  }
  .search{
      display: flex;
      background: #ffffff;
      width: 100%;
      height: 1.9rem;
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
  .search-left{
      width: 2.6rem;
      height: 1.9rem
  }
  .more{
      font-size: 1.2rem;
      margin-left: .8rem;
      margin-top: .1rem;
      width: 3rem
  }
  .search-input{
      background: #F3F3F3;
      width: 18rem;
      height: 1.6rem;
      display: flex;
      margin-left: .1rem;
      border-radius: .1rem
  }
  .sou{
      font-size: 1.2rem;
      margin-top: .2rem;
      margin-left: .2rem;
      width: 2rem
  }
  .name{
      width: 19rem;
      height: 1.25rem;
      border-radius: .1rem;
      border: 0;
      background: #F3F3F3;
      margin-top: .2rem;
      font-size: .05rem
  }
  .search-right{
      height: 1.9rem;
      width: 2rem;
      padding-left: .4rem
  }
  .exchange{
      font-size: 1.7rem
  }
  .kuang{
      width: 100%;
      height: 4.55rem;
      background: #CECECF
  }
  .content{
      width: 90%;
      height: 33rem;
      background: #ffffff;
      margin-left: 1.1rem;
      border-radius: .1rem;
      margin-top: .5rem;
      border: 1px solid #F9F9F9;
  }
  .brand{
      font-size: .2rem;
      color: #B0B0B0;
      margin-top: 1.5rem;
      width: 100%;
      text-align: center
  }
  .s-name{
      font-weight: bold;
      width: 100%;
      text-align: center;
      font-size: 1.3rem
  }
  .price-a{
      width: 100%;
      font-size: .8rem;
      text-align: center;
      margin-top: 1.5rem
  }
  .price-b{
      width: 100%;
      font-weight: bold;
      margin-top: .5rem;
      font-size: .8rem;
      text-align: center
  }
  .picture{
      width:100%;
      height: 20rem;
      margin-top: 1rem
  }
  .pic{
      width: 100%;
      height: 20rem;
      margin-top: 3rem
  }
  .a{
    overflow: hidden;
    position: absolute;
    top: 5rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #0000ff;
    z-index: 1;
  }
</style>
