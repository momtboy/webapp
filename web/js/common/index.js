/**
 * Created by Administrator on 2015/6/18.
 */
define(['jquery','template','angular'],function($, $template,angular){

    //缓存
    var nodes = {
        'btn' : $('#btn')
    };

    //表单提交
    var fromAjax = function(){
        if(nodes.btn.length > 0){
            nodes.btn.on('click',function(e){
                 e.preventDefault();
                 alert('111');
             });
        }
    };


    (function(){
        var persons= [
            {
                name : "张三",
                age : 23
            },
            {
                name : "李四",
                age : 30
            },
            {
                name : "王五",
                age : 42
            }
        ];
        document.getElementById("listModel").innerHTML = $template('tpl:listModel',{result:persons});
    })();


    //angularjs
    var app = angular.module("myApp",[]);
    app.controller("ctrlLogin",function($scope){
        $scope.name = "ketty" ;
    });


    return {
        fromAjax : fromAjax
    }

});