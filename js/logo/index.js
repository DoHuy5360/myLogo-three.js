import { PerspectiveCamera, WebGLRenderer } from "../../module/three.js";
import { reSize } from "./events.js";
import { object_adding, mother, logoH } from "./object_initializing.js";

const wrapCanvas = document.querySelector(".wrap-canvas");
const camera = new PerspectiveCamera(
  60,
  wrapCanvas.offsetWidth / wrapCanvas.offsetHeight,
  0.1,
  100
);
camera.position.z = 10;
const renderer = new WebGLRenderer({
  antialias: true,
  canvas: document.querySelector("canvas"),
});
renderer.physicallyCorrectLights = true;
renderer.setSize(wrapCanvas.offsetWidth, wrapCanvas.offsetHeight);
renderer.setPixelRatio(devicePixelRatio);
reSize(wrapCanvas, camera, renderer);

const scene = object_adding();
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  mother.rotation(logoH, 0, -0.01, 0);
}
animate();
