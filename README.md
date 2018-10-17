## Example react app

For the size of the app there's a lot going on here, I wanted to explore a few things I've new done before and cover as much as I could so there will be more to discuss and tear apart. [http://moonpig.surge.sh/](http://moonpig.surge.sh/)

# To run locally

`yarn`
`yarn start`

# Create React App

I firmly believe developers should suffer the pain of configuring webpack at least once, I've suffered it more times than a care to remember. Given the time constrains create-react-app made sense as a starting point.

# Dev tools added

- airbnb linting rules
- prettier
- redux logger
- propTypes

# Stack

- Redux
- react router
- redux thunk

# Styled components

I'm a big fan of styled components, I've added them in for discussion more than anything else

# Tests

Time was not kind, I've added a few examples of how I'd approach unit testing React. I'd use Cypress.io for e2e testing if I had time.

# Other things I'd like to add

- SEO considerations (helmet and SSR)
- styleguideist for really nice living documentation
- page optimisation with srcset and lazy loading of images
