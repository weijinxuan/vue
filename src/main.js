// 1.0 导入vue核心包
    // 凡是使用npm安装的包 引入的时候都不需要写相对路径 只需要写包名即可
    import Vue from 'vue';

    // 2.0 导入App.vue的vue对象
    import App from './App.vue';
    //
    // 1. 导入vue-router
    import vueRouter from 'vue-router';
    // 2. 将vueRouter对象绑定到Vue对象上
    Vue.use(vueRouter);
     // 3. 导入路由规则对应的组件对象
    import home from './components/Home.vue';
    import shopcar from './components/shopcar/car.vue';
    import newslist from './components/news/newslist.vue';
    import newsinfo from './components/news/newsinfo.vue';
    //引用miu
    import 'mint-ui/lib/style.min.css'
    // - 导入mint-ui
    import mintui from 'mint-ui';
    // - 在vue中注册mint-ui
    Vue.use(mintui);
    // 5.0 注册mui的css样式
    import '../statics/mui/css/mui.css';

    // 6.0 导入一个当前系统的全局基本样式
    import '../statics/css/site.css';

    // 7.0 将vue-resource在vue中绑定，自动在vue对象实例上注入一个$http对象就可以使用ajax方法了
    import vueResource from 'vue-resource';
    Vue.use(vueResource);

    // 8.0 定义一个全局过滤器实现日期的格式化
    import moment from 'moment';
    Vue.filter('datefmt',function(input,fmtstring){
    //  使用momentjs这个日期格式化类库实现日的格式化功能
        return moment(input).format(fmtstring);
    });
    
    // 4.定义路由规则
    var router1 = new vueRouter({
            linkActiveClass:'mui-active',
            routes:[
                    {path:'/home',component:home}, 
                    {path:'/shopcar',component:shopcar},
                    {path:'/news/newslist',component:newslist},
                    {path:'/news/newsinfo/:id',component:newsinfo},
            ]
            });

    // 3.0 利用Vue对象进行解析渲染
    new Vue({
            el:'#app',
            // 使用路由对象实例
            router:router1,
            render:function(create){return create(App)} //es5的写法
            // render:c=>c(App)  // es6的函数写法 =>：goes to
    });