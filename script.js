let score = 0;
let pointsPerClick = 1;
let upgradeCost = 10;

const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');
const pointsDisplay = document.getElementById('pointsPerClick');

clickButton.addEventListener('click', () => {
    score += pointsPerClick;
    scoreDisplay.textContent = score;
    checkUpgradeAvailability();
});

upgradeButton.addEventListener('click', () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        pointsPerClick++;
        upgradeCost *= 2; // Increase cost for next upgrade
        scoreDisplay.textContent = score;
        pointsDisplay.textContent = pointsPerClick;
        upgradeButton.textContent = `Upgrade (Cost: ${upgradeCost})`;
        checkUpgradeAvailability();
    }
});

function checkUpgradeAvailability() {
    upgradeButton.disabled = score < upgradeCost;
}

checkUpgradeAvailability(); // Initial check when the game loads
