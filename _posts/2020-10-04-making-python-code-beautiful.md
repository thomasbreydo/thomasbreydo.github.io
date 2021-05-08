---
title: 'Making Python code beautiful'
description: 'A bit of Python code can be written so well that your boss and coworkers will marvel at its beauty.'
excerpt: 'A bit of Python code can be written so well that your boss and coworkers will marvel at its beauty.'
is_project: false
date: 2020-10-04 12:00:00
featured_image: '/assets/images/fullsize/posts/making-python-code-beautiful-feat.jpg'
---

A bit of Python code can be written so well that your boss and coworkers will marvel at its beauty. Keep reading to discover easy changes that will improve your code’s speed and style!

Treat this as a collection of useful concepts. Even you Python pros will find tips to apply to your code.

### Tuple unpacking

Let’s start simple. Say you wanted to swap the values that two variables store. In many languages (such as C), you would need to use a temporary variable, like this:

```cpp
int originalB = b;
b = a;
a = originalB;
```

But in Python, this is all shortened to just one readable line:

```py
a, b = b, a
```

That’s it! This is faster and more space-effective. Maybe your code is prettier already.

_Python pros — did you know that you can use_ `*` _to assign a list of values to a variable?_

```py
a, b, *several, c, d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(a)  # 1
print(several)  # [3, 4, 5, 6, 7, 8]
```

### Line length

Your lines should be at most 80–90 characters long. Use parentheses, not backslashes, to fix longer lines:

```py
# BAD
long_variable_name = long_function_name(long_arg, another_arg) + another_function() - final_function() / 3

# BETTER
long_variable_name = long_function_name(long_arg, another_arg) \
                        + another_function() - final_function() / 3

# BEST!
long_variable_name = (
    long_function_name(long_arg, another_arg)
    + another_function()
    - final_function() / 3
)
```

This leaves more whitespace and aligns the operators (e.g. `+` ), making it easier for somebody (including your future self) to understand the code.

_Python pros — You can also look into linters, which automatically format your code for you! Linters go beyond line length: nested lists, spacing, etc. I use the_ [_Black_](https://black.readthedocs.io/en/stable/) _linter and I love it._

### List comprehension

Here’s a quick one. I cringe whenever I see Python code that creates an empty list, then appends to it using a `for` loop:

```py
even_numbers = []
for n in range(20):
    if n % 2 == 0:
        even_numbers.append(n)
```

If you ever catch yourself doing that, change it to this:

```py
even_numbers = [n for n in range(20) if n % 2 == 0]
```

It’s faster and it’s a lot cleaner.

### Context managers

_Please,_ don’t read and write files without using `with`!

```py
logfile = open('october.log', 'w')
logfile.write('Bad code...\n')

# BAD: logfile is never closed
```

First of all, file pointers are meant to be closed! Secondly, there’s a beautiful Python syntax that lets you forget the opening and closing:

```py
with open('october.log', 'w') as logfile:
    logfile.write('Much better!\n')

# GOOD: logfile is closed automatically
```

_Python pros — You can actually write your own context managers. These are useful for code that has a setup and an ending action. The general structure looks like this:_

```py
from functools import contextmanager  # standard library


@contextmanager
def my_context_manager():
    # setup code: runs just before entering the
    # "with" statement
    try:
        yield var  # or just "yield" if
                   # you don't need to pass
                   # a variable on
    finally:
        # ending code: runs right after exiting the
        # "with" statement. It will run even if code
        # inside the "with" statement raised an exception!
```

_Say you wanted to have a context manager that printed to let you know when your processes start and end:_

_That’s it! Now you can use it like this:_

### Positional-only arguments

Often, the names of a function’s arguments are irrelevant. In this case, you want those arguments to always be passed positionally:

*   Positionally: `is_capitalized("world")`
*   Not positionally: `is_capitalized(string="world")`

In Python 3.8, you can force arguments to your functions to be positional! This can make code cleaner and more readable.

To achieve this functionality, use a `/` as an argument:

```py
def is_capitalized(string, /):
    return string[0].isupper()
```

All arguments that precede the `/` will need to be passed positionally:

```py
is_capitalized("October")
# True

is_capitalized(string="October")
# TypeError: is_capitalized() got some
# positional-only arguments passed as ...
```

### Going further

There is a lot that you can do to make your code look neater. I encourage you to add your thoughts on the matter as a comment on this article.

If you want to look at tips from others, here are two good places to get started:

Raymond Hettinger’s [PyCon 2013 talk](https://www.youtube.com/watch?v=OSGv2VnC0go) about idiomatic Python code. In it, he goes over many little changes you to your programs that make them nicer. The talk was part of the inspiration for this article. _Note, the talk shows code in Python 2. The top comment on the video explains the few changes you’ll need to make for Python 3._

Conor Hoekstra’s [PyCon 2020 talk](https://youtu.be/KTIl1MugsSY) about refactoring Python code. In it, he shows how you can shrink a 60-line file to one-third the size. _Note, at_ [_14:51_](https://youtu.be/KTIl1MugsSY?t=891) _in the video, Conor turns a try-except into an if-else. I discourage this, since it violates Python’s easier-to-ask-permission-than-forgiveness (EAFP) principle. Learn more about EAFP in_ [_this_](https://devblogs.microsoft.com/python/idiomatic-python-eafp-versus-lbyl/) _article by Brett Cannon from Microsoft._
