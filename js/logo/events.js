function reSize(wrapCanvas, camera, renderer) {
  window.addEventListener("resize", (e) => {
    camera.aspect = wrapCanvas.offsetWidth / wrapCanvas.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(wrapCanvas.offsetWidth, wrapCanvas.offsetHeight);
  });
}
export { reSize };
