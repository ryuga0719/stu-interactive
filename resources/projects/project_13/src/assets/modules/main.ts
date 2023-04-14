import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { Resizer } from "./Resizer";
import { setGui } from "./Gui";

class App {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private light: THREE.PointLight;
  private renderer: THREE.WebGLRenderer;
  private axis: THREE.AxesHelper;
  private controls: OrbitControls;
  private resizer: Resizer;
  private gui: void;

  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);

    // camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.x = -0.5;
    this.camera.position.y = 2;
    this.camera.position.z = -1.3;

    // light
    this.light = new THREE.PointLight(0xffffff, 1.5, 100, 1.0);
    this.light.position.x = 0;
    this.light.position.y = 2;
    this.light.position.z = 0;
    this.scene.add(this.light);

    // axis
    this.axis = new THREE.AxesHelper(100);
    this.scene.add(this.axis);

    // renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    // OrbitControls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.2;

    // Resizer
    this.resizer = new Resizer(this.renderer, this.camera);

    // Loading Mtl
    this.loadObjMtl();

    this.animate();

    // Gui
    this.gui = setGui(
      this.camera,
      this.camera.position.x,
      this.camera.position.y,
      this.camera.position.z,
      this.light,
      this.light.position.x,
      this.light.position.y,
      this.light.position.z
    );
  }

  private loadObjMtl(): void {
    const mtlLoader = new MTLLoader();
    mtlLoader.load("src/assets/roomArea/roomArea.mtl", (materials) => {
      materials.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);

      objLoader.load("src/assets/roomArea/roomArea.obj", (object) => {
        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material.map = new THREE.TextureLoader().load(
              "src/assets/roomArea/roomArea.jpg"
            );
          }
        });

        this.scene.add(object);
      });
    });
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());
    // カメラコントローラーを更新
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}

new App();
