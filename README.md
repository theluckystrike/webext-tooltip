# webext-tooltip

[![npm version](https://img.shields.io/npm/v/webext-tooltip)](https://npmjs.com/package/webext-tooltip)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Discord](https://img.shields.io/badge/Discord-Zovo-blueviolet.svg?logo=discord)](https://discord.gg/zovo)
[![Website](https://img.shields.io/badge/Website-zovo.one-blue)](https://zovo.one)
[![GitHub Stars](https://img.shields.io/github/stars/theluckystrike/webext-tooltip?style=social)](https://github.com/theluckystrike/webext-tooltip)

> Tooltip component for Chrome extensions -- hover tooltips, positioned tooltips, rich content, delayed show, and custom styling for MV3.

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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Built by [Zovo](https://zovo.one)

### Related Zovo Repositories

- [webext-toast-notifications](https://github.com/theluckystrike/webext-toast-notifications) - Toast notifications
- [webext-progress-bar](https://github.com/theluckystrike/webext-progress-bar) - Progress indicators
- [awesome-chrome-extensions-dev](https://github.com/theluckystrike/awesome-chrome-extensions-dev) - Curated list of Chrome extension development resources

### Zovo Chrome Extensions

- [Zovo Tab Manager](https://chrome.google.com/webstore/detail/zovo-tab-manager) - Manage tabs efficiently
- [Zovo Focus](https://chrome.google.com/webstore/detail/zovo-focus) - Block distractions

Visit [zovo.one](https://zovo.one) for more information.
