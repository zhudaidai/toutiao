<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="pahe-nav-bar" title="登录" />
    <!-- /导航栏 -->

    <!-- 登入表单 -->
    <!--
    表单验证：
    1. 给van-field 组件配置 rules 验证规则
    2.当表单提交的时候会自动触发表单验证
    如果验证通过，会触发 submit事件
    如果验证失败，不会触发 submit事件
   -->

    <van-form ref="loginForm" @submit="onSubmit">
      <van-field
        v-model="user.mobile"
        name="mobile"
        placeholder="请输入手机号"
        :rules="userFormRules.mobile"
        type="number"
        maxlength="11"
      >
        <i slot="left-icon" class="toutiao toutiao-shouji"></i>
      </van-field>
      <van-field
        v-model="user.code"
        name="code"
        placeholder="请输入验证码"
        :rules="userFormRules.code"
        type="number"
        maxlength="6"
      >
        <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
        <!--
  time :倒计时时间
 -->
        <template #button>
          <van-count-down
            v-if="isCountDownShow"
            :time="1000 * 3"
            format="ss s"
            @finish="isCountDownShow = false"
          />
          <van-button
            v-else
            class="send-sms-btn"
            round
            size="small"
            type="default"
            native-type="button"
            @click="onSendSms"
            >获取验证码</van-button
          >
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button class="loning-btn" block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
    <!-- /登入表单 -->
  </div>
</template>

<script>
import { login, sendSms } from '@/api/user.js'
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data () {
    return {
      user: {
        model: '', // 手机号
        code: '' // 验证码
      },
      userFormRules: {
        mobile: [
          { required: true, message: '手机号不能为空' },
          {
            pattern: /^1[3|5|7|8]\d{9}$/,
            message: '手机号格式错误'
          }
        ],
        code: [
          { required: true, message: '验证码不能为空' },
          {
            pattern: /^\d{6}$/,
            message: '验证码格式错误'
          }
        ]
      },
      isCountDownShow: false // 是否展示倒计时
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onSubmit () {
      // 1.获取表单验证
      const user = this.user
      // TODO: 2.表单验证
      // 在组件中必须通过 this.toast 来调用 Toast 组件
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true, // 禁用背景点击
        duration: 0 // 持续时间，0表示持续展示不停止
      })
      // 3.提交表单请求登录
      try {
        const res = await login(user)
        // 存储token
        this.$store.commit('setUser', res.data.data)
        console.log('登录成功', res)
        this.$router.push({ name: 'profile' })

        this.$toast.success('登录成功')
      } catch (err) {
        console.log(1111111)
        if (err.response.status === 400) {
          this.$toast.fail('手机号或者验证码错误')
        } else {
          this.$toast.fail('登录失败，请稍后重试')
        }
      }
      // 4.根据请求响应处理后结果
    },
    async onSendSms () {
      // 校验手机号
      try {
        await this.$refs.loginForm.validate('mobile')
        console.log('验证通过')
      } catch (err) {
        return console.log('验证失败', err)
      }
      // 验证通过显示倒计时
      this.isCountDownShow = true

      // 请求发送验证码
      try {
        await sendSms(this.user.mobile)
        this.$toast('发送成功')
      } catch (err) {
        // 发送失败，关闭倒计时
        this.isCountDownShow = false
        if (err.response.status === 429) {
          this.$toast('发送太频繁了，请稍后再试')
        } else {
          this.$toast('发送失败，请稍后再试')
        }
      }
    }
  }
}
</script>
<style scoped lang="less">
.login-container {
  .toutiao {
    font-size: 37px;
  }
  .send-sms-btn {
    width: 160px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 12px;
    color: #666;
  }
  .login-btn-wrap {
    padding: 56px 33px;
    .loning-btn {
      background-color: #66b1ff;
      color: #ccfaff;
      border: none;
    }
  }
}
</style>
