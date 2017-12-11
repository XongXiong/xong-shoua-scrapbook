myApp.controller('PostController', function (PostService) {
    console.log('PostController Loaded');
    var vm = this;
    vm.postService = PostService;
    vm.test = "heyyyyyyy post controller is on!";
});