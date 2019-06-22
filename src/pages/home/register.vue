<template>
<div class="bottom">
    <div class="Head">
      <div class="Header">注册</div>
    </div>
    <div class="b"></div>
    <div class="iconfont xiezi">&#xe683;</div>
    <div class="name">
        <div class="name1">name</div>
        <div class="kuang"><input type="text" v-model="user" class="a" placeholder="请设置用户名"></div>
    </div>
    <div class="line"></div>
    <div class="password">
        <div class="name1">password</div>
        <div><input type="text" v-model="password" placeholder="请设置密码" class="a"></div>
    </div>
    <div class="line"></div>
    <button @click="a" class="land">注册</button>
</div>
</template>
<script>
export default {
  name: 'Homeregister',
  data () {
      return {
          user: '',
          password: '',
          tx: ''
      }
  },
  methods: {
      a () {
      let a = {
          username: this.user,
          password: this.password
      }
      Bmob.User.register(a).then(res => {
       console.log(res)
       this.$router.push('/')
         }).catch(err => {
           console.log(err)
              })
  }
}
      }

</script>
<style scoped>
.bottom{
    width: 100%;
    height: 50rem;
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
  margin-left: 10rem;
  font-weight: bold
}
.name{
    margin-top: 2rem;
    margin-left: 1.3rem;
    display: flex;
    width: 100%;
    height:1.5rem;
}
.password{
    display: flex;
    width: 100%;
    margin-top: 3rem;
    margin-left: 1.3rem
}
.a{
    border: 0;
    width: 15rem;
    margin-left: 1rem;
    height: 1.5rem;
    font-size: .8rem;
    border-radius: .1rem;
    background: #ffffff
}
.line{
    width: 90%;
    height: .08rem;
    background: #E6E6E6;
    margin-top: .2rem;
    margin-left: 1rem
}
.name1{
    font-weight: bold
}
.land{
    border: solid .035rem;
    border-radius: 1rem;
    width: 50%;
    height: 2rem;
    margin-top: 3.5rem;
    margin-left: 5rem;
    background: #ffffff
}
.reg{
    font-size: .5rem;
    width: 100%;
    margin-left: 9.8rem;
    margin-top: .5rem;
    color: #676262;
}
.xiezi{
    font-size: 5rem;
    margin-left: 1rem
}
.b{
    width: 100%;
    height: 3rem;
}
</style>
