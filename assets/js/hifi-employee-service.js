(function () {
	"use strict";

	angular.module('hifiForm').service('hifiEmployeeService', hifiEmployeeService);

	function hifiEmployeeService() {
		console.log('hifiEmployeeService init');

		var service = this;

		var validEmployees = [
			{ firstName: "Svetlana", surname: "Alexievich", id: "23214757", contractType: "Job Family", workCode: 'BZAREAGM', position: 'Position 1', newWorkCode: "", effectiveDate: new Date(), mgrOrgUnit: false, remChange: false, newWorkCodeValidated: true },
			{ firstName: "Patrick", surname: "Modiano", id: "23270409", contractType: "Job Family", workCode: 'BZOPSMGR', position: 'Position 2', newWorkCode: "", effectiveDate: new Date(), mgrOrgUnit: true, remChange: false, newWorkCodeValidated: true },
			{ firstName: "Alice", surname: "Munro", id: "23343559", contractType: "Job Family", workCode: 'BZHDDLVR', position: 'Position 3', newWorkCode: "", effectiveDate: new Date(), mgrOrgUnit: true, remChange: true, newWorkCodeValidated: true },
			{ firstName: "Mo", surname: "Yan", id: "23496723", contractType: "ITEA", workCode: 'BZSBUSAN', position: 'Position 4', newWorkCode: "", effectiveDate: new Date(), mgrOrgUnit: false, remChange: true, newWorkCodeValidated: true },
			{ firstName: "Mario Vargas", surname: "Llosa", id: "23529812", contractType: "ITEA", workCode: 'BZOPSMGR', position: 'Position 5', newWorkCode: "", effectiveDate: new Date(), mgrOrgUnit: false, remChange: false, newWorkCodeValidated: true },
			{ firstName: "Herta", surname: "Muller", id: "23531656", contractType: "ITEA", workCode: 'BZPRJSPC', position: 'Position 1', newWorkCode: "", effectiveDate: new Date(), mgrOrgUnit: false, remChange: false, newWorkCodeValidated: true },
			{ firstName: "Jean-Marie", surname: "Gustave Le Clezio", id: "23714073", contractType: "Workstream", workCode: 'WC1112', position: 'Position 2', newWorkCode: "", effectiveDate: new Date(), mgrOrgUnit: false, remChange: false, newWorkCodeValidated: true },
			{ firstName: "Orhan", surname: "Pamuk", id: "23726998", contractType: "Workstream", workCode: 'BZPROCOR', position: 'Position 3', newWorkCode: "", effectiveDate: new Date(), mgrOrgUnit: false, remChange: false, newWorkCodeValidated: true },
			{ firstName: "Harold", surname: "Pinter", id: "23995813", contractType: "Common Law", workCode: 'IPTESTER', position: 'Position 4', newWorkCode: "", effectiveDate: new Date(), mgrOrgUnit: false, remChange: false, newWorkCodeValidated: true },
			{ firstName: "Elfirede", surname: "Jelenik", id: "24050766", contractType: "Common Law", workCode: 'BZPROCOR', position: 'Position 5', newWorkCode: "", effectiveDate: new Date(), mgrOrgUnit: false, remChange: false, newWorkCodeValidated: true }];

		var nullEmployee = { firstName: "", surname: "", id: "", contractType: "", workCode: '', position: '', newWorkCode: "", effectiveDate: "", mgrOrgUnit: false, remChange: false, newWorkCodeValidated: true };

		service.findByNameOrIndex = function( str ) {
			console.log('findByNameOrIndex');
			var index = -1;
			index = getIndexById( str );
			if ( index == -1 ) {
				index = getIndexByName( str );
				if ( index == -1 ) {
					console.log('not found');
					return nullEmployee;
				}
			}
			console.log('found');
			var emp = validEmployees[ index ];
			return emp;
		}

		var getIndexById = function( id ) {
			console.log('getIndexById(' + id + ')');
			var foundIndex = -1;
			for ( var i = 0; i < validEmployees.length && foundIndex == -1; i++ ) {
				if ( validEmployees[ i ].id == id ) {
					foundIndex = i;
				}
			}
			return foundIndex;
		}

		var getIndexByName = function( name ) {
			console.log('getIndexByName(' + name + ')');
			var foundIndex = -1;
			var tmpName = name.toUpperCase();
			for ( var i = 0; i < validEmployees.length && foundIndex == -1; i++ ) {
				if ( validEmployees[ i ].firstName.toUpperCase() == tmpName || validEmployees[ i ].surname.toUpperCase() == tmpName ) {
					// console.log('found at ' + i);
					foundIndex = i;
				}
			}
			return foundIndex;
		}

	    // var getByIndex = function( index ) {
	    // 	console.log('getByIndex(' + index + ')');
	    // 	var emp = validEmployees[ index ];
	    // 	return emp;
	    // }
	}

})();