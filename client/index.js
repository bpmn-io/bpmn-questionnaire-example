'use strict';

// bpmn-questionnaire
var BpmnQuestionnaire = require('bpmn-questionnaire');

// Types
var interactive       = require('./types/interactive.js'),
    multiple          = require('./types/multiple.js'),
    single            = require('./types/single.js');

var xhr = new XMLHttpRequest();
var url = "../resources/questionnaire.json";

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var questionnaireJson = JSON.parse(xhr.responseText);

        // Spin up questionnaire
        var q = new BpmnQuestionnaire({
          container: 'container',
          questionnaireJson: questionnaireJson,
          types: {
            interactive: interactive,
            multiple:    multiple,
            single:      single
          }
        });

        // Hook up for 'results' event
        q.on('results', function(results) {
          console.log(results);
        });

    }
};
xhr.open("GET", url, true);
xhr.send();
