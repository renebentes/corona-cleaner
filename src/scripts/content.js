const corona = /coronavírus|coronavirus|corona virus|corona vírus|covid-19|covid19|covid|corona/gi;
const ignoreTags = ["script", "noscript", "style", "meta", "title"];

function cure(element) {
    if (ignoreTags.includes(element.localName)) return;

    const text  = element.textContent;

    element.textContent = text.replace(corona, "💉");
}

function find(element){
    if (!element.childElementCount) {
        cure(element);
        return;
    }

    for (const el of element.children) {
        find(el);
    }
}

find(document.body);