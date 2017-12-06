 <template>
        <div>
        	<mt-header fixed title="2017传智播客..."></mt-header>
        	<router-view>
                
            </router-view>
            <!-- 3.0 利用mui中的tabbar组件实现系统的底部 -->
            <nav class="mui-bar mui-bar-tab">
                <router-link class="mui-tab-item " to="/home">
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label">首页</span>
                </router-link>
                <router-link class="mui-tab-item" to="/tabbar-with-chat">
                    <span class="mui-icon mui-icon-email">
                    
                    </span>
                    <span class="mui-tab-label">会员</span>
                </router-link>
                <router-link class="mui-tab-item" to="/shopcar">
                    <span class="mui-icon mui-icon-contact">
                        <span class="mui-badge">0</span>
                    </span>
                    <span class="mui-tab-label">购物车</span>
                </router-link>
                <router-link class="mui-tab-item" to="/tabbar-with-map">
                    <span class="mui-icon mui-icon-gear"></span>
                    <span class="mui-tab-label">搜索</span>
                </router-link>
            </nav>
            
        </div>

    </template>
 
    <script>
    		// import {add,substrict} from './calc.js';
    		import { Toast } from 'mint-ui';

    		import { MessageBox } from 'mint-ui';
    		//function add(x,y){console.log(x+y)}  
    		//module.exports={
            export default{  
                    data(){  	
                            return {
                                    msg :'hello vuejs1111'
                            }
                    },
                    methods:{
                    	
                    	
                    	
                    	
                    	
                    },
                    created(){

                    }
            }
    </script>

    
    <style scoped>
    
    </style>