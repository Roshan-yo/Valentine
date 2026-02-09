const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const proposalSection = document.getElementById('proposal-section');
const successSection = document.getElementById('success-section');

// Function to move the "No" button
noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// Function for the "Yes" button
yesButton.addEventListener('click', () => {
    proposalSection.style.display = 'none';
    successSection.style.display = 'block';
});
