/**
 * Created by Administrator on 2015/6/18.
 */
(function(){
    var baseUrl = 'http://' + document.location.host + '/html/webapp/';  //设置全局路径
    var mod = {
        baseUrl : baseUrl,
        //加载jQuery插件
        shim: {
            'jquery.hoverFn': ['jquery'],
            "angular":{
                exports: "angular"
            }
        },
        //设置js文件路径
        paths : {
            'jquery' : 'lib/js/core/jquery/jquery-1.11.3.min',
            'angular' : 'lib/js/core/angular/angular',
            'template' : 'lib/js/core/arttemplate/template',
            'hoverFn' : 'lib/js/core/jquery/jquery.hoverFn'
        },
        urlArgs: "time=" + (new Date()).getTime()  //防止读取缓存，调试用
    };
    //执行requirejs配置
    requirejs.config(mod);
})();

