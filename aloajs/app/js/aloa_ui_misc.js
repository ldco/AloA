
function ButtonElement(papa, clas_s, fun, img, img_src, text, text_html) {
    let img_el;
    let span_el;
    let span_text;

    let first_div = $cE("div");
    let bg_div = $cE("div");

    if (img === 1) {
        img_el = true;
        img_el = $cE("img");
        img_el.setAttribute("src", menuIconsImagesFolder + img_src + fileExtension);
    }

    else {
        img_el = false;
        img_src = false;
    }

    if (text === 1) {
        span_el = true;
        span_el = $cE("span");
        span_el.innerHTML = text_html;
    } else {
        span_el = false;
        span_text = false;
    }

    bg_div.setAttribute("class", clas_s);
    bg_div.setAttribute("onclick", fun);

    papa.appendChild(bg_div);
    bg_div.appendChild(first_div);
    if (img_el) {
        first_div.appendChild(img_el);
    }
    if (text) {
        first_div.appendChild(span_el);
    }
}

function IconOnPage(papa, type, fun, icon) {
    new ButtonElement(papa, "IconOnPage_" + type, fun, 1, icon, 0);
}