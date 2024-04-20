document.addEventListener('DOMContentLoaded', function() {
           
    const input = document.querySelector('#color');
    const hello = document.querySelector("#hello");

    document.addEventListener('submit', function(event) {
        event.preventDefault();
        const color = input.value;
        hello.style.color = color;
        input.value = '';
    });
});