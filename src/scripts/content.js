const corona = /(corona|covid)((-|\s)?(19|v[ií]rus))?/gi;
const ignoreTags = ["script", "noscript", "style", "meta", "title"];

function cure(element) {
    if (ignoreTags.includes(element.localName)) return;

    const text  = element.textContent;

    element.textContent = text.replace(corona, "💉");
}

function process(element){
    if (!element.childElementCount) {
        cure(element);
        return;
    }

    for (const el of element.children) {
        process(el);
    }
}

process(document.body);