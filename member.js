function skillsMember() {
    return {
        restrict: 'E',
        scope: {
            member: '=',
            skills: '='
        },
        templateUrl: 'templates/directives/skills-member.html'
    };
}