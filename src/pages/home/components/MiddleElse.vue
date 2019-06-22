<template>
    <div class="Bottom">
      <div class="Header">
        <div class="Head">首页</div>
        <div class="search">
            <div class="search-left">
                <div class="iconfont more">&#xe6ed;</div>
            </div>
            <div class="search-input">
                <div class="iconfont sou">&#xe611;</div>
                <input class="name" type="text" placeholder="搜索“jordan”">
            </div>
            <div class="search-right">
                <div class="iconfont exchange" @click="d">&#xe7f0;</div>
            </div>
        </div>
      </div>
      <div class="kuang"></div>
      <div class="title">
          <div class="box1">近期热鞋 .</div>
      </div>
      <div class="content" v-for="item of list" :key="item.id">
          <div class="box2">
              <div class="picture">
                  <img class="pic" v-bind:src="item.imgUrl">
              </div>
              <div class="other">
                <div class="other1">
                  <div class="brand">{{item.brand}}</div>
                  <div class="name1">{{item.name1}}</div>
                  <div class="price">{{item.price}}</div>
                </div>
              </div>
          </div>
          <div class="box3">
              <div class="picture">
                  <img class="pic" v-bind:src="item.imgUrl1">
              </div>
              <div class="other">
                <div class="other1">
                  <div class="brand">{{item.brand1}}</div>
                  <div class="name1">{{item.name2}}</div>
                  <div class="price">{{item.price1}}</div>
                </div>
              </div>
          </div>
      </div>
    </div>

</template>
<script>
export default {
  name: 'MiddleElse',
  methods: {
    d () {
      this.$router.push('/Home')
    }
  },
  props: {
    list: Array
  }
}
</script>
<style scoped>
  .Bottom{
    width: 100%;
    background: #ffffff;
    height: 60rem;
  }
  .Header{
      left: 0;
      position:fixed;
      z-index: 2;
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
  .title{
      height: 2.5rem;
      width: 100%;
  }
  .box1{
      font-size: 1.2rem;
      font-weight: bold;
      margin-top: 1rem;
      margin-left: .6rem
  }
  .content{
      width: 100%;
      height: 14rem;
}
.box2{
    width: 100%;
    height: 7rem;
    background: #F7F7F7;
}
.picture{
    width:40%;
    height: 7rem;
    position: absolute;
    z-index: 1;
}
.pic{
    width: 85%;
    height: 6rem;
    margin-left: .6rem;
    margin-top: .5rem
}
.other{
    float: right;
    height: 7rem;
    width: 60%
}
.other1{
    float: left;
    width: 90%;
    height: 7rem;
}
.brand{
    font-size: .5rem;
    margin-top: 1rem;
    color: #A8A8A8;
}
.name1{
    margin-top: .2rem;
    font-size: .9rem;
    font-weight: bold;
    margin-left: .1rem
}
.price{
    margin-top: .6rem;
    font-weight: bold;
    font-size: .8rem
}
.box3{
    background: #ffffff;
    width: 100%;
    height: 7rem;
}
</style>
