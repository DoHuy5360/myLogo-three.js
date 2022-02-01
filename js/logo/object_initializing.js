import { Scene, Color } from "../../module/three.js";
import { ObjectCreater } from "./object_declaration.js";
import fontJSON from "./UVNBaiSauNang_Regular.js";

const mother = new ObjectCreater();

function logo_H(mother) {
  const displayText1 = mother.createText(fontJSON, "H", "#16DCD4", 10, 3);
  mother.position(displayText1, 5, -6, -10);
  mother.rotation(displayText1, 0, 0, 0.5);
  return displayText1;
}
const logoH = logo_H(mother);

function object_adding() {
  const scene = new Scene();
  scene.background = new Color("#000000");
  scene.add(logoH);

  return scene;
}

export { object_adding, mother, logoH };
