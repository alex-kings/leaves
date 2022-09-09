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
	-1, -1,  0,
	 1, -1,  0,
     0,  1,  0,
];
let a = 1
const uvs = [
    0.0,0.0,
    a  ,0.0,
    a  ,a  ,
    0.0,a
];
geometry.setAttribute( 'position', new THREE.BufferAttribute( new Float32Array(vertices), 3 ) );
geometry.setAttribute('uv', new THREE.BufferAttribute( new Float32Array(uvs), 2))
geometry.computeVertexNormals()

// Load leaf texture
const leafTexture = new THREE.TextureLoader().load( 'textures/leaf2.png' );
const leafMaterial = new THREE.MeshStandardMaterial( { map: leafTexture } );
const leaf = new THREE.Mesh( geometry, leafMaterial );
scene.add(leaf)
leaf.position.z = -5

const g = new THREE.BoxGeometry( 1, 1, 1 );
const m = new THREE.MeshStandardMaterial( {color: 0x00ff00} );
const cube = new THREE.Mesh( g, m );
scene.add( cube );
cube.position.z = -6
cube.position.x = 1





function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();