(function() {
	"use strict";

	angular.module("hifiForm", []);

})();

(function () {
	"use strict";

  angular.module('hifiForm').controller('hifiFormController', hifiFormController);
  hifiFormController.$inject = ['hifiEmployeeService'];

	function hifiFormController(hifiEmployeeService) {
  	var $ctrl = this;

    var validWorkCodes = [{ psRole: "PS General Managers", workCode: "BZAREAGM", type: "PM" },
                          { psRole: "Tester", workCode: "IPTESTER", type: "IC" },
                          { psRole: "Project Manager", workCode: "BZPRJSPC", type: "IC" },
                          { psRole: "Project Services Manager", workCode: "BZOPSMGR", type: "PM" },
                          { psRole: "Portfolio Manager", workCode: "BZHDDLVR", type: "PM" },
                          { psRole: "T&T Portfolio Manager", workCode: "BZHDDLVR", type: "PM" },
                          { psRole: "Project Team Leader", workCode: "BZPROMGR", type: "PM" },
                          { psRole: "Program Manager", workCode: "BZPRJSPC", type: "IC" },
                          { psRole: "Senior Project Manager", workCode: "BZPRJSPC", type: "IC" },
                          { psRole: "Senior Business Analyst", workCode: "BZSBUSAN", type: "IC" },
                          { psRole: "Senior Tester", workCode: "IPSTESTR", type: "IC" },
                          { psRole: "PC/PS Team Leader", workCode: "BZPROCOR", type: "PM" },
                          { psRole: "Project Co-ordinator", workCode: "BZPROCOR", type: "IC" },
                          { psRole: "Project Specialist", workCode: "BZPROCOR", type: "IC" },
                          { psRole: "Master Scheduler", workCode: "BZPROCOR", type: "IC" },
                          { psRole: "Business Analyst", workCode: "BZPROCOR", type: "IC" },
                          { psRole: "Project Administrator", workCode: "BZPROCOR", type: "IC" }];

    $ctrl.employee = { id: "",
                       firstName: "",
                       lastName: "",
                       workCode: "",
                       type: "",
                       psRole: '',
                       newWorkCode: "",
                       newType: "",
                       newPsRole: "",
                       effectiveDate: new Date()
                     };

    $ctrl.form = { searchTermPlaceholder: "23270409 or Mary Smith",
                   searchTerm: "",
                   workCodePlaceholder: validWorkCodes[1].workCode,
                   psRolePlaceholder: validWorkCodes[1].psRole,
                   newWorkCodePlaceholder: validWorkCodes[2].workCode,
                   newpsRolePlaceholder: validWorkCodes[2].psRole,
                   newWorkCodeValidated: 'false',
                   newWorkCodeIsValid: 'false' };

    $ctrl.employeeSelected = false;

    $ctrl.lookupEmployee = function() {
      console.log('lookupEmployee()');
      $ctrl.employee = hifiEmployeeService.findByNameOrIndex( $ctrl.form.searchTerm );
      if ( $ctrl.employee.id == '' ) {
        $ctrl.employeeSelected = false;
      } else {
        $ctrl.employeeSelected = true;
        getRole($ctrl.employee.workCode);
      }
      // if ( x != -1 ) {
      //   /* have found a match */
      //   getRole( $ctrl.employee.workCode );
      //   $ctrl.employeeSelected = true;
      // } else {
      //   /* no match */
      //   $ctrl.employeeId = "";
      //   $ctrl.employeeFirstName = "";
      //   $ctrl.employeeSurname = "";
      //   $ctrl.employeeName = "";
      //   $ctrl.workCode = "";
      //   getRole($ctrl.employee.workCode);
      //   $ctrl.employeeSelected = false;
      // }
    }

    $ctrl.newWorkCodeToUpper = function() {
      $ctrl.newWorkCode.toUpperCase();
    }

    var getRole = function( workCode ) {
      // console.log('getRole( workCode:' + workCode + ')');
      var i = workCodeIndex( workCode );
      if ( i == -1 ) {
        // console.log('getRole() - no match');
        $ctrl.employee.psRole = "";
        $ctrl.employee.type = "";
      } else {
        // console.log('getRole() - match');
        $ctrl.employee.psRole = validWorkCodes[i].psRole;
        $ctrl.employee.type = validWorkCodes[i].type;
      }
    }

    $ctrl.generateZendeskTicketNumber = function() {
      var text = "X";
      var possible = "0123456789";

      for( var i=0; i < 8; i++ ) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }

    var workCodeIndex = function( workCode ) {
      console.log('workCodeIndex(' + workCode + ')');
      var foundIndex = -1;
      for ( var i = 0; i < validWorkCodes.length && foundIndex == -1; i++ ) {
        if ( workCode == validWorkCodes[i].workCode ) {
          foundIndex = i;
        }
      }
      return foundIndex;
    }

    $ctrl.newWorkCodeChange = function() {
      $ctrl.form.newWorkCodeValidated = 'false';
    }

    $ctrl.validateNewWorkCode = function() {
      // console.log('$ctrl.validateNewWorkCode');
      $ctrl.employee.newWorkCode = $ctrl.employee.newWorkCode.trim();
      $ctrl.employee.newWorkCode = $ctrl.employee.newWorkCode.toUpperCase();
      // } else {
      var i = workCodeIndex( $ctrl.employee.newWorkCode );
      if ( i != -1 ) {
        // console.log('valid, i=' + i);
        $ctrl.employee.newPsRole = validWorkCodes[ i ].psRole;
        $ctrl.employee.newType = validWorkCodes[ i ].type;
        $ctrl.form.newWorkCodeIsValid = 'true';
        $ctrl.form.newWorkCodeValidated = 'true';
      } else {
        // console.log('invalid');
        $ctrl.employee.newPsRole = "";
        $ctrl.employee.newType = "";
        $ctrl.form.newWorkCodeIsValid = 'false';
        $ctrl.form.newWorkCodeValidated = 'true';
      }
    }

    $ctrl.formIsComplete = function() {
      // console.log('$ctrl.formIsComplete() - ' + $ctrl.form.newWorkCodeIsValid );
      if ( $ctrl.form.newWorkCodeIsValid == 'true' && $ctrl.form.newWorkCodeValidated == 'true' ) {
        // console.log('returning true');
        return 'true';
      } else {
        // console.log('returning false');
        return 'false';
      }
    }

  	$ctrl.radio7 = 1;
	}

})();