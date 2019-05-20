<template>
  <div class="imgup">
    <el-row>
      <el-input placeholder="请输入上传图片名称" v-model="imgname" style=" width:300px;  padding-top: 50px;"></el-input>
    </el-row>
    <el-select v-model="imgtypevalue" placeholder="请选择图片类型" style=" width:300px;  padding-top: 50px;">
      <el-option v-for="item in imglist" :key="item.id" :label="item.type" :value="item.id"></el-option>
    </el-select>
    <el-row class="up">
      <el-upload
        action="http://localhost:3000/img/upload"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        ref="upload"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl">
      </el-dialog>
    </el-row>
    <el-button type="primary" round @click="submitUpload">上传图片</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      imglist: [],
      imgname:"",
      imgtypevalue: ""
    };
  },
  created() {
    this.imgtype();
  },
  methods: {
    submitUpload() {
      let img = {
        imgname: this.imgname,
        imagetTypeid: this.imgtypevalue
      };
      this.axios.post("http://localhost:3000/img/create",img).then(result => {
        this.imglist = result.data;
      });
    },
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
      });
    }
  }
};
</script>

<style>
.imgup {
  text-align: center;
  width: 100%;
  height: 600px;
}
.up {
  padding-top: 20px;
  margin-bottom: 30px;
}
</style>


