## Figma URL

[Color generator](https://www.figma.com/file/P2SJ5QGOZvi49EOpoVTvsT/Color-generator?node-id=0%3A1&t=ZY2gnIJ9zGTSXPW8-1)


## Values.js

Install the values.js library and use it to generate a list of colors in the App component.

[Values.js Library](https://github.com/noeldelgado/values.js/blob/master/README.md)

```sh
npm i values.js

```

```js
import Values from 'values.js';
new Values('#f15025').all(10);
```

## React-Toastify

Import and set up the react-toastify library.

[React Toastify](https://fkhadra.github.io/react-toastify/introduction)

```sh
npm i react-toastify
```

main.jsx

```js
import 'react-toastify/dist/ReactToastify.css';
```

App.jsx

```js
import { ToastContainer, toast } from 'react-toastify';

toast.success('awesome');
toast.error('error message');

return (
  <main>
    ...............
    <ToastContainer position='top-center' />
  </main>
);
```

#### Clipboard

Example to save a string value to the clipboard using the Clipboard API:

```js
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied to clipboard');
  } catch (error) {
    console.error('Failed to copy text: ', error);
  }
}

const textToCopy = 'Hello, world!';
copyToClipboard(textToCopy);
```

## CSS

```css
.colors {
  min-height: calc(100vh - 160px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));
}
```

min-height: calc(100vh - 160px); - This line sets the minimum height of the element. It uses the calc() function to subtract 160 pixels from the viewport height (100vh). The viewport height unit (vh) is relative to the height of the browser window. This means the element will take up at least the full viewport height minus 160 pixels.


grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr)); - This line defines the number of columns and their width in the grid. The repeat() function is used with the auto-fit keyword, which automatically calculates the number of columns based on the container's width and the minimum and maximum column widths specified in minmax(223.33px, 1fr). The minimum width is set to 223.33 pixels, while the maximum width is set to 1 fraction (1fr) of the available space.

grid-template-rows: repeat(auto-fit, minmax(96px, 1fr)); - This line defines the number of rows and their height in the grid, similar to the previous property. The repeat() function is used with the auto-fit keyword, and the minmax() function defines the minimum row height as 96 pixels and the maximum height as 1 fraction (1fr) of the available space.
