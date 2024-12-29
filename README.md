# Unexpected Behavior with Null Values in JavaScript Addition

This repository demonstrates a common yet subtle bug in JavaScript related to handling null values in arithmetic operations. The bug occurs when the function attempts to perform an addition with null values, and this behavior can lead to unexpected outcomes. The solution provides a revised version of the code that correctly addresses this issue by using type checking and default values.

## Bug

The original code uses a simple if statement to check whether the input is null. If it is, it returns 0. However, this is not ideal because it will return 0 if either `a` or `b` is null, irrespective of the value of the other.

## Solution

The solution revises the function to handle null values explicitly. It utilizes the nullish coalescing operator (`??`) to provide default values (0) if either `a` or `b` is null.