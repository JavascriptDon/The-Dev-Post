---
title: A Beginner's Guide to UseEffect Cleanup | By Helitha
date: "2022-09-02T22:12:03.284Z"
description: "With useEffect, you perform side effects from within functional components, which is an important concept for mastering React today."
---

With useEffect, you perform side effects from within functional components, which is an important concept for mastering React today.

Here are a couple examples of side effects that will get you thinking in effects:

- fetching data
- directly updating the DOM
- timers.

## What is the useEffect cleanup function?

A useEffect cleanup function can prevent memory leaks and remove unwanted behaviour from the function before our component unmounts.

Here are some use-cases for this:

- Clean up subscriptions
- Clean up modals
- Remove event listeners
- Clear timeouts

Now take a look at the code below. Did you notice anything off?

```
import React from "react";
export default function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      console.log("effect is running!");
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <div className="App">
      <h1>You clicked {count} times!</h1>
    </div>
  );
}
```

> 💡 Note - How it keeps counting even though it should only count once!

Remember that side effects belong to useEffect which is running on every render. That means that when the count changes, a render happens, which then triggers another effect.

## How can we fix this?

There are several ways to control when side effects run. You should always include the second parameter which accepts an dependencie array.

Without it, effects run after every render and setting the state will trigger the effects again. An infinite loop may also happen if you specify a value that always changes in the dependency array.You can tell which one by removing them one by one. However, removing a dependency you use (or blindly specifying []) is usually the wrong fix. Instead, fix the problem at its source.

So, to fix the issue, we will write our useEffect cleanup function which is pretty easy and straightforward to do. We return a function from our useEffect as seen below:

```
useEffect(() => {
        //effect is running
        return () => {
            //clean up the effect
        }
    }, [input])

```

## When do cleanups run?

If your effect returns a function, React will run it when it is time to clean up. Don’t worry if it’s hard to grasp this, we’ll better understand it with the examples below.

Let’s fix our counter demo from before and introduce a cleanup function that will run when Counter component unmounts and will stop the timer:

In this example the useEffect hook is dependent on a variable that runs once and then runs again whenever the count variable updates.

```
import React from "react";
export default function App() {
  const [count, setCount] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => {
      console.log("effect is running!");
      setTotal((count) => count * 2);
    }, 1000);
  }, [count]);

  return (
    <div className="App">
      <h1>You clicked {count} times!</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <p>Total: {total}</p>
    </div>
  );
}

```

> 💡 Note - If there are multiple dependencies, they should be included in the useEffect dependency array.

```
//clean up the timer at the end of the useEffect hook
import React from "react";
export default function App() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let timer = setTimeout(() => {
      console.log("effect is running onMount!");
      setCount((count) => count * 2);
    }, 1000);

    return () => {
      console.log("component unmounts");
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="App">
      <h1>You clicked {count} times!</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
    </div>
  );
}
```

With useEffect, things are synchronized by default. If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.

If you pass an empty array ([]), the props and state inside the effect will always have their initial values. While passing [] as the second argument is closer to the familiar componentDidMount and componentWillUnmount mental model, there are usually better solutions to avoid re-running effects too often. Also, don’t forget that React defers running useEffect until after the browser has painted, so doing extra work is less of a problem.

## Conclusion

Thank you for reading, and let's connect!

Feel free to subscribe to my [email newsletter](https://serene-ridge-36936.herokuapp.com/) and connect on [Twitter](https://twitter.com/legs_taken).
