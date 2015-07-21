# async-each
Barebones jQuery plugin that iterates through each item in the collection after a brief `setTimeout`. This allows you to either iterate through very large data sets or do heavy processing within your `.asyncEach` call without freezing the browser or getting an unresponsive script error.

# How to use
Just use `.asyncEach` instead of `.each`, passing in your callback function as an argument. You'll get a performance hit of ~1ms per iteration due to the timeout, so only use in cases where you know you're likely to get a browser lockup.

# Limitations
I bet this has inconsistent results if you nest calls, I haven't tried it yet. If it does and you have a fix, please submit a pull request!
