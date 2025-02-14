const btnAcceptedArray = document.querySelectorAll('button.confirm');
const btnDeleteArray = document.querySelectorAll('button.delete');
const btnState = document.querySelector('button.toggle');
const btnPanel = document.getElementById('btn-expand');
const modal = document.getElementById('modal');
const panel = document.getElementById('panel');
const dropdown = document.querySelectorAll('.showtext');
let isExpand = false;

const addStyle = (el, str) => {
    str.split(' ').forEach((style) => el.classList.add(style));
};
const removeStyle = (el, str) => {
    str.split(' ').forEach((style) => el.classList.remove(style));
};
const deleteElement = (el) => el.remove();

// Panel
btnPanel.onclick = () => {
    if (modal.classList.contains('-z-1')) {
        // modal
        removeStyle(modal, '-z-1');
        addStyle(modal, 'backdrop-brightness-50 z-20');

        // panel
        removeStyle(panel, '-translate-x-85');
    }
};

modal.onclick = (e) => {
    if (!panel.contains(e.target)) {
        // modal
        removeStyle(modal, 'backdrop-brightness-50 z-20');
        addStyle(modal, '-z-1');

        // panel
        addStyle(panel, '-translate-x-85');
    }
};

dropdown.forEach((dropdown1) => {
    dropdown1.onclick = () => {
        const content = dropdown1.parentElement.children[1];
        const chevron = dropdown1.children[1];
        if (content.classList.contains('max-h-30')) {
            removeStyle(dropdown1.parentElement, 'z-1 shadow-xl');
            removeStyle(content, 'max-h-30 pt-2 pb-4');
            addStyle(chevron, 'max-h-0 rotate-180');
        } else {
            addStyle(dropdown1.parentElement, 'z-1 shadow-xl');
            addStyle(content, 'max-h-30 pt-2 pb-4');
            removeStyle(chevron, 'max-h-0 rotate-180');
        }
    };
});

if (btnState) {
    btnState.addEventListener('click', () => {
        btnState.innerText = isExpand ? 'See All' : 'Collapse';
        isExpand = !isExpand;
    });
}

btnAcceptedArray.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // full box
        e.target.parentElement.parentElement.insertAdjacentHTML(
            'afterend',
            `
                <h1 class="font-semibold text-green-600 text-lg text-center">Accepted!</h1>    
            `,
        );
        // deletion
        let parent = e.target.parentElement.parentElement.parentElement;
        let content = Object.values(e.target.parentElement.parentElement.children);
        let container_card = parent.parentElement;
        let btn_add_more = container_card.parentElement.nextElementSibling;
        content.forEach((el) => deleteElement(el));
        // faded
        setTimeout(() => {
            parent.style.opacity = 0;
            setTimeout(() => {
                deleteElement(parent);
                if (container_card.children.length === 0) {
                    container_card.innerText = 'Blank';
                    addStyle(container_card, 'font-bold text-gray-500 justify-center');
                    removeStyle(container_card, 'h-92 justify-start');
                    deleteElement(btn_add_more);
                }
            }, 500);
        }, 1000);
    });
});

btnDeleteArray.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // full box
        e.target.parentElement.parentElement.insertAdjacentHTML(
            'afterend',
            `
                <h1 class="font-semibold text-red-600 text-lg text-center">Denied!</h1>
            `,
        );
        // deletion
        let parent = e.target.parentElement.parentElement.parentElement;
        let content = Object.values(e.target.parentElement.parentElement.children);
        let container_card = parent.parentElement;
        let btn_add_more = container_card.parentElement.nextElementSibling;
        content.forEach((el) => deleteElement(el));
        // faded
        setTimeout(() => {
            parent.style.opacity = 0;
            setTimeout(() => {
                deleteElement(parent);
                if (container_card.children.length === 0) {
                    container_card.innerText = 'Blank';
                    addStyle(container_card, 'font-bold text-gray-500 justify-center');
                    removeStyle(container_card, 'h-92 justify-start');
                    deleteElement(btn_add_more);
                }
            }, 500);
        }, 1000);
    });
});
