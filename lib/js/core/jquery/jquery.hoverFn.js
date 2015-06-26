/**
 * Created by Administrator on 2015/6/25.
 */
(function($){
    $.fn.hoverFn = function(options){
        this.each(function(){
            var _this = $(this);
            $(this).hover(function(){
                _this.css({'backgroundColor': '#000'});
            },function(){
                _this.css({'backgroundColor': 'red'});
            });
        });
    }
})(jQuery);