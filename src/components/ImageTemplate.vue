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
    <div class="seach-content">
      <div class="search-input-box-img">
        <input type="text" class="seach-input" placeholder="搜索作品">
        <a href="#" class="img-seach-btn a-none"></a>
      </div>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="PNG素材" name="1">
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
      </el-tab-pane>
      <el-tab-pane label="背景素材" name="2">
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
      </el-tab-pane>
      <el-tab-pane label="设计模板" name="3">
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
      </el-tab-pane>
      <el-tab-pane label=" 摄影图" name="4">
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
      </el-tab-pane>
      <el-tab-pane label="艺术字" name="5">
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
      </el-tab-pane>
    </el-tabs>
    <el-row class="prev">
      <el-button
        style="background-color: #7371ef ; color: #ffffff;
  width: 160px;  height: 50px;border-radius: 50px;"
        round
      >查看更多</el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bannerimgsrc: require("./../img/sucai_banner.jpg"),
      activeName: "1",
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
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
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
  height: 44px;
  z-index: 9;
}
.search-input-box-img {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 44px;
  background-color: #fff;
  border-radius: 50px;
}
.seach-input {
  border: none;
  border-radius: 50px;
  margin: auto;
  width: 80%;
  height: 40px;
  outline: 0;
  color: #888;
  font-size: 16px;
  font-family: 微软雅黑, microsoft yahei, arial, PingFang SC, helvetica,
    sans-serif;
}
.img-seach-btn {
  background: url("../img/btnicon.png") no-repeat;
  width: 75px;
  height: 44px;
  top: 0;
  right: 0;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  background-size: 298px 202px;
}

.a-none {
  text-decoration: none;
}
.cards {
  /* margin-left: 0px; */
  margin-top: 50px;
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
.el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.prev {
  margin-top: 50px;
  text-align: center;
}
</style>
