app.controller("activateCtrl", function($scope) {
	$scope.info = 	[{
		icon: "black_lives_matter.png",
		username: "black_lives_matter",
		title: "URGENT ACTION ALERT", 
		problem: "Nearly 80 black youth were arrested for interrupting the Chief of Police association conference today," + 
				 " demanding justice for Black youth and our families. Please donate to their bail fund and spread the word.", 
		event: false,
		active: true 
	},{ 
		icon: "brony_garbage.png",
		username: "soundinsilence",
		title: "Need A Place to Stay",
		problem: "Okay you guys this is very serious. I really, really need a place to stay. I live with an abusive father and " + 
				 "tonight things got bad (more than the normal bad) and I need to get out.",
		event: false,
		active: true 
	},{
		icon: "mighty_tim_tim.png",
		username: "mightytimtim",
		title: "Help Carl Beat Cancer",
		problem: "This is my dog, aka my 5th roommate Carl. I have lived with him for the past two years and would really like to keep living with him.",
		event: false,
		active: true 
	}]

	$scope.user = "hu_1867";
	$scope.user_icon = "hu.png"

    $scope.process = function() {
    	console.log("i work!");
    	$scope.info.push({
    		icon: $scope.user_icon,
    		username: $scope.user,
	        title: $scope.title,
	        problem: $scope.problem,
	        event: $scope.event,
	        active: true
    	});
    	$scope.title = '';
    	$scope.problem = '';
    };

    $scope.deactivate = function(num) {
    	$scope.info[num] = false;
    };
});