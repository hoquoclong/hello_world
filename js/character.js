/**
 * 🤡 NONSENSE 3000™ - ANIME CHARACTER 3D 🤡
 * "A beautiful masterpiece of polygons and existential dread"
 */

class AnimeCharacter {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.group = null;
        this.danceMode = false;
        this.time = 0;
        
        // Physics for wobbly bits
        this.physics = {
            head: { velocity: 0, spring: 0.1, damping: 0.8 },
            leftArm: { angle: Math.PI / 4, velocity: 0, spring: 0.05, damping: 0.85 },
            rightArm: { angle: -Math.PI / 4, velocity: 0, spring: 0.05, damping: 0.85 },
            leftLeg: { angle: 0, velocity: 0, spring: 0.03, damping: 0.9 },
            rightLeg: { angle: 0, velocity: 0, spring: 0.03, damping: 0.9 },
            bodySway: 0
        };
        
        this.init();
    }
    
    init() {
        // Scene setup
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            75, 
            this.container.offsetWidth / 400, 
            0.1, 
            1000
        );
        
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(this.container.offsetWidth, 400);
        this.container.appendChild(this.renderer.domElement);
        
        this.group = new THREE.Group();
        
        // Build the character
        this.buildHead();
        this.buildBody();
        this.buildLimbs();
        this.buildHair();
        
        // Add lights because darkness is scary
        this.addLights();
        
        // Position camera
        this.camera.position.z = 6;
        this.camera.position.y = 1;
        
        // Add to scene
        this.scene.add(this.group);
        
        // Start animation loop
        this.animate();
    }
    
    buildHead() {
        // BIG ANIME HEAD (exaggerated because anime logic)
        const headGeometry = new THREE.SphereGeometry(1.3, 32, 32);
        const headMaterial = new THREE.MeshPhongMaterial({ 
            color: 0xffdbac,
            emissive: 0xffa07a,
            emissiveIntensity: 0.2,
            shininess: 50 
        });
        this.head = new THREE.Mesh(headGeometry, headMaterial);
        this.head.position.y = 2.8;
        this.head.scale.set(1, 1.1, 1);
        this.group.add(this.head);
        
        // HUGE ANIME EYES (the bigger the eyes, the deeper the soul)
        const eyeGeometry = new THREE.SphereGeometry(0.5, 32, 32);
        const eyeWhiteMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
        
        this.leftEye = new THREE.Mesh(eyeGeometry, eyeWhiteMaterial);
        this.leftEye.position.set(-0.45, 3, 1);
        this.leftEye.scale.set(1, 1.3, 0.5);
        this.group.add(this.leftEye);
        
        this.rightEye = new THREE.Mesh(eyeGeometry, eyeWhiteMaterial);
        this.rightEye.position.set(0.45, 3, 1);
        this.rightEye.scale.set(1, 1.3, 0.5);
        this.group.add(this.rightEye);
        
        // Pupils (glowing because anime)
        const pupilGeometry = new THREE.SphereGeometry(0.3, 32, 32);
        const pupilMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x00ffff,
            emissive: 0x00ffff,
            emissiveIntensity: 0.8
        });
        
        this.leftPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
        this.leftPupil.position.set(-0.45, 3, 1.2);
        this.group.add(this.leftPupil);
        
        this.rightPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
        this.rightPupil.position.set(0.45, 3, 1.2);
        this.group.add(this.rightPupil);
        
        // Eye shine (for that extra kawaii factor)
        const shineGeometry = new THREE.SphereGeometry(0.1, 16, 16);
        const shineMaterial = new THREE.MeshPhongMaterial({ 
            color: 0xffffff, 
            emissive: 0xffffff 
        });
        
        this.leftShine = new THREE.Mesh(shineGeometry, shineMaterial);
        this.leftShine.position.set(-0.3, 3.2, 1.4);
        this.group.add(this.leftShine);
        
        this.rightShine = new THREE.Mesh(shineGeometry, shineMaterial);
        this.rightShine.position.set(0.6, 3.2, 1.4);
        this.group.add(this.rightShine);
        
        // Mouth (tiny smile hiding existential pain)
        const mouthGeometry = new THREE.TorusGeometry(0.15, 0.05, 8, 16, Math.PI);
        const mouthMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
        this.mouth = new THREE.Mesh(mouthGeometry, mouthMaterial);
        this.mouth.position.set(0, 2.4, 1.1);
        this.mouth.rotation.x = Math.PI / 2;
        this.group.add(this.mouth);
    }
    
    buildBody() {
        // Slender body (anime physics apply)
        const bodyGeometry = new THREE.CylinderGeometry(0.4, 0.5, 2.2, 16);
        const bodyMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x7928ca,
            emissive: 0x7928ca,
            emissiveIntensity: 0.2
        });
        this.body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        this.body.position.y = 1.2;
        this.group.add(this.body);
    }
    
    buildLimbs() {
        const armGeometry = new THREE.CylinderGeometry(0.1, 0.12, 1.8, 12);
        const armMaterial = new THREE.MeshPhongMaterial({ color: 0xffdbac });
        
        // Tiny arms (they do nothing anyway)
        this.leftArm = new THREE.Mesh(armGeometry, armMaterial);
        this.leftArm.position.set(-0.8, 1.3, 0);
        this.leftArm.rotation.z = Math.PI / 4;
        this.group.add(this.leftArm);
        
        this.rightArm = new THREE.Mesh(armGeometry, armMaterial);
        this.rightArm.position.set(0.8, 1.3, 0);
        this.rightArm.rotation.z = -Math.PI / 4;
        this.group.add(this.rightArm);
        
        // Hands (for dramatic pointing)
        const handGeometry = new THREE.SphereGeometry(0.15, 16, 16);
        this.leftHand = new THREE.Mesh(handGeometry, armMaterial);
        this.leftHand.position.set(-1.2, 0.2, 0);
        this.group.add(this.leftHand);
        
        this.rightHand = new THREE.Mesh(handGeometry, armMaterial);
        this.rightHand.position.set(1.2, 0.2, 0);
        this.group.add(this.rightHand);
        
        // Legs (exist but rarely used)
        const legGeometry = new THREE.CylinderGeometry(0.12, 0.15, 2, 12);
        const legMaterial = new THREE.MeshPhongMaterial({ color: 0x1a1a2e });
        
        this.leftLeg = new THREE.Mesh(legGeometry, legMaterial);
        this.leftLeg.position.set(-0.25, -0.8, 0);
        this.group.add(this.leftLeg);
        
        this.rightLeg = new THREE.Mesh(legGeometry, legMaterial);
        this.rightLeg.position.set(0.25, -0.8, 0);
        this.group.add(this.rightLeg);
        
        // Feet (grounded in reality unlike my dreams)
        const footGeometry = new THREE.BoxGeometry(0.4, 0.1, 0.6);
        const footMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
        
        this.leftFoot = new THREE.Mesh(footGeometry, footMaterial);
        this.leftFoot.position.set(-0.25, -1.9, 0.1);
        this.group.add(this.leftFoot);
        
        this.rightFoot = new THREE.Mesh(footGeometry, footMaterial);
        this.rightFoot.position.set(0.25, -1.9, 0.1);
        this.group.add(this.rightFoot);
    }
    
    buildHair() {
        // ANIME HAIR (spiky and defying gravity)
        const hairColor = 0xff0080;
        this.hairStrands = [];
        
        for (let i = 0; i < 12; i++) {
            const angle = (i / 12) * Math.PI * 2;
            const hairStrand = new THREE.ConeGeometry(0.15, 1 + Math.random() * 0.5, 8);
            const hairMaterial = new THREE.MeshPhongMaterial({ 
                color: hairColor,
                emissive: hairColor,
                emissiveIntensity: 0.3
            });
            const strand = new THREE.Mesh(hairStrand, hairMaterial);
            strand.position.set(
                Math.cos(angle) * 0.9,
                3.8 + Math.random() * 0.3,
                Math.sin(angle) * 0.9
            );
            strand.rotation.set(
                Math.random() * 0.3,
                Math.random() * Math.PI,
                Math.random() * 0.5
            );
            this.group.add(strand);
            this.hairStrands.push(strand);
        }
    }
    
    addLights() {
        // Ambient light (because nothing exists in pure darkness)
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);
        
        // Directional light (main light source)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 5);
        this.scene.add(directionalLight);
        
        // Pink point light (for aesthetic vibes)
        this.pointLight = new THREE.PointLight(0xff0080, 3, 15);
        this.pointLight.position.set(0, 4, 3);
        this.scene.add(this.pointLight);
        
        // Cyan rim light (for that cinematic look)
        this.rimLight = new THREE.PointLight(0x00ffff, 2, 10);
        this.rimLight.position.set(-3, 3, -2);
        this.scene.add(this.rimLight);
    }
    
    toggleDance() {
        this.danceMode = !this.danceMode;
        return this.danceMode;
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        this.time += 0.01;
        
        if (this.danceMode) {
            // DANCE MODE ACTIVATED! Chaos ensues!
            this.physics.head.velocity += (Math.sin(this.time * 5) * 0.5 - this.head.position.y + 2.8) * this.physics.head.spring;
            this.physics.head.velocity *= this.physics.head.damping;
            this.head.position.y += this.physics.head.velocity;
            
            this.physics.leftArm.velocity += (Math.sin(this.time * 7) * 1.5 - this.leftArm.rotation.z) * this.physics.leftArm.spring;
            this.physics.leftArm.velocity *= this.physics.leftArm.damping;
            this.leftArm.rotation.z += this.physics.leftArm.velocity;
            
            this.physics.rightArm.velocity += (Math.sin(this.time * 7 + 1) * 1.5 - this.rightArm.rotation.z) * this.physics.rightArm.spring;
            this.physics.rightArm.velocity *= this.physics.rightArm.damping;
            this.rightArm.rotation.z += this.physics.rightArm.velocity;
            
            this.physics.leftLeg.velocity += (Math.sin(this.time * 6) * 0.8 - this.leftLeg.rotation.x) * this.physics.leftLeg.spring;
            this.physics.leftLeg.velocity *= this.physics.leftLeg.damping;
            this.leftLeg.rotation.x += this.physics.leftLeg.velocity;
            
            this.physics.rightLeg.velocity += (Math.sin(this.time * 6 + 1.5) * 0.8 - this.rightLeg.rotation.x) * this.physics.rightLeg.spring;
            this.physics.rightLeg.velocity *= this.physics.rightLeg.damping;
            this.rightLeg.rotation.x += this.physics.rightLeg.velocity;
            
            this.physics.bodySway = Math.sin(this.time * 3) * 0.3;
            this.group.rotation.y = this.physics.bodySway;
            
            // Eyes wandering around
            this.leftPupil.position.x = -0.45 + Math.sin(this.time * 2) * 0.1;
            this.rightPupil.position.x = 0.45 + Math.sin(this.time * 2) * 0.1;
            
            // Hair dancing too (why not?)
            this.hairStrands.forEach(strand => {
                strand.rotation.z = Math.sin(this.time * 5 + strand.position.x * 10) * 0.3;
            });
            
            // Lights going wild
            this.pointLight.intensity = 3 + Math.sin(this.time * 10);
            this.rimLight.intensity = 2 + Math.cos(this.time * 8);
        } else {
            // Normal idle animation (boring but stable)
            this.group.rotation.y += 0.003;
            this.head.position.y = 2.8 + Math.sin(this.time) * 0.1;
            this.leftArm.rotation.z = Math.PI / 4 + Math.sin(this.time * 0.5) * 0.1;
            this.rightArm.rotation.z = -Math.PI / 4 + Math.sin(this.time * 0.5 + 1) * 0.1;
            this.leftLeg.rotation.x = Math.sin(this.time * 0.3) * 0.05;
            this.rightLeg.rotation.x = Math.sin(this.time * 0.3 + 1) * 0.05;
        }
        
        this.renderer.render(this.scene, this.camera);
    }
    
    resize() {
        this.camera.aspect = this.container.offsetWidth / 400;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.offsetWidth, 400);
    }
}

// Export for global use
window.AnimeCharacter = AnimeCharacter;
