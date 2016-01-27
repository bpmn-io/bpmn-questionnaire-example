# bpmn-questionnaire Example
Example project that makes use of the bpmn-questionnaire library

## About

This example uses bpm-questionnaire embed a questionnaire on BPMN 2.0 into a web application.

## Usage Summary

Install bpmn-js via bower

```
bower install --save bpmn-js
```

Embed it into a website

```
<script src="bower_components/bpmn-questionnaire/dist/bpmn-questionnaire.js"></script>
```

Use it in your application

```
// Create your own type
var single = BpmnQuestionnaire.createType({
  renderQuestion: function () {
    // ...
  },
  renderResult: function() {
    // ...
  },
  addToState: {
    // ...
  },
  checkIfValidAnswer: function() {
    // ...
  },
  checkIfRightAnswer: function() {
    // ...
  }
});

var q = new BpmnQuestionnaire({

  // Your container (can be a string of an id or an element)
  container: 'container',

  // Your questionnaire
  questionnaire: questionnaire,

  // Your types
  types: {
    single: single
  }
});
```

## Licence

MIT
