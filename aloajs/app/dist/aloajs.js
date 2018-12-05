var $dN = function () {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    for (var i = 0; i < x.length; i++) {
        $(x[i]).style.display = "none";
    }
};
var $dF = function () {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    for (var i = 0; i < x.length; i++) {
        $(x[i]).style.display = "flex";
    }
};
var r_emove = function (x) {
    if (x.hasChildNodes()) {
        for (var i = 0; i < x.childNodes.length; i++) {
            x.childNodes[i] = x.childNodes[i].cloneNode(true);
            for (var l = 0; l < x.childNodes[i].length; l++) {
                x.childNodes[i].parentNode.replaceChild(x.childNodes[i][l], x);
            }
            x.childNodes[i].remove();
        }
    }
    x.remove();
};
var $dR = function () {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    for (var i = 0; i < x.length; i++) {
        $(x[i]).remove();
    }
};
var $el_dR = function (x) {
    x.remove();
};
var $el_dF = function (x) {
    x.style.display = "flex";
};
var $el_dN = function (x) {
    x.style.display = "none";
};
var $reload = function () {
    location.reload();
};
var $gB = function (x) {
    window.history.back(x);
};
var $gF = function () {
    window.history.forward();
};
var $ = function (x) {
    return document.getElementById(x);
};
var $c = function (x) {
    return document.getElementsByClassName(x);
};
var $_c = function (z, x) {
    return z.getElementsByClassName(x);
};
var $_c_arr_remove = function (x) {
    Array.from($c(x)).forEach(function (a) {
        r_emove(a);
    });
};
var $n = function (x) {
    return document.getElementsByName(x);
};
var $_n = function (z, x) {
    return z.getElementsByName(x);
};
var $t = function (x) {
    return document.getElementsByTagName(x);
};
var $_t = function (z, x) {
    return z.getElementsByTagName(x);
};
var $q = function (x) {
    return document.querySelector(x);
};
var $qa = function (x) {
    return document.querySelectorAll(x);
};
var $cList = function (x, ar, clas_s) {
    if (ar === 1) {
        x.classList.add(clas_s);
    }
    if (ar === 0) {
        x.classList.remove(clas_s);
    }
};
var $cE = function (x) {
    return document.createElement(x);
};
var $noT = function (x) {
    var arr = [];
    var el = document.querySelectorAll('DIV:not(#' + x + ')');
    for (var i = 0; i < el.length; i++) {
        arr.push(el[i]);
    }
    return arr;
};
var $on_click = function (x, y) {
    x.addEventListener("click", y);
};
function $diS(id, el) {
    var F = "saturate(0) contrast(0.8) opacity(0.6) brightness(0.8)";
    if (id === "id") {
        $(el).style.pointerEvents = "none";
        $(el).style.filter = F;
    }
    if (id === "class") {
        var z = $c(el);
        for (var i = 0; i < z.length; i++) {
            z[i].style.pointerEvents = "none";
            z[i].style.filter = F;
        }
    }
    if (id === "tag") {
        var z = $t(el);
        for (var i = 0; i < z.length; i++) {
            z[i].style.pointerEvents = "none";
            z[i].style.filter = F;
        }
    }
}
function $re_diS(id, el, filter) {
    if (id === "id") {
        $(el).style.pointerEvents = "initial";
        $(el).style.filter = filter;
    }
    if (id === "class") {
        var z = $c(el);
        for (var i = 0; i < z.length; i++) {
            z[i].style.pointerEvents = "initial";
            z[i].style.filter = "initial";
        }
    }
    if (id === "tag") {
        var z = $t(el);
        for (var i = 0; i < z.length; i++) {
            z[i].style.pointerEvents = "initial";
            z[i].style.filter = "initial";
        }
    }
}
function shuffle(array) {
    var j = 0;
    var temp = null;
    for (var i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
var getOffset = function (x) {
    var el = x.getBoundingClientRect();
    return {
        left: el.left + window.scrollX,
        top: el.top + window.scrollY
    };
};
var audio = function (file) {
    var audio = new Audio(file);
    audio.play();
};
function ConstHTML(tag, _id, _class, parent) {
    var attrib = [];
    for (var _i = 4; _i < arguments.length; _i++) {
        attrib[_i - 4] = arguments[_i];
    }
    var x = document.createElement(tag);
    if (_id) {
        x.setAttribute("id", _id);
    }
    if (_class) {
        x.setAttribute("class", _class);
    }
    for (var i = 0; i < attrib.length; i++) {
        atr = attrib[i].substring(attrib[i].lastIndexOf('"') + 1, attrib[i].lastIndexOf('&'));
        val = attrib[i].substring(attrib[i].lastIndexOf('&') + 1);
        x.setAttribute(atr, val);
    }
    parent.appendChild(x);
    this._id = $(_id);
    this["class"] = $c(_class);
    this.papa = $(parent.id);
}
var killPapa = function (x) {
    x.parentNode.remove();
};
var killGrandpa = function (x) {
    x.parentNode.parentNode.remove();
};
function DateTime(style, date, time) {
    var d = new Date();
    var date_separator;
    var time_separator;
    var datetime_separator;
    if (style === 0) {
        date_separator = "";
        time_separator = "";
        datetime_separator = "";
    }
    if (style === 1) {
        date_separator = "_";
        time_separator = "_";
        datetime_separator = "_";
    }
    if (style === 2) {
        date_separator = "/";
        time_separator = ":";
        datetime_separator = " ";
    }
    var _date = d.getDate() + date_separator + d.getMonth() + date_separator + d.getFullYear();
    var _time = d.getHours() + time_separator + d.getMinutes() + time_separator + d.getSeconds();
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
function TypeW(id, speed) {
    var el = document.getElementById(id);
    var arr = el.getElementsByTagName("pre")[0].innerHTML.split("");
    var newpre = document.createElement("pre");
    el.appendChild(newpre);
    el.getElementsByTagName("pre")[0].remove();
    var createdSpans = document.getElementById(id).getElementsByTagName("span");
    var _loop_1 = function (i) {
        var span = document.createElement("span");
        newpre.appendChild(span);
        createdSpans[i].innerHTML = arr[i];
        createdSpans[i].style.opacity = "0";
        createdSpans[i].style.transitionDelay = "0s";
        setTimeout(function () {
            createdSpans[i].style.opacity = "1";
        }, i * speed);
    };
    for (var i = 0; i < arr.length; i++) {
        _loop_1(i);
    }
}
function Prompt(w, h, promptName, promptId) {
    var wMetric = w + "vh";
    var hMetric = h + "vh";
    var basicPromptDiv = $cE("div");
    var basicPromptName = $cE("span");
    var basicPromptContent = $cE("div");
    var promptButtonsDiv = $cE("div");
    basicPromptDiv.setAttribute("class", "promptMixin");
    basicPromptDiv.setAttribute("id", promptId);
    thisPromptId = basicPromptDiv.id;
    basicPromptDiv.style.width = wMetric;
    basicPromptDiv.style.height = hMetric;
    basicPromptDiv.style.top = "calc(50vh - " + h / 2 + "vh" + ")";
    basicPromptDiv.style.left = "calc(50vw - " + w / 2 + "vh" + ")";
    basicPromptName.setAttribute("class", "promptNameSpan");
    basicPromptName.innerHTML = promptName;
    basicPromptContent.setAttribute("class", "promptContent");
    basicPromptContent.style["text-align"] = direction;
    promptButtonsDiv.setAttribute("class", "promptButtonsDiv");
    basicPromptDiv.appendChild(basicPromptName);
    basicPromptDiv.appendChild(basicPromptContent);
    basicPromptDiv.appendChild(promptButtonsDiv);
    document.body.appendChild(basicPromptDiv);
    $("blackDiv").style.display = "flex";
    basicPromptDiv.appendChild(promptButtonsDiv);
    promptDrag = $cE("span");
    promptDrag.setAttribute("class", "promptDrag");
    basicPromptDiv.appendChild(promptDrag);
    drag(promptDrag);
    drag(basicPromptName);
    setTimeout(function () {
        reqField(basicPromptDiv);
    }, 50);
    this.promptButton = function (buttonText, buttonFunction, buttonType) {
        promptButtonSpan = $cE("input");
        promptButtonSpan.setAttribute("class", "promptButtonSpan");
        promptButtonSpan.setAttribute("onclick", buttonFunction);
        promptButtonSpan.setAttribute("type", buttonType);
        promptButtonsDiv.appendChild(promptButtonSpan);
        promptButtonSpan.value = buttonText;
    };
    this.promptSpan = function (spanText, center) {
        promptSpan = $cE("span");
        promptSpan.setAttribute("class", "promptSpan");
        if (center === 1) {
            promptSpan.setAttribute("class", "promptSpan center");
        }
        basicPromptContent.appendChild(promptSpan);
        promptSpan.innerHTML = spanText;
    };
    this.promptWindow = function (w, h) {
        var promptWindow = $cE("div");
        promptWindow.setAttribute("class", "promptWindow");
        promptWindow.setAttribute("id", "promptWindow");
        promptWindow.style["text-align"] = direction;
        promptWindow.style.height = h + "%";
        promptWindow.style.width = w + "%";
        basicPromptContent.appendChild(promptWindow);
    };
    this.promptInput = function (inputHeader, inputType, inputPattern, req, counter) {
        var inputId = thisPromptId + "_input";
        var inputName = inputId;
        promptInputDiv = $cE("div");
        promptInputDiv.setAttribute("class", "inputDiv");
        promptInputDiv.style["text-align"] = direction;
        promptInput = $cE("input");
        promptInput.setAttribute("id", inputId + counter);
        promptInput.setAttribute("name", inputName);
        promptInput.setAttribute("class", "inputClass");
        promptInput.setAttribute("type", inputType);
        promptInput.setAttribute("pattern", inputPattern);
        var inputHeaderSpan = $cE("span");
        inputHeaderSpan.innerHTML = inputHeader;
        basicPromptContent.appendChild(promptInputDiv);
        promptInputDiv.appendChild(inputHeaderSpan);
        promptInputDiv.appendChild(promptInput);
        if (req) {
            promptInput.required = true;
            promptInput.className += " requiredField";
            if (promptInput.previousSibling.className === "") {
                promptInput.previousSibling.className = "asterix";
            }
            else {
                promptInput.previousSibling.className += " asterix";
            }
        }
    };
    this.promptTextArea = function (inputHeader, cols, rows, counter) {
        var inputId = thisPromptId + "_textarea";
        var inputName = inputId;
        promptTextAreaDiv = $cE("div");
        promptTextAreaDiv.setAttribute("class", "inputDiv");
        promptTextAreaDiv.style["text-align"] = direction;
        promptTextArea = $cE("textarea");
        promptTextArea.setAttribute("id", inputId + counter);
        promptTextArea.setAttribute("name", inputName);
        promptTextArea.setAttribute("class", "inputClass");
        promptTextArea.setAttribute("rows", rows);
        promptTextArea.setAttribute("cols", cols);
        inputHeaderSpan = $cE("span");
        inputHeaderSpan.innerHTML = inputHeader;
        basicPromptContent.appendChild(promptTextAreaDiv);
        promptTextAreaDiv.appendChild(inputHeaderSpan);
        promptTextAreaDiv.appendChild(promptTextArea);
    };
}
function Alert(alert_text, alert_id, cancelEverything) {
    if (cancelEverything === 0) {
        cancelType = "cancel(this, 0);";
    }
    if (cancelEverything === 1) {
        cancelType = "cancel(this, 1);";
    }
    if (cancelEverything === 2) {
        cancelType = "cancel(this, 2);";
    }
    var alert_prompt = new Prompt(40, 30, text_message_text, alert_id);
    alert_prompt.id = alert_id;
    alert_prompt.promptSpan(alert_text);
    alert_prompt.promptButton(approuveButtonValue, cancelType, "button");
    alert_header = $(alert_id).getElementsByClassName("promptNameSpan")[0];
    alert_header.className += " red";
    $("blackDiv").style.zIndex = "101";
    $(alert_id).style.zIndex = "102";
    $(alert_id).className += " alertPrompt";
}
function PromptYesNo(yesno_text, yesno_id, cancelEverything, func) {
    if (cancelEverything === 0) {
        cancelType = "cancel(this, 0);";
    }
    if (cancelEverything === 1) {
        cancelType = "cancel(this, 1);";
    }
    if (cancelEverything === 2) {
        cancelType = "cancel(this, 2);";
    }
    var yesno_prompt = new Prompt(40, 30, text_message_text, yesno_id);
    yesno_prompt.id = yesno_id;
    yesno_prompt.promptSpan(yesno_text);
    yesno_prompt.promptButton(cancelButtonValue, cancelType, "button");
    yesno_prompt.promptButton(approuveButtonValue, func, "button");
    yesno_header = $(yesno_id).getElementsByClassName("promptNameSpan")[0];
    yesno_header.className += " red";
    $("blackDiv").style.zIndex = "101";
    $(yesno_id).style.zIndex = "102";
    $(yesno_id).className += " yesnoPrompt";
}
function reqField(x) {
    var requiredField = x.getElementsByClassName("requiredField");
    if (requiredField.length > 1) {
        requiredField.required = true;
        requiredDiv = $cE("div");
        requiredSpan = $cE("span");
        requiredSpan.setAttribute("class", "red small asterix");
        requiredDiv.style["text-align"] = direction;
        requiredDiv.setAttribute("class", "isReq");
        requiredSpan.innerHTML = reqFieldS_text;
        if (requiredField.length === 1) {
            requiredSpan.innerHTML = reqFielD_text;
        }
        basicPromptContent.appendChild(requiredDiv);
        requiredDiv.appendChild(requiredSpan);
    }
}
function cancel(cancelButton, after) {
    r_emove(cancelButton.parentNode.parentNode);
    if (after === 0) {
        $("blackDiv").style.display = "none";
        var el = $c("promptMixin")[0];
        if (el) {
            r_emove(el);
        }
    }
    if (after === 1) {
        $("blackDiv").style.display = "flex";
    }
    if (after === 2) {
        var el = $c("promptMixin")[0];
        if (el) {
            r_emove(el);
        }
        setTimeout(function () {
            remote.getCurrentWindow().reload();
        }, 100);
    }
    $("blackDiv").style.zIndex = "10";
}
function About(softName, version, developer, license, webSite) {
    new Alert("", "aboutAlert", 0);
    var aboutAlert = $("aboutAlert");
    aboutAlert.getElementsByClassName("promptNameSpan")[0].innerHTML = softName;
    aboutAlert.getElementsByClassName("promptNameSpan")[0].innerHTML = softName;
    var promptContent = aboutAlert.getElementsByClassName("promptContent")[0];
    promptContent.setAttribute("id", "aboutContentDiv");
    promptContent.parentNode.style.height = "60" + "vh";
    promptContent.parentNode.style.width = "60" + "vh";
    promptContent.parentNode.style.top = "20" + "vh";
    promptContent.parentNode.style.left = "calc(50" + "vw" + " - 30" + "vh" + ")";
    var promptSpan = $("aboutAlert").getElementsByClassName("promptSpan")[0];
    promptSpan.setAttribute("id", "aboutContentSpan");
    promptSpan.innerHTML = "<img src='assets/icons/menuIconsVectors/100.svg'>";
    var versionSpan = $cE("span");
    versionSpan.innerHTML = softName + " v" + version;
    var developerSpan = $cE("span");
    developerSpan.innerHTML = "Created by " + developer;
    var licenseSpan = $cE("span");
    licenseSpan.innerHTML = "License: " + "<span id='showLicenseSpan' onclick='showLicense(" + '"' + license + '"' + ")'>" + license + "</span>";
    var webSiteSpan = $cE("span");
    webSiteSpan.setAttribute("onclick", "goToWebSite()");
    goToWebSite = function () {
        if (opn) {
            opn("http://" + webSite);
        }
        else {
            window.location = "http://" + webSite;
        }
    };
    webSiteSpan.innerHTML = "Please visit " + "<span id='urlWebSiteSpan'>" + webSite + "</span>";
    aboutInfoDiv = $cE("div");
    aboutInfoDiv.setAttribute("id", "aboutInfoDiv");
    promptContent.appendChild(aboutInfoDiv);
    aboutInfoDiv.appendChild(versionSpan);
    aboutInfoDiv.appendChild(developerSpan);
    aboutInfoDiv.appendChild(licenseSpan);
    aboutInfoDiv.appendChild(webSiteSpan);
}
function showLicense(licenseFile) {
    var mainPathToData = app.getPath("userData") + "/.Data/";
    var promptShowLicense = new Prompt(70, 90, text_license_text, "showLicense");
    promptShowLicense.promptButton(approuveButtonValue, "cancel(this, 1);", "button");
    promptShowLicense.promptWindow(80, 76);
    var x = mainPathToData + licenseFile + ".txt";
    licenseWindowClass = $c("promptWindow")[0];
    licenseWindowClass.style.textAlign = "left";
    licenseWindowClass.innerHTML = fs.readFileSync(x, 'utf8');
}
function SearchPrompt(arr, fun, exitFun, imgArr, id) {
    var SearchPromptPrompt = new Prompt(50, 70, text_clientList_text, "SearchPromptPrompt" + id);
    var win = SearchPromptPrompt.promptWindow(80, 50);
    SearchPromptPrompt.promptButton(cancelButtonValue, exitFun, "button");
    SearchPromptPrompt.promptInput("", "text", "", 0, 0);
    el = $("SearchPromptPrompt" + id).getElementsByTagName("input")[0];
    el.setAttribute("onkeyup", "searchFromDataFun()");
    el.style.backgroundPosition = direction;
    el.parentNode.className += " search";
    searchFromDataFun = function () {
        var filter = el.value;
        var clientSpan = $c("searchDataSpan");
        for (var i = 0; i < clientSpan.length; i++) {
            n = clientSpan[i].getElementsByTagName("span")[0];
            if (n.innerHTML.indexOf(filter) > -1) {
                clientSpan[i].style.display = "";
            }
            else {
                clientSpan[i].style.display = "none";
            }
        }
    };
    for (var i = 0; i < arr.length; i++) {
        if (imgArr === true) {
            searchDataImg = document.createElement("img");
            searchDataImg.setAttribute("class", "searchDataImg");
            searchDataImg.setAttribute("src", imgArr[i]);
            searchDataSpan.appendChild(searchDataImg);
        }
        searchDataSpan = document.createElement("span");
        searchDataSpan.setAttribute("class", "searchDataSpan");
        searchDataSpan.classList.add("searchDataSpan" + id);
        $c("promptWindow")[0].appendChild(searchDataSpan);
        searchDataName = document.createElement("span");
        searchDataName.setAttribute("class", "searchDataName");
        if (fun) {
            searchDataSpan.addEventListener("click", function () {
                fun();
            });
        }
        searchDataSpan.appendChild(searchDataName);
        for (var i_1 = 0; i_1 < document.getElementsByClassName("searchDataName").length; i_1++) {
            document.getElementsByClassName("searchDataName")[i_1].innerHTML = arr[i_1];
        }
    }
}
function maximizePrompt(x, content, contentH) {
    x.parentNode.style.width = "100vw";
    x.parentNode.style.height = "100vh";
    x.parentNode.style.top = "0";
    x.parentNode.style.left = "0";
    content.style.height = contentH + "px";
    x.parentNode.style.borderRadius = "0";
    x.style.borderRadius = "0";
}
function closeSP() {
    new PromptYesNo(closeSP_text, "Sd", 1, "(function() {r_emove($c('sP_promptMixin')[0]); r_emove($c('yesnoPrompt')[0]); $('blackDiv').style.display = 'none';$('blackDiv').style.zIndex = '10';})();");
}
var sP_promptContent_Height;
function SuperPrompt(w, h, promptName, promptId, grids, submitFunc, moreFunction) {
    sP_wMetric = w + "vw";
    sP_hMetric = h + "vh";
    sP_basicPromptDiv = $cE("div");
    sP_basicPromptName = $cE("span");
    sP_basicPromptDiv.setAttribute("class", "sP_promptMixin");
    sP_basicPromptDiv.setAttribute("id", promptId);
    sP_thisPromptId = sP_basicPromptDiv.id;
    sP_basicPromptDiv.style.width = sP_wMetric;
    sP_basicPromptDiv.style.height = sP_hMetric;
    sP_basicPromptDiv.style.top = "calc(50vh - " + h / 2 + "vh" + ")";
    sP_basicPromptDiv.style.left = "calc(50vw - " + w / 2 + "vw" + ")";
    sP_basicPromptName.setAttribute("class", "sP_promptNameSpan");
    sP_basicPromptName.innerHTML = promptName;
    document.body.appendChild(sP_basicPromptDiv);
    $("blackDiv").style.display = "flex";
    sP_promptDrag = $cE("span");
    sP_promptDrag_closeBut = $cE("img");
    sP_promptDrag_maxBut = $cE("img");
    sP_promptDrag_closeBut.setAttribute("src", menuIconsImagesFolder + "window-close.svg");
    sP_promptDrag_closeBut.setAttribute("onclick", "closeSP()");
    sP_promptDrag_maxBut.setAttribute("src", menuIconsImagesFolder + "window-maximize.svg");
    sP_promptDrag.setAttribute("class", "sP_promptDrag");
    sP_promptDrag.setAttribute("id", sP_thisPromptId + "sP_promptDrag");
    sP_basicPromptDiv.appendChild(sP_promptDrag);
    sP_promptDrag.appendChild(sP_basicPromptName);
    sP_promptDrag.appendChild(sP_promptDrag_closeBut);
    sP_promptDrag.appendChild(sP_promptDrag_maxBut);
    drag(sP_promptDrag, moreFunction);
    sp_buttonSubmitCancel_div = $cE("div");
    sp_buttonSubmitCancel_div.setAttribute("class", "sp_buttonSubmitCancel_div");
    sp_buttonSubmit = $cE("input");
    sp_buttonSubmit.setAttribute("type", "button");
    sp_buttonSubmit.setAttribute("onclick", submitFunc);
    sp_buttonSubmit.setAttribute("class", "sp_buttonSubmitCancel");
    sp_buttonSubmit.value = submitButtonValue;
    sp_buttonCancel = $cE("input");
    sp_buttonCancel.setAttribute("type", "button");
    sp_buttonCancel.setAttribute("onclick", "cancel(this, 0)");
    sp_buttonCancel.setAttribute("class", "sp_buttonSubmitCancel");
    sp_buttonCancel.value = cancelButtonValue;
    sP_basicPromptDiv.appendChild(sp_buttonSubmitCancel_div);
    sp_buttonSubmitCancel_div.appendChild(sp_buttonSubmit);
    sp_buttonSubmitCancel_div.appendChild(sp_buttonCancel);
    var buttonsSizeH = $c("sp_buttonSubmitCancel_div")[0].offsetHeight;
    var headSizeH = $c("sP_promptDrag")[0].offsetHeight;
    var buttonBottom = sP_promptContent_Height = sP_basicPromptDiv.offsetHeight - (parseInt(buttonsSizeH) + parseInt(headSizeH));
    sP_basicPromptContent = $cE("div");
    sP_basicPromptContent.setAttribute("class", "sP_promptContent");
    sP_basicPromptContent.setAttribute("id", promptId + "_sP_promptContent");
    sP_basicPromptContent.style["text-align"] = direction;
    sP_basicPromptContent.style.height = sP_promptContent_Height + "px";
    sP_basicPromptDiv.appendChild(sP_basicPromptContent);
    setTimeout(function () {
        reqField(sP_basicPromptDiv);
    }, 50);
    sP_promptDrag_maxBut.setAttribute("onclick", "maximizePrompt(this.parentNode, sP_basicPromptContent, sP_promptContent_Height)");
    sP_promptDrag.setAttribute("ondblclick", "maximizePrompt(this, sP_basicPromptContent, sP_promptContent_Height)");
    var zero = 0;
    for (var i = 0; i < grids; i++) {
        var counter = zero++;
        gridElement = $cE("div");
        gridElement.setAttribute("class", promptId + "_sP_promptGridEl");
        gridElement.setAttribute("id", promptId + "_sP_promptGridEl_" + counter);
        sP_basicPromptContent.appendChild(gridElement);
        sP_basicPromptContent.style.display = "grid";
    }
    resizable(sP_thisPromptId, sP_basicPromptContent, moreFunction);
}
function resizable(id, inner, moreFunction) {
    var innerMath;
    var initResize = function (e) {
        window.addEventListener("mousemove", Resize, false);
        window.addEventListener("mouseup", stopResize, false);
        innerMath = $(id).offsetHeight - inner.offsetHeight;
    };
    var WinH = window.innerHeight;
    var Resize = function (e) {
        if (moreFunction) {
            moreFunction();
        }
        var stopWidth = element.offsetWidth;
        var stopHeight = element.offsetHeight;
        element.style.width = (e.clientX - element.offsetLeft) + "px";
        element.style.height = (e.clientY - element.offsetTop) + "px";
        inner.style.height = ((e.clientY - element.offsetTop) - innerMath) + "px";
        document.body.style.cursor = "se-resize";
        if (stopWidth < 350) {
            element.style.width = "390px";
            element.style.transition = "0.3s";
            setTimeout(function () {
                element.style.transition = "0s";
            }, 300);
            stopResize(e);
        }
        if (stopHeight < (WinH / 2)) {
            element.style.height = (WinH / 2) + 20 + "px";
            inner.style.height = ((WinH / 2) - innerMath) + 20 + "px";
            element.style.transition = "0.3s";
            setTimeout(function () {
                element.style.transition = "0s";
            }, 300);
            stopResize(e);
        }
    };
    var stopResize = function (e) {
        window.removeEventListener("mousemove", Resize, false);
        window.removeEventListener("mouseup", stopResize, false);
        document.body.style.cursor = "initial";
    };
    var element = $(id);
    var resizer = $cE("div");
    resizer.setAttribute("class", "resizer");
    resizer.style.position = "absolute";
    if (direction === "right") {
        resizer.style.borderTopLeftRadius = "50%";
    }
    if (direction === "left") {
        resizer.style.borderTopRightRadius = "50%";
    }
    resizer.style[direction] = 0;
    resizer.style.bottom = 0;
    resizer.style.cursor = "se-resize";
    element.appendChild(resizer);
    resizer.addEventListener("mousedown", initResize, false);
}
function drag(elmnt, moreFunction) {
    var WinH = window.innerHeight;
    var WinW = window.innerWidth;
    var dragMouseDown = function (e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    };
    var elementDrag = function (e) {
        if (moreFunction) {
            moreFunction();
        }
        ;
        if (elmnt.parentNode) {
            elmnt.parentNode.style.borderTopRightRadius = "1vh";
            elmnt.parentNode.style.borderTopLeftRadius = "1vh";
        }
        elmnt.style.borderTopRightRadius = "1vh";
        elmnt.style.borderTopLeftRadius = "1vh";
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.parentNode.style.top = elmnt.parentNode.offsetTop - pos2 + "px";
        elmnt.parentNode.style.left = elmnt.parentNode.offsetLeft - pos1 + "px";
        if (elmnt.parentNode.offsetTop < -30) {
            elmnt.parentNode.style.top = "0px";
            elmnt.parentNode.style.transition = "0.3s";
            setTimeout(function () {
                elmnt.parentNode.style.transition = "0s";
            }, 300);
            closeDragElement();
        }
        if (elmnt.parentNode.offsetTop > (WinH - 30)) {
            elmnt.parentNode.style.top = (WinH - 60) + "px";
            elmnt.parentNode.style.transition = "0.3s";
            setTimeout(function () {
                elmnt.parentNode.style.transition = "0s";
            }, 300);
            closeDragElement();
        }
        if (elmnt.parentNode.offsetLeft > (WinW - 90)) {
            elmnt.parentNode.style.left = (WinW - 120) + "px";
            elmnt.parentNode.style.transition = "0.3s";
            setTimeout(function () {
                elmnt.parentNode.style.transition = "0s";
            }, 300);
            closeDragElement();
        }
        if (elmnt.parentNode.style.left.replace(/[^\d-]/g, '') < -300) {
            elmnt.parentNode.style.left = "-200" + "px";
            elmnt.parentNode.style.transition = "0.3s";
            setTimeout(function () {
                elmnt.parentNode.style.transition = "0s";
            }, 300);
            closeDragElement();
        }
    };
    var closeDragElement = function () {
        document.onmouseup = null;
        document.onmousemove = null;
    };
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if ($(elmnt.id + "header")) {
        $(elmnt.id + "header").onmousedown = dragMouseDown;
    }
    else {
        elmnt.onmousedown = dragMouseDown;
    }
}
function k(e) {
    if (e.keyCode === 13) {
    }
}
