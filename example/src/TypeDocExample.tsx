/**
 * This file contains examples of TypeDoc comments.
 * The documentation of TypeDoc comments is available at https://typedoc.org/guides/doccomments/
 * The documentation of this project can be generated with `npx typedoc`.
 */

import React, { ReactElement } from 'react';

interface Props {
  /** A required boolean property */
  exampleBool: boolean;
  /** An optional text property */
  exampleText?: string;
}

/**
 * This is a component description.
 * For the properties see the [[Props]] interface.
 * TypeDoc _supports_ [Markdown](https://marked.js.org/).
 */
const DocExample: React.FC<Props> = (): ReactElement => {
  return <div className="DocExample">DocExample</div>;
};

/**
 * This function does something and returns 0.
 *
 * @typeparam T Comment for type `T`.
 * @param target Comment for parameter ´target´.
 * @param text Comment for parameter ´text´.
 */
function doSomething<T>(target: T, text: string): number {
  console.log(text);
  return 0;
}

export default DocExample;
