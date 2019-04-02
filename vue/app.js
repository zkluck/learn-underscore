// 实例化VUE对线
new Vue({
    el:'#vue-app',
    data: {
        name: 'zk',
        job: 'web',
        website:'http://www.baidu.com',
        websiteTag: '<a href="http://www.baidu.com">news</a>'
    },
    methods:{
        greet: function(time){
            return 'good job ' + time + ' ' + this.job;
        }
    }
})

// el: element 需要的获取的元素，一定是html中的根容器元素
// data: 用于数据的存储
// methods: 用于存储各种方法
// data-bind: 给属性绑定对应的值