<template>
  <div>
    <router-view></router-view>

    <van-tabbar class="tab-bar" route>
      <van-tabbar-item to="/ ">
        <template>
          <span class="toutiao toutiao-shouye"></span>
          <p class="text">首页</p>
        </template>
      </van-tabbar-item>

      <van-tabbar-item to="/video">
        <template>
          <span class="toutiao toutiao-shipin"></span>
          <p class="text">视频</p>
        </template>
      </van-tabbar-item>

      <van-tabbar-item to="/qa">
        <template>
          <span class="toutiao toutiao-wenda"></span>
          <p class="text">问答</p>
        </template>
      </van-tabbar-item>

      <van-tabbar-item to="/profile">
        <template>
          <span class="toutiao toutiao-wode"></span>
          <p class="text">{{ $store.state.user.token ? '我的' : '未登录' }}</p>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
.tab-bar {
  text-align: center;
  :deep(.van-tabbar-item) {
    margin-top: 20px;
  }
  :deep(.toutiao) {
    font-size: 0.53333rem;
  }
  p {
    font-size: 12px;
  }
}
</style>
