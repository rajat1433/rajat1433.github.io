/*==========================================================
@invinciblerm
August 2018
 ===========================================================*/

dashboard.controller("SkillController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.skills = {};

    //development stack
    vm.skills.development = [
        {
            Software: "C++",
            Percentage: "100",
            theme: "yellow",
            image: "cplusplus"
        },
        {
            Software: "Python",
            Percentage: "100",
            theme: "aqua",
            image: "python"
        },
        {
            Software: "R",
            Percentage: "100",
            theme: "green",
            image: "R"
        },
        {
            Software: "Java",
            Percentage: "100",
            theme: "purple",
            image: "java"
        },
        {
            Software: "Javascript",
            Percentage: "100",
            theme: "maroon",
            image: "javascript"
        }
    ];

    //Design Stack
    vm.skills.design = [
        {
            Software: "HTML 5",
            Percentage: "100",
            theme: "yellow",
            image: "html5"
        },
        {
            Software: "CSS 3",
            Percentage: "100",
            theme: "aqua",
            image: "css3"
        },
        {
            Software: "Angular JS",
            Percentage: "100",
            theme: "yellow",
            image: "angular"
        },
        {
            Software: "Bootstrap",
            Percentage: "100",
            theme: "purple",
            image: "bootstrap"
        },
        {
            Software: "Android Studio",
            Percentage: "100",
            theme: "yellow",
            image: "android"
        },
        {
            Software: "PHP",
            Percentage: "100",
            theme: "aqua",
            image: "php"
        },
        {
            Software: "Flask",
            Percentage: "100",
            theme: "green",
            image: "flask"
        } ,
        {
            Software: "Mongo DB",
            Percentage: "100",
            theme: "yellow",
            image: "mongodb"
        }
    ];

    //Other Stack
    vm.skills.others = [
        {
            Software: "sklearn",
            Percentage: "100",
            theme: "aqua",
            image: "sklearn",
        },
        {
            Software: "NLTK",
            Percentage: "100",
            theme: "purple",
            image: "nltk"
        },
        {
            Software: "Keras",
            Percentage: "100",
            theme: "maroon",
            image: "keras"
        },
        {
            Software: "Tensorflow",
            Percentage: "100",
            theme: "yellow",
            image: "tensorflow"
        },
        {
            Software: "OpenCV",
            Percentage: "100",
            theme: "yellow",
            image: "opencv"
        },
        {
            Software: "Pandas",
            Percentage: "100",
            theme: "yellow",
            image: "pandas"
        },
        {
            Software: "Spacy",
            Percentage: "100",
            theme: "yellow",
            image: "spacy"
        },
        {
            Software: "Numpy",
            Percentage: "100",
            theme: "yellow",
            image: "numpy"
        },
        {
            Software: "Matplotlib",
            Percentage: "100",
            theme: "yellow",
            image: "matplotlib"
        }
    ];
}]);

