const btnAcceptedArray = document.querySelectorAll('button.confirm');
const btnDeleteArray = document.querySelectorAll('button.delete');

btnAcceptedArray.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // full box
        console.log(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.insertAdjacentHTML(
            'afterend',
            `
                <h1 class="font-semibold text-slate-600 text-lg text-center">Accepted!</h1>    
            `,
        );
        e.target.parentElement.parentElement.children[0].remove();
        e.target.parentElement.parentElement.children[0].remove();
        e.target.parentElement.parentElement.children[0].remove();
    });
});

btnDeleteArray.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // full box
        console.log(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.insertAdjacentHTML(
            'afterend',
            `
                <h1 class="font-semibold text-slate-600 text-lg text-center">Denied!</h1>    
            `,
        );
        e.target.parentElement.parentElement.children[0].remove();
        e.target.parentElement.parentElement.children[0].remove();
        e.target.parentElement.parentElement.children[0].remove();
    });
});