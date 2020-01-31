# Laptop Customizer
_Starter project for React course_

This exercise is to help with (1) refactoring a single component into multiple components and (2) passing state through callback functions and updating the state through props.

# Problem
A single component has grown to be quite large and is doing too many different things. All the funactionality has been built into a single component!

# Solution
Refactor the app using component-based organization.

Divide the components into 6 parts:

<pre>
App---(1a) FeatureList---(2a) FeatureDetails
  \            \
   \            \---(2a) FeatureItem
    \
     \---(1b) SummaryList---(2b) SummaryItem
                  \
                   \---(2b) Total
</pre>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
