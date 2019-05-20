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
      <el-button
        type="primary"
        round
        plain
        v-for="ppttype in ppttypes"
        :key="ppttype.id"
      >{{ppttype.ppttype}}</el-button>
    </el-row>

    <el-row class="el-rows">
      <el-col
        :span="5"
        v-for="(o, index) in pptlist"
        :key="o.id"
        :offset="index > 0 ? 1 : 1"
        class="cardcols"
      >
        <el-card :body-style="{ padding: '0px' }" class="cards">
          <img :src="'http://localhost:3000/public/pptimg/'+o.pptimg" class="image">
          <div class="bottom clearfix">
            <span>{{o.pptname}}</span>
            <el-button type="text" class="button"></el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row class="nav-round">
      <el-button plain type="success" v-for="imgtype in imgtypes" :key="imgtype.id">{{imgtype.type}}</el-button>
    </el-row>

    <el-row class="el-rows">
      <el-col
        :span="5"
        v-for="(o, index) in imglist"
        :key="index"
        :offset="index > 0 ? 1 : 1"
        class="cardcols"
      >
        <el-card :body-style="{ padding: '0px' }" class="cards">
          <img :src="'http://localhost:3000/public/imgs/'+o.img1" class="image">
          <div class="bottom clearfix">
            <span>{{o.imgname}}</span>
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
      listimg_url: [
        { id: 1, img_url: require("./../img/banner1.jpg") },
        { id: 2, img_url: require("./../img/banner2.jpg") },
        { id: 3, img_url: require("./../img/banner3.jpg") }
      ],
      pptlist: [],
      ppttypes: [],
      imgtypes: [],
      imglist: []
    };
  },
  created() {
    this.pptimgdata();
    this.ppttype();
    this.imgtype();
    this.imgs();
  },
  methods: {
    pptimgdata() {
      this.axios.get("http://localhost:3000/ppt/find").then(result => {
        this.pptlist = result.data;
      });
    },
    ppttype() {
      this.axios.get("http://localhost:3000/ppttype/find").then(result => {
        this.ppttypes = result.data;
      });
    },
    imgtype() {
      this.axios.get("http://localhost:3000/imagetType/find").then(result => {
        this.imgtypes = result.data;
      });
    },
    imgs() {
      this.axios.get("http://localhost:3000/img/find").then(result => {
        this.imglist = result.data;
        console.log(this.imglist);
      });
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
</style>
