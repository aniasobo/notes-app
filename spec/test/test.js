"use strict";
;(function(exports) {
  function Test() {
    this._status = "ok";
  };
  
  Test.prototype = { 
    describe: function(caseUnderTest, describeBlockExecutable) {
      console.log(caseUnderTest);
      describeBlockExecutable();
    },
  
    it: function(testCaseScenario, testExecutable) {
      try {
      testExecutable();
      testPassMessage(testCaseScenario);
      } catch (exception) {
      testFailMessage(testCaseScenario, exception);
      } finally {
      testHasRunItsCourse();
      }
    },

    isTruthy: function(trueOrFalse) {
      if (!trueOrFalse) {
      throw new Error("Error! " + trueOrFalse + " is not truthy 😡");
    }
  },

    throwsMessage: function(functionUnderTest, expectedMessage) {
      var outcome = catchExceptionFrom(functionUnderTest);

      if (outcome === undefined) {
      throw new Error("No exceptions here 🙂")
      }

      if (outcome.message !== expectedMessage) {
      throw new Error("Expected: " + expectedMessage + "but got: " + outcome.message + " 🤔");
    }
  },

    testPassMessage: function(testCaseScenario) {
      console.log("😎", testCaseScenario); 
    },

    testFailMessage: function(testCaseScenario, exception) {
      console.log("️😒", testCaseScenario);
      console.log(exception.name);
      console.log(exception.message);
      console.log(exception.stack);
    },

    testHasRunItsCourse: function(testCaseScenario) {
      console.log("Your test " + testCaseScenario + "has finished executing 👋");
    },

    catchExceptionFrom: function(fun) {
      try {
        fun();
      } catch (exception) {
      return exception;
      }
    }
  };

exports.describe = describe;
exports.it = it;
exports.isTruthy = isTruthy;
exports.throwsMessage = throwsMessage;
})(this);
