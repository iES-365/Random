// random character from string
function choices(iVar) {
    for (let i = 0; i <= iVar.length - 1; i++) {
        if (typeof iVar === "string") {
            iVar = iVar.charAt(Math.floor(Math.random() * iVar.length));
        } else {
            iVar = iVar[(Math.floor(Math.random() * iVar.length))];
        }
    }
    return iVar;
}



// random color
function color() {

}
//part of color()
color.prototype.hex = function() {
        return "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
    }
    //part of color()
color.prototype.rgba = function() {
        return `rgba(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.random().toFixed(2)})`;
    }
    //part of color()
color.prototype.rgb = function() {
        return `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
    }
    //part of color()
color.prototype.hsl = function() {
        return `hsl(${Math.round(Math.random() *360)}, ${Math.round(Math.random() * 100)}%, ${Math.round(Math.random() * 100)}%)`;
    }
    //part of color()
color.prototype.hwb = function() {
        return `hwb(${Math.round(Math.random() *360)}, ${Math.round(Math.random() * 100)}%, ${Math.round(Math.random() * 100)}%)`;
    }
    //part of color()
color.prototype.cmyk = function() {
        return `cmyk(${Math.round(Math.random() * 100)}%, ${Math.round(Math.random() * 100)}%, ${Math.round(Math.random() * 100)}%, ${Math.round(Math.random() * 100)}%`;
    }
    //part of color()
color.prototype.cmy = function() {
    return `cmyk(${Math.round(Math.random() * 100)}%, ${Math.round(Math.random() * 100)}%, ${Math.round(Math.random() * 100)}%)`;
}



// random int/float range
function range(min, max) {
    this.min = min;
    this.max = max;
    if (this.min === undefined) {
        this.min = 0;
    }
    if (this.max === undefined) {
        this.max = 100000;
    }
}
// .ofFloat is part of f range
range.prototype.ofFloat = function() {
        return Math.random() * this.max + this.min;
    }
    // .ofInt is part of f range
range.prototype.ofInt = function() {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
}



// random number of X type
function sInt1_bit(isInt = true) {
    if (isInt === true) {
        return new range(-1, 0).ofInt();
    } else {
        return new range(-1, 0).ofFloat();
    }
}

function uInt1_bit(isInt = true) {
    if (isInt === true) {
        return new range(0, 1).ofInt();
    } else {
        return new range(0, 1).ofFloat();
    }
}

function sInt2_bit(isInt = true) {
    if (isInt === true) {
        return new range(-2, 1).ofInt();
    } else {
        return new range(-2, 1).ofFloat();
    }
};

function uInt2_bit(isInt = true) {
    if (isInt === true) {
        return new range(0, 3).ofInt();
    } else {
        return new range(0, 3).ofFloat();
    }
};

function sInt4_bit(isInt = true) {
    if (isInt === true) {
        return new range(-8, 7).ofInt();
    } else {
        return new range(-8, 7).ofFloat();
    }
}

function uInt4_bit(isInt = true) {
    if (isInt === true) {
        return new range(0, 15).ofInt();
    } else {
        return new range(0, 15).ofFloat();
    }
}

function sInt1_byte(isInt = true) {
    if (isInt === true) {
        return new range(-128, 127).ofInt();
    } else {
        return new range(-128, 127).ofFloat();
    }
}

function uInt1_byte(isInt = true) {
    if (isInt === true) {
        return new range(0, 255).ofInt();
    } else {
        return new range(0, 255).ofFloat();
    }
}

function sInt2_byte(isInt = true) {
    if (isInt === true) {
        return new range(-32768, 32767).ofInt();
    } else {
        return new range(-32768, 32767).ofFloat();
    }
}

function uInt2_byte(isInt = true) {
    if (isInt === true) {
        return new range(0, 65535).ofInt();
    } else {
        return new range(0, 65535).ofFloat();
    }
}


// random shade of X color
class Color {
    constructor() {}
    black() {
        const randblack = ["000000", "3d2b1f", "3d0c02", "3b3c36", "4b3621", "36454f", "301934", "555d50", "1b1b1b", "0e0e17", "343434", "1a1110", "191970", "353839", "414a4c", "002147", "242124", "32174d", "100c08"];
        this.randblack = randblack;
        let randBlack = randblack[(Math.floor(Math.random() * randblack.length))];
        return `#${randBlack}`;
    }
    blue() {
        const randblue = ["5d8aa8", "0095b6", "0000b8", "3f00ff", "191970", "000f89", "367588", "72a0c1", "0070ff", "1560bd", "00416a", "000080", "9eb9d4", "81d8d0", "f0f8ff", "3457d5", "1e90ff", "002fa6", "4666ff", "003153", "2d68c4", "007fff", "00bfff", "00009c", "5a4fcf", "a4dded", "00cccc", "3e8ede", "f0ffff", "7bafd4", "1034a6", "add8e6", "2b65ec", "4169e1", "40e0d0", "89cff0", "007ba7", "7df9ff", "6050dc", "002147", "0f52ba", "2774ae", "2072af", "0047ab", "16166b", "e1ebee", "1ca9c9", "4b61d1", "120a8f", "318ce7", "b9d9eb", "6082b6", "73c2fb", "273be2", "87ceeb", "324ab2", "0000ff", "6495ed", "6f00ff", "0000cd", "ccccff", "6a5acd", "00ccff", "6699cc", "00ffff", "99ffff", "7b68ee", "1c39bb", "4682b4", "00356b"];
        this.randblue = randblue;
        let randBlue = randblue[(Math.floor(Math.random() * randblue.length))];
        return `#${randBlue}`;
    }
    brown() {
        const randbrown = ["a52a2a", "e97451", "b87333", "e48400", "808000", "704214", "efdecd", "8a3324", "893f45", "996515", "926644", "882d17", "9f8170", "c19a6b", "81613e", "daa520", "a45a52", "cb410b", "3d2b1f", "cc7f3b", "edc9af", "da9100", "a81c07", "d2b48c", "79443b", "a0785a", "4a412a", "c3b091", "80461b", "483c32", "cd7f32", "954535", "e1a95f", "c19a6b", "b7410e", "cd5700", "964b00", "7b3f00", "c2b280", "674c47", "c2b280", "635147", "af6e4d", "ddd06a", "c19a6b", "c04000", "f4a460", "5c5248", "e0ab76", "d2691e", "e5aa70", "800000", "cba135", "645452", "800020", "6f4e37", "6c541e", "cc7722", "59260b", "f5deb3"];
        this.randbrown = randbrown;
        let randBrown = randbrown[(Math.floor(Math.random() * randbrown.length))];
        return `#${randBrown}`;
    }
    magenta() {
        const randmagenta = ["e52b50", "ff004f", "c54b8c", "f19cbb", "f64a8a", "da70d6", "c71585", "ab274f", "ff00ff", "682860", "ff007f", "de5d83", "733635", "df00ff", "fc0fc0", "de3163", "f400a1", "c2938d", "cf71af", "dc143c", "ff1dce", "800080", "cc33cc", "8b008b", "ff0090", "fe28a2", "cf3476", "614051", "d0417e", "fe4eda", "ff6fff", "f2c1d1", "ca1f7b", "8e3a59", "f75394", "b53389", "9f4576", "e30b5c"];
        this.randmagenta = randmagenta;
        let randMagenta = randmagenta[(Math.floor(Math.random() * randmagenta.length))];
        return `#${randMagenta}`;
    }
    orange() {
        const randorange = ["ffbf00", "ddd06a", "fcc200", "ff4500", "ff7518", "f28500", "fbceb1", "ff7f50", "ff4f00", "ffa000", "b7410e", "cd5700", "ff9966", "e9967a", "faca16", "ffefd5", "ff7900", "f88379", "ff6f5e", "e9692c", "c19a6b", "ffe5b4", "ff8c69", "ff6347", "e0ab76", "ff7e00", "c04000", "ffcc99", "cba135", "ff8200", "cc5500", "e25822", "ffc800", "fadfad", "ff2400", "e34234", "e09540", "e48400", "eaa221", "d99058", "fff5ee", "bc7a3d", "ef9b0f", "cfb53b", "ec5800", "ffcc33", "ed9121", "ffd700", "ff7f00", "ff5a36", "fad6a5", "f7e7ce", "d4af37", "ffa500", "ff8f00", "f94d00"];
        this.randorange = randorange;
        let randOrange = randorange[(Math.floor(Math.random() * randorange.length))];
        return `#${randOrange}`;
    }
    pink() {
        const randpink = ["f19cbb", "ff1493", "ff0090", "cc8899", "de6fa1", "ff91af", "f2c1d1", "e4007c", "e30b5c", "ff6fff", "de5d83", "f64a8a", "ffdae9", "c71585", "f653a6", "ff00ff", "ffe4e1", "ff007f", "fb607f", "df73ff", "997a8d", "ff66cc", "ffa6c9", "f400a1", "f2bdcd", "aa98a9", "de3163", "ff00cc", "edcdc2", "ff91a4", "ffb7c5", "ff69b4", "fe28a2", "fff5ee", "f88379", "fff0f5", "df00ff", "fc0fc0", "f56fa1", "fbaed2", "ffcbdb", "f88379"];
        this.randpink = randpink;
        let randPink = randpink[(Math.floor(Math.random() * randpink.length))];
        return `#${randPink}`;
    }
    violet() {
        const randviolet = ["b284be", "563c5c", "5b3256", "da70d6", "7851a9", "8000ff", "9966cc", "6c3082", "fff0f5", "682860", "c71585", "c9a0dc", "8a2be2", "f2c1d1", "b57edc", "fae6fa", "32174d", "702963", "b53389", "e6e6fa", "ccccff", "6a5acd", "856088", "d473d4", "c8a2c8", "df00ff", "cc33cc", "301934", "8806ce", "880085", "dbb2d1", "d8bfd8", "9400d3", "6f2da8", "e0b0ff", "dda0dd", "9683ec", "6f00ff", "df73ff", "7b68ee", "86608e", "66023c", "bf00ff", "3f00ff", "997a8d", "800080", "645394", "8f00ff", "00416a", "c54b8c", "9a4eae", "a020f0"];
        this.randviolet = randviolet;
        let randViolet = randviolet[(Math.floor(Math.random() * randviolet.length))];
        return `#${randViolet}`;
    }
    cyan() {
        const randcyan = ["f0f8ff", "7df9ff", "00a693", "40e0d0", "00ffbf", "15f4ee", "01796f", "00ffef", "f0ffff", "99ffff", "b0e0e6", "43b3ae", "0d98ba", "29ab87", "00cccc", "00ccff", "00bfff", "e0ffff", "2e8b57", "006d6f", "20b2aa", "007a74", "b2ffff", "aaf0d1", "87ceeb", "007ba7", "48d1cc", "00ff7f", "00ffff", "3eb489", "81d8d0", "008b8b", "1ca9c9", "008080"];
        this.randcyan = randcyan;
        let randCyan = randcyan[(Math.floor(Math.random() * randcyan.length))];
        return `#${randCyan}`;
    }
    green() {
        const randgreen = ["8db600", "00ffbf", "7ba05b", "568203", "66ff00", "004225", "1b4d3e", "1e4d2b", "00563b", "ace1af", "80ff00", "00ffff", "004953", "013220", "4a5d23", "03c03c", "177245", "00693e", "50c878", "00ff40", "4d5d53", "4f7942", "228b22", "00ff00", "adff2f", "3fff00", "49796b", "f0fff0", "355e3b", "138808", "138808", "00a86b", "29ab87", "4cbb17", "7cfc00", "90ee90", "c0ff00", "32cd32", "74c365", "0bda51", "e3f988", "3eb489", "8a9a5b", "317873", "39ff14", "008000", "808000", "9ab973", "50c878", "d1e231", "00a693", "123524", "00a550", "01796f", "93c572", "6c7c59", "00cccc", "76ff7a", "2e8b57", "55dd33", "009e60", "a7fc00", "00ff7f", "d0f0c0", "008080", "40e0d0", "40826d", "9acd32"];
        this.randgreen = randgreen;
        let randGreen = randgreen[(Math.floor(Math.random() * randgreen.length))];
        return `#${randGreen}`;
    }
    grey() {
        const randgrey = ["808080", "b2beb5", "848482", "6699cc", "91a3b0", "36454f", "98817b", "8c92ac", "555555", "696969", "0e0e17", "4d5d53", "343434", "4c5866", "536878", "536267", "e5e4e2", "c0c0c0", "708090", "483c32", "674c47", "aa98a9", "8b8589", "dbd7d2", "f5f5f5"];
        this.randgrey = randgrey;
        let randGrey = randgrey[(Math.floor(Math.random() * randgrey.length))];
        return `#${randGrey}`;
    }
    red() {
        const randred = ["e32636", "e52b50", "ff033e", "fbceb1", "a52a2a", "660000", "800020", "ff0800", "c41e3a", "960018", "b31b1b", "de3163", "58111a", "e44d2e", "7f1635", "ff3800", "ff7f50", "dc143c", "8b0000", "ff003f", "b22222", "ce2029", "e25822", "ff004f", "ff00ff", "f400a1", "cd5c5c", "cf1020", "ff0090", "800000", "c04000", "ff3300", "800020", "c81d11", "fe28a2", "ffcbdb", "e30b5c", "ff0000", "c71585", "ab4e52", "ff007f", "c21e56", "65000b", "cc0000", "e0115f", "80461b", "b7410e", "bc3f4a", "ff2400", "fc0fc0", "cd5700", "f88379", "e2725b", "ff6347", "a91101", "7c3030", "66023c", "c80815", "e34234", "f75394", "722f37"];
        this.randred = randred;
        let randRed = randred[(Math.floor(Math.random() * randred.length))];
        return `#${randRed}`;
    }
    white() {
        const randwhite = ["edeae0", "f0f8ff", "faebd7", "f0ffff", "f5f5dc", "e3dac9", "f7e7ce", "fff8dc", "fff8e7", "fffdd0", "f0ead6", "fffaf0", "eedc82", "f8f8ff", "f0fff0", "f4f0ec", "fffff0", "fff0f5", "fffacd", "faf0e6", "f4e9d8", "f5fffa", "ffe4e1", "ffdead", "e9ffdb", "fdf5e6", "ffefd5", "ffe5b4", "e5e4e2", "fff5ee", "fffafa", "f3e5ab", "ffffff", "f5f5f5"];
        this.randwhite = randwhite;
        let randWhite = randwhite[(Math.floor(Math.random() * randwhite.length))];
        return `#${randWhite}`;
    }
    yellow() {
        const randyellow = ["ffbf00", "fbceb1", "e9d66b", "fdee00", "f5f5dc", "e0ab76", "f7e7ce", "dfff00", "ddd06a", "e4d00a", "fff8e7", "fffdd0", "b8860b", "cdb280", "eedc82", "ef9b0f", "ffd700", "d4af37", "daa520", "e6a817", "f8de7e", "faca16", "c3b091", "fffacd", "e3ff00", "c19a6b", "fbec5d", "ffc40c", "e3f988", "ffdb58", "fada5e", "ffdead", "cfb53b", "808000", "ffefd5", "d1e231", "f4c431", "ffd800", "ffba00", "fada5e", "e4d96f", "ffcc33", "fad6a5", "f3e5ab", "f5deb3", "ffff00"];
        this.randyellow = randyellow;
        let randYellow = randyellow[(Math.floor(Math.random() * randyellow.length))];
        return `#${randYellow}`;
    }
    random() {
        const randrand = [new Color().black(), new Color().blue(), new Color().brown(), new Color().cyan(), new Color().green(), new Color().grey(), new Color().magenta(), new Color().orange(), new Color().pink(), new Color().violet(), new Color().red(), new Color().white(), new Color().yellow()];
        let randRand = randrand[(Math.floor(Math.random() * randrand.length))];
        return randRand;
    }
}



// CUSTOM ELEMENTS
class RandomChoice extends HTMLElement {
    constructor() {
        super();
        const variable = this.getAttribute("variable");
        const shadowDOM = this.attachShadow({
            mode: 'open'
        });
        const text = document.createElement("p");
        text.innerHTML = choices(variable);
        this.innerHTML = "";
        shadowDOM.appendChild(text);
    }
}
customElements.define('random-choice', RandomChoice);


class RandomRange extends HTMLElement {
    constructor() {
        super();
        let type = this.getAttribute("type");
        const shadowDOM = this.attachShadow({
            mode: "open"
        });
        let min = parseInt(this.getAttribute("min"));
        let max = parseInt(this.getAttribute("max"));
        const text = document.createElement("p");
        if (this.hasAttribute("min") !== true) {
            min = 0;
        }
        if (this.hasAttribute("max") !== true) {
            max = 100000;
        }
        if (this.hasAttribute("type") !== true) {
            type = "int";
        }
        if (type === "int") {
            text.innerHTML = new range(min, max).ofInt();
        } else {
            text.innerHTML = new range(min, max).ofFloat();
        }
        this.innerHTML = "";
        shadowDOM.appendChild(text);
    }
}
customElements.define("random-range", RandomRange);


class RandomColor extends HTMLElement {
    constructor() {
        super();
        let type = this.getAttribute("type");
        const shadowDOM = this.attachShadow({ mode: "open" });
        const text = document.createElement("p");
        if (this.getAttribute("type") === "rgb") text.innerHTML = new color().rgb();
        else if (this.getAttribute("type") === "rgba") text.innerHTML = new color().rgba();
        else if (this.getAttribute("type") === "hsl") text.innerHTML = new color().hsl();
        else if (this.getAttribute("type") === "hwb") text.innerHTML = new color().hwb();
        else if (this.getAttribute("type") === "cmyk") text.innerHTML = new color().cmyk();
        else if (this.getAttribute("type") === "cmy") text.innerHTML = new color().cmy();
        else text.innerHTML = new color().hex();
        if (this.hasAttribute("type") !== true) {
            type = "hex";
        }
        this.innerHTML = "";
        shadowDOM.appendChild(text);
    }
}
customElements.define("random-color", RandomColor);


class RandomColoredText extends HTMLElement {
    constructor() {
        super();
        let color = this.getAttribute("foreground");
        let bgcolor = this.getAttribute("background")
        const shadowDOM = this.attachShadow({ mode: "open" });
        const text = document.createElement("p");
        text.innerHTML = this.innerHTML;
        this.innerHTML = "";
        let style = document.createElement("style");
        let fgColor;
        let bgColor;
        // foreground
        if (color === "black") fgColor = `color: ${new Color().black()}`;
        else if (color === "blue") fgColor = `color: ${new Color().blue()}`;
        else if (color === "brown") fgColor = `color: ${new Color().brown()}`;
        else if (color === "cyan") fgColor = `color: ${new Color().cyan()}`;
        else if (color === "green") fgColor = `color: ${new Color().green()}`;
        else if (color === "grey") fgColor = `color: ${new Color().grey()}`;
        else if (color === "magenta") fgColor = `color: ${new Color().magenta()}`;
        else if (color === "orange") fgColor = `color: ${new Color().orange()}`;
        else if (color === "pink") fgColor = `color: ${new Color().pink()}`;
        else if (color === "violet") fgColor = `color: ${new Color().violet()}`;
        else if (color === "red") fgColor = `color: ${new Color().red()}`;
        else if (color === "white") fgColor = `color: ${new Color().white()}`;
        else if (color === "yellow") fgColor = `color: ${new Color().yellow()}`;
        else fgColor = `color: ${new Color().random()}`;
        // background
        if (bgcolor === "black") bgColor = `background-color: ${new Color().black()}`;
        else if (bgcolor === "blue") bgColor = `background-color: ${new Color().blue()}`;
        else if (bgcolor === "brown") bgColor = `background-color: ${new Color().brown()}`;
        else if (bgcolor === "cyan") bgColor = `background-color: ${new Color().cyan()}`;
        else if (bgcolor === "green") bgColor = `background-color: ${new Color().green()}`;
        else if (bgcolor === "grey") bgColor = `background-color: ${new Color().grey()}`;
        else if (bgcolor === "magenta") bgColor = `background-color: ${new Color().magenta()}`;
        else if (bgcolor === "orange") bgColor = `background-color: ${new Color().orange()}`;
        else if (bgcolor === "pink") bgColor = `background-color: ${new Color().pink()}`;
        else if (bgcolor === "violet") bgColor = `background-color: ${new Color().violet()}`;
        else if (bgcolor === "red") bgColor = `background-color: ${new Color().red()}`;
        else if (bgcolor === "white") bgColor = `background-color: ${new Color().white()}`;
        else if (bgcolor === "yellow") bgColor = `background-color: ${new Color().yellow()}`;
        else bgColor = `background-color: ${new Color().random()}`;
        style.innerHTML = `p{${fgColor}; ${bgColor}}`
        shadowDOM.appendChild(text);
        shadowDOM.appendChild(style);
    }
}
customElements.define("random-colored-text", RandomColoredText);
