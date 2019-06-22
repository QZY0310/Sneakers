/* eslint-disable */
<template>
<div class="footer_guide">
  <a href="javascript:;" class="guide_item" :class="{on : '/msite'===$route.path}" @click="b">
    <span class="item_icon">
      <i class="iconfont icon-xiezi">&#xe608;</i>
    </span>
    <span>首页</span>
  </a>
  <a href="javascript:;" class="guide_item"  :class="{on : $route.path.indexOf('/calender')!=-1}" @click="a">
    <span class="item_icon">
      <i class="iconfont icon-fenlei">&#xe638;</i>
	</span>
	<span>日历</span>
  </a>
  <a href="javascript:;" class="guide_item"  :class="{on : '/profile'===$route.path}"  @click="c">
	<span class="item_icon">
      <i class="iconfont icon-mine">&#xe638;</i>
	</span>
    <span>我的</span>
  </a>
</div>
</template>
<script>
export default {
  name: 'BottomTabBar',
  methods: {
    a () {
      this.$router.push('/calender')
    },
    b () {
      this.$router.push('/Home')
    },
    c () {
      this.$router.push('/my')
    }
  }
}
</script>

<style scoped>
.footer_guide {
    border-top:1px soild #e4e4e4;
    position:fixed;
    z-index :100;
    left :0;
    right :0;
    bottom:0;
    background-color:#F2F2F2;
    width:100%;
    height:50px;
    display:flex;
}
.guide_item{
    display:flex;
    flex:1;
    text-align :center;
    flex-direction:column;
    align-items :center;
    margin:5px;
    color:#999999;
}
.on{
    color:#000000
}
span{
    font-size:12px;
    margin-top:2px;
    margin-bottom:2px;
}
</style>
