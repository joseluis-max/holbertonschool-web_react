# TypeScript

**Learning Objectives**

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- Basic types in Typescript
  JavaScript has three commonly used `primitives`:

  - `string`: "This is a string"
  - `number`: 173
  - `boolean`: true | false

  and has too `non-primitives` types:

  - `Array`: [1, 3, 4, "cinco", true]
  - `Any`: any type
  - `noImplicitType`: by default when we don't specify a type the same is `any`

- Interfaces, Classes, and functions
  ``` ts
    function greet(name: String) {
      console.log("Hello, " + name.toUpperCase+ "!!")
    }

    class Point {
      x: number;
      y: number;
    }

    interface Point {
      x: number;
      y: number;
    }
  ```
- How to work with the DOM and Typescript

  TypeScript is a typed superset of JavaScript, and it ships type definitions for the DOM API. These definitions are readily available in any default TypeScript project. Of the 20,000+ lines of definitions in lib.dom.d.ts, one stands out among the rest: HTMLElement . This type is the backbone for DOM manipulation with TypeScript.

  ``` ts
    // 1. Select the div element using the id property
    const app = document.getElementById("app");
    // 2. Create a new <p></p> element programmatically
    const p = document.createElement("p");
    // 3. Add the text content
    p.textContent = "Hello, World!";
    // 4. Append the p element to the div element
    app?.appendChild(p);
  ```
- Generic types

  ``` ts
  function identity<Type>(arg: Type): Type {
    return arg;
  }
  let output = identity<string>("myString");
  let output = identity("myString");
  ```
- How to use namespaces
  
- How to merge declarations
  
- How to use an ambient Namespace to import an external library
  
- Basic nominal typing with Typescript

**Requirements**

- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- All your files will be transpiled on Ubuntu 18.04
- Your TS scripts will be checked with jest (version 24.9.* )
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the ts extension when possible
- The Typescript compiler should not show any warning or error when compiling your code
