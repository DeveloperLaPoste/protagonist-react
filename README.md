# protagonist-react [![Build Status](https://travis-ci.org/DeveloperLaPoste/protagonist-react.svg?branch=master)](https://travis-ci.org/DeveloperLaPoste/protagonist-react)

This project is made, in first place, for the [developer.laposte.fr](https://developer.laposte.fr) website for render API documentation from API Blueprint.

It is based on [reactstrap](https://reactstrap.github.io/) and [bootstrap v4](http://v4-alpha.getbootstrap.com/) css. It is used for `Badge` and `Collapse`

We use [Highlight.js](https://highlightjs.org/) for body request and response, headers, etc. syntax coloration.

This project contains a list of component and an entry point `<Protagonist source={data} />`

this entry point has for now only one `propTypes` :

```jsx harmony
Protagonist.propTypes = {
  source: React.PropTypes.object,
};
```

## Example

```jsx harmony
import React from 'react';
import { Protagonist } from 'protagonist-react';

function MyComponent({apibJson}) {
  return (
    <div>
      <Protagonist source={apibJson} />
    </div>
  );
}
```

This `source` props is a JSON generated via [protagonist](https://github.com/apiaryio/protagonist) which is a nodeJS library for transforming API Blueprint files (.apib) in JSON.


## Protagonist

Protagonist must be used with options `{ type: 'ast' }`.

The JSON should looks like :

```json
{
  "_version": "4.0",
  "metadata": [],
  "name": "My API",
  "description": "",
  "element": "category",
  "resourceGroups": []
}
```

## TODO

- [ ] Add a JSON as API documentation example
- [ ] Static website documentation for all components
- [x] Add Enzyme for tests
- [ ] each component tested
- [ ] Customization
- [ ] More generalist lib
- [x] Add Storybook
- [ ] Add React-Intl
