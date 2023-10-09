document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const button = document.getElementById('color-button');
    
    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Function to change the background color
    function changeBackgroundColor() {
        const newColor = getRandomColor();
        body.style.backgroundColor = newColor;
    }

    // Add click event listener to the button
    button.addEventListener('click', changeBackgroundColor);

     // Add fade-in animation to the profile section after a delay
     setTimeout(function () {
        const profile = document.querySelector('.profile');
        profile.classList.add('fade-in');
    }, 1000); // Adjust the delay as needed
});
