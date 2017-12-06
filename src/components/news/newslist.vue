 
 <template>
   <div id='tmpl'>
   		<ul class="mui-table-view">
			<li v-for="item in list" class="mui-table-view-cell muimedia">
				<router-link v-bind="{to:'/news/newsinfo/'+item.id}" >
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						{{item.title}}
						<p class='mui-ellipsis'>{{item.zhaiyao}}</p>
						 <div class="ft">
							<span>发表时间:{{item.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
							<span class="click">点击数：{{item.click}}</span>
						</div>
					</div>
				</router-link>
			</li>
		</ul>
   </div>
 </template>
 <script>
 	export default {
   		data(){
			return {
				list:[] //新闻列表功能
			}
		},
		created(){
			this.getnewslist();
		},
		methods:{
		// 获取api中的新闻资讯数据
		getnewslist(){
				var url="http://www.lovegf.cn:8899/api/getnewslist"
				this.$http.get(url).then(function(res){
					var body=res.body;
					if(body.status != 0){
					Toast(body.message);
					return;
				}

				// 5.0 将正常的message数据赋值给this.list
				this.list = body.message;
				})
			}
   		}
 	}
 </script>,
 <style scoped>
 	.mui-table-view img {
 		width: 80px;
 		height: 80px;
 	}
 	.mui-table-view .mui-media-object {
 		max-width: 80px;
 		line-height: 80px;
 	}
 	.ft {
 		margin-top: 1.5em;
 		color: #0094ff;
 		font-size: 14px;
 	}
 	.ft .click {
 		margin-left:20px;
 	}
 </style>
 
