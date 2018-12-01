

//dateTime
function DateTime(style, date, time) {
    let d = new Date();
    let date_separator;
    let time_separator;
    let datetime_separator;
    if (style === 0) { // 276201811256
        date_separator = "";
        time_separator = "";
        datetime_separator = "";
    }
    if (style === 1) { // 27_6_2018_1_12_56
        date_separator = "_";
        time_separator = "_";
        datetime_separator = "_";
    }
    if (style === 2) { // 27/6/2018 1:12:56
        date_separator = "/";
        time_separator = ":";
        datetime_separator = " ";
    }
    let _date = d.getDate() + date_separator + d.getMonth() + date_separator + d.getFullYear();
    let _time = d.getHours() + time_separator + d.getMinutes() + time_separator + d.getSeconds();
    if (date === 1 && time === 1) {
        return _date + datetime_separator + _time;
    }
    if (date === 0 && time === 1) {
        return _time;
    }
    if (date === 1 && time === 0) {
        return _date;
    }
    if (date === 0 && time === 0) {
        return "no data selected";
    }
}



//d-isplay N-one
const $dN = (...x) => {
    for (let i = 0; i < x.length; i++) {
        $(x[i]).style.display = "none";
    }
};
//d-isplay F-lex
const $dF = (...x) => {
    for (let i = 0; i < x.length; i++) {
        $(x[i]).style.display = "flex";
    }
};

//Remove with all childs and listeners;
const r_emove = (x) => {
    if (x.hasChildNodes()) {
        for (let i = 0; i < x.childNodes.length; i++) {
            x.childNodes[i] = x.childNodes[i].cloneNode(true);
            for (let l = 0; l < x.childNodes[i].length; l++) {
                x.childNodes[i].parentNode.replaceChild(x.childNodes[i][l], x);
            }
            x.childNodes[i].remove();
        }
    }
    x.remove();
};


//d-isplay R-emove
const $dR = (...x) => {
    for (let i = 0; i < x.length; i++) {
        $(x[i]).remove();
    }
};
//el-emnt d-isplay R-emove
const $el_dR = (x) => {
    x.remove();
};
//el-emnt d-isplay F-lex
const $el_dF = (x) => {
    x.style.display = "flex";
};
//el-emnt d-isplay N-one
const $el_dN = (x) => {
    x.style.display = "none";
};
//reload page
const $reload = () => {
    location.reload();
};
//g-o B-ack
const $gB = (x) => {
    window.history.back(x);
};
//g-o F-orward
const $gF = () => {
    window.history.forward();
};


//SHORTCUTS
//GET ELEMENTs
//get by ID
const $ = (x) => {
    return document.getElementById(x);
};
//get by CLASS
const $c = (x) => {
    return document.getElementsByClassName(x);
};
//get by CLASS AFTER SOME ELEMENT
const $_c = (z, x) => {
    return z.getElementsByClassName(x);
};

//get by CLASS => REMOVE MULTIPLE elements 
const $_c_arr_remove = (x) => {
    Array.from($c(x)).forEach(function (a) {
        r_emove(a);
    });
};

//get by NAME
const $n = (x) => {
    return document.getElementsByName(x);
};
//get by NAME AFTER SOME ELEMENT
const $_n = (z, x) => {
    return z.getElementsByName(x);
};
//get by TAG 
const $t = (x) => {
    return document.getElementsByTagName(x);
};
//get by TAG AFTER SOME ELEMENT
const $_t = (z, x) => {
    return z.getElementsByTagName(x);
};
//querySelector
const $q = (x) => {
    return document.querySelector(x);
};

//querySelectorAll
const $qa = (x) => {
    return document.querySelectorAll(x);
};

//classList - add / remove
const $cList = (x, ar, clas_s) => {
    if (ar === 1) {
        x.classList.add(clas_s);
    }
    if (ar === 0) {
        x.classList.remove(clas_s);
    }
};

//c-reate E-lement
const $cE = (x) => {
    return document.createElement(x);
};

//select NOT
const $noT = (x) => {
    let arr = [];
    let el = document.querySelectorAll('DIV:not(#' + x + ')');
    for (let i = 0; i < el.length; i++) {
        arr.push(el[i]);
    }
    return arr;
};

//make onclick(addEventListener)
const $on_click = (x, y) => {
    x.addEventListener("click", y);
};

//make disabled/enabled 
function $diS(id, el) {
    //disable by ID
    let F = "saturate(0) contrast(0.8) opacity(0.6) brightness(0.8)";

    if (id === "id") {
        $(el).style.pointerEvents = "none";
        $(el).style.filter = F;
    }
    //disable by CLASS
    if (id === "class") {
        let z = $c(el);
        for (let i = 0; i < z.length; i++) {
            z[i].style.pointerEvents = "none";
            z[i].style.filter = F;
        }
    }
    //disable by TAG
    if (id === "tag") {
        let z = $t(el);
        for (let i = 0; i < z.length; i++) {
            z[i].style.pointerEvents = "none";
            z[i].style.filter = F;
        }
    }
}

function $re_diS(id, el, filter) {
    //enable by ID
    if (id === "id") {
        $(el).style.pointerEvents = "initial";
        $(el).style.filter = filter;
    }
    //enable by CLASS
    if (id === "class") {
        let z = $c(el);
        for (let i = 0; i < z.length; i++) {
            z[i].style.pointerEvents = "initial";
            z[i].style.filter = "initial";
        }
    }
    //enable by TAG
    if (id === "tag") {
        let z = $t(el);
        for (let i = 0; i < z.length; i++) {
            z[i].style.pointerEvents = "initial";
            z[i].style.filter = "initial";
        }
    }
}

/*Fisher–Yates Shuffle*/

function shuffle(array) {

    let j = 0;
    let temp = null;

    for (let i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

const getOffset = (x) => {
    const el = x.getBoundingClientRect();
    return {
        left: el.left + window.scrollX,
        top: el.top + window.scrollY,

    };
};
const audio = (file) => {
    let audio = new Audio(file);
    audio.play();
};

function $dis_menu(admin, dis, ...n) {
    if (admin === 0) {
        menuItem_class = "menuItem";
    }
    if (admin === 1) {
        menuItem_class = "menuItemAdmin";
    }
    F = "opacity(0.2) brightness(0.1) contrast(7)";
    if (dis === 0) {

        let x = $c(menuItem_class);
        for (let i = 0; i < n.length; i++) {
            x[n[i]].style.pointerEvents = "none";
            x[n[i]].style.filter = F;
        }
    }
    if (dis === 1) {
        for (let i = 0; i < n.length; i++) {
            let x = $c(menuItem_class);
            x[n[i]].style.pointerEvents = "initial";
            x[n[i]].style.filter = "initial";
        }
    }
}

function TypeW(id, speed) {
    let el = document.getElementById(id);
    let arr = el.getElementsByTagName("pre")[0].innerHTML.split("");

    let newpre = document.createElement("pre");
    el.appendChild(newpre);
    el.getElementsByTagName("pre")[0].remove();
    let createdSpans = document.getElementById(id).getElementsByTagName("span");

    for (let i = 0; i < arr.length; i++) {
        let span = document.createElement("span");
        newpre.appendChild(span);

        createdSpans[i].innerHTML = arr[i];
        createdSpans[i].style.opacity = "0";
        createdSpans[i].style.transitionDelay = "0s";
        setTimeout(() => {
            createdSpans[i].style.opacity = "1";
        }, i * speed);
    }
}

//get part of string
/* const getFromStr = (string, from, to) => {
    string = string.substring(string.lastIndexOf(from) + 1, string.lastIndexOf(to));
    return string;
}; */





//HTML constractor
function ConstHTML(tag, _id, _class, parent, ...attrib) {

    x = document.createElement(tag);
    if (_id) { x.setAttribute("id", _id); }

    if (_class) { x.setAttribute("class", _class); }


    for (let i = 0; i < attrib.length; i++) {

        atr = attrib[i].substring(attrib[i].lastIndexOf('"') + 1,
            attrib[i].lastIndexOf('&'));

        val = attrib[i].substring(attrib[i].lastIndexOf('&') + 1);

        x.setAttribute(atr, val);
    }
    parent.appendChild(x);

    this._id = $(_id);
    this.class = $c(_class);
    this.papa = $(parent.id);


}

//killings
const killPapa = (x) => {
    x.parentNode.remove();
};

const killGrandpa = (x) => {
    x.parentNode.parentNode.remove();
};



//*make pdf A4 with HTML-PDF*/

//sizes if screen elements for pdf's css
//300dpi = 2480 x 3508;
//150dpi = 1240 x 1754
//96dpi = 794 x 1123;
//72dpi = 595 x 842;
//default = 120dpi = 1461.6;


function calcCSS(el, pdfHeight, pathToData) {
    let htmlDivHeight = $(el).offsetHeight;
    let dif = pdfHeight / htmlDivHeight;
    let kids = $(el).getElementsByTagName('*');
    let arr = [];

    for (let i = 0; i < kids.length; i++) {

        let fontFamily = window.getComputedStyle($(kids[i].id), null).getPropertyValue("font-family");



        let fontUrl = `file:///` + mainPathToData + `${fontFamily}.ttf`;


        let elId = $(el).id;



        let bg = (window.getComputedStyle($(kids[i].id), null).getPropertyValue("background"));

        let color = window.getComputedStyle($(kids[i].id), null).getPropertyValue("color");

        let fontSize = (parseInt(window.getComputedStyle($(kids[i].id), null).getPropertyValue("font-size"), 10)) * dif + "px";

        let fontWeight = window.getComputedStyle($(kids[i].id), null).getPropertyValue("font-weight");

        let direction = window.getComputedStyle($(kids[i].id), null).getPropertyValue("direction");

        let height = (parseInt(window.getComputedStyle($(kids[i].id), null).getPropertyValue("height"), 10)) * dif + "px";

        let position = window.getComputedStyle($(kids[i].id), null).getPropertyValue("position");

        let display = window.getComputedStyle($(kids[i].id), null).getPropertyValue("display");

        let justifyContent = window.getComputedStyle($(kids[i].id), null).getPropertyValue("justify-content");

        let alignItems = window.getComputedStyle($(kids[i].id), null).getPropertyValue("align-items");

        let flexDirection = window.getComputedStyle($(kids[i].id), null).getPropertyValue("flex-direction");

        let flex = window.getComputedStyle($(kids[i].id), null).getPropertyValue("flex");

        let padding = window.getComputedStyle($(kids[i].id), null).getPropertyValue("padding");

        let filter = window.getComputedStyle($(kids[i].id), null).getPropertyValue("filter");

        let margin = window.getComputedStyle($(kids[i].id), null).getPropertyValue("margin");

        let borderTop = window.getComputedStyle($(kids[i].id), null).getPropertyValue("border-top");
        let borderBottom = window.getComputedStyle($(kids[i].id), null).getPropertyValue("border-bottom");

        let bottom = window.getComputedStyle($(kids[i].id), null).getPropertyValue("bottom");

        let transform = window.getComputedStyle($(kids[i].id), null).getPropertyValue("transform");

        let left = window.getComputedStyle($(kids[i].id), null).getPropertyValue("left");

        let opacity = window.getComputedStyle($(kids[i].id), null).getPropertyValue("opacity");

        let string = `
        @font-face {
        font-family: '${fontFamily}';
        src: url('${fontUrl}');
        }
        #${kids[i].id} {
        font-size: ${fontSize};
        font-family: ${fontFamily};
        height: ${height};
        color: ${color};
        background: ${bg};
        direction: ${direction};
        position: ${position};
        display: ${display};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        font-weight: ${fontWeight};
        flex-direction: ${flexDirection};
        filter: ${filter};
        padding: ${padding};
        margin: ${margin};
        border-top: ${borderTop};
        border-bottom: ${borderBottom};
        bottom: ${bottom};
        left: ${left};
        flex: ${flex};
        transform: ${transform};
        opacity: ${opacity};

       
    }`;

        arr.push(string);

    }


    return arr;
}


function make_PDFfromHTML(el, pathToData, filename) {
    const html = $(el).outerHTML;
    const options = {
        format: "A4"
    };
    let css = `${calcCSS(`${el}`, 1461.6, `${pathToData}`)}`;
    let htmlCont = `
    <!DOCTYPE html>
    <html>
    <head>
    <style>
    
    ${css}</style>
    </head>
    <body>${html}</body>
    </html>
`;

    adress = pathToData + filename;

    let pdfCreate = pdf.create(htmlCont, options).toFile(adress, function (err, res) {

    });



}
/**/











