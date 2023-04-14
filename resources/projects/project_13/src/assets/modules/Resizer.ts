import * as THREE from "three";

export class Resizer {
  constructor(
    private _renderer: THREE.WebGLRenderer,
    private _camera: THREE.PerspectiveCamera
  ) {
    this.onResize();
    window.addEventListener("resize", () => {
      this.onResize();
    });
  }

  private onResize(): void {
    // サイズを取得
    const width = window.innerWidth;
    const height = window.innerHeight;

    // レンダラーのサイズを調整する
    this._renderer.setPixelRatio(window.devicePixelRatio);
    this._renderer.setSize(width, height);

    // カメラのアスペクト比を正す
    this._camera.aspect = width / height;
    this._camera.updateProjectionMatrix();
  }
}
