
export const action = {
  name: 'Users',
  method: 'GET',
  attributes: { uriTemplate: '/api/v1/foo/users/:id' },
  parameters: [{
    name: 'userId',
    description: '',
    type: 'string',
    required: true,
    example: '0123456789',
    values: [],
  }],
  examples: [{
    name: '',
    description: '',
    requests: [{
      name: 'Nominal case',
      description: '',
      headers: [{ name: 'Accept', value: 'application/json' }],
      body: '',
      schema: '',
    }],
    responses: [{
      name: '200',
      description: '',
      headers: [{ name: 'Content-Type', value: 'application/json; charset=utf-8' }],
      body: '{\n    "eventsCount" : [\n        { "month": "2017-03", "count": 54},\n        { "month":' +
      ' "2017-02", "count": 12},\n        { "month": "2017-01", "count": 65},\n        { "month": "2016-12", "count": 8},\n        { "month": "2016-11", "count": 19},\n        { "month": "2016-10", "count": 145}\n    ],\n    "activatedServicesCount": 5,\n    "mostUsedServices" : [ "digiposte", "lpfr"],\n    "lastEvent" : {\n      "eventType" : "connection",\n      "timestamp": "2013-11-18T18:47:25Z",\n      "service": "digiposte"\n    }\n}\n',
      schema: '{\n    "$schema": "http://json-schema.org/draft-04/schema#",\n\n    "type": "object",\n' +
      '    "properties": {\n        "eventCounts": {\n            "type": "array",\n            "items": {\n                "type" : "object",\n                "properties": {\n                    "month" : { "type" : "string"},\n                    "count": { "type": "integer"}\n                }\n             }\n        },\n        "activatedServicesCount": { "type": "integer" },\n        "mostUsedServices" : {\n            "type": "array",\n            "items" : { "type": "string" }\n        },\n        "lastEvent": {\n            "type": "object",\n            "properties": {\n                "timestamp" : {\n                    "type": "string",\n                    "format": "date-time"\n                },\n                "service" : { "type": "string" },\n                "eventType" : { "enum" : ["connection", "update", "order", "reimbursment", "passwordChange"] }\n            }\n        }\n    }\n}\n',
    }],
  }],
};
