<template>
  <div>
    <el-carousel indicator-position="outside" :interval="2000" arrow="always" class="carousel-col">
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

    <el-row class="nav-round">
      <el-button round plain>论文答辩PPT</el-button>
      <el-button type="primary" round plain>说课PPT模板</el-button>
      <el-button type="success" round plain>商务PPT模板</el-button>
      <el-button type="info" round plain>安全教育PPT</el-button>
      <el-button type="warning" round plain>创业计划书PPT</el-button>
      <el-button type="danger" round plain>人工智能PPT</el-button>
      <el-button round plain>家长会PPT</el-button>
      <el-button type="primary" round plain>党员大会PPT</el-button>
    </el-row>

    <el-row class="el-rows">
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
            <el-button type="text" class="button"></el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row class="nav-round">
      <el-button plain>论文答辩PPT</el-button>
      <el-button type="primary" plain>说课PPT模板</el-button>
      <el-button type="success" plain>商务PPT模板</el-button>
      <el-button type="info" plain>安全教育PPT</el-button>
      <el-button type="warning" plain>创业计划书PPT</el-button>
      <el-button type="danger" plain>人工智能PPT</el-button>
      <el-button plain>家长会PPT</el-button>
      <el-button type="primary" plain>党员大会PPT</el-button>
    </el-row>


    <el-row class="el-rows">
      <el-col
        :span="5"
        v-for="(o, index) in boxlist_imgurl"
        :key="o.id"
        :offset="index > 0 ? 1 : 1"
        class="cardcols"
      >
        <el-card :body-style="{ padding: '0px' }" class="cards">
          <img :src="o.img_url" class="image">
          <div class="bottom clearfix">
            <span>{{o.title}}</span>
            <el-button type="text" class="button"></el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row class="foot-banner"></el-row>
    <el-row class="foot-content"></el-row>
    <el-row class="bottom-seo-box"></el-row>
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
      ],
      boxlist_imgurl: [
        { id: 1, img_url: require("./../img/bx-1.jpg"), title: "党课" },
        { id: 2, img_url: require("./../img/bx-2.jpg"), title: "立夏" },
        { id: 3, img_url: require("./../img/bx-3.jpg"), title: "商业计划书" },
        { id: 4, img_url: require("./../img/bx-4.jpg"), title: "劳动节" },
        { id: 5, img_url: require("./../img/bx-5.jpg"), title: "中国风" },
        { id: 6, img_url: require("./../img/bx-6.jpg"), title: "公司介绍" },
        { id: 7, img_url: require("./../img/bx-7.jpg"), title: "夏天" },
        { id: 8, img_url: require("./../img/bx-8.jpg"), title: "五四" }
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
  width: 80%;
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
  /* margin-left: 0px; */
  margin-top: 50px;
}
.el-rows {
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
.nav-round {
  margin-top: 30px;
  margin-left: 10%;
}
.foot-banner{
height: 300px;
background-color: #28dd8e;
}
.foot-content{
height: 205px;
background-color:#7371ef;
}

.bottom-seo-box{

height: 251px;
background-color:black;
}



</style>
