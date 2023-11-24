var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ActionMenuElement_instances, _ActionMenuElement_abortController, _ActionMenuElement_originalLabel, _ActionMenuElement_inputName, _ActionMenuElement_setDynamicLabel, _ActionMenuElement_updateInput, _ActionMenuElement_isActivationKeydown, _ActionMenuElement_firstItem_get;
import { controller, target } from '@github/catalyst';
import '@oddbird/popover-polyfill';
const validSelectors = ['[role="menuitem"]', '[role="menuitemcheckbox"]', '[role="menuitemradio"]'];
const menuItemSelectors = validSelectors.map(selector => `:not([hidden]) > ${selector}`);
let ActionMenuElement = class ActionMenuElement extends HTMLElement {
    constructor() {
        super(...arguments);
        _ActionMenuElement_instances.add(this);
        _ActionMenuElement_abortController.set(this, void 0);
        _ActionMenuElement_originalLabel.set(this, '');
        _ActionMenuElement_inputName.set(this, '');
    }
    get selectVariant() {
        return this.getAttribute('data-select-variant');
    }
    set selectVariant(variant) {
        if (variant) {
            this.setAttribute('data-select-variant', variant);
        }
        else {
            this.removeAttribute('variant');
        }
    }
    get dynamicLabelPrefix() {
        const prefix = this.getAttribute('data-dynamic-label-prefix');
        if (!prefix)
            return '';
        return `${prefix}:`;
    }
    set dynamicLabelPrefix(value) {
        this.setAttribute('data-dynamic-label', value);
    }
    get dynamicLabel() {
        return this.hasAttribute('data-dynamic-label');
    }
    set dynamicLabel(value) {
        this.toggleAttribute('data-dynamic-label', value);
    }
    get popoverElement() {
        var _a;
        return ((_a = this.invokerElement) === null || _a === void 0 ? void 0 : _a.popoverTargetElement) || null;
    }
    get invokerElement() {
        var _a;
        const id = (_a = this.querySelector('[role=menu]')) === null || _a === void 0 ? void 0 : _a.id;
        if (!id)
            return null;
        for (const el of this.querySelectorAll(`[aria-controls]`)) {
            if (el.getAttribute('aria-controls') === id) {
                return el;
            }
        }
        return null;
    }
    get invokerLabel() {
        if (!this.invokerElement)
            return null;
        return this.invokerElement.querySelector('.Button-label');
    }
    get selectedItems() {
        const selectedItems = this.querySelectorAll('[aria-checked=true]');
        const results = [];
        for (const selectedItem of selectedItems) {
            const labelEl = selectedItem.querySelector('.ActionListItem-label');
            results.push({
                label: labelEl === null || labelEl === void 0 ? void 0 : labelEl.textContent,
                value: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.getAttribute('data-value'),
                element: selectedItem
            });
        }
        return results;
    }
    connectedCallback() {
        const { signal } = (__classPrivateFieldSet(this, _ActionMenuElement_abortController, new AbortController(), "f"));
        this.addEventListener('keydown', this, { signal });
        this.addEventListener('click', this, { signal });
        this.addEventListener('mouseover', this, { signal });
        this.addEventListener('focusout', this, { signal });
        __classPrivateFieldGet(this, _ActionMenuElement_instances, "m", _ActionMenuElement_setDynamicLabel).call(this);
        __classPrivateFieldGet(this, _ActionMenuElement_instances, "m", _ActionMenuElement_updateInput).call(this);
        if (this.includeFragment) {
            this.includeFragment.addEventListener('include-fragment-replaced', this, {
                signal
            });
        }
    }
    disconnectedCallback() {
        __classPrivateFieldGet(this, _ActionMenuElement_abortController, "f").abort();
    }
    handleEvent(event) {
        var _a, _b, _c, _d, _e;
        const activation = __classPrivateFieldGet(this, _ActionMenuElement_instances, "m", _ActionMenuElement_isActivationKeydown).call(this, event);
        if (event.target === this.invokerElement && activation) {
            if (__classPrivateFieldGet(this, _ActionMenuElement_instances, "a", _ActionMenuElement_firstItem_get)) {
                event.preventDefault();
                (_a = this.popoverElement) === null || _a === void 0 ? void 0 : _a.showPopover();
                __classPrivateFieldGet(this, _ActionMenuElement_instances, "a", _ActionMenuElement_firstItem_get).focus();
                return;
            }
        }
        // Ignore events within dialogs within menus
        if (((_b = event.target) === null || _b === void 0 ? void 0 : _b.closest('dialog')) || ((_c = event.target) === null || _c === void 0 ? void 0 : _c.closest('modal-dialog'))) {
            return;
        }
        // If a dialog has been rendered within the menu, we do not want to hide
        // the entire menu, as that will also hide the Dialog. Instead we want to
        // show the Dialog while hiding just the visible part of the menu.
        if ((activation || event.type === 'click') && ((_d = event.target) === null || _d === void 0 ? void 0 : _d.closest('[data-show-dialog-id]'))) {
            const dialogInvoker = event.target.closest('[data-show-dialog-id]');
            const dialog = this.ownerDocument.getElementById((dialogInvoker === null || dialogInvoker === void 0 ? void 0 : dialogInvoker.getAttribute('data-show-dialog-id')) || '');
            if (dialogInvoker && dialog && this.contains(dialogInvoker) && this.contains(dialog)) {
                this.querySelector('.ActionListWrap').style.display = 'none';
                const dialog_controller = new AbortController();
                const { signal } = dialog_controller;
                const handleDialogClose = () => {
                    var _a, _b;
                    dialog_controller.abort();
                    this.querySelector('.ActionListWrap').style.display = '';
                    if ((_a = this.popoverElement) === null || _a === void 0 ? void 0 : _a.matches(':popover-open')) {
                        (_b = this.popoverElement) === null || _b === void 0 ? void 0 : _b.hidePopover();
                    }
                };
                dialog.addEventListener('close', handleDialogClose, { signal });
                dialog.addEventListener('cancel', handleDialogClose, { signal });
                return;
            }
        }
        if (!((_e = this.popoverElement) === null || _e === void 0 ? void 0 : _e.matches(':popover-open')))
            return;
        if (event.type === 'include-fragment-replaced') {
            if (__classPrivateFieldGet(this, _ActionMenuElement_instances, "a", _ActionMenuElement_firstItem_get))
                __classPrivateFieldGet(this, _ActionMenuElement_instances, "a", _ActionMenuElement_firstItem_get).focus();
        }
        else if (activation || (event instanceof MouseEvent && event.type === 'click')) {
            // Hide popover after current event loop to prevent changes in focus from
            // altering the target of the event. Not doing this specifically affects
            // <a> tags. It causes the event to be sent to the currently focused element
            // instead of the anchor, which effectively prevents navigation, i.e. it
            // appears as if hitting enter does nothing. Curiously, clicking instead
            // works fine.
            if (this.selectVariant !== 'multiple') {
                setTimeout(() => {
                    var _a, _b;
                    if ((_a = this.popoverElement) === null || _a === void 0 ? void 0 : _a.matches(':popover-open')) {
                        (_b = this.popoverElement) === null || _b === void 0 ? void 0 : _b.hidePopover();
                    }
                });
            }
            // The rest of the code below deals with single/multiple selection behavior, and should not
            // interfere with events fired by menu items whose behavior is specified outside the library.
            if (this.selectVariant !== 'multiple' && this.selectVariant !== 'single')
                return;
            const item = event.target.closest(menuItemSelectors.join(','));
            if (!item)
                return;
            const ariaChecked = item.getAttribute('aria-checked');
            const checked = ariaChecked !== 'true';
            if (this.selectVariant === 'single') {
                // Only check, never uncheck here. Single-select mode does not allow unchecking a checked item.
                if (checked) {
                    item.setAttribute('aria-checked', 'true');
                }
                for (const checkedItem of this.querySelectorAll('[aria-checked]')) {
                    if (checkedItem !== item) {
                        checkedItem.setAttribute('aria-checked', 'false');
                    }
                }
                __classPrivateFieldGet(this, _ActionMenuElement_instances, "m", _ActionMenuElement_setDynamicLabel).call(this);
            }
            else {
                // multi-select mode allows unchecking a checked item
                item.setAttribute('aria-checked', `${checked}`);
            }
            __classPrivateFieldGet(this, _ActionMenuElement_instances, "m", _ActionMenuElement_updateInput).call(this);
            if (event instanceof KeyboardEvent && event.target instanceof HTMLButtonElement) {
                // prevent buttons from being clicked twice
                event.preventDefault();
            }
        }
    }
};
_ActionMenuElement_abortController = new WeakMap(), _ActionMenuElement_originalLabel = new WeakMap(), _ActionMenuElement_inputName = new WeakMap(), _ActionMenuElement_instances = new WeakSet(), _ActionMenuElement_setDynamicLabel = function _ActionMenuElement_setDynamicLabel() {
    if (!this.dynamicLabel)
        return;
    const invokerLabel = this.invokerLabel;
    if (!invokerLabel)
        return;
    __classPrivateFieldSet(this, _ActionMenuElement_originalLabel, __classPrivateFieldGet(this, _ActionMenuElement_originalLabel, "f") || (invokerLabel.textContent || ''), "f");
    const itemLabel = this.querySelector('[aria-checked=true] .ActionListItem-label');
    if (itemLabel && this.dynamicLabel) {
        const prefixSpan = document.createElement('span');
        prefixSpan.classList.add('color-fg-muted');
        const contentSpan = document.createElement('span');
        prefixSpan.textContent = this.dynamicLabelPrefix;
        contentSpan.textContent = itemLabel.textContent || '';
        invokerLabel.replaceChildren(prefixSpan, contentSpan);
    }
    else {
        invokerLabel.textContent = __classPrivateFieldGet(this, _ActionMenuElement_originalLabel, "f");
    }
}, _ActionMenuElement_updateInput = function _ActionMenuElement_updateInput() {
    if (this.selectVariant === 'single') {
        const input = this.querySelector(`[data-list-inputs=true] input`);
        if (!input)
            return;
        const selectedItem = this.selectedItems[0];
        if (selectedItem) {
            input.value = (selectedItem.value || selectedItem.label || '').trim();
            input.removeAttribute('disabled');
        }
        else {
            input.setAttribute('disabled', 'disabled');
        }
    }
    else if (this.selectVariant !== 'none') {
        // multiple select variant
        const inputList = this.querySelector('[data-list-inputs=true]');
        if (!inputList)
            return;
        const inputs = inputList.querySelectorAll('input');
        if (inputs.length > 0) {
            __classPrivateFieldSet(this, _ActionMenuElement_inputName, __classPrivateFieldGet(this, _ActionMenuElement_inputName, "f") || inputs[0].name, "f");
        }
        for (const selectedItem of this.selectedItems) {
            const newInput = document.createElement('input');
            newInput.setAttribute('data-list-input', 'true');
            newInput.type = 'hidden';
            newInput.autocomplete = 'off';
            newInput.name = __classPrivateFieldGet(this, _ActionMenuElement_inputName, "f");
            newInput.value = (selectedItem.value || selectedItem.label || '').trim();
            inputList.append(newInput);
        }
        for (const input of inputs) {
            input.remove();
        }
    }
}, _ActionMenuElement_isActivationKeydown = function _ActionMenuElement_isActivationKeydown(event) {
    return (event instanceof KeyboardEvent &&
        event.type === 'keydown' &&
        !(event.ctrlKey || event.altKey || event.metaKey || event.shiftKey) &&
        (event.key === 'Enter' || event.key === ' '));
}, _ActionMenuElement_firstItem_get = function _ActionMenuElement_firstItem_get() {
    return this.querySelector(menuItemSelectors.join(','));
};
__decorate([
    target
], ActionMenuElement.prototype, "includeFragment", void 0);
ActionMenuElement = __decorate([
    controller
], ActionMenuElement);
export { ActionMenuElement };
if (!window.customElements.get('action-menu')) {
    window.ActionMenuElement = ActionMenuElement;
    window.customElements.define('action-menu', ActionMenuElement);
}
