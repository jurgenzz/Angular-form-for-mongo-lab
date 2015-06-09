angular.module('mongoManager', ['ui.router', 'mongolabResourceHttp', 'mongo.ctrl'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('form', {
                url: '/form',
                templateUrl: 'form.html',
                controller: 'mongoCtrl',
                resolve: {
                    event: function (Event) {
                        return new Event();
                    }
                }
            })
            .state('all', {
                url: '/all',
                templateUrl: 'all.html',
                controller: 'eventsCtrl',
                resolve: {
                    events: function (Event) {
                        return Event.all();
                    }
                }
            });
        $urlRouterProvider.otherwise('form');
    })

    .constant('MONGOLAB_CONFIG', {
        API_KEY: 'YOUR-API-KEY',
        DB_NAME: 'events'
    });



