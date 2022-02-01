import {
  FontLoader,
  TextGeometry,
  MeshBasicMaterial,
  Mesh,
} from "../../module/three.js";
import fontJSON from "./UVNBaiSauNang_Regular.js";

class ObjectCreater {
  constructor() {}
  createText(
    font = fontJSON,
    text = "?",
    color = "#ffffff",
    size = 10,
    height = 3
  ) {
    const loader = new FontLoader();
    const fontType = loader.parse(font);
    const geometry = new TextGeometry(text, {
      font: fontType,
      size: size,
      height: height,
    });
    const material = new MeshBasicMaterial({
      color: color,
    });
    const texts = new Mesh(geometry, material);
    return texts;
  }
  position(mesh, x, y, z) {
    mesh.position.x += x;
    mesh.position.y += y;
    mesh.position.z += z;
  }
  rotation(mesh, x, y, z) {
    mesh.rotation.x += x;
    mesh.rotation.y += y;
    mesh.rotation.z += z;
  }
}

export { ObjectCreater };
