/**
 * Tooltip — Positioned tooltips for extension UIs
 */
export class Tooltip {
    private static active: HTMLElement | null = null;

    /** Show tooltip near an element */
    static show(anchor: HTMLElement, text: string, position: 'top' | 'bottom' | 'left' | 'right' = 'top'): HTMLElement {
        this.hide();
        const tip = document.createElement('div');
        Object.assign(tip.style, {
            position: 'fixed', padding: '6px 12px', background: '#1F2937', color: '#F9FAFB',
            borderRadius: '6px', fontSize: '12px', fontFamily: '-apple-system,sans-serif',
            zIndex: '999999', pointerEvents: 'none', whiteSpace: 'nowrap',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)', opacity: '0', transition: 'opacity 0.15s',
        });
        tip.textContent = text;
        document.body.appendChild(tip);
        const rect = anchor.getBoundingClientRect();
        const tipRect = tip.getBoundingClientRect();
        const pos = { top: 0, left: 0 };
        if (position === 'top') { pos.top = rect.top - tipRect.height - 8; pos.left = rect.left + rect.width / 2 - tipRect.width / 2; }
        else if (position === 'bottom') { pos.top = rect.bottom + 8; pos.left = rect.left + rect.width / 2 - tipRect.width / 2; }
        else if (position === 'left') { pos.top = rect.top + rect.height / 2 - tipRect.height / 2; pos.left = rect.left - tipRect.width - 8; }
        else { pos.top = rect.top + rect.height / 2 - tipRect.height / 2; pos.left = rect.right + 8; }
        tip.style.top = `${pos.top}px`; tip.style.left = `${pos.left}px`;
        requestAnimationFrame(() => { tip.style.opacity = '1'; });
        this.active = tip;
        return tip;
    }

    /** Hide active tooltip */
    static hide(): void { if (this.active) { this.active.remove(); this.active = null; } }

    /** Attach hover tooltips to elements */
    static attach(selector: string, textAttr: string = 'data-tooltip', position: 'top' | 'bottom' = 'top'): void {
        document.querySelectorAll(selector).forEach((el) => {
            const htmlEl = el as HTMLElement;
            const text = htmlEl.getAttribute(textAttr) || '';
            if (!text) return;
            htmlEl.addEventListener('mouseenter', () => this.show(htmlEl, text, position));
            htmlEl.addEventListener('mouseleave', () => this.hide());
        });
    }

    /** Show tooltip for a duration then auto-hide */
    static flash(anchor: HTMLElement, text: string, durationMs: number = 2000): void {
        this.show(anchor, text);
        setTimeout(() => this.hide(), durationMs);
    }
}
