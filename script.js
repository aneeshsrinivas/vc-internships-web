document.addEventListener('DOMContentLoaded', function() {
    // Skill Shader
    const skillInput = document.getElementById('skill-input');
    const matchButton = document.getElementById('match-button');
    const cards = document.querySelectorAll('.card');
    
    matchButton.addEventListener('click', function() {
        const skills = skillInput.value.toLowerCase().split(/[,\s]+/);
        
        cards.forEach(card => {
            const cardSkills = card.dataset.skills.split(',');
            let matchCount = 0;
            
            cardSkills.forEach(cardSkill => {
                if (skills.includes(cardSkill)) matchCount++;
            });
            
            const matchPercentage = matchCount / cardSkills.length;
            const matchMeter = card.querySelector('.match-meter');
            
            matchMeter.style.opacity = '1';
            matchMeter.style.width = `${matchPercentage * 100}%`;
            matchMeter.style.backgroundColor = 
                matchPercentage > 0.66 ? 'var(--match-high)' :
                matchPercentage > 0.33 ? 'var(--match-med)' : 'var(--match-low)';
        });
    });
    
    // Commitment Calculator
    const hoursSlider = document.getElementById('hours-slider');
    const hoursValue = document.getElementById('hours-value');
    
    if (hoursSlider && hoursValue) {
        hoursSlider.addEventListener('input', function() {
            hoursValue.textContent = this.value;
            updateFeasibility();
        });
    }
    
    function updateFeasibility() {
        const hours = parseInt(hoursSlider.value);
        
        cards.forEach(card => {
            const cardHours = parseInt(card.dataset.hours);
            const badge = card.querySelector('.feasibility-badge');
            
            if (hours >= cardHours * 0.8) {
                badge.textContent = 'Fits schedule';
                badge.style.backgroundColor = 'var(--feasible)';
            } else if (hours >= cardHours * 0.5) {
                badge.textContent = 'Tight schedule';
                badge.style.backgroundColor = 'var(--match-med)';
            } else {
                badge.textContent = 'Schedule conflict';
                badge.style.backgroundColor = 'var(--unfeasible)';
            }
            
            badge.style.opacity = '1';
            badge.style.transform = 'translateY(0)';
        });
    }
    
    // Plain Language Toggle
    const plainLanguageBtn = document.getElementById('plain-language');
    
    if (plainLanguageBtn) {
        plainLanguageBtn.addEventListener('click', function() {
            const isPressed = this.getAttribute('aria-pressed') === 'true';
            this.setAttribute('aria-pressed', !isPressed);
        });
    }
    
    // Compare Feature
    const startDiffButton = document.getElementById('start-diff');
    const diffResult = document.getElementById('diff-result');
    let compareMode = false;
    let selectedCards = [];
    
    if (startDiffButton && diffResult) {
        startDiffButton.addEventListener('click', function() {
            compareMode = !compareMode;
            document.body.classList.toggle('compare-mode', compareMode);
            
            if (compareMode) {
                diffResult.textContent = 'Select two programs to compare';
                diffResult.style.display = 'block';
                startDiffButton.classList.add('active');
            } else {
                diffResult.style.display = 'none';
                startDiffButton.classList.remove('active');
                resetSelectedCards();
            }
        });
    }
    
    function resetSelectedCards() {
        selectedCards.forEach(card => {
            card.classList.remove('selected');
        });
        selectedCards = [];
    }
    
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!compareMode || e.target.closest('.card__button, .bookmark-btn, .compare-btn')) return;
            
            if (selectedCards.includes(card)) {
                // Deselect if already selected
                card.classList.remove('selected');
                selectedCards = selectedCards.filter(c => c !== card);
            } else if (selectedCards.length < 2) {
                // Select if less than 2 selected
                card.classList.add('selected');
                selectedCards.push(card);
            }
            
            // Update UI based on selection
            updateCompareUI();
        });
    });
    
    function updateCompareUI() {
        if (selectedCards.length === 2) {
            diffResult.textContent = `Comparing ${selectedCards[0].querySelector('.card__title').textContent} and ${selectedCards[1].querySelector('.card__title').textContent}`;
            
            setTimeout(() => {
                alert('Comparison feature would show detailed differences here');
                resetSelectedCards();
                document.body.classList.remove('compare-mode');
                diffResult.style.display = 'none';
                startDiffButton.classList.remove('active');
            }, 1000);
        } else if (selectedCards.length === 1) {
            diffResult.textContent = 'Select one more program to compare';
        } else {
            diffResult.textContent = 'Select two programs to compare';
        }
    }
    
    // Availability Tetris
    const availabilityGrid = document.querySelector('.availability-grid');
    if (availabilityGrid) {
        for (let i = 0; i < 7 * 12; i++) {
            const cell = document.createElement('div');
            cell.tabIndex = 0;
            cell.addEventListener('click', () => {
                cell.dataset.on = cell.dataset.on === '1' ? '0' : '1';
                updateAvailability();
            });
            availabilityGrid.appendChild(cell);
        }
    }
    
    function updateAvailability() {
        const selectedCells = document.querySelectorAll('.availability-grid div[data-on="1"]');
        const totalHours = selectedCells.length * 0.5;
        
        cards.forEach(card => {
            const cardHours = parseInt(card.dataset.hours);
            const badge = card.querySelector('.feasibility-badge');
            
            if (totalHours >= cardHours * 0.8) {
                badge.textContent = 'Fits schedule';
                badge.style.backgroundColor = 'var(--feasible)';
            } else if (totalHours >= cardHours * 0.5) {
                badge.textContent = 'Tight schedule';
                badge.style.backgroundColor = 'var(--match-med)';
            } else {
                badge.textContent = 'Schedule conflict';
                badge.style.backgroundColor = 'var(--unfeasible)';
            }
            
            badge.style.opacity = '1';
            badge.style.transform = 'translateY(0)';
        });
    }
    
    // Responsive adjustments
    function handleResponsive() {
        const isMobile = window.innerWidth < 768;
        
        cards.forEach(card => {
            const metaItems = card.querySelectorAll('.card__meta-item');
            
            if (isMobile) {
                metaItems.forEach(item => {
                    item.style.flexDirection = 'column';
                    item.style.gap = '0.25rem';
                });
            } else {
                metaItems.forEach(item => {
                    item.style.flexDirection = 'row';
                    item.style.gap = '';
                });
            }
        });
    }
    
    window.addEventListener('resize', handleResponsive);
    handleResponsive();
});