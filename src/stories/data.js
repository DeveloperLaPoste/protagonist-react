
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

export const description = 'Bienvenue sur l\'API Code De La Route.\n\nCette API permet de consulter les sessions que propose' +
  ' La Poste pour l\'examen du code de la route ainsi que de réserver et gérer des places sur ces sessions.\n\nCette' +
  ' documentation s\'adresse aux développeurs des systèmes d\'informations, et de tout système d\'information' +
  ' désirant utiliser nos services.\nSi vous êtes gérant d\'une autoécole, rapprochez-vous de votre éditeur de' +
  ' logiciel ou de votre responsable de service informatique pour utiliser ces APIs.\n\nL\'utilisation de cette API' +
  ' a comme pré-requis:\n\n  - Disposer d\'un compte "La Poste Developer" ([inscription en libre' +
  ' service](https://developer.laposte.fr/inscription/))\n\n  - Soucrire à l\'application ETG sur le site "La Poste' +
  ' developer"\n\n  - Générer une clé d\'application La Poste Developer pour pouvoir consommer les ressources.' +
  ' Cette clé doit etre utilisée dans le header X-Okapi-Key à chaque requête et sera associée au compte créé.\n\n  -' +
  ' Pour pouvoir consommer les ressources sécurisées, il est neccessaire de fournir un header de sécurité. Celui-ci' +
  ' peut être de deux types: Etg-Uuid ou codeAurige (***déprécié***).\n\n    - Dans le cas de la création d\'un' +
  ' compte avec un role PARTENAIRE, UTILISATEUR_PARTENAIRE ou AUTO_ECOLE,\n    un UUID unique et secret, rattaché au' +
  ' compte, est renvoyé à la création du compte (cf. ressource comptes ci-dessous).\n    Cet UUID peut etre utilisé' +
  ' dans le header Etg-Uuid  pour toutes les requêtes sur les ressources protégées.\n    Cette méthode est' +
  ' préconisée.\n    - Dans le cas particulier de la création d\'un compte avec un role AUTO_ECOLE, il est possible' +
  ' d\'utiliser le codeAurige de l\'autoécole pour toutes les requêtes sur les ressources protégées, dans le header' +
  ' codeAurige. Cette deuxième méthode est cependant déconseillée, car moins sûre.\n    **Attention**, ce header de' +
  ' sécurité est *déprécié* et pourra être *supprimé* dans une version future des APIs.\n\n    Le choix du header à' +
  ' utiliser doit être conservé par la suite sur l\'ensemble des échanges.\n\n\nA noter que :\n\n  - Toutes les' +
  ' données sont échangées au format JSON (donc UTF-8), sauf mention contraire.\n\n  - Les dates sont écrites au' +
  ' format rfc3339 (ex : \'2016-04-21T09:00:00+02:00\'). (format : [RFC' +
  ' 3339](https://www.ietf.org/rfc/rfc3339.txt))\n\n  - Toute lecture/modification/suppression d\'une ressource' +
  ' sécurisée est restreinte au compte l\'ayant créée ou à un parent dudit compte (direct ou indirect).\n\n Le client ' +
  'doit créer au moins un compte pour accéder aux ressources sécurisées : reservations, factures, convocations, ' +
  'resultats, prereservations... L\'utilisation d\'un compte lors de la création d\'une ressource permet\nà notre ' +
  'API de déterminer le propriétaire de la ressource.\n\nIl existe différents rôles pour ces comptes :\n\n  - ' +
  'PARTENAIRE\n\n  - UTILISATEUR_PARTENAIRE\n\n  - AUTO_ECOLE\n\n**Le compte avec le rôle PARTENAIRE** est unique ' +
  'pour un compte La Poste Developer donné. Il correspond au compte \'root\' du partenaire: la création de ce compte ' +
  'est préalable à toute utilisation de ressource sécurisée.\nOn peut associer à un compte de type PARTENAIRE ' +
  'd\'autres comptes de type UTILISATEUR_PARTENAIRE (cf. ci-dessous). Ainsi, un partenaire peut déléguer le paiement, ' +
  'voire la gestion de la réservation à un tiers.\n\n**Le compte avec le rôle UTILISATEUR_PARTENAIRE** est un ' +
  'compte ayant un parent: à la création d\'un compte avec le rôle UTILISATEUR_PARTENAIRE, il faut fournir l\'UUID ' +
  'du compte parent rattaché (dans le header Etg-Uuid).\nCe parent doit être un compte ayant le rôle PARTENAIRE ou ' +
  'UTILISATEUR_PARTENAIRE. Un compte avec le rôle UTILISATEUR_PARTENAIRE ne peut avoir qu\'un compte parent. ' +
  'Un compte parent peut avoir plusieurs enfants.\n\n**Le compte avec le rôle AUTO_ECOLE** n\'autorise pas la ' +
  'délégation de paiement et ne peut créer des réservations qu\'avec l\'attribut typePaiement=\'SEPA\'.\n\n' +
  'Les trois diagrammes de séquences suivants montrent un exemple d\'utilisation de cette API pour permettre à un ' +
  'utilisateur tiers de faire une réservation en utilisant votre SI:\n\n' +
  '![creationCompte](https://s30.postimg.org/s3j2o7boh/sequence_etg_01_compte_partenaire.png)\n\n' +
  '![reservation1](https://s30.postimg.org/qprfswcf5/sequence_etg_02_reservation.png)\n\n' +
  '![reservation2](https://s30.postimg.org/a39vjtjhd/sequence_etg_03_reservation_modifs.png)\n\n\n';
