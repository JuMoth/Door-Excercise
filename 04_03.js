(function() {
    const stageElem = document.querySelector('.stage');
    // 현재 활성화된 아이템을 저장하고 있는 변수
    let currentItem;

    // 활성화
    function activate(elem) {
        elem.classList.add('door-opened');
        currentItem = elem;
    }

    // 비활성화
    function inactivate(elem) {
        elem.classList.remove('door-opened');
    }

    const doorHandler = (e) => {
        const targetElem = e.target;

        if(currentItem) {
            inactivate(currentItem);
        }

        if(targetElem.classList.contains('door-body')){ 
            activate(targetElem.parentNode);
        }
    }

    stageElem.addEventListener('click', doorHandler);
})();