document.addEventListener("DOMContentLoaded", function () {
    // Get the display element
    const display = document.getElementById("display");

    // Get all buttons
    const buttons = document.querySelectorAll(".calculator button");

    // Add click event listener to each button
    buttons.forEach(button => {
        button.addEventListener("click", handleButtonClick);
    });

    // Function to handle button clicks
    function handleButtonClick(event) {
        const buttonText = event.target.innerText;

        switch (buttonText) {
            case 'AC':
                display.value = '';
                break;
            case 'DEL':
                display.value = display.value.slice(0, -1);
                break;
            case '=':
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
                break;
            default:
                display.value += buttonText;
        }
    }
});