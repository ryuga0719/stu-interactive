import { GUI } from "lil-gui";

export const setGui = (
  camera: THREE.PerspectiveCamera,
  _x: number,
  _y: number,
  _z: number,
  light: THREE.PointLight,
  _lx: number,
  _ly: number,
  _lz: number
): void => {
  const gui = new GUI();

  const params = {
    x: _x,
    y: _y,
    z: _z,
    lx: _lx,
    ly: _ly,
    lz: _lz,
  };

  gui.add(params, "x", -100, 100, 1).onChange(() => {
    camera.position.x = params.x;
  });

  gui.add(params, "y", -100, 100, 1).onChange(() => {
    camera.position.y = params.y;
  });

  gui.add(params, "z", -100, 100, 1).onChange(() => {
    camera.position.z = params.z;
  });

  gui.add(params, "lx", -100, 100, 1).onChange(() => {
    light.position.x = params.lx;
  });

  gui.add(params, "ly", -100, 100, 1).onChange(() => {
    light.position.y = params.ly;
  });

  gui.add(params, "lz", -100, 100, 1).onChange(() => {
    light.position.z = params.lz;
  });
};
