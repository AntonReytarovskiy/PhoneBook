var phoneBook = angular.module('phone-book',[]);

phoneBook.controller('phoneBookCtrl',function ($scope,persons) {
    $scope.persons = persons.list();
});

phoneBook.directive('pbPerson',function () {
    return {
        restrict: 'E',
        scope: {
            person: '='
        },
        templateUrl: 'partials/person-card.html',
    }
});

phoneBook.service('persons',function () {
    function list() {
        return [
            {
                name: 'dasha',
                phone: '+3809647625',
                photo: 'dasha.jpg',
                city: 'Zhmerynka'
            },
            {
                name: 'nazar',
                phone: '+3807584259',
                photo: 'nazar.jpg',
                city: 'Zhmerynka'
            },
            {
                name: 'sergey',
                phone: '+3872597258',
                photo: 'sergey.jpg',
                city: 'vinnytsia'
            },
            {
                name: 'anton',
                phone: '+3807891574',
                photo: 'anton.jpg',
                city: 'zhmerynka'
            },
            {
                name: 'bill',
                phone: '+78514597',
                photo: 'bill.jpg',
                city: 'vinnytsia'
            },
            {
                name: 'iron-man',
                phone: '999-443-323',
                photo: 'iron-man.jpg',
                city: 'london'
            },
            {
                name: 'thor',
                phone: '0800 3232 323',
                photo: 'thor.jpg',
                city: 'asgard'
            },
            {
                name: 'gilfoyle',
                phone: '555-555-555',
                photo: 'gilfoyle.jpg',
                city: 'london'
            },
        ]
    }

    return {
        list: list
    }
});

