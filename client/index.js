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
        
        var q = new BpmnQuestionnaire({
          container: 'container',
          questionnaireJson: questionnaireJson,
          types: {
            interactive: interactive,
            multiple:    multiple,
            single:      single
          }
        });

    }
};
xhr.open("GET", url, true);
xhr.send();
