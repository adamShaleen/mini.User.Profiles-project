// declaring the service
angular.module('userProfiles').service('mainService', function() {

    var data = [

    {
    "id": 1,
    "first_name": "george",
    "last_name": "bluth",
    "avatar": "https://a0.memecaptain.com/src_thumbs/31460",
    "quote": 'No Touching!'
    },
    {
    "id": 2,
    "first_name": "lucille",
    "last_name": "bluth",
    "avatar": "http://kyleledbetter.com/silo-3/assets/images/avatars/lucille_128.jpg",
    "quote": "It's happy hour somewhere."
    },
    {
    "id": 3,
    "first_name": "buster",
    "last_name": "bluth",
    "avatar": "http://kyleledbetter.com/silo-3/assets/images/avatars/buster_128.jpg",
    "quote": "Hello, brother..."
    }
   ]

   // function that returns data for use with the controller
   this.getUsers = function() {
       return data;
   };
});
