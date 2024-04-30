const colors = [
   "#FF5733", "#33C1FF", "#33FF57", "#5733FF", "#FF33F6", "#F6FF33", "#FF0000", "#00FF00", "#0000FF",
   "#01FFFE", "#FFA6FE", "#FFDB66", "#006401", "#010067", "#95003A", "#007DB5", "#FF00F6", "#FFEEE8",
   "#774D00", "#90FB92", "#0076FF", "#D5FF00", "#FF937E", "#6A826C", "#FF029D", "#FE8900", "#7A4782",
   "#7E2DD2", "#85A900", "#FF0056", "#A42400", "#00AE7E", "#683D3B", "#BDC6FF", "#263400", "#BDD393",
   "#00B917", "#9E008E", "#001544", "#C28C9F", "#FF74A3", "#01D0FF", "#004754", "#E56FFE", "#788231",
   "#0E4CA1", "#91D0CB", "#BE9970", "#968AE8", "#BB8800", "#43002C", "#DEFF74", "#00FFC6", "#FFE502",
   "#620E00", "#008F9C", "#98FF52", "#7544B1", "#B500FF", "#00FF78", "#FF6E41", "#005F39", "#6B6882",
   "#5FAD4E", "#A75740", "#A5FFD2", "#FFB167", "#009BFF", "#E85EBE", "#D1C87F", "#C2B280", "#B0E57C",
   "#C8B400", "#BDE052", "#7ED379", "#009B76", "#8ADBB4", "#1E6EEB", "#DAD4D8", "#00E56A", "#788BBA",
   "#CABBFF", "#3B5F41", "#B76E79", "#7C1C05", "#8C7853", "#6C3461", "#5FAD4E", "#A3C1AD", "#00A86B",
   "#E2B631", "#C19A6B", "#EFDECD", "#D6AEDD", "#9C51B6", "#FBEC5D", "#B0BF1A", "#808000", "#FF7518",
   "#FF4500", "#DA70D6", "#EEE8AA", "#BDB76B", "#D2B48C", "#DEB887", "#FFE4C4"
];
const colorVariables = [
   '--animation-color-one',
   '--animation-color-two',
   '--animation-color-three',
   '--animation-color-four',
   '--animation-color-five',
   '--animation-color-six'
];
let currentIndex = 0;

function updateColor() {
   const randomColor = colors[Math.floor(Math.random() * colors.length)];   // Pick a random color from the colors array
   
   document.documentElement.style.setProperty(colorVariables[currentIndex], randomColor);  // Set the color to the root element
   currentIndex = (currentIndex + 1) % colorVariables.length;                             // Move to the next color variable in the root element
   setTimeout(updateColor, 2000);                                                     // Call the function again after 2 seconds   
}

updateColor();  // Start the cycle of updating colors