let radius = prompt ("Enter the radius of a circle: ");
let parsedRadius = parseInt(radius) * parseInt(radius);
let area = Math.PI * parsedRadius;
console.log(area);
console.log(typeof(area));