var appIonic = angular.module('ionicApp', ['ionic']);

appIonic.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tabs', {
          url: "/tab",
          abstract: true,
          templateUrl: "templates/tabs.html"
      })
      .state('tabs.home', {
          url: "/home",
          views: {
              'home-tab': {
                  templateUrl: "templates/home.html",
                  controller: 'HomeTabCtrl'
              }
          }
      })
      .state('tabs.homePage1', {
            url: "/homePage1",
            views: {
            'home-tab': {
                    templateUrl: "templates/homePage1.html"
            }
            }
      })
      .state('tabs.cadAdocao', {
        url: "/cadAdocao",
                views: {
              'cadAdocao-tab': {
                          templateUrl: "templates/cadAdocao.html"
       }
          }
      })
      .state('tabs.facts2', {
              url: "/facts2",
              views: {
                  'cadAdocao-tab': {
                      templateUrl: "templates/facts2.html"
          }
          }
      })
      .state('tabs.about', {
              url: "/about",
              views: {
                  'about-tab': {
                      templateUrl: "templates/about.html"
               }
                 }
        })
      .state('tabs.navstack', {
              url: "/navstack",
              views: {
              'about-tab': {
                      templateUrl: "templates/nav-stack.html"
                  }
                  }
        })
       .state('tabs.lost', {
        url: "/lost",
                views: {
                 'lost-tab': {
                         templateUrl: "templates/lost.html"
                         }
                         }
         })
        .state('tabs.more_lost', {
        url: "/more_lost",
                  views: {
                  'lost-tab': {
                          templateUrl: "templates/more_lost.html"
             }
          }
      });


    $urlRouterProvider.otherwise("/tab/home");

    })

appIonic.controller('HomeTabCtrl', function ($scope) {
    console.log('HomeTabCtrl');
    })

function InstantSearchController($scope, $http) {
    //chamada do banco de dados
    // O modelo de dados. Estes itens normalmente são requisitados via Ajax,

    $http.get('http://localhost:8008/api/busca').success(buscaCallback);

    function buscaCallback(data, status) {
        $scope.items = data;
        }

    }

appIonic.filter('searchFor', function () {

    // Todos os filtros devem retornar uma função. O primeiro 
    // parâmetro é um dado que será filtrado, e o segundo é um 
    // argumento que vai ser passado com dois pontos
    // searchFor: searchString

    return function (arr, searchString) {

        if(!searchString) {
            return arr;
            }

        var result =[];

        searchString = searchString.toLowerCase();

        // Usando o útil método forEach para iterar através do array
        
        angular.forEach(arr, function(i) {

            if(i.anm_obs.toLowerCase().indexOf(searchString) !== -1) {
                result.push(i);
            }
            });

        return result;
        };

    });


