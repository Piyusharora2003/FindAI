// Desc: prevent the function from being called too often (eg: search bar input field), only after delay period
// args: function which should be called, delay period
// return: function which to be called / No action in before delay period)

function debounce(func, delay) {
    let timerId;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timerId);
        timerId = setTimeout(function () {
            func.apply(context, args);
        }, delay);
    };
}

module.exports = debounce;