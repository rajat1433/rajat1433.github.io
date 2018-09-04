/*==========================================================
@invinciblerm
August 2018
 ===========================================================*/

dashboard.controller("RecentController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.recents = [
      {
          id: 1,
          heading: "Recommender System",
          title: "Query based Recommender System using information retrieval and natural language processing",
          description: "A news Recommender system was built to retrieve news articles and present them to users based on the degree of relevancy to their search query. News Articles were clustered based on their tf-idf vectors, Wordnet sysnsets were used to increase the coverage of potentially relevant news articles. A user query was served with summarized news from all sources using Natural language processing techniques. Experimental results showed that the proposed approach performed well and retrieved meaningful results. ",
          image: "reco",
          theme: "warning",
          url:"fp360.us:830",
          
      },
      {
          id: 2,
          heading: "Natural Language Processing",
          title: "Duplicate Question Detection using Deep Learning ",
          description: "Using RNN,LSTM,CNN and ensemble models made a model to detect the duplicate questions in websites like Quora and Stack overflow. Used Natural Language Processing Libraries in the models. Implemented the Glove model and various current research papers in this field and try to optimize the accuracy and F1 score by searching for hyper parameters and feature engineering.",
          image: "ques",
          theme:"info",
          url: "fp360.us:459",
         
          
      },
      {
          id: 3,
          heading: "Dashboard",
          title: "Angular Bootstrap Dashboard",
          description: "Angular Bootstrap Dashboard is a web dashboard application based on Bootstrap and AngularJS.",
          image: "dashboard",
          theme: "success",
          url: "dashboard.ranjithprabhu.in",
          
      },
      {
          id: 4,
          heading: "Full Stack Website Development",
          title: "Health Care Portal and Database Maintenance System ",
          description: "Made a Health Care Portal to enable users to maintain a complete record of their medical history. Also includes an Online Appointment system , each user has a unique login id, symptom tests , blogs etc. All their information was linked to their Aadhar Card number. The Records of each patient was stored in a Database using MongoDB. Technologies used were HTML, CSS, Angular, Javascript, PHP, MongoDB and WAMP Server.",
          image: "health",
          theme: "danger",
          url: "fp360.us:202",
         
      },
      {
          id: 5,
          heading: "Microsoft Code Fun Do Hackathon",
          title: "Myopia App",
          description: "Made an Android Application to measure the number of the lens required to correct the myopia. Provide Eye exercises ,tests and blindness checker.",
          image: "fundo",
          theme: "primary",
          url: "fp360.us:7077",
          
      }
    ];

    console.log("coming to Recent controller");

}]);

