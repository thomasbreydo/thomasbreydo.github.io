---
title: 'Reimplementing data structures in Java'
description: 'Yes, these structures exist as built-in Java objects. The purpose of this
project was to practice by implementing them.'
excerpt: 'Yes, these structures exist as built-in Java objects. The purpose of this
project was to practice by implementing them.'
is_project: true
date: 2021-05-13 12:00:00
featured_image: '/assets/images/fullsize/posts/java-data-structures/feat.jpg'
---

<a href="https://github.com/thomasbreydo/java-data-structures" class="button button--medium">View project on GitHub</a>

### Set

The set is backed by a `Map` that stores elements as keys and sets all values to
be `false`. This is actually how the Java `HashSet` works! As with the hash-map,
all three set operations (`insert`, `contains`, `delete`) have runtime $$\mathcal O(1)$$ by
design.

### Map

The map is implemented as a hash-map. All four map operations
(`insert`, `delete`, `get`, `hasKey`) have runtime $$\mathcal O(1)$$
by design.

### Queue

The queue is implemented as a subclass of `DoublyLinkedList`. All five queue
operations (`offer`, `remove`, `poll`, `element`, `peek`)
have runtime $$\mathcal O(1)$$ by design.

### Stack

The stack is implemented as a subclass of `DoublyLinkedList`. All four stack
operations (`push`, `pop`, `peek`, `empty`)
have runtime $$\mathcal O(1)$$ by design.

### Doubly-linked list

Unlike singly-linked nodes, doubly-linked nodes keep track of their
predecessor (in addition to their successor). This makes reverse traversal an
operation that runs in $$\mathcal O(1)$$ time. It also allows for much more concise code
because it eliminates the need to keep track of the preceding node while
iterating over the list (once the target is found, it stores a pointer to the
previous node). Searching for an element or indexing is still $$\mathcal O(n)$$.

### Singly-linked list

Singly-linked nodes only keep track of their successor so there is no easy way
to iterate backward. Certain operations are $$\mathcal O(n)$$ instead of $$\mathcal O(1)$$ because to find
a preceding node one must iterate from the start of the list.