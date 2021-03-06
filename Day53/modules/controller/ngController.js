(function(global, angular, jq){
  'use strict';

  function ngCtrl($scope){
    var content_text = 'AngularJS Application is Awesome!!';

    $scope.content = '';
    $scope.setContent = function() {
      this.content = content_text;
    };

    var ngTHeadline = jq('.ng-template-headline');

    content_text = content_text.split(' ').slice(-1).toString().toLowerCase().replace('!!', '');
    ngTHeadline.text( content_text );
  };  

  ngCtrl.$inject = ['$scope'];

  angular.module('ngApp').controller('ngController', ngCtrl);  
}(this, this.angular, this.jQuery));
