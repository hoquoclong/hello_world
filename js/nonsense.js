/**
 * 🤡 NONSENSE 3000™ - MAIN CONTROLLER OF CHAOS 🤡
 * "Orchestrating nothingness since 2024"
 */

class NonsenseController {
    constructor() {
        this.clickCount = 0;
        this.seconds = 0;
        this.character = null;
        this.matrix = null;
        
        // Profound quotes that mean absolutely nothing
        this.quotes = [
            "🤪 Be the chaos you want to see in the world!",
            "🌮 Taco Tuesday is every day in my heart!",
            "🎈 I'm not weird, I'm limited edition!",
            "📱 My battery is low and it's getting dark... just kidding!",
            "🐱 If cats could code, they'd write infinite loops!",
            "🌙 The moon is just the sun's night shift!",
            "🎵 Life is like a box of chocolates, but I'm allergic!",
            "☕ This coffee is brewing since 1995!",
            "🚀 Houston, we have a problem... just kidding, we're fine!",
            "🎭 Acting like I know what I'm doing since 2024!",
            "🤖 I'm not a robot, I'm a toaster with WiFi!",
            "💾 Saving memories to a floppy disk since birth!",
            "🦄 Unicorns are just horses with a marketing team!",
            "🍕 Pineapple on pizza? Yes. No. Maybe. Schrödinger's pizza!",
            "⏰ Time is an illusion created by people who own clocks!",
            "🎲 Random number: 7. Chosen by a dice roll in another dimension!"
        ];
        
        this.emojis = ['🎈', '🌈', '🦄', '🎪', '🎭', '🎨', '🎯', '🎲', '🧸', '🤡', '💀', '🎃', '✨', '🌟', '💫'];
        
        this.init();
    }
    
    init() {
        console.log("🤡 Initializing NONSENSE 3000™...");
        console.log("⚠️ Warning: May contain traces of nonsense!");
        
        // Initialize Matrix rain
        this.matrix = new MatrixRain('matrix');
        this.matrix.start();
        
        // Initialize 3D character
        this.character = new AnimeCharacter('character-container');
        
        // Start the clock of doom
        this.startClock();
        
        // Auto-spawn emojis every minute (because why not?)
        setInterval(() => this.spawnEmoji(), 60000);
        
        // Add event listeners
        window.addEventListener('resize', () => this.handleResize());
        
        console.log("✅ NONSENSE 3000™ ready to do nothing!");
    }
    
    handleResize() {
        this.matrix.resize();
        this.character.resize();
    }
    
    // Generate profound nonsense
    changeQuote() {
        const quoteElement = document.getElementById('quote');
        const randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        quoteElement.innerHTML = randomQuote;
        this.incrementClicks();
    }
    
    // Spawn chaotic emojis
    spawnEmoji(count = 10) {
        for (let i = 0; i < count; i++) {
            const emoji = document.createElement('div');
            emoji.className = 'floating-emoji';
            emoji.style.left = Math.random() * window.innerWidth + 'px';
            emoji.style.animationDelay = Math.random() * 5 + 's';
            emoji.textContent = this.emojis[Math.floor(Math.random() * this.emojis.length)];
            document.body.appendChild(emoji);
            
            // Clean up after the party
            setTimeout(() => emoji.remove(), 8000);
        }
    }
    
    // Toggle dance mode (chaos level: MAXIMUM)
    toggleDance() {
        const isDancing = this.character.toggleDance();
        console.log(isDancing ? "💃 DANCE MODE ACTIVATED!" : "😴 Dance mode deactivated");
        return isDancing;
    }
    
    // Show the prize modal (prize: nothing!)
    showModal() {
        document.getElementById('modal').classList.add('show');
    }
    
    closeModal() {
        document.getElementById('modal').classList.remove('show');
    }
    
    // Progress bar that does nothing
    startProgress() {
        const progress = document.getElementById('progress');
        progress.style.width = '0%';
        setTimeout(() => progress.style.width = '100%', 10);
        setTimeout(() => progress.style.width = '0%', 3000);
    }
    
    // Track wasted time
    startClock() {
        setInterval(() => {
            this.seconds++;
            const hours = Math.floor(this.seconds / 3600);
            const mins = Math.floor((this.seconds % 3600) / 60);
            const secs = this.seconds % 60;
            
            const clockElement = document.getElementById('clock');
            if (clockElement) {
                clockElement.innerHTML = 
                    String(hours).padStart(2, '0') + ':' + 
                    String(mins).padStart(2, '0') + ':' + 
                    String(secs).padStart(2, '0');
            }
            
            const stat2Element = document.getElementById('stat2');
            if (stat2Element) {
                stat2Element.innerHTML = this.seconds;
            }
        }, 1000);
    }
    
    // Increment useless clicks
    incrementClicks() {
        this.clickCount++;
        const stat1Element = document.getElementById('stat1');
        if (stat1Element) {
            stat1Element.innerHTML = this.clickCount;
        }
    }
    
    // NEW: EXTREME CHAOS MODE
    activateChaosMode() {
        console.log("🌪️ ACTIVATING CHAOS MODE! ABANDON ALL HOPE!");
        
        // Make everything spin
        document.querySelectorAll('.card').forEach((card, index) => {
            card.style.animation = `spin ${0.5 + index * 0.1}s linear infinite`;
        });
        
        // Spawn EMOJI STORM
        let stormCount = 0;
        const stormInterval = setInterval(() => {
            this.spawnEmoji(20);
            stormCount++;
            if (stormCount >= 10) {
                clearInterval(stormInterval);
                console.log("🌪️ Chaos mode ended. Reality restored.");
            }
        }, 500);
        
        // Change background colors rapidly
        document.body.classList.add('disco-mode');
        setTimeout(() => {
            document.body.classList.remove('disco-mode');
        }, 5000);
    }
    
    // NEW: RANDOMIZE EVERYTHING
    randomizeAll() {
        console.log("🎲 Randomizing all the things!");
        
        // Random background color
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.querySelector('.glass-card').style.background = randomColor + '20';
        
        // Random text rotation
        document.querySelectorAll('h1, h2, h3').forEach(el => {
            el.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
        });
        
        // Spawn some emojis
        this.spawnEmoji(15);
    }
    
    // NEW: ACHIEVEMENT SYSTEM (achievements that mean nothing)
    unlockAchievement(name) {
        const achievements = [
            "🏆 Professional Nothing Doer",
            "🎯 Master of Procrastination",
            "⏰ Time Waster Extraordinaire",
            "🤡 Certified Clown",
            "💎 Diamond Tier Boredom",
            "🌟 Supreme Being of Doing Nothing"
        ];
        
        const randomAchievement = achievements[Math.floor(Math.random() * achievements.length)];
        alert(`🎉 ACHIEVEMENT UNLOCKED! 🎉\n\n${randomAchievement}\n\nReward: Absolutely nothing!`);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.nonsenseController = new NonsenseController();
    console.log("🎪 Welcome to NONSENSE 3000™ - Where nothing makes sense and that's okay!");
});
