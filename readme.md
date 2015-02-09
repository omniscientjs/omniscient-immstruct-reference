# omniscient immstruct reference

This repo shows how to use immstruct references for components that bind directly to a piece of data in a larger structure, without the parent components needing to pass all the information as cursors as props down from the top of the component tree.

In this case, the `<Clock />` component will re-render each second with new data as the structure is updated, even if the clock is not passed its data as props.

Often, passing props from parent components is the desired way to hand off data to child components, but when a component always depend on the same data the [immstruct references](http://github.com/omniscientjs/immstruct/#references) come in handy.

## Run

`npm run watch`
