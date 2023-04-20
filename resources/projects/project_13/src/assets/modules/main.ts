import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { Resizer } from "./Resizer";
import { setGui } from "./Gui";
import roomAreaMtl from "../roomArea/roomArea.mtl?url";
import roomAreaJpg from "../roomArea/roomArea.jpg";
import roomAreaObj from "../roomArea/roomArea.obj?url";
import { Mp3Player } from "./Button";

class App {
  private canvas: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private light: THREE.PointLight;
  private renderer: THREE.WebGLRenderer;
  // private axis: THREE.AxesHelper;
  private controls: OrbitControls;
  private resizer: Resizer;
  // private gui: void;
  private amplitude = 0.3; // 上下の揺れ度合い
  private initPosition = {
    x: -3,
    y: 9,
    z: -5,
  };
  private easing = 0.002;

  constructor() {
    this.canvas = document.getElementById("canvas") as HTMLElement;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);

    // camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(
      this.initPosition.x,
      this.initPosition.y,
      this.initPosition.z
    );
    this.camera.lookAt(0, 0, 0); // カメラの初期視点

    // light
    this.light = new THREE.PointLight(0xffffff, 1.5, 150, 1.0);
    this.light.position.x = -3;
    this.light.position.y = 10;
    this.light.position.z = 0;
    this.scene.add(this.light);

    // axis
    // this.axis = new THREE.AxesHelper(100);
    // this.scene.add(this.axis);

    // renderer
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
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
    // this.gui = setGui(
    //   this.camera,
    //   this.camera.position.x,
    //   this.camera.position.y,
    //   this.camera.position.z,
    //   this.light,
    //   this.light.position.x,
    //   this.light.position.y,
    //   this.light.position.z
    // );
  }

  private loadObjMtl(): void {
    const mtlLoader = new MTLLoader();
    mtlLoader.load(roomAreaMtl, (materials) => {
      materials.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);

      objLoader.load(roomAreaObj, (object) => {
        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material.map = new THREE.TextureLoader().load(roomAreaJpg);
          }
        });

        object.scale.set(5, 5, 5);

        this.scene.add(object);
      });
    });
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());
    // カメラコントローラーを更新
    this.controls.update();

    // カメラの上下遷移
    this.camera.position.y =
      Math.sin(Date.now() * this.easing) * this.amplitude + this.initPosition.y;

    this.renderer.render(this.scene, this.camera);
  }
}

new App();
new Mp3Player();
