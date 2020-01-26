// Import LuciadRIA libraries
import { getReference } from "@luciad/ria/reference/ReferenceProvider";
import { createBounds } from "@luciad/ria/shape/ShapeFactory";

// Import local style file
import "./index.scss";
import { WebGLMap } from "@luciad/ria/view/WebGLMap";

// Get the html element with root id
const root = document.getElementById("root");

// Create a HTML element to insert our map
const mapElement = document.createElement("div");
// Assign a class to style it with css
mapElement.classList.add("LuciadMap");

// Insert the mapElement
root.appendChild(mapElement);

// Create the map and fit to bounds
const map = new WebGLMap(mapElement, { reference: getReference("EPSG:4978") });
map.mapNavigator.fit({
  bounds: createBounds(getReference("CRS:84"), [-122, 60, 25, 30])
});
