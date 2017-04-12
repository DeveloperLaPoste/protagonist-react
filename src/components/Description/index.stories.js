import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Description from './';

import { description } from '../../stories/data';

const table = `
### Tables

**Markdown Extra** has a special syntax for tables:

Item     | Value
-------- | ---
Computer | $1600
Phone    | $12
Pipe     | $1

You can specify column alignment with one or two colons:

| Item     | Value | Qty   |
| :------- | ----: | :---: |
| Computer | $1600 |  5    |
| Phone    | $12   |  12   |
| Pipe     | $1    |  234  |
`;

const table2 = '|Statut' +
  ' HTTP|code|message|\n|:-----------:|:-----------:|:------------:|\n|400|ERR_COMPTE_EMAIL_EXISTE|L\'adresse e-mail' +
  ' du compte est déjà enregistrée, merci de renseigner une autre adresse e-mail.|\n|400|ERR_COMPTE_RATTACHEMENT_ENFANT|Ce compte ne peut pas posséder des comptes UTILISATEUR_PARTENAIRE, pour cela il faut soit être un compte PARTENAIRE, soit un compte UTILISATEUR_PARTENAIRE de niveau 1.|\n|400|ERR_COMPTE_RATTACHEMENT_PARTENAIRE|Un compte Partenaire ne peut pas être associé à un autre compte Partenaire.|';

const actionDescription = `Renvoie un PDF contenant la convocation liée à la réservation dont l'id est passé en paramètre pour le compte référencé.

*Voici la liste des erreurs et des messages associés que cette méthode peut renvoyer:*

|Statut HTTP|code|message|
|:-----------:|:-----------:|:------------:|
|403|ACCES_NON_AUTORISE|Vous n'avez pas le droit d'effectuer cette action.|
|403|COMPTE_NON_AUTORISE|Accès non autorisé à la réservation.|
|404|RESERVATION_NON_TROUVEE|Aucune réservation n'a été trouvée.|
|404|RESERVATION_NON_VALIDEE|Reservation non validée.|
|500|ERR_GENERATION_PDF|Erreur dans la generation du Pdf.|`;

storiesOf('Description', module)
  .add('without props', () => (
    <Description />
  ))
  .add('empty string', () => (
    <Description description={''} />
  ))
  .add('with markdown', () => (
    <Description description={description} />
  ))
  .add('can render table from markdown', () => (
    <Description description={table} />
  ))
  .add('can render table from wierd markdown', () => (
    <Description description={table2} />
  ))
  .add('can render an action description', () => (
    <Description description={actionDescription} />
  ));
