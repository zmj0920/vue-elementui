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
      <el-col
        :span="5"
        v-for="(o, index) in list_imgurl"
        :key="o.id"
        :offset="index > 0 ? 1 : 1"
        class="cardcols"
      >
        <el-card :body-style="{ padding: '0px' }" class="cards">
          <img :src="o.img_url" class="image">
          <div class="bottom clearfix">
            <span>{{o.title}}</span>
            <el-button type="text" class="button">查看</el-button>
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
      list_imgurl: [
        { id: 1, img_url: require("./../img/280.jpg"), title: "党课" },
        { id: 2, img_url: require("./../img/282.jpg"), title: "立夏" },
        { id: 3, img_url: require("./../img/285.jpg"), title: "商业计划书" },
        { id: 4, img_url: require("./../img/287.jpg"), title: "劳动节" },
        { id: 5, img_url: require("./../img/289.jpg"), title: "中国风" },
        { id: 6, img_url: require("./../img/290.jpg"), title: "公司介绍" },
        { id: 7, img_url: require("./../img/292.jpg"), title: "夏天" },
        { id: 8, img_url: require("./../img/285.jpg"), title: "五四" }
      ]
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
  z-index: 9;
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

.cards {
  margin-left: 0px;
  margin-top: 20px;
}

.el-row {
  margin-right: 50px;
}

.bottom {
  text-align: center;
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
