# Severo
A framework that bind easily your Flux Action/Store inside your React Component.

## Installing

First of all get that for your package.json
`npm install --save-dev severo`

## Understanding Severo

#### The Ideia
Severo was create to make easily you reuse the same Store Data / Action Dispatchs inside React components, so the mainly ideia is `little thing to do little things` something like a minimalist pattern or single responsability didatic.

#### The Way
So we will have a Store and a Action linked by their names, after that we have a Severo Component that bind this Store/Action inside our component to give us access to our logic.

#### Can You Forget setState?
Severo working with a abstract State, yeah you listening write! You will declare you state and the methods that change that inside your store. Forget create functions and more functions inside Class Components to change state, now you will call actions to make that for you!

#### The Flux Flow inside Severo Flow
The flux flow it's easy to describe `component -> action -> store -> component`, severo work exactily equal. We have Actions to Dispatch our Store Methods, and we Bind our Component to them to make easy gave a `this.increase()` or something like that.

## A toy with battery?
Yeah! We gave you a toy with battery! We have some wrap methods to make your life easy, like `Request` and `Dispatch`

## I'm in!
If you like the ideia, support us with a `star`, `feedback`, `issues`, `discussions` and `pull requests` <3
