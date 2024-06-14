(function() {
    const stageElem = document.querySelector('.stage');
    // 현재 활성화된 아이템을 저장하고 있는 변수
    let currentItem;

    const doorHandler = (e) => {
        const targetElem = e.target;

        if(currentItem) {
            currentItem.classList.remove('door-opened');
        }

        if(targetElem.classList.contains('door-body')){
            targetElem.parentNode.classList.add('door-opened');
            currentItem = targetElem.parentNode;
        }
    }

    stageElem.addEventListener('click', doorHandler);
})();