// home-score-display-el, guest-score-display-el
let homeScoreDisplay = document.getElementById("home-score-display-el");
let guestScoreDisplay = document.getElementById("guest-score-display-el");

let restartEl = document.getElementById("restart");

// home-one-point-btn, home-two-point-btn, home-three-point-btn
let homeOnePointBtn = document.getElementById("home-one-point-btn");
let homeTwoPointBtn = document.getElementById("home-two-point-btn");
let homeThreePointBtn = document.getElementById("home-three-point-btn");


// guest-one-point-btn, guest-two-point-btn, guest-three-point-btn
let guestOnePointBtn = document.getElementById("guest-one-point-btn");
let guestTwoPointBtn = document.getElementById("guest-two-point-btn");
let guestThreePointBtn = document.getElementById("guest-three-point-btn");

// scores
let homeTeamScore = 0;
let guestTeamScore = 0;

const restart = () => {
    homeTeamScore = 0;
    guestTeamScore = 0;

    guestScoreDisplay.textContent = guestTeamScore;
    homeScoreDisplay.textContent = homeTeamScore;
    homeScoreDisplay.style.border = "none";
    guestScoreDisplay.style.border = "none";
}

const setLead = () => {
    if(homeTeamScore > guestTeamScore ){
        homeScoreDisplay.style.border = "solid 1px #ff8a8a";
        guestScoreDisplay.style.border = "none";
    } else if (homeTeamScore < guestTeamScore) {
        guestScoreDisplay.style.border = "solid 1px #ff8a8a";
        homeScoreDisplay.style.border = "none";
    } else {
        homeScoreDisplay.style.border = "none";
        guestScoreDisplay.style.border = "none";
    }
}


// adding functions to home Team 
const addOnePointToHomeTeam = () => {
    homeTeamScore += 1;
    homeScoreDisplay.textContent = homeTeamScore
    setLead();
}

const addTwoPointToHomeTeam = () => {
    homeTeamScore += 2;
    homeScoreDisplay.textContent = homeTeamScore
    setLead();
}

const addThreePointToHomeTeam = () => {
    homeTeamScore += 3;
    homeScoreDisplay.textContent = homeTeamScore;
    setLead();
}

// adding functions to guest team

const addOnePointToGuestTeam = () => {
    guestTeamScore += 1;
    guestScoreDisplay.textContent = guestTeamScore;
    setLead();
}

const addTwoPointToGuestTeam = () => {
    guestTeamScore += 2;
    guestScoreDisplay.textContent = guestTeamScore;
    setLead();
}

const addThreePointToGuestTeam = () => {
    guestTeamScore += 3;
    guestScoreDisplay.textContent = guestTeamScore;
    setLead();
}