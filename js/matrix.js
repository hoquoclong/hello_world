/**
 * 🤡 NONSENSE 3000™ - MATRIX RAIN EFFECT 🤡
 * "Falling characters like my will to live on Monday morning"
 */

class MatrixRain {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.chars = 'アニメキャラクターンセンス010101🤡💀🎭';
        this.fontSize = 14;
        this.columns = 0;
        this.drops = [];
        
        this.init();
    }
    
    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = Array(Math.floor(this.columns)).fill(1);
    }
    
    draw() {
        // Semi-transparent black to create trail effect
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Green text because hacker movie
        this.ctx.fillStyle = '#0f0';
        this.ctx.font = this.fontSize + 'px monospace';
        
        for (let i = 0; i < this.drops.length; i++) {
            const text = this.chars[Math.floor(Math.random() * this.chars.length)];
            this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
            
            // Reset drop randomly when it reaches bottom
            if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            this.drops[i]++;
        }
    }
    
    start(interval = 50) {
        setInterval(() => this.draw(), interval);
    }
    
    resize() {
        this.init();
    }
}

// Export for global use (because we're fancy like that)
window.MatrixRain = MatrixRain;
