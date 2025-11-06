
let UntilIReachTheEnd = {
    title: 'Until I Reach The End', 
    imageSource: "/images/UntilIReachTheEnd_logo.png", 
    role: 'Programmer, game logic, and overall design.', 
    date: 'Aug/19/2023~Sept/9/2023', 
    short_description: 'This is a project that I did with my highscool friend for a contest in Hanyang University, South Korea',
    download_path: '/project_files/UntilIReachtheEnd.zip',
    explanations: [["The idea was inspired by a mole’s dream to reach Earth’s inner core, representing persistence toward a goal. The gameplay centers on descending downward continuously until reaching the final depth. The story aimed to express passion and ambition through gameplay rather than dialogue.", "/images/UntilIReachTheEnd_Rock.png"], 
        ['We organized the code into four main Python classes: Button Class handles buttons’ positions, images, and size. Detects clicks and returns true when pressed.', null], 
        ["Object / Background Class manages scrolling backgrounds. Uses y1 and y2 to create an infinite scrolling illusion. Moves the background vertically based on speed and direction. ", null],
        ["Random Generator Class creates obstacles (rocks, lava). Randomizes x-coordinates and moves objects continuously. Resets positions when they go offscreen.", null], 
        ["Player Class handles the mole (main character). Takes x/y coordinates and image. Uses W, A, S, D keys for movement. Prevents the player from going offscreen. Continuously updates position within a while loop.", "/images/UntilIReachTheEnd_ground.png"]],
}

export default UntilIReachTheEnd