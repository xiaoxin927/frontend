<template>
  <div id="app">  
      <router-link to='/home' tag='button' replace active-class='active'>首页</router-link>
      <router-link to='/about' tag='button' replace active-class='active'>关于</router-link>
      <router-link :to='"/user/" + userId' tag='button' replace active-class='active'>用户</router-link>
                    <!-- 必须要动态绑定  否则不解析data里面的数据 -->

      <!-- <router-link to='/profile' tag='button' >档案</router-link> -->

      <router-link :to='{path: "/profile", query: {name:"why",age:18, height: 1.88}}' tag='button' >档案</router-link>
      <!-- url 的完整表达式： 协议：//主机（服务器）：端口/路径？查询
            英文表达式：scheme://host:port/path?query#fragment -->
       <!-- <button @click='homeClick'>首页</button>
       <button @click='aboutClick'>关于</button> -->
       <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      userId: 'lisi',
      imgURL:'',
    } 
  },
  methods: {
    homeClick () {
      this.$router.push('/home')
    },
    aboutClick () {
      this.$router.push('/about')
    },
    userClick () {
      this.$router.push('/user/' + this.userId)
    },
    profileClick () {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kobe',
          age: 19,
          height: 1.87
        }
      })
    }
  },
  computed: {

  }


}
</script>

<style>

</style>
