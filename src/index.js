const btnAcceptedArray = document.querySelectorAll('button.confirm');
const btnDeleteArray = document.querySelectorAll('button.delete');
const btnState = document.querySelector('button.toggle');
const btnPanel = document.getElementById('btn-expand');
const modal = document.getElementById('modal');
const panel = document.getElementById('panel');
const dropdown = document.querySelectorAll('.showtext');
let isExpand = false;

// Panel
btnPanel.onclick = () => {
    if (modal.classList.contains('-z-1')) {
        // modal
        modal.classList.remove('-z-1');
        modal.classList.add('z-20');
        modal.classList.add('backdrop-brightness-50');

        // panel
        panel.classList.remove('-translate-x-85');
    }
};

modal.onclick = (e) => {
    if (!panel.contains(e.target)) {
        // modal
        modal.classList.remove('backdrop-brightness-50');
        modal.classList.remove('z-20');
        modal.classList.add('-z-1');

        // panel
        panel.classList.add('-translate-x-85');
    }
};

dropdown.forEach(dropdown1 => {
    dropdown1.onclick = (e) => {
        const content1 = dropdown1.parentElement.children[1]
        const chevron = dropdown1.children[1]
        if (content1.classList.contains('max-h-30')) {
            dropdown1.parentElement.classList.remove('shadow-xl');
            'max-h-30 pt-2 pb-4'.split(' ').forEach(style => content1.classList.remove(style));
            chevron.classList.add('rotate-180');
            content1.classList.add('max-h-0');
        } else {
            dropdown1.parentElement.classList.add('shadow-xl');
            'max-h-30 pt-2 pb-4'.split(' ').forEach((style) => content1.classList.add(style));
            chevron.classList.remove('rotate-180');
            content1.classList.remove('max-h-0');
        }
    }

})

if (btnState) {
    btnState.addEventListener('click', () => {
        btnState.innerHTML = isExpand ? 'See All' : 'Collapse';
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
        console.log(content);
        content.forEach((el) => el.remove());
        // faded
        setTimeout(() => {
            parent.style.opacity = 0;
            setTimeout(() => {
                parent.remove();
            }, 500);
        }, 1000);
    });
});

btnDeleteArray.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // full box
        console.log(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.insertAdjacentHTML(
            'afterend',
            `
                <h1 class="font-semibold text-red-600 text-lg text-center">Denied!</h1>    
            `,
        );
        // deletion
        let parent = e.target.parentElement.parentElement.parentElement;
        let content = Object.values(e.target.parentElement.parentElement.children);
        console.log(content);
        content.forEach((el) => el.remove());
        // faded
        setTimeout(() => {
            parent.style.opacity = 0;
            setTimeout(() => {
                parent.remove();
            }, 500);
        }, 1000);
    });
});
