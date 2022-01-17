# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* onClick is fired on the button, calling the addOneHandler function. 
* addOneHandler dispatches the addOne action.
* addOne action returns ADD_ONE, passed through the reducer. ADD_ONE is true, and the state of total is updated, which is also the value being passed into the TotalDisplay component.
* as state is updated, the TotalDisplay component is re-rendered and the UI displays the correct amount rendered to the UI with the new value.
...

* TotalDisplay shows the total plus 1.
