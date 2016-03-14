# bpmn-questionnaire Example

## About

This example showcases the usage of bpmn-questionnaire to embed a questionnaire into a website. It uses [three types of questions](https://github.com/bpmn-io/bpmn-questionnaire-example/tree/master/client/types).

```
var q = new BpmnQuestionnaire({
  container: 'container',
  questionnaireJson: questionnaireJson,
  types: {
    interactive: interactive,
    multiple:    multiple,
    single:      single
  }
});
```
It then hooks up for the 'results' event, to retrieve the results once the questionnaire is finished.

```
q.on('results', function(results) {
  console.log(results);
});
```

## Usage Summary

Install dependencies via npm

```
npm install
```

Build the application

```
grunt auto-build
```

Finally you have to fire up a server for example by using Python 3

```
python -m http.server 8000
```

Go to `localhost:8000/dist` to see the example in action.

## Licence

MIT
