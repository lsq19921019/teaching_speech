
<template>
<div style="background-color:#fff;height:100%;">
        <!-- <div class="page_title">
            <div style="height:1.3rem;display:flex;justify-content: center;align-items: Center;color:#222222;font-size:.34rem;border-bottom:1px solid #ddd;">详情</div>
            <a onclick="window.history.back();" style="display:block;border-left:2px solid #ccc;border-bottom:2px solid #ccc;transform:rotate(45deg);height:.3rem;width:.3rem;top: .5rem;left: .4rem;position:absolute;"></a>
        </div>  -->

    <div style="width:90%;margin:0 auto;font-size:.3rem;background-color:#fff;">
        <div style="font-size:.35rem;font-weight:bold;padding:.3rem 0;border-bottom:1px dashed #ddd;">
            题目：{{page_data.title}}
        </div>
        <div style="padding-top:.2rem;">
            主讲人：{{page_data.speaker}}
        </div>
        <div style="padding-top:.2rem;">
            时 间：{{page_data.date+' '+page_data.time}}
        </div>
        <div style="padding-top:.2rem;">
            地 点：{{page_data.place}}
        </div>
        <div style="padding-top:.2rem;">
            {{page_data.content}}
        </div>
    </div>
</div>
</template>
<script>
import Calendar from 'vue-calendar-component';
  // 多个标记示例
export default {
    components: {
        Calendar
    },
        data() {
            return {
                page_data:'',
                //接口地址
                apiPath : {
                    //列表
                    list : '/api/platform/list',
                    //首页列表
                    //index : '/api/platform/index/new',
                    // index : '/api/platform/index',
                    index:'/static/datas.json',
                    //个人中心
                    user : '/api/user/index',
                    //banner pv/uv 统计接口
                    bannerPv : '/api/platform/bannerPv'
                },
            }
        },
  methods:{
    clickDay(data) {
      console.log(data); //选中某天

    },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    },
    clickToday(data) {
      console.log(data); //跳到了本月
    },
            //获取列表数据
            getList() {      
                let _this = this;                     
                let data = {
                //    pageNum : this.pageNum,
                //    type : this.type
                };                    

                this.$ajax.get(this.apiPath.index,_this.$qs.stringify(data),{
                    headers: _this.Base.initAjaxHeader(1,data)
                }).then(res=>{
                //    this.bannerList = res.data.data; 
                   this.page_data = res.data.data[0];
                   console.log(res.data.data);
                    // let result = res.data; 
                    // if(result.status == 0 || result.status == -100 || result.status == -9) { 
                    //     //首页只展示十条数据，不用分页 
                    //     //_this.totalPage = result.result.pageEntity.totalPage;
                    //     _this.bannerList = result.result.bannerList;
                    //     _this.carouseList = result.result.carouseList;
                    //     _this.showMarquee(_this,0);
                    //     if(_this.pageNum > _this.totalPage) {
                            
                    //     } else {
                    //         _this.listData = [ ..._this.listData, ...result.result.list ];
                    //     }
                    //     _this.pageNum += 1; 
                    // } else {
                    //     _this.$msg({ content : result.msg });
                    // }
                    // _this.isShowLoading = false;
                    // _this.isLoading = false;
                    // //解决一个问题，ios返回莫名出现遮罩层
                    // window.scrollTo(0,1); 
                    // window.scrollTo(0,0); 

               });
            },
  },
  
  created() {
  },
        beforeMount() {         
            this.getList();
        }
}
</script>
<style lang="scss" scoped>h3 {
  text-align: center;
  width: 90%;
  margin: auto;
}
.div {
  margin: auto;
  width: 220px;
  height: 44px;
  line-height: 44px;
  background: #0fc37c;
  color: #fff;
  font-size: 17px;
  text-align: center;
  margin-top: 20px;
}
.wh_container >>> .mark1 {
  background-color: orange;
}
.wh_container >>> .mark2 {
  background-color: blue;
}
.wh_content_item > .wh_isMark {
  background: orange;
}
.wh_container >>> .wh_content_all {
  background-color: red;
}
</style>


