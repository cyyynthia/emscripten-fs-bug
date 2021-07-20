# Emscripten fs bug
Minimal reproduction case for an emscripten bug when using Closure.

## Try it
```
make build
node index.js
```

You'll see an output giving you the return values of `stat` in a cheapo table. In theory, they should all be `-1`,
but the last tests returns `0`.

## The issue
Closure mangles the ERRNO code names, to reduce code size. While this is a good idea, the problem is that
errno codes are used dynamically at runtime, and return undefined value as the names no longer match.

This causes problematic issues especially with `stat` as far as I can tell, and I ran into weird behavior of
libraries thinking a file/dir exists because of this, despite it not existing, resulting in undefined behavior.
