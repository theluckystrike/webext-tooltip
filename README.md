# webext-tooltip

Tooltip component for Chrome extensions. Hover tooltips, positioned tooltips, rich content, delayed show, and custom styling for MV3.

INSTALL

```bash
npm install webext-tooltip
```

USAGE

```typescript
import { Tooltip } from 'webext-tooltip';

const button = document.getElementById('my-button')!;

// Show a tooltip above an element
Tooltip.show(button, 'Click to save', 'top');

// Hide the active tooltip
Tooltip.hide();

// Attach hover tooltips using a data attribute
// <button data-tooltip="Save changes">Save</button>
Tooltip.attach('[data-tooltip]', 'data-tooltip', 'bottom');

// Flash a tooltip that auto-hides after 2 seconds
Tooltip.flash(button, 'Saved!', 2000);
```

API

All methods on the Tooltip class are static. There is no need to create an instance.

Tooltip.show(anchor, text, position?)

Displays a tooltip positioned relative to the anchor element. Any previously visible tooltip is removed first.

- anchor (HTMLElement) -- the element to position the tooltip near
- text (string) -- tooltip text content
- position ('top' | 'bottom' | 'left' | 'right', default 'top') -- placement direction relative to the anchor
- Returns the tooltip HTMLElement

Tooltip.hide()

Removes the currently active tooltip from the DOM, if one exists.

Tooltip.attach(selector, textAttr?, position?)

Attaches mouseenter/mouseleave listeners to all elements matching the selector. Shows tooltips on hover using the text found in the given attribute.

- selector (string) -- CSS selector for target elements
- textAttr (string, default 'data-tooltip') -- attribute name to read tooltip text from
- position ('top' | 'bottom', default 'top') -- tooltip placement direction

Tooltip.flash(anchor, text, durationMs?)

Shows a tooltip and automatically hides it after a set duration.

- anchor (HTMLElement) -- the element to position the tooltip near
- text (string) -- tooltip text content
- durationMs (number, default 2000) -- milliseconds before auto-hide

HOW IT WORKS

The tooltip is rendered as a fixed-position div appended to document.body. It uses inline styles for background, font, shadow, and a short opacity transition for fade-in. Positioning is calculated from the anchor's bounding rect at the time of display.

LICENSE

MIT. See LICENSE file for details.

---

Built by Zovo -- https://zovo.one
