<template>
<div class="bottom">
    <div class="Head">
      <div class="Header">登陆</div>
    </div>
    <div class="b"></div>
    <div class="iconfont xiezi">&#xe608;</div>
    <div class="name">
        <div class="name1">name</div>
        <div class="kuang"><input type="text" v-model="username" class="a" placeholder="请输入用户名"></div>
    </div>
    <div class="line"></div>
    <div class="password">
        <div class="name1">password</div>
        <div><input type="password" v-model="password" placeholder="请输入密码" class="a"></div>
    </div>
    <div class="line"></div>
    <button @click="land" class="land">登陆</button>
    <div class="reg" @click="a">注册</div>
</div>
</template>
<script>
export default {
  name: 'Homeland',
  data () {
      return{
          username: '',
          password: ''
      }
  },
  methods: {
      land () {
            Bmob.User.login(this.username,this.password).then(res => {
                console.log(res)
                      this.$router.push('/Home')
                    }).catch(err => {
                    console.log(err)
                        })      
      },
      a () {
      this.$router.push('/register')
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
    font-size: 6rem;
    margin-left: 1.2rem
}
.b{
    width: 100%;
    height: 3rem;
}
</style>
