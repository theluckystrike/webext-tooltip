# webext-tooltip — Tooltip Component for Extensions

[![npm version](https://img.shields.io/npm/v/webext-tooltip)](https://npmjs.com/package/webext-tooltip)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Chrome Web Extension](https://img.shields.io/badge/Chrome-Web%20Extension-orange.svg)](https://developer.chrome.com/docs/extensions/)
[![CI Status](https://github.com/theluckystrike/webext-tooltip/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/webext-tooltip/actions)
[![Discord](https://img.shields.io/badge/Discord-Zovo-blueviolet.svg?logo=discord)](https://discord.gg/zovo)
[![Website](https://img.shields.io/badge/Website-zovo.one-blue)](https://zovo.one)
[![GitHub Stars](https://img.shields.io/github/stars/theluckystrike/webext-tooltip?style=social)](https://github.com/theluckystrike/webext-tooltip)

> Positioned tooltips with hover attach, flash display, and dark theme.

**webext-tooltip** is a lightweight tooltip component for Chrome extensions. Show contextual information on hover, flash temporary messages, and customize appearance with dark theme support.

Part of the [Zovo](https://zovo.one) developer tools family.

## Features

- ✅ **Auto Positioning** - Smart placement (top, bottom, left, right)
- ✅ **Hover Attach** - Attach to any element via CSS selector
- ✅ **Flash Messages** - Temporary toast-style messages
- ✅ **Dark Theme** - Built-in dark theme support
- ✅ **TypeScript Support** - Full type definitions included

## Installation

```bash
npm install webext-tooltip
```

## Quick Start

```typescript
import { Tooltip } from 'webext-tooltip';

// Attach tooltips to elements with data-tooltip attribute
Tooltip.attach('[data-tooltip]');

// Flash a message
Tooltip.flash(button, 'Saved!', 2000);
```

## Usage Examples

### Basic Tooltip

```html
<button data-tooltip="Click to save">Save</button>
```

```typescript
Tooltip.attach('[data-tooltip]');
```

### Custom Tooltip Content

```typescript
Tooltip.attach('.help-icon', {
  position: 'right',
  theme: 'dark',
});
```

### Flash Message

```typescript
// Flash a success message
Tooltip.flash(saveButton, 'Settings saved!', 2000);

// Flash with custom styling
Tooltip.flash(deleteButton, 'Item deleted', 1500, {
  theme: 'error',
});
```

### Programmatic Tooltip

```typescript
Tooltip.show(element, 'Custom message', {
  position: 'bottom',
  duration: 3000,
});
```

## API

### Tooltip Methods

| Method | Description |
|--------|-------------|
| `Tooltip.attach(selector, options?)` | Attach tooltips to matching elements |
| `Tooltip.show(element, message, options?)` | Show tooltip on element |
| `Tooltip.hide()` | Hide current tooltip |
| `Tooltip.flash(element, message, duration?)` | Flash a temporary message |

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| position | string | 'top' | Tooltip position |
| theme | string | 'light' | Theme: 'light' or 'dark' |
| duration | number | -1 | Auto-dismiss duration (ms) |

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/tooltip-feature`
3. **Make** your changes
4. **Test** your changes: `npm test`
5. **Commit** your changes: `git commit -m 'Add new feature'`
6. **Push** to the branch: `git push origin feature/tooltip-feature`
7. **Submit** a Pull Request

## Built by Zovo

Part of the [Zovo](https://zovo.one) developer tools family — privacy-first Chrome extensions built by developers, for developers.

## See Also

### Related Zovo Repositories

- [webext-toast-notifications](https://github.com/theluckystrike/webext-toast-notifications) - Toast notifications
- [webext-quick-settings](https://github.com/theluckystrike/webext-quick-settings) - Settings panel
- [webext-element-picker](https://github.com/theluckystrike/webext-element-picker) - Element selector
- [chrome-extension-starter-mv3](https://github.com/theluckystrike/chrome-extension-starter-mv3) - Extension template

### Zovo Chrome Extensions

- [Zovo Tab Manager](https://chrome.google.com/webstore/detail/zovo-tab-manager) - Manage tabs efficiently
- [Zovo Focus](https://chrome.google.com/webstore/detail/zovo-focus) - Block distractions
- [Zovo Permissions Scanner](https://chrome.google.com/webstore/detail/zovo-permissions-scanner) - Check extension privacy grades

Visit [zovo.one](https://zovo.one) for more information.

## License

MIT — [Zovo](https://zovo.one)

---

*Built by developers, for developers. No compromises on privacy.*
