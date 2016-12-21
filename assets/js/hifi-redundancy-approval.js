(function() {
	"use strict";

	angular.module("hifiForm", []);

})();

(function () {
	"use strict";

  angular.module('hifiForm').controller('hifiFormController', hifiFormController);
  // hifiFormController.$inject = ['hifiEmployeeService'];

	function hifiFormController() {
  	var $ctrl = this;
  
    var validBUs = [{ code: 'AAAAA1', name: 'BusinessUnit', lob: 'Line of Business', peopleLeaderName: 'Jenny NGUYEN', hrContact: 'Gavin JONES' }];
    var nullBU = { buCode: '', name: '', lob: '', hrContact: '' }

    $ctrl.form = { searchTermPlaceholder: "AAAAA1 or BusinessUnit", searchTerm: "" };

    $ctrl.BU = {};
    $ctrl.buSelected = false;

    $ctrl.lookupBU = function() {
		$ctrl.form.searchTerm = "AAAAA1";
      console.log('lookupEmployee()');
      if ( $ctrl.form.searchTerm == validBUs[0].code || $ctrl.form.searchTerm == validBUs[0].name ) {
        $ctrl.buSelected = true;
        $ctrl.BU = validBUs[0];
      } else {
        $ctrl.buSelected = false;
        $ctrl.BU = nullBU;        
      }
    }

    $ctrl.newWorkCodeToUpper = function() {
      $ctrl.newWorkCode.toUpperCase();
    }

    // var getRole = function( workCode ) {
    //   // console.log('getRole( workCode:' + workCode + ')');
    //   var i = workCodeIndex( workCode );
    //   if ( i == -1 ) {
    //     // console.log('getRole() - no match');
    //     $ctrl.employee.psRole = "";
    //     $ctrl.employee.type = "";
    //   } else {
    //     // console.log('getRole() - match');
    //     $ctrl.employee.psRole = validWorkCodes[i].psRole;
    //     $ctrl.employee.type = validWorkCodes[i].type;
    //   }
    // }

    $ctrl.generateZendeskTicketNumber = function() {
      var text = "X";
      var possible = "0123456789";

      for( var i=0; i < 8; i++ ) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }

    // var workCodeIndex = function( workCode ) {
    //   console.log('workCodeIndex(' + workCode + ')');
    //   var foundIndex = -1;
    //   for ( var i = 0; i < validWorkCodes.length && foundIndex == -1; i++ ) {
    //     if ( workCode == validWorkCodes[i].workCode ) {
    //       foundIndex = i;
    //     }
    //   }
    //   return foundIndex;
    // }

    // $ctrl.newWorkCodeChange = function() {
    //   $ctrl.form.newWorkCodeValidated = 'false';
    // }

    // $ctrl.validateNewWorkCode = function() {
    //   // console.log('$ctrl.validateNewWorkCode');
    //   $ctrl.employee.newWorkCode = $ctrl.employee.newWorkCode.trim();
    //   $ctrl.employee.newWorkCode = $ctrl.employee.newWorkCode.toUpperCase();
    //   // } else {
    //   var i = workCodeIndex( $ctrl.employee.newWorkCode );
    //   if ( i != -1 ) {
    //     // console.log('valid, i=' + i);
    //     $ctrl.employee.newPsRole = validWorkCodes[ i ].psRole;
    //     $ctrl.employee.newType = validWorkCodes[ i ].type;
    //     $ctrl.form.newWorkCodeIsValid = 'true';
    //     $ctrl.form.newWorkCodeValidated = 'true';
    //   } else {
    //     // console.log('invalid');
    //     $ctrl.employee.newPsRole = "";
    //     $ctrl.employee.newType = "";
    //     $ctrl.form.newWorkCodeIsValid = 'false';
    //     $ctrl.form.newWorkCodeValidated = 'true';
    //   }
    // }

    $ctrl.formIsComplete = function() {
      return 'true';
      // console.log('$ctrl.formIsComplete() - ' + $ctrl.form.newWorkCodeIsValid );
      // if ( $ctrl.form.newWorkCodeIsValid == 'true' && $ctrl.form.newWorkCodeValidated == 'true' ) {
      //   // console.log('returning true');
      //   return 'true';
      // } else {
      //   // console.log('returning false');
      //   return 'false';
      // }
    }

  	// $ctrl.radio7 = 1;
	}

})();
