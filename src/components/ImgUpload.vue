<template>
  <div class="imgup">
    <el-row>
      <el-input placeholder="请输入上传图片名称" style=" width:300px;  padding-top: 50px;"></el-input>
    </el-row>
    <el-select v-model="value" placeholder="请选择图片类型" style=" width:300px;  padding-top: 50px;">
      <el-option v-for="item in imglist" :key="item.id" :value="item.type"></el-option>
    </el-select>
    <el-row class="up">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt>
      </el-dialog>
    </el-row>
    <el-button type="primary" round>上传图片</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      imglist: [],
      value: ""
    };
  },
  created() {
    this.imgtype();
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    imgtype() {
      this.axios.get("http://localhost:3000/imagetType/find").then(result => {
        this.imglist = result.data;
        console.log(result.data);
      });
    }
  }
};
</script>

<style>
.imgup {
  text-align: center;
  width: 100%;
  height: 400px;
}
.up {
  padding-top: 20px;
  margin-bottom: 30px;
}
</style>


