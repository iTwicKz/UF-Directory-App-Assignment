angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;


    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */

    $scope.addListing = function(user) {
      // $scope.user = angular.copy($scope.master);

      // var fs = require('fs');

      // $scope.listings = $scope.listings.concat
      taker =       {
                "code": "AAF",
                "name": "Academic Advisement - Farrior Hall",
                "coordinates": {
                    "latitude": 29.6502323,
                    "longitude": -82.34563860000002
                },
                "address": "100 Fletcher Dr, Gainesville, FL 32611, United States"
            }

      console.log("YEAH!!")
      console.log(user)
      $scope.listings.push(user)

      // JSON.stringify($scope.listings);
      // fs.writeFile('listingFactory.json', JSON.stringify($scope.listings));


    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1)
    };
    $scope.showDetails = function(index) {};
  }
]);
