const $ = document.querySelector.bind(document);
const box = $('.box');
const widthRange = $('.widthRange');
const heightRange = $('.heightRange');
const rotateX = $('.rotateXRange');
const rotateY = $('.rotateYRange');
const rotateZ = $('.rotateZRange');
const radius = $('.radiusRange');
const bgColor = $('.bgColorRange');
const widthValue = $('.widthValue');
const heightValue = $('.heightValue');
const rotateXValue = $('.rotateXValue');
const rotateYValue = $('.rotateYValue');
const rotateZValue = $('.rotateZValue');
const radiusValue = $('.radiusValue');

widthRange.oninput = () => {
  box.style.width = widthRange.value + 'px';
  widthValue.textContent = widthRange.value;
};
heightRange.oninput = () => {
  box.style.height = heightRange.value + 'px';
  heightValue.textContent = heightRange.value;
};
rotateX.oninput = () => {
  box.style.cssText = 'transform: rotateX(' + rotateX.value + 'deg)';
  rotateXValue.textContent = rotateX.value;
}
rotateY.oninput = () => {
  box.style.cssText = 'transform: rotateY(' + rotateY.value + 'deg)';
  rotateYValue.textContent = rotateY.value;
}
rotateZ.oninput = () => {
  box.style.cssText = 'transform: rotateZ(' + rotateZ.value + 'deg)';
  rotateZValue.textContent = rotateZ.value;
}
radius.oninput = () => {
  box.style.borderRadius = radius.value + '%';
  radiusValue.textContent = radius.value;
}
bgColor.oninput = () => {
  box.style.backgroundColor = 'rgb(' + Math.random() * bgColor.value + ', ' + bgColor.value + ', ' + Math.random() * bgColor.value + ')';
}