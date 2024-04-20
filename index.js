const container = document.querySelector('.container');

// Function to create the initial grid
function createGrid(size) {
    // Clear existing grid
    container.innerHTML = '';

    // Calculate width of each square based on total width and grid size
    const squareSize = 960 / size;

    // Create new grid
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
        container.appendChild(square);
    }

    addHoverEffect(); // Add hover effect to new squares
}

// Function to add hover effect
function addHoverEffect() {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'lightgray';
        });

        square.addEventListener('mouseleave', () => {
            square.style.backgroundColor = '';
        });
    });
}

// Function to handle button click event
function handleResetButtonClick() {
    const gridSize = prompt("Enter the number of squares per side for the new grid (maximum 100):");
    if (gridSize === null || gridSize === '') return; // Exit if user cancels or enters nothing
    const parsedSize = parseInt(gridSize);
    if (isNaN(parsedSize) || parsedSize <= 0 || parsedSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    createGrid(parsedSize); // Generate new grid with user input size
}

// Add event listener to the reset button
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', handleResetButtonClick);

// Initial grid generation (16x16 grid)
createGrid(16);
