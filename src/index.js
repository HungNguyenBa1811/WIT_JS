const btnAcceptedArray = document.querySelectorAll('button.confirm');
const btnDeleteArray = document.querySelectorAll('button.delete');
const btnState = document.querySelector('button.toggle');
const btnPanel = document.getElementById('btn-expand');
const modal = document.getElementById('modal');
const panel = document.getElementById('panel');
let isExpand = false;

if (btnState) {
    btnState.addEventListener('click', () => {
        btnState.innerHTML = isExpand ? 'See All' : 'Collapse';
        isExpand = !isExpand;
    });
}

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
