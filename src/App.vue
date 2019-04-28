<template>
  <div>
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" class="nav">
      <el-menu-item>
        <img src="./img/logo.v3.png" alt class="logo">
      </el-menu-item>

      <el-menu-item index="1">
        <a href="#" target class="a-none">PPT模板</a>
      </el-menu-item>
      <el-menu-item index="2">
        <a href="#" target class="a-none">设计素材</a>
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
        <!-- <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>-->
      </el-submenu>

      <el-menu-item>
        <img src="./img/vip-bounce-2.png">
      </el-menu-item>

      <el-menu-item>
        <el-button-group>
          <el-button type="primary" plain>登陆</el-button>
          <el-button type="success" plain>注册</el-button>
        </el-button-group>
      </el-menu-item>
    </el-menu>
    <router-view></router-view>

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
</style>
