/**
 * Created by Administrator on 2015/6/25.
 * 数据接口配置
 * data config
 */
define(function(){
    var localhostUrl = 'http://' + document.location.host + '/';
    var dataAjaxResult = {
        'login' : localhostUrl + 'index.php?r=main/user/login',
        'regGetTell' : localhostUrl + 'index.php?r=main/user/getMobileCode',
        'reg' : localhostUrl + 'index.php?r=main/user/reg',
        'loginOut' : localhostUrl + 'index.php?r=main/user/pdaLoginOut',
        'getpwdmobilecode' : localhostUrl + 'index.php?r=main/user/getpwdmobilecode',
        'modifyuserpwd' : localhostUrl + 'index.php?r=main/user/modifyuserpwd',
        'accountindex' : localhostUrl + 'index.php?r=main/user/accountindex',
        'addmessage' : localhostUrl + 'index.php?r=main/user/addmessage',
        'wxreglogin' : localhostUrl + 'index.php?r=main/user/wxreglogin',
        'dataConfig' : localhostUrl + 'index.php?r=main/user/dataConfig',
        'checkSphereAreaNew' : localhostUrl + 'index.php?r=main/fast/checkSphereAreaNew',
        'selcost' : localhostUrl + 'index.php?r=main/fast/selcost'
    };
    return dataAjaxResult;
});

