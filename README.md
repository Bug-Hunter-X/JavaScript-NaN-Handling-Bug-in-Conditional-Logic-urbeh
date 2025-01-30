# JavaScript NaN Handling Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to NaN (Not a Number) values.

## Description

The provided JavaScript function `foo` aims to handle `null` and `undefined` values, returning 0 and 1 respectively.  However, it incorrectly handles `NaN` resulting in unexpected behavior.

## Bug

The core issue lies in the arithmetic operation involving `NaN`.  Adding 1 to `NaN` always yields `NaN`, and this can be difficult to debug if not carefully considered.

## Solution

The solution involves explicitly checking for `NaN` using the `isNaN()` function and providing a suitable return value.