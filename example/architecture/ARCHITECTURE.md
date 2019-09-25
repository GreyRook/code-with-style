# Architecture

## Component diagram

The component diagram in this folder is an example and based on the [LNVA2 Player project](https://git.r0k.de/rookitect/player2/tree/185e7b89561aba0fc17030be3b64662b2c2db12e)
It describes the render hierarchy of the React components.
In the context of a browser it shows the DOM structure.
The component diagram does not show the data flow between components or which components manipulate others.

### Component description

The description of the functionality of components is given in the form of doc comments in the source code of the components.
With the help of TypeDoc, a browser-based documentation can be generated from it (see [README](https://git.r0k.de/code-with-style/js/javascript-guide#how-to-doc)).

### Tool (draw.io)

The component diagram was created with [draw.io](https://draw.io).
Changes to the components require a manual update of the component diagram.
To change it, the file [component diagram.drawio](component%20diagram.drawio) can be opened and adjusted in draw.io.
After changing it, a new png image needs to be generated.
The state of the app that the current diagram represents can be read via the last commit date of the file.
