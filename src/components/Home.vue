<template>
  <div>
    <el-carousel indicator-position="outside" :interval="2000" arrow="always" height="400">
      <el-carousel-item v-for="item in listimg_url" :key="item.id">
        <img :src=" item.img_url" alt>
      </el-carousel-item>
    </el-carousel>

    <el-row>
   <el-col :span="3" v-for="(o, index) in 10" :key="o" :offset="index > 0 ? 1 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
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
      clear: both
  }
</style>
