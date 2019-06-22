<template>
<div class="bottom">
    <div class="Head">
      <div class="iconfont back" @click="e">&#xe605;</div>
      <div class="Header">Nike SB Dunk Low</div>
    </div>
    <div class="content">
      <div class="brand">{{data.brand}}</div>
      <div class="name">
        <div class="name1">{{data.name}}</div>
        <i class="iconfont iconcollection-b" v-show="!collected" @click.stop="save"></i>
        <i class="iconfont iconcollection-b collected" v-show="collected" @click.stop="del"></i>
      </div>
      <div class="price">市场价:{{data.price}}</div>
      <div class="picture"><img class="pic" :src="data.imgUrl"></div>
      <div class="information">
        <div class="title1">信息 .</div>
        <div class="num">
          <div class="title2">球鞋货号</div>
          <div class="number">BV1310-013</div>
        </div>
        <div class="line"></div>
        <div class="price1">
          <div class="title2">官方售价</div>
          <div class="price2">￥ 969</div>
        </div>
        <div class="line"></div>
        <div class="time">
          <div class="title2">发售时间</div>
          <div class="time1">2019-01-05</div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'Homedetails',
  data () {
    return{
      collected: false,
      userId:'',
      data:{},
      shopId: ''
    }
  },
  created() {
    this.init();
    this.getShop()
  },
  methods: {
    init() {
      const query = Bmob.Query('sneakers');
      query.get(this.$route.query.id).then(res => {
        this.data = res
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    e () {
      this.$router.push('/Home')
    },
    save () {
      this.getUserId()
      console.log(this.userId)
      const query = Bmob.Query('collection')// eslint-disable-next-line
      query.set("shopId",this.$route.query.id)
      query.set("userId",this.userId)
      query.save().then(res => {
        this.collected = true
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    getUserId() {
      let current = Bmob.User.current()
      this.userId = current.objectId
    },
    getShop () {
      this.getUserId()
      const query = Bmob.Query("collection");
      query.equalTo("userId","==", this.userId);
      query.find().then(res => {
          console.log(res)
          res.some(item => {
            if(item.shopId == this.$route.query.id) {
                this.collected = true
            }                      
          });
      });
    },
    del () {
      console.log(this.shopId)
      const query = Bmob.Query("collection");
      query.equalTo("shopId","==", this.$route.query.id);
      query.find().then(res => {
        console.log(res)
        res.forEach(item => {
          query.destroy(item.objectId).then(res => {
              console.log(res)
              this.collected = false
            }).catch(err => {
              console.log(err)
            })
        });
      })
    },
  }
}
</script>
<style scoped>
.iconcollection-b{
  margin-left: 16rem
}
.collected{
  color: crimson;
}
.bottom{
  width: 100%;
  height: 40rem;
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
  font-size: 1.2rem;
  text-align: center;
  margin-top: .3rem;
  margin-left: 5rem
}
.back{
  font-size: 1.2rem;
  margin-top: .45rem;
  margin-left: .2rem
}
.content{
  width: 100%;
  height: 40rem;
  background: #ffffff;
}
.brand{
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 4rem;
  margin-left: .5rem
}
.name{
  font-size: .8rem;
  margin-top: .1rem;
  margin-left: .5rem;
  color: #C4C4C4;
  display: flex
}
.price{
  font-size: .8rem;
  font-weight: bold;
  color: #C40909;
  margin-left: .5rem;
  margin-top: 2rem
}
.picture{
  width: 100%;
  margin-top: 1.5rem
}
.pic{
  width: 100%;
  height: 22rem;
}，
.information{
  width: 100%;
  height: 20rem;
}
.title1{
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: .5rem
}
.num{
  width: 100%;
  display: flex;
  margin-top: 1rem
}
.title2{
  font-size: .8rem;
  color: #C4C4C4;
  margin-left: .5rem
}
.number{
  font-size: .5rem;
  margin-left: 14rem
}
.line{
  width: 96%;
  background: #C4C4C4;
  height: .1rem;
  margin-left: .5rem;
  margin-top: .75rem
}
.price1{
  width: 100%;
  display: flex;
  margin-top: .6rem
}
.price2{
  font-size: .5rem;
  margin-left: 16rem
}
.time{
  width: 100%;
  display: flex;
  margin-top: .6rem
}
.time1{
  font-size: .5rem;
  margin-left: 14rem
}
.sc{
  margin-left: 18rem
}
.red {
  color: #C40909;
  font-size: 1rem
}
.blue{
  color: blue;
  font-size: 1rem
}
</style>
