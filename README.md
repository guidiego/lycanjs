# Severo
A framework to make your Flux + React interations easier than a plot twist!  

![Imgur](http://i.imgur.com/htYxR8P.gif)  

## Installing

You can download Severo by NPM <3  
`npm install --save-dev severo`

## Understanding Severo

#### The Ideia
Severo was created to get the `flux` flow easy, first of all was reduced some things to incentivize you to programming `little things to do little things`, forget the *compomonsters*! Another thing is turn the flow more explicit.

#### The Way
Using EventEmmiter from node, we create a Reactive Store to work with Immutable States by Reactions. The flow it`s easy: All actions have a reaction, the reaction change the state finally the state changes your component. Severo works like that:  

![Imgur](http://i.imgur.com/XKMTOQ3.png)  

But in real mode you only see that:  

![Imgur](http://i.imgur.com/9lCHPCh.png)


#### setState only for 'no complex' components!
A input that need a onChange value? ABSTRACT THAT!  
A button that need a internal load? ABSTRACT THAT!  
We use react, so ABSTRACT EVERYTHING!

By default `Connectors` are responsible for components states, so if you need to change that you need to call a Action! 

"But I don`t need call an action for a little thing just that!"
"So, ABSTRACT THAT!"

## Examples
https://github.com/guidiego/severo-examples

## I'm in!
If you like the ideia, support us with a `star`, `feedback`, `issues`, `discussions` and `pull requests` <3
