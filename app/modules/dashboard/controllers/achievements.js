/*==========================================================
@invinciblerm
August 2018

 ===========================================================*/

dashboard.controller("achievementsController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.websites = [
        {
            image: "sams",
            desc:"First Runner Up in Appathon 2018 , an NLP based coding event organized by Samsung Research Institute Bangalore."
        },
        {
            image: "1433",
            desc: "AIR 1433 in prestigious JEE-Advanced 2015."
        },
        {
            image: "2743",
            desc: "AIR 2743 in prestigious JEE-Main 2015."
        },
        {
            image: "cyber",
            desc: "All India Rank 1st in Edu Cyber Olympiad 2011."
        },
        {
            image: "tse",
            desc: "Ranked 2nd in 4th Talent Search Examination in 2012 by Shiksha Prasaar Samiti ."
        },
        {
            image: "technex",
            desc: "Co-Coordinator in the Byte the Bits Event in Technex(Annual Technical festival of IIT BHU)"
        },
       
        {
            image: "dare",
            desc: "Organized Dare2Compete , a competitive coding event in IIT BHU."
        },
        {
            image: "tutor",
            desc: "Tutor for CSO 101 (Computer Programming) course for Even Semester 2017-18."
        }  
    ];
    console.log("coming to Websites controller");

}]);

