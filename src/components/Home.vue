<template>
  <div>
    <el-carousel indicator-position="outside" :interval="2000" arrow="always">
      <el-carousel-item v-for="item in listimg_url" :key="item.id">
        <img :src=" item.img_url" alt>
      </el-carousel-item>
    </el-carousel>
    <div class="seach-content">
      <div class="search-input-box">
        <input type="text" class="seach-input" placeholder="搜索作品">
        <a href class="seach-btn a-none">搜索素材</a>
      </div>
      <a href class="seach-btn seach-bgcolor a-none">搜索PPT</a>
    </div>
    <el-row>
      <el-col :span="3" v-for="(o, index) in 10" :key="o" :offset="index > 0 ? 1 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          >
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listimg_url: [
        { id: 1, img_url: require("./../img/banner1.jpg") },
        { id: 2, img_url: require("./../img/banner2.jpg") },
        { id: 3, img_url: require("./../img/banner3.jpg") }
      ],
      currentDate: new Date()
    };
  }
};
</script>
<style>
.seach-content {
  display: flex;
  flex-flow: row wrap;
  position: absolute;
  top: 200px;
  left: 25%;
  width: 51%;
  height: 54px;
  z-index: 99999;
}

.search-input-box {
  display: flex;
  flex-flow: row wrap;
  width: 80%;
  height: 54px;
  background-color: #fff;
  border-radius: 50px;
}

.seach-input {
  border: none;
  border-radius: 50px;
  margin: auto;
  width: 70%;
  height: 50px;
  outline: 0;
  color: #888;
  font-size: 16px;
  font-family: 微软雅黑, microsoft yahei, arial, PingFang SC, helvetica,
    sans-serif;
}

.seach-btn {
  color: #ffffff;
  line-height: 46px;
  width: 90px;
  height: 46px;
  text-align: center;
  margin: auto;
  border-radius: 50px;
  background-color: #7371ef;
}

.seach-btn:hover {
  box-shadow: 0 4px 20px rgba(115, 113, 239, 0.5);
}

.seach-bgcolor {
  background-color: #28dd8e;
}
.a-none {
  text-decoration: none;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
