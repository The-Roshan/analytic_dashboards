// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true }); // Set alpha to true for transparency
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Function to create a simple tree
function createTree() {
    const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.5, 2, 8);
    const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 }); // Brown
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    
    const foliageGeometry = new THREE.ConeGeometry(1, 3, 8);
    const foliageMaterial = new THREE.MeshStandardMaterial({ color: 0x228B22 }); // Forest Green
    const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial);
    
    foliage.position.y = 2; // Position foliage above the trunk
    const tree = new THREE.Group();
    tree.add(trunk);
    tree.add(foliage);

    return tree;
}

// Create multiple trees and position them randomly
const trees = [];
for (let i = 0; i < 20; i++) {
    const tree = createTree();
    tree.position.x = Math.random() * 30 - 15; // Random x position
    tree.position.z = Math.random() * 30 - 15; // Random z position
    tree.position.y = 0; // Ground level
    trees.push(tree);
    scene.add(tree);
}

// Lighting
const light = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Set the camera position
camera.position.z = 10;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the trees for a subtle animation effect
    trees.forEach(tree => {
        tree.rotation.y += 0.01; // Rotate trees slowly
    });

    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start the animation
animate();
