<template>
    <div class="bottom">
      <BottomTabBar></BottomTabBar>
      <div class="Header">
        <div class="Head">我的</div>
      </div>
      <div class="pitrue">
          <img class="pic" src="@/assets/tx.jpg">
          <div class="name">{{this.username}}</div>
      </div>
      <div class="phone">
          <div class="iconfont">&#xe643;</div>
          <div class="zi">客服电话: 12345678901</div>
      </div>
      <div class="Collection">我的收藏 .</div>
      <div class="container">
        <div class="kuang" v-for="item in list" :key="item.id">
          <div class="picture"><img class="pic1" :src="item.imgUrl" @click="d(item.objectId)"></div>
              <div class="left">
                <div class="brand">{{item.brand}}</div>
                <div class="name">{{item.name}}</div>
                <div class="price">{{item.price}}</div>
              </div>
          </div>
      </div>
      
    </div>
</template>
<script>
import BottomTabBar from './components/BottomTabBar'
export default {
  name: 'Homemy',
  components: {
    BottomTabBar
  },
  data() {
    return {
      userId:'',
      list:[],
      username: ''
    }
  },
  created () {
    this.init();
    this.getUsername()   
  },
  methods: {
    init() {
      this.getUserId()
      const query = Bmob.Query("collection");
      query.equalTo("userId","==", this.userId)
      query.find().then(res => {
          this.getShop(res)
      });
    },
    getUserId() {
      let current = Bmob.User.current()
      this.userId = current.objectId
    },
    getShop (list) {
      list.forEach(item => {
      const query = Bmob.Query("sneakers");
        query.equalTo("objectId","==", item.shopId);
        query.find().then(res => {
            this.list = this.list.concat(res)
            console.log(this.list)
});
      });
    },
    d (id) {
      this.$router.push('/details?id='+id)
    },
    getUsername () {
      let current = Bmob.User.current()
      console.log(current)
      this.username = current.username
    }
  } 
}
</script>
<style scoped>
.bottom{
    width: 100%;
    background: #ffffff;
    height: 100rem;
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
.pitrue{
    width: 100%;
    height: 5rem;
    margin-top: 4rem;
    display: flex
}
.pic{
    width: 3rem;
    height: 3rem;
    background: #ffffff;
    border-radius: .5rem;
    margin-top: .25rem;
    margin-left: 1.5rem
}
.name{
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 6rem;
  margin-top: .5rem
}
.phone{
    width: 95%;
    height: 1.5rem;
    background: #F2F2F2;
    margin-left: .6rem;
    border-radius: .1rem;
    overflow: hidden;
    display: flex
}
.zi{
    font-size: .5rem;
    margin-top: .2rem;
    color: #464646;
    margin-left: .3rem
}
.iconfont{
    margin-top: .25rem;
    margin-left: .8rem
}
.Collection{
    margin-left: 1.2rem;
    font-size: .95rem;
    font-weight: bold;
    margin-top: 1rem
}
.container {
  height: 25rem;
  overflow: scroll;
}
.kuang{
  height: 7rem;
  width: 100%;
  margin-top: 1rem;
  display: flex;
}
.picture{
  height: 7rem;
  width: 40%;
}
.pic1{
    width: 85%;
    height: 6rem;
    margin-left: .6rem;
    margin-top: .5rem
}
.left{
  height: 7rem;
  width: 60%;
}
.brand{
    font-size: .5rem;
    margin-top: 1rem;
    color: #A8A8A8;
}
.name{
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
</style>
