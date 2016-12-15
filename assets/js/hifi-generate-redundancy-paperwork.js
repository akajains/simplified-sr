(function() {
	"use strict";

	angular.module("hifiForm", []);

})();



(function () {
	"use strict";

	angular.module('hifiForm').controller('hifiFormController', hifiFormController);

	function hifiFormController() {
		console.log('hifiFormController init');
  		var $ctrl = this;

		var validEmployees = [
			{ firstName: "Svetlana", surname: "Alexievich", id: "D111111", contractType: "Job Family" },
			{ firstName: "Patrick", surname: "Modiano", id: "D111112", contractType: "Job Family" },
			{ firstName: "Alice", surname: "Munro", id: "D111113", contractType: "Job Family" },
			{ firstName: "Mo", surname: "Yan", id: "D111114", contractType: "ITEA" },
			{ firstName: "Mario Vargas", surname: "Llosa", id: "D111115", contractType: "ITEA" },
			{ firstName: "Herta", surname: "Muller", id: "D111116", contractType: "ITEA" },
			{ firstName: "Jean-Marie", surname: "Gustave Le Clezio", id: "D111117", contractType: "Workstream" },
			{ firstName: "Orhan", surname: "Pamuk", id: "D111118", contractType: "Workstream" },
			{ firstName: "Harold", surname: "Pinter", id: "D111119", contractType: "Common Law" },
			{ firstName: "Elfirede", surname: "Jelenik", id: "D111110", contractType: "Common Law" }
		];

		$ctrl.employeeSearchTermPlaceholder = "D123456 or Mary Smith";
		$ctrl.employeeNamePlaceholder = "Mary SMITH"
  		$ctrl.employeeId = "";
  		$ctrl.employeeFirstName = "";
  		$ctrl.employeeSurname = "";
  		$ctrl.employeeName = "";
  		$ctrl.employeeSelected = false;
  		$ctrl.employeeContractType = "";
  		$ctrl.searchTerm = "";

  		$ctrl.radio7 = 1;

  		$ctrl.lookupFromId = function() {
  			console.log('lookupFromId()');
  			var foundIndex = -1;
  			for (var i = 0; i < validEmployees.length && foundIndex == -1; i++ ) {
  				if (validEmployees[i].id == $ctrl.searchTerm) {
  					foundIndex = i;
  				}
  			}
  			return foundIndex;
  		}

  		$ctrl.lookupFromName = function() {
  			console.log('lookupFromName()' + $ctrl.searchTerm.toUpperCase());
  			var foundIndex = -1;

  			for (var i = 0; i < validEmployees.length && foundIndex == -1; i++ ) {
  				if (validEmployees[i].firstName.toUpperCase() == $ctrl.searchTerm.toUpperCase() || validEmployees[i].surname.toUpperCase() == $ctrl.searchTerm.toUpperCase()) {
  					foundIndex = i;
  				}
  			}
  			return foundIndex;
  		}

  		$ctrl.lookupEmployee = function() {
  			console.log('lookupEmployee()');
  			var x = $ctrl.lookupFromId();
  			if ( x == -1 ) {
  				x = $ctrl.lookupFromName();
  			}
  			if ( x != -1 ) {
  				/* have found a match */
				$ctrl.employeeId = validEmployees[x].id;
				$ctrl.employeeFirstName = validEmployees[x].firstName;
				$ctrl.employeeSurname = validEmployees[x].surname;
				$ctrl.employeeName = $ctrl.employeeFirstName + ' ' + $ctrl.employeeSurname.toUpperCase();
				$ctrl.employeeContractType = validEmployees[x].contractType;
				$ctrl.employeeSelected = true;
  			} else {
  				/* no match */
  				$ctrl.employeeId = "";
				$ctrl.employeeFirstName = "";
				$ctrl.employeeSurname = "";
				$ctrl.employeeName = "";
				$ctrl.employeeContractType = ""
				$ctrl.employeeSelected = false;
  			}
  		}
	}


})();
