angular.module('mongo.ctrl', [])
    .factory('Event', function ($mongolabResourceHttp) {
        return $mongolabResourceHttp('event');
    })

    .controller('mongoCtrl', function($scope, event) {
        $scope.event = event;
        $scope.save = function () {
            $scope.event.$save();
            alert('All done');
            console.log($scope.event)
        }
    })
    .controller('eventsCtrl', function($scope, events) {
        $scope.events = events;
    });
