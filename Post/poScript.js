const editor = document.getElementById('editor');
const fontSelect = document.getElementById('fontSelect');
const fontSizeSelect = document.getElementById('fontSizeSelect');

editor.style.fontFamily = "omoriNormal";
editor.style.fontSize = "25";

let savedRange = null;

function saveRange() {
    const sel = window.getSelection();
    if (!sel.rangeCount) return;
    savedRange = sel.getRangeAt(0).cloneRange();
}

function restoreRange() {
    const sel = window.getSelection();
    sel.removeAllRanges();
    if (savedRange) sel.addRange(savedRange);
    else {
        editor.focus();
        const range = document.createRange();
        range.selectNodeContents(editor);
        range.collapse(false);
        sel.addRange(range);
        savedRange = range.cloneRange();
    }
}

editor.addEventListener('mouseup', saveRange);
editor.addEventListener('keyup', saveRange);
editor.addEventListener('focus', saveRange);
editor.addEventListener('pointerup', saveRange);
document.addEventListener('selectionchange', () => {
    if (document.activeElement === editor) saveRange();
});

fontSelect.addEventListener('change', function () {
    editor.focus();
    applyFont(this.value);
});

fontSizeSelect.addEventListener('change', function () {
    editor.focus();
    applyFontSize(this.value);
});

function applyFont(font) {
    const sel = window.getSelection();
    if (!sel.rangeCount) return;

    const range = sel.getRangeAt(0);

    if (range.collapsed) {
        // Create a span with font for caret
        const span = document.createElement('span');
        span.style.fontFamily = font;
        span.appendChild(document.createTextNode('\u200B')); // zero-width space
        range.insertNode(span);

        // Move caret after the span
        range.setStartAfter(span);
        range.setEndAfter(span);
        sel.removeAllRanges();
        sel.addRange(range);
        savedRange = range.cloneRange();
    } else {
        // Wrap selection in span
        const span = document.createElement('span');
        span.style.fontFamily = font;
        span.appendChild(range.extractContents());
        range.insertNode(span);

        // Merge adjacent spans with same font
        mergeAdjacentSpans(editor);
        saveRange();
    }
}

function applyFontSize(size) {
    const sel = window.getSelection();
    if (!sel.rangeCount) return;

    const range = sel.getRangeAt(0);

    if (range.collapsed) {
        const span = document.createElement('span');
        span.style.fontSize = size;
        span.appendChild(document.createTextNode('\u200B'));
        range.insertNode(span);

        range.setStartAfter(span);
        range.setEndAfter(span);
        sel.removeAllRanges();
        sel.addRange(range);
        savedRange = range.cloneRange();
    } else {
        const span = document.createElement('span');
        span.style.fontSize = size;
        span.appendChild(range.extractContents());
        range.insertNode(span);
        mergeAdjacentSpans(editor);
        saveRange();
    }
}

// Optional: merge adjacent spans with same styles to keep DOM clean
function mergeAdjacentSpans(container) {
    const spans = container.querySelectorAll('span');
    for (let i = spans.length - 1; i > 0; i--) {
        const prev = spans[i - 1];
        const curr = spans[i];
        if (prev.style.cssText === curr.style.cssText) {
            prev.appendChild(document.createTextNode(curr.textContent));
            curr.remove();
        }
    }
}

// Example post button
post_.addEventListener('click', () => {
    console.log(editor.innerHTML);
});
