# webext-tooltip

> Tooltip component for Chrome extensions -- hover tooltips, positioned tooltips, rich content, delayed show, and custom styling for MV3.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Install

```bash
npm install webext-tooltip
```

## Usage

```typescript
import { Tooltip } from 'webext-tooltip';

// Show a tooltip above an element
const button = document.getElementById('my-button')!;
Tooltip.show(button, 'Click to save', 'top');

// Hide the active tooltip
Tooltip.hide();

// Automatically attach hover tooltips using a data attribute
// <button data-tooltip="Save changes">Save</button>
Tooltip.attach('[data-tooltip]', 'data-tooltip', 'bottom');

// Flash a tooltip for a limited duration (auto-hides after 2 seconds)
Tooltip.flash(button, 'Saved!', 2000);
```

## API

### `Tooltip` (class)

All methods are **static** -- there is no need to instantiate the class.

#### `static show(anchor: HTMLElement, text: string, position?: 'top' | 'bottom' | 'left' | 'right'): HTMLElement`

Displays a tooltip positioned relative to the anchor element. Any previously visible tooltip is hidden first.

- **anchor** (`HTMLElement`) -- The element to position the tooltip near.
- **text** (`string`) -- The tooltip text content.
- **position** (`'top' | 'bottom' | 'left' | 'right'`, default `'top'`) -- Where to place the tooltip relative to the anchor.
- **Returns** `HTMLElement` -- The tooltip DOM element.

#### `static hide(): void`

Removes the currently active tooltip from the DOM, if any.

#### `static attach(selector: string, textAttr?: string, position?: 'top' | 'bottom'): void`

Attaches mouseenter/mouseleave listeners to all elements matching the selector, showing tooltips on hover.

- **selector** (`string`) -- A CSS selector for target elements.
- **textAttr** (`string`, default `'data-tooltip'`) -- The attribute name to read tooltip text from.
- **position** (`'top' | 'bottom'`, default `'top'`) -- Tooltip placement direction.

#### `static flash(anchor: HTMLElement, text: string, durationMs?: number): void`

Shows a tooltip and automatically hides it after the specified duration.

- **anchor** (`HTMLElement`) -- The element to position the tooltip near.
- **text** (`string`) -- The tooltip text content.
- **durationMs** (`number`, default `2000`) -- Milliseconds before auto-hide.

## License

MIT
