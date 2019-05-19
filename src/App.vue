<template>
  <div>
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" class="nav">
      <el-menu-item>
        <router-link to="/">
          <img src="./img/logo.v3.png" alt class="logo">
        </router-link>
      </el-menu-item>
      <el-menu-item index="1">
        <router-link to="/pptt" class="a-none">PPT模板</router-link>
        <!-- <a href="/pptt" target class=""></a> -->
      </el-menu-item>
      <el-menu-item index="2">
         <router-link to="/sucai" class="a-none">设计素材</router-link>
        <!-- <a href="#" target class="a-none"></a> -->
      </el-menu-item>
      <el-menu-item index="4">
        <a href="#" target class="a-none">平面模板</a>
      </el-menu-item>
      <el-menu-item index="5">
        <a href="#" target class="a-none">图片视频</a>
      </el-menu-item>
      <el-menu-item index="6">
        <a href="#" target class="a-none">PPT图表</a>
      </el-menu-item>
      <el-menu-item index="7">
        <a href="#" target class="a-none">UI设计</a>
      </el-menu-item>
      <el-menu-item index="8">
        <a href="#" target class="a-none">多媒体</a>
      </el-menu-item>
      <el-menu-item index="9">
        <a href="#" target class="a-none">广告设计</a>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">更多</template>

        <el-menu-item index="2-1">字体库</el-menu-item>
        <el-menu-item index="2-2">Word模板</el-menu-item>
        <el-menu-item index="2-3">Excel模板</el-menu-item>
        <el-menu-item index="2-3">手抄报模板</el-menu-item>
        <el-menu-item index="2-3">矢量素材</el-menu-item>
        <el-menu-item index="2-3">音乐</el-menu-item>
      </el-submenu>
      <el-menu-item>
        <img src="./img/vip-bounce-2.png">
      </el-menu-item>
      <el-menu-item>
        <el-button-group>
          <el-button type="button" plain style="background: #7371ef;color: #fff;">QQ登陆</el-button>
          <el-button type="button" plain>注册</el-button>
        </el-button-group>
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
    <!-- 底部 -->
    <el-row class="foot-banner">
      <el-button class="foot-banner-btn" style="background-color:#60e2a0">立即体验</el-button>
    </el-row>

    <el-row class="foot-content">
      <div class="f1">
        <div class="f5">
          <span class="foo">关于我们 |</span>
          <span class="foo">版权声明 |</span>
          <span class="foo">注册协议 |</span>
          <span class="foo">友情链接 |</span>
          <span class="foo">热门搜索 |</span>
          <span class="foo">客户服务 |</span>
          <span class="foo">隐私政策 |</span>
          <span class="foo">网站地图</span>
        </div>
        <div>Copyright © 2016-2019 觅知网络科技有限公司 · 沪ICP备16055192号-1</div>
        <div>若您发现您的权利被侵害，请联系 2879485286@qq.com</div>
      </div>
      <div class="f2">
        <div>周一至周五9：00-18：00</div>
        <div>
          <span class="foo">热门搜索</span>
          <span class="foo">PPT模板</span>
          <span class="foo">PNG素材</span>
          <span class="foo">背景素材</span>
          <span class="foo">设计素材视频</span>
        </div>
        <div>
          <span class="foo">邀请函ppt</span>
          <span class="foo">网络安全ppt</span>
          <span class="foo">古诗ppt</span>
          <span class="foo">汽车ppt模板</span>
          <span class="foo">启动会ppt</span>
        </div>
      </div>
    </el-row>
    <!--尾部-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
/* 头部 */
.nav li {
  margin: 0 auto 0;
}
.logo {
  width: 100px;
}
.a-none {
  text-decoration: none;
}
.icon-btn {
  border: none;
}

/* 底部 */
.foot-banner {
  margin-top: 40px;
  padding-top: 230px;
  height: 300px;
  background-image: url("./img/foot_banner.jpg");
  background-position-x: -130px;
  text-align: center;
  /* background-color: #28dd8e; */
}
.foot-banner-btn {
  width: 200px;
}
.foot-content {
  line-height: 40px;
  display: flex;
  height: 150px;
  color: #ffffff;
  /* background-color: #1b1b1b; */
  text-align: center;
  background-color: #888888;
}
.f1 {
  width: 65%;
  height: 150px;
}
.f2 {
  width: 35%;
  height: 150px;
  /* background-color: #28dd8e; */
}
.foo {
  padding-left: 10px;
}
.f5 {
  text-align: center;
}
</style>
