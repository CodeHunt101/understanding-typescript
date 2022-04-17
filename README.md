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

### Literal Types

- You can assign your own property values.

### Aliases

- You can creating custom types by adding aliases to refactor and simplify code.

### Function Return Types and Void

- You can specifiy a type to return from a function, but it's better to let TypeScript figure it out.
- type void means a function doesn't return anything. Eg: it just console log or permorm internal tasks.
- Don't confuse it with undefined type

### Function types

- We can specify the argument types and the return type of a function
- Here we tell that the next variable will take a function that accepts two number types as parameters and returns a number:

```ts
let combineValues: (a: number, b: number) => number
```

### Unknown type

- It's similar to type `any` but it will be more restrictive when combining it with other variable types

### Never type

- In some situations it is literally impossible to return a value, in these cases, TypeScript understands it as a void type, but you can specify it will **never** return any values.
  
```ts
function generateError(message: string, code: number): never {
  throw {message: message, errorCode: code}
}
```

## The TypeScript Compiler: configuring & using it

### Watch Mode

- There's no need to run `tsc <file name>` every time you make a new change.
- There's an option that let the user see the changes in real time, which is the __Watch Mode__
- In order to run Watch Mode, run:

```
tsc app.ts --watch
```

### Compiling the entire project

- Usually, on bigger projects. You'll have to run more than one TypeScript file.
- In order to run __Watch Mode for the entire project__, run:

```
tsc --init
```

- To compile all files, run:

```
tsc
```

### Include and exclude files

- Check the configuration file `tsconfing.json` and add new keys to include and exclude.
-To exclude:
```json
  // Here we are excluding analytics.ts from compilation
  "exclude": [
    "analytics.ts"
  ]
```

- To include:
```json
  // Here we are including app.ts for compilation
  "include": [
    "app.ts"
  ]
```