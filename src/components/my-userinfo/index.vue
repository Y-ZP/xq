<template>
<div class="my-userinfo-container">
    <!-- 头像昵称区域 -->
    <div class="top-box">
  <img src="@/assets/login.jpg">
      <div class="nickname">{{userInfo.data.username ? userInfo.data.username : "输个名字真难"}}</div>
    </div>

    <!-- 面板的列表区域 -->
    <div class="panel-list">
      <!-- 第一个面板 -->
      <div class="panel">
        <!-- panel 的主体区域 -->
        <div class="panel-body">
          <!-- panel 的 item 项 -->
          <div class="panel-item">
            <span>8</span>
            <span>收藏的店铺</span>
          </div>
          <div class="panel-item">
            <span>14</span>
            <span>收藏的商品</span>
          </div>
          <div class="panel-item">
            <span>18</span>
            <span>关注的商品</span>
          </div>
          <div class="panel-item">
            <span>84</span>
            <span>足迹</span>
          </div>
        </div>
      </div>

      <!-- 第二个面板 -->
      <div class="panel">
        <!-- 面板的标题 -->
        <div class="panel-title">我的订单</div>
        <!-- 面板的主体 -->
        <div class="panel-body">
          <!-- 面板主体中的 item 项 -->
          <div class="panel-item">
            <van-icon class="van-icon" name="todo-list-o" />
            <span>待付款</span>
          </div>
          <div class="panel-item">
<van-icon class="van-icon" name="logistics" />
            <span>待收货</span>
          </div>
          <div class="panel-item">
<van-icon class="van-icon" name="cash-back-record" />
            <span>退款/退货</span>
          </div>
          <div class="panel-item">
<van-icon class="van-icon" name="records" />
            <span>全部订单</span>
          </div>
        </div>
      </div>

      <!-- 第三个面板 -->
      <div class="panel">
        <div class="panel-list-item">
          <span>收货地址</span>
<van-icon name="arrow" />
        </div>
        <div class="panel-list-item">
          <span>联系客服</span>
<van-icon name="arrow" />
        </div>
        <div class="panel-list-item" @click="Logout">
          <span>退出登录</span>
<van-icon name="arrow" />
        </div>
        <div class="panel-list-item" @click="Out">
          <span>注销账号</span>
<van-icon name="arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapMutations('User', ['logout', 'out']),
    Logout () {
      Dialog.confirm({
        message: '您确认要退出吗'
      }).then(() => {
        this.logout({})
      }).catch(() => {
        // on cancel
      })
    },
    Out () {
      Dialog.confirm({
        title: '注意',
        message: '如果注销账号下次登录只能重新注册！！！'
      }).then(() => {
        this.out()
      }).catch(() => {
        // on cancel
      })
    }
  },
  computed: {
    ...mapState('User', ['userInfo'])
  }

}
</script>
<style lang="scss" scoped>
 .my-userinfo-container {
    height: 100%;
    // 为整个组件的结构添加浅灰色的背景
    background-color: #f4f4f4;
    .top-box {
      height: 240px;
      width: 100%;
      background-color: #c00000;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      img{
        width: 120px;
        height: 120px;
        border-radius: 50%;
      }
      .avatar {
        display: block;
        width: 90px;
        height: 90px;
        border-radius: 45px;
        border: 2px solid white;
        box-shadow: 0 1px 5px black;
      }
      .nickname {
        color: white;
        font-weight: bold;
        font-size: 16px;
        margin-top: 10px;
      }
    }
  }
  .panel-list {
    padding: 0 10px;
    position: relative;
    top: -10px;
    .panel {
      background-color: white;
      border-radius: 3px;
      margin-bottom: 8px;
      .panel-title {
        line-height: 45px;
        padding-left: 10px;
        font-size: 15px;
        border-bottom: 1px solid #f4f4f4;
      }
      .panel-body {
        display: flex;
        justify-content: space-around;
        .panel-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          font-size: 13px;
          padding: 10px 0;
          .van-icon{
            font-size: 28px;
          }
          .icon {
            width: 35px;
            height: 35px;
          }
        }
      }
    }
  }

  .panel-list-item {
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    padding: 0 10px;
  }
</style>
