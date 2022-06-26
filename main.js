function addRow(yksikkö) {
    const container = document.getElementsByClassName(yksikkö)[0];
    const newRow = document.createElement('div');
    
    const divEl1 = document.createElement('div');
    const divEl2 = document.createElement('div');

    const labelEl1 = document.createElement('label');
    const labelEl2 = document.createElement('label');

    const inputEl1 = document.createElement('input');
    const inputEl2 = document.createElement('input');
    
    divEl1.appendChild(labelEl1);
    divEl1.appendChild(inputEl1);
    divEl2.appendChild(labelEl2);
    divEl2.appendChild(inputEl2);

    newRow.appendChild(divEl1);
    newRow.appendChild(divEl2);

    newRow.classList.add(['laite']);

    insertAfter(container.lastChild, newRow);
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function deleteRow(yksikkö) {
    const container = document.getElementsByClassName(yksikkö)[0];
    if(container.childElementCount > 1) {
        container.lastChild.remove();
    }
}

function toggleAsentaja() {
    const btnEl = document.getElementById('asentaja-btn');
    const isVisible = btnEl.value !== 'lisää toinen asentaja';

    const second = document.getElementById('secondary');
    if (!isVisible) {
        second.style = 'display:flex; justify-content:flex-start;'
        btnEl.value = 'poista toinen asentaja';
        return;
    }
    second.style="display:none";
    btnEl.value = 'lisää toinen asentaja';
}