# Notes

## Install

```
npm i -g typescript
```
To compile, run `tsc <file name>`

## Types

### Core Types

- number
- string
- boolean (just these two, no "truthy/falsy" values)
- object
- array
- tuple
- enum (enum { NEW, OLD }) (Added by TypeScript: Automatically enumerated global constant identifiers)
- any

### Union Types

- Represented by pipes "|". They're a combination of types.

### Liteal Types

- You can assign your own property values.

### Aliases

- You can creating custom types by adding aliases to refactor and simplify code.

### Function Return Types and Void

- You can specifiy a type to return from a function, but it's better to let TypeScript figure it out.
- type void means a function doesn't return anything. Eg: it just console log or permorm internal tasks.
- Don't confuse it with undefined type