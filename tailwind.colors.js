module.exports = {
  // Earth, Water and Fire
  // Colorcolor URL: "https://colorcolor.in/#('paletteParams':('steps':10,'paletteIndex':2,'swatchIndex':9,'params':~('hue':('start':242.5,'end':249.25,'ease':'quadIn'),'sat':('start':74.75,'end':92.75,'ease':'quadOut'),'lig':('start':99,'end':24.5,'ease':'quadOut')),('hue':('start':37,'end':32.5,'ease':'quadIn'),'sat':('start':61.25,'end':93.5,'ease':'quadOut'),'lig':('start':99,'end':24.5,'ease':'quadOut')),('hue':('start':54.75,'end':72.75,'ease':'quadIn'),'sat':('start':78,'end':100,'ease':'quadOut'),'lig':('start':99,'end':18.25,'ease':'quadOut'));),'settings':('overlayContrast':false,'overlayHex':true,'refColorsRaw':'#CC7722,_#0E78BE,_#F0B81A,_#CFDFF6,_#F3EBDE,_#2a4365','colorSpace':'hsluv'))"
  // Colorcolor to Tailwind naming mapping
  // 10 -> 100
  // 20 -> 200
  // 30 -> 300
  // ...
  // 90 -> 900
  // 100 -> Ignored
  earth: {
    "100": "#fcf7f5",
    "200": "#f9eae3",
    "300": "#f4d6c7",
    "400": "#f0bb9e",
    "500": "#ef9a5d",
    "600": "#d18245",
    "700": "#b06a32", // Nearest matched to reference color #CC7722
    "800": "#915321",
    "900": "#743f13",
  },
  water: {
    "100": "#f5f8fd",
    "200": "#e4eefb",
    "300": "#c9def7",
    "400": "#a5caf4",
    "500": "#73b3f1",
    "600": "#449adf",
    "700": "#3380bd", // Nearest matched to reference color #0E78BE
    "800": "#24669d",
    "900": "#174f7f",
  },

  fire: {
    "100": "#fdf7f0",
    "200": "#fbe9d4",
    "300": "#f9d3a1",
    "400": "#f1b94e",
    "500": "#d0a03d",
    "600": "#ae862c",
    "700": "#8b6d1c",
    "800": "#6a550d",
    "900": "#4d3f03",
  },

  // Wind and Space
  // Colorcolor URL: "https://colorcolor.in/#('paletteParams':('steps':5,'paletteIndex':1,'swatchIndex':0,'params':~('hue':('start':244.75,'end':244.75,'ease':'quadIn'),'sat':('start':38,'end':89,'ease':'quadOut'),'lig':('start':100,'end':79.25,'ease':'quadOut')),('hue':('start':63.75,'end':63.75,'ease':'quadIn'),'sat':('start':44,'end':81,'ease':'quadOut'),'lig':('start':99,'end':90.25,'ease':'quadOut'));),'settings':('overlayContrast':false,'overlayHex':true,'refColorsRaw':'#F3EBDE,_#CFDFF6','colorSpace':'hsluv'))"
  // Colorcolor numbers mapped to corresponding Tailwind naming
  wind: {
    "100": "#fafbfc",
    "200": "#ebf0f8",
    "300": "#d6e2f4", // Nearest matched to reference color #CFDFF6
    "400": "#bbd4f5",
    "500": "#9fc8f9",
  },
  space: {
    "100": "#fdfaf6",
    "200": "#fbf5ec",
    "300": "#f9eedb", // Nearest matched to reference color #F3EBDE
    "400": "#f9e7c6",
    "500": "#fae0ae",
  },
};
