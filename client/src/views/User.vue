<template>
    <v-card>

        <input class="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="update"/>
        <v-file-input v-model="img" accept="image/*" label="图片上传"></v-file-input>
        <v-btn @click="upload">上传</v-btn>


    </v-card>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "User",
        data(){
            return{
                img:null
            }
        },
        methods:{
            upload(){

               //  let reader =new FileReader()
               //  let img=this.img
               //  console.log(img)
               //  let vm=this
               //  let accept='image/gif, image/jpeg, image/png, image/jpg'
               //  let imgData={accept:accept}
               //  let type = img.type; //文件的类型，判断是否是图片
               //  let size = img.size; //文件的大小，判断图片的大小
               //  if (imgData.accept.indexOf(type) == -1) {
               //      alert('请选择我们支持的图片格式！');
               //      return false;
               //  }
               //  //图片的大小
               //  if (size > 3145728) {
               //      alert('请选择3M以内的图片！');
               //      return false;
               //  }
               //
               //  var uri = ''
               //  let form = new FormData();
               //  form.append('file', img, img.name);
               // let  headers={headers:{  'Content-Type': 'multipart/form-data'}}


                // axios.post('/upload', form, {headers: {'Content-Type': 'multipart/form-data'}}).then(res => {
                //     console.log(res)
                // }).catch(error => {
                //     alert('更新用户数据失败' + error)
                // })



                axios.post('upload',{name:'wcs'}).then(res=>{
                    console.log(res)
                }).catch(error=>{
                    console.log(error)
                })
            },
            update(e){
                // let file = e.target.files[0];
                // let param = new FormData(); //创建form对象
                // param.append('file',file);//通过append向form对象添加数据
                // console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
                // let config = {
                //     headers:{
                //         'Content-Type':"multipart/form-data"}
                // }; //添加请求头
                // axios.post('/upload',param)
                //     .then(response=>{
                //         console.log(response);
                //     })
            }
        }
    }
</script>

<style scoped>

</style>
