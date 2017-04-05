# protagonist-react

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

This `source` props is a JSON generated via [protagonist](https://github.com/apiaryio/protagonist) which is a nodeJS library for transforming API Blueprint files (.apib) in JSON.


## Protagonist

Protagonist must be used with options `{ type: 'ast' }`.

## TODO

- [ ] Static website documentation for all components
- [ ] Testing !!!
- [ ] Customization
- [ ] More generalist lib 
