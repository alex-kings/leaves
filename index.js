const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Light
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.z = 4
directionalLight.position.x = 2
scene.add( directionalLight );
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );


// Create a triangle
const geometry = new THREE.BufferGeometry();
const vertices =  [
	-1,-1.7, 0,
     1,-1.7, 0,
     1, 1.7, 0,
    -1, 1.7, 0
];
let a = 1
const uvs = [
    0,0,
    1,0,
    1,1,
    0,1
];
geometry.setAttribute( 'position', new THREE.BufferAttribute( new Float32Array(vertices), 3 ) );
geometry.setAttribute('uv', new THREE.BufferAttribute( new Float32Array(uvs), 2))
geometry.setIndex([ 0, 1, 2, 2, 3, 0 ]);
geometry.computeVertexNormals()

// Load leaf texture
const leafTexture = new THREE.TextureLoader().load( 'textures/leaf2.png' );
const leafMaterial = new THREE.MeshStandardMaterial( { side: THREE.DoubleSide, map: leafTexture, alphaTest:0.5 } );
const leaf = new THREE.Mesh( geometry, leafMaterial );
scene.add(leaf)
leaf.position.z = -5

let clock = new THREE.Clock();
let t = 0;

function animate() {
	requestAnimationFrame( animate );
    let delta = clock.getDelta();
    t += delta
    leaf.rotation.y += 0.007
    leaf.rotation.x += 0.004
    leaf.position.x = 2*Math.cos(t)
    leaf.position.y = 2*Math.sin(t)

    
    
	renderer.render( scene, camera );
}
animate();