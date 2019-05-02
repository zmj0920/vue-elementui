<template>
  <div>
    <div class="block" style="height:300px">
      <el-image :src="bannerimgsrc" style="height:300px">
        <div slot="placeholder" class="image-slot">
          加载中
          <span class="dot">...</span>
        </div>
      </el-image>
    </div>

    <div class="seach-content-ppt">
      <div class="search-input-box-ppt">
        <input type="text" class="seach-input-ppt" placeholder="搜索作品">
        <a href class="btn-icon a-none"></a>
        <!-- <el-button class="btn-icon">搜索素材</el-button> -->
      </div>
    </div>

    <el-row style=" display: flex;flex-flow: row wrap;">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>企业职场</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div  v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>党政文化</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>学校教育</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>热门风格</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
      </el-card>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      bannerimgsrc: require("./../img/ppt_banner.jpg"),
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
.seach-content-ppt {
  display: flex;
  flex-flow: row wrap;
  position: absolute;
  top: 200px;
  left: 25%;
  width: 51%;
  height: 54px;
  z-index: 9;
}
.search-input-box-ppt {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 44px;
  background-color: #fff;
}
.seach-input-ppt {
  border: none;
  margin: auto;
  width: 80%;
  height: 40px;
  outline: 0;
  color: #888;
  font-size: 16px;
  font-family: 微软雅黑, microsoft yahei, arial, PingFang SC, helvetica,
    sans-serif;
}
.btn-icon {
  background: url("../img/btnicon.png") no-repeat;
  width: 75px;
  height: 44px;
  top: 0;
  right: 0;
  background-size: 298px 202px;
}

.a-none {
  text-decoration: none;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  margin-left: 40px;
  width: 280px;
}

.cards {
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
</style>
