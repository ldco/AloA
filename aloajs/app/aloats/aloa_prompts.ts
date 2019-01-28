function Prompt(w, h, promptName, promptId) {
    let wMetric = w + "vh";
    let hMetric = h + "vh";
    let basicPromptDiv = $cE("div");
    let basicPromptName = $cE("span");
    let basicPromptContent = $cE("div");
    let promptButtonsDiv = $cE("div");
    basicPromptDiv.setAttribute("class", "promptMixin");
    basicPromptDiv.setAttribute("id", promptId);
    let thisPromptId = basicPromptDiv.id;
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
    let promptDrag = $cE("span");
    promptDrag.setAttribute("class", "promptDrag");
    basicPromptDiv.appendChild(promptDrag);
    drag(promptDrag);
    drag(basicPromptName);
    setTimeout(() => {
        reqField(basicPromptDiv);
    }, 50);
    this.promptButton = function (buttonText, buttonFunction, buttonType) {
        let promptButtonSpan = $cE("input");
        promptButtonSpan.setAttribute("class", "promptButtonSpan");
        promptButtonSpan.setAttribute("onclick", buttonFunction);
        promptButtonSpan.setAttribute("type", buttonType);
        promptButtonsDiv.appendChild(promptButtonSpan);
        promptButtonSpan.value = buttonText;
    };
    this.promptSpan = function (spanText, center) {
        let promptSpan = $cE("span");
        promptSpan.setAttribute("class", "promptSpan");
        if (center === 1) {
            promptSpan.setAttribute("class", "promptSpan center");
        }
        basicPromptContent.appendChild(promptSpan);
        promptSpan.innerHTML = spanText;
    };
    this.promptWindow = function (w, h) {
        let promptWindow = $cE("div");
        promptWindow.setAttribute("class", "promptWindow");
        promptWindow.setAttribute("id", "promptWindow");
        promptWindow.style["text-align"] = direction;
        promptWindow.style.height = h + "%";
        promptWindow.style.width = w + "%";
        basicPromptContent.appendChild(promptWindow);
    }
        ;
    this.promptInput = function (inputHeader, inputType, inputPattern, req, counter) {
        let inputId = thisPromptId + "_input";
        let inputName = inputId;
        let promptInputDiv = $cE("div");
        promptInputDiv.setAttribute("class", "inputDiv");
        promptInputDiv.style["text-align"] = direction;
        let promptInput = $cE("input");
        promptInput.setAttribute("id", inputId + counter);
        promptInput.setAttribute("name", inputName);
        promptInput.setAttribute("class", "inputClass");
        promptInput.setAttribute("type", inputType);
        promptInput.setAttribute("pattern", inputPattern);
        let inputHeaderSpan = $cE("span");
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
    }
        ;
    this.promptTextArea = function (inputHeader, cols, rows, counter) {
        let inputId = thisPromptId + "_textarea";
        let inputName = inputId;
        let promptTextAreaDiv = $cE("div");
        promptTextAreaDiv.setAttribute("class", "inputDiv");
        promptTextAreaDiv.style["text-align"] = direction;
        let promptTextArea = $cE("textarea");
        promptTextArea.setAttribute("id", inputId + counter);
        promptTextArea.setAttribute("name", inputName);
        promptTextArea.setAttribute("class", "inputClass");
        promptTextArea.setAttribute("rows", rows);
        promptTextArea.setAttribute("cols", cols);
        let inputHeaderSpan = $cE("span");
        inputHeaderSpan.innerHTML = inputHeader;
        basicPromptContent.appendChild(promptTextAreaDiv);
        promptTextAreaDiv.appendChild(inputHeaderSpan);
        promptTextAreaDiv.appendChild(promptTextArea);
    }
        ;
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
    let alert_prompt = new Prompt(40, 30, text_message_text, alert_id);
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
    let yesno_prompt = new Prompt(40, 30, text_message_text, yesno_id);
    yesno_prompt.id = yesno_id;
    yesno_prompt.promptSpan(yesno_text);
    yesno_prompt.promptButton(cancelButtonValue, cancelType, "button");
    yesno_prompt.promptButton(approuveButtonValue, func, "button");
    let yesno_header = $(yesno_id).getElementsByClassName("promptNameSpan")[0];
    yesno_header.className += " red";
    $("blackDiv").style.zIndex = "101";
    $(yesno_id).style.zIndex = "102";
    $(yesno_id).className += " yesnoPrompt";
}

function reqField(x) {
    let requiredField = x.getElementsByClassName("requiredField");
    if (requiredField.length > 1) {
        requiredField.required = true;
        let requiredDiv = $cE("div");
        let requiredSpan = $cE("span");
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
        let el = $c("promptMixin")[0];
        if (el) {
            r_emove(el);
        }
    }
    if (after === 1) {
        $("blackDiv").style.display = "flex";
    }
    if (after === 2) {
        let el = $c("promptMixin")[0];
        if (el) {
            r_emove(el);
        }
        setTimeout(() => {
            remote.getCurrentWindow().reload();
        }
            , 100);
    }
    $("blackDiv").style.zIndex = "10";
}

/*about info*/

function About(softName, version, developer, license, webSite) {
    new Alert("", "aboutAlert", 0);
    let aboutAlert = $("aboutAlert");
    aboutAlert.getElementsByClassName("promptNameSpan")[0].innerHTML = softName;
    aboutAlert.getElementsByClassName("promptNameSpan")[0].innerHTML = softName;
    let promptContent = aboutAlert.getElementsByClassName("promptContent")[0];
    promptContent.setAttribute("id", "aboutContentDiv");
    promptContent.parentNode.style.height = "60" + "vh";
    promptContent.parentNode.style.width = "60" + "vh";
    promptContent.parentNode.style.top = "20" + "vh";
    promptContent.parentNode.style.left = "calc(50" + "vw" + " - 30" + "vh" + ")";
    let promptSpan = $("aboutAlert").getElementsByClassName("promptSpan")[0];
    promptSpan.setAttribute("id", "aboutContentSpan");
    promptSpan.innerHTML = "<img src='assets/icons/menuIconsVectors/100.svg'>";
    let versionSpan = $cE("span");
    versionSpan.innerHTML = softName + " v" + version;
    let developerSpan = $cE("span");
    developerSpan.innerHTML = "Created by " + developer;
    let licenseSpan = $cE("span");
    licenseSpan.innerHTML = "License: " + "<span id='showLicenseSpan' onclick='showLicense(" + '"' + license + '"' + ")'>" + license + "</span>";
    let webSiteSpan = $cE("span");
    webSiteSpan.setAttribute("onclick", "goToWebSite()");
    const goToWebSite = function () {
        if (opn) { opn("http://" + webSite); }
        else { window.location = "http://" + webSite; }

    }
        ;
    webSiteSpan.innerHTML = "Please visit " + "<span id='urlWebSiteSpan'>" + webSite + "</span>";
    let aboutInfoDiv = $cE("div");
    aboutInfoDiv.setAttribute("id", "aboutInfoDiv");
    promptContent.appendChild(aboutInfoDiv);
    aboutInfoDiv.appendChild(versionSpan);
    aboutInfoDiv.appendChild(developerSpan);
    aboutInfoDiv.appendChild(licenseSpan);
    aboutInfoDiv.appendChild(webSiteSpan);
}

function showLicense(licenseFile) {
    let mainPathToData = app.getPath("userData") + "/.Data/";
    let promptShowLicense = new Prompt(70, 90, text_license_text, "showLicense");
    promptShowLicense.promptButton(approuveButtonValue, "cancel(this, 1);", "button");
    promptShowLicense.promptWindow(80, 76);
    let x = mainPathToData + licenseFile + ".txt";
    let licenseWindowClass = $c("promptWindow")[0];
    licenseWindowClass.style.textAlign = "left";
    licenseWindowClass.innerHTML = fs.readFileSync(x, 'utf8');
}

//SEARCH AND GET FROM DATA
function SearchPrompt(arr, fun, exitFun, imgArr, id) {

    let SearchPromptPrompt = new Prompt(50, 70, text_clientList_text, "SearchPromptPrompt" + id);
    let win = SearchPromptPrompt.promptWindow(80, 50);
    SearchPromptPrompt.promptButton(cancelButtonValue, exitFun, "button");

    SearchPromptPrompt.promptInput("", "text", "", 0, 0);
    let el = $("SearchPromptPrompt" + id).getElementsByTagName("input")[0];
    el.setAttribute("onkeyup", "searchFromDataFun()");
    el.style.backgroundPosition = direction;
    el.parentNode.className += " search";

    const searchFromDataFun = function () {

        let filter = el.value;
        let clientSpan = $c("searchDataSpan");
        for (let i = 0;
            i < clientSpan.length;
            i++) {
            let n = clientSpan[i].getElementsByTagName("span")[0];
            if (n.innerHTML.indexOf(filter) > -1) {
                clientSpan[i].style.display = "";
            }
            else {
                clientSpan[i].style.display = "none";
            }
        }
    };

    for (let i = 0;
        i < arr.length;
        i++) {
        if (imgArr === true) {
            let searchDataImg = document.createElement("img");
            searchDataImg.setAttribute("class", "searchDataImg");
            searchDataImg.setAttribute("src", imgArr[i]);
            searchDataSpan.appendChild(searchDataImg);
        }
        let searchDataSpan = document.createElement("span");
        searchDataSpan.setAttribute("class", "searchDataSpan");
        searchDataSpan.classList.add("searchDataSpan" + id);

        $c("promptWindow")[0].appendChild(searchDataSpan);
        let searchDataName = document.createElement("span");

        searchDataName.setAttribute("class", "searchDataName");
        if (fun) {
            searchDataSpan.addEventListener("click", function () {
                fun();

            });

        }
        searchDataSpan.appendChild(searchDataName);
        for (let i = 0; i < document.getElementsByClassName("searchDataName").length; i++) {
            document.getElementsByClassName("searchDataName")[i].innerHTML = arr[i];
        }
    }

}

//more complicated prompt
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

let sP_promptContent_Height;
function SuperPrompt(w, h, promptName, promptId, grids, submitFunc, moreFunction) {
    let sP_wMetric = w + "vw";
    let sP_hMetric = h + "vh";
    let sP_basicPromptDiv = $cE("div");
    let sP_basicPromptName = $cE("span");
    sP_basicPromptDiv.setAttribute("class", "sP_promptMixin");
    sP_basicPromptDiv.setAttribute("id", promptId);
    let sP_thisPromptId = sP_basicPromptDiv.id;
    sP_basicPromptDiv.style.width = sP_wMetric;
    sP_basicPromptDiv.style.height = sP_hMetric;
    sP_basicPromptDiv.style.top = "calc(50vh - " + h / 2 + "vh" + ")";
    sP_basicPromptDiv.style.left = "calc(50vw - " + w / 2 + "vw" + ")";
    sP_basicPromptName.setAttribute("class", "sP_promptNameSpan");
    sP_basicPromptName.innerHTML = promptName;
    document.body.appendChild(sP_basicPromptDiv);
    $("blackDiv").style.display = "flex"; //head bar
    let sP_promptDrag = $cE("span");
    let sP_promptDrag_closeBut = $cE("img");
    let sP_promptDrag_maxBut = $cE("img");
    sP_promptDrag_closeBut.setAttribute("src", menuIconsImagesFolder + "window-close.svg");
    sP_promptDrag_closeBut.setAttribute("onclick", "closeSP()");
    sP_promptDrag_maxBut.setAttribute("src", menuIconsImagesFolder + "window-maximize.svg");
    sP_promptDrag.setAttribute("class", "sP_promptDrag");
    sP_promptDrag.setAttribute("id", sP_thisPromptId + "sP_promptDrag");
    sP_basicPromptDiv.appendChild(sP_promptDrag);
    sP_promptDrag.appendChild(sP_basicPromptName);
    sP_promptDrag.appendChild(sP_promptDrag_closeBut);
    sP_promptDrag.appendChild(sP_promptDrag_maxBut);
    drag(sP_promptDrag, moreFunction); //buttons
    sp_buttonSubmitCancel_div = $cE("div");
    sp_buttonSubmitCancel_div.setAttribute("class", "sp_buttonSubmitCancel_div");
    let sp_buttonSubmit = $cE("input");
    sp_buttonSubmit.setAttribute("type", "button");
    sp_buttonSubmit.setAttribute("onclick", submitFunc);
    sp_buttonSubmit.setAttribute("class", "sp_buttonSubmitCancel");
    sp_buttonSubmit.value = submitButtonValue;
    let sp_buttonCancel = $cE("input");
    sp_buttonCancel.setAttribute("type", "button");
    sp_buttonCancel.setAttribute("onclick", "cancel(this, 0)");
    sp_buttonCancel.setAttribute("class", "sp_buttonSubmitCancel");
    sp_buttonCancel.value = cancelButtonValue;
    sP_basicPromptDiv.appendChild(sp_buttonSubmitCancel_div);
    sp_buttonSubmitCancel_div.appendChild(sp_buttonSubmit);
    sp_buttonSubmitCancel_div.appendChild(sp_buttonCancel); //content
    let buttonsSizeH = $c("sp_buttonSubmitCancel_div")[0].offsetHeight;
    let headSizeH = $c("sP_promptDrag")[0].offsetHeight;
    let buttonBottom = sP_promptContent_Height = sP_basicPromptDiv.offsetHeight - (parseInt(buttonsSizeH) + parseInt(headSizeH));
    let sP_basicPromptContent = $cE("div");
    sP_basicPromptContent.setAttribute("class", "sP_promptContent");
    sP_basicPromptContent.setAttribute("id", promptId + "_sP_promptContent");
    sP_basicPromptContent.style["text-align"] = direction;
    sP_basicPromptContent.style.height = sP_promptContent_Height + "px";
    sP_basicPromptDiv.appendChild(sP_basicPromptContent); //reqFields for inputs
    setTimeout(() => {
        reqField(sP_basicPromptDiv);
    }
        , 50); //heads ui buttons
    sP_promptDrag_maxBut.setAttribute("onclick", "maximizePrompt(this.parentNode, sP_basicPromptContent, sP_promptContent_Height)");
    sP_promptDrag.setAttribute("ondblclick", "maximizePrompt(this, sP_basicPromptContent, sP_promptContent_Height)");
    let zero = 0; //grids
    for (let i = 0;
        i < grids;
        i++) {
        let counter = zero++;
        let gridElement = $cE("div");
        gridElement.setAttribute("class", promptId + "_sP_promptGridEl");
        gridElement.setAttribute("id", promptId + "_sP_promptGridEl_" + counter);
        sP_basicPromptContent.appendChild(gridElement);
        sP_basicPromptContent.style.display = "grid";
    }
    resizable(sP_thisPromptId, sP_basicPromptContent, moreFunction);
}

//resize!
function resizable(id, inner, moreFunction) {
    let innerMath;
    const initResize = (e) => {
        window.addEventListener("mousemove", Resize, false);
        window.addEventListener("mouseup", stopResize, false);
        innerMath = $(id).offsetHeight - inner.offsetHeight;
    }
        ;
    let WinH = window.innerHeight;
    const Resize = (e) => {
        if (moreFunction) {
            moreFunction();
        }
        let stopWidth = element.offsetWidth;
        let stopHeight = element.offsetHeight;
        element.style.width = (e.clientX - element.offsetLeft) + "px";
        element.style.height = (e.clientY - element.offsetTop) + "px";
        inner.style.height = ((e.clientY - element.offsetTop) - innerMath) + "px";
        document.body.style.cursor = "se-resize";
        if (stopWidth < 350) {
            element.style.width = "390px";
            element.style.transition = "0.3s";
            setTimeout(() => {
                element.style.transition = "0s";
            }
                , 300);
            stopResize(e);
        }
        if (stopHeight < (WinH / 2)) {
            element.style.height = (WinH / 2) + 20 + "px";
            inner.style.height = ((WinH / 2) - innerMath) + 20 + "px";
            element.style.transition = "0.3s";
            setTimeout(() => {
                element.style.transition = "0s";
            }
                , 300);
            stopResize(e);
        }
    }
        ;
    const stopResize = (e) => {
        window.removeEventListener("mousemove", Resize, false);
        window.removeEventListener("mouseup", stopResize, false);
        document.body.style.cursor = "initial";
    }
        ;
    let element = $(id);
    let resizer = $cE("div");
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
    let WinH = window.innerHeight;
    let WinW = window.innerWidth;
    const dragMouseDown = (e) => {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
        ;
    const elementDrag = (e) => {
        if (moreFunction) {
            moreFunction()
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
            setTimeout(() => {
                elmnt.parentNode.style.transition = "0s";
            }
                , 300);
            closeDragElement();
        }
        if (elmnt.parentNode.offsetTop > (WinH - 30)) {
            elmnt.parentNode.style.top = (WinH - 60) + "px";
            elmnt.parentNode.style.transition = "0.3s";
            setTimeout(() => {
                elmnt.parentNode.style.transition = "0s";
            }
                , 300);
            closeDragElement();
        }
        if (elmnt.parentNode.offsetLeft > (WinW - 90)) {
            elmnt.parentNode.style.left = (WinW - 120) + "px";
            elmnt.parentNode.style.transition = "0.3s";
            setTimeout(() => {
                elmnt.parentNode.style.transition = "0s";
            }
                , 300);
            closeDragElement();
        }
        if (elmnt.parentNode.style.left.replace(/[^\d-]/g, '') < -300) {
            elmnt.parentNode.style.left = "-200" + "px";
            elmnt.parentNode.style.transition = "0.3s";
            setTimeout(() => {
                elmnt.parentNode.style.transition = "0s";
            }
                , 300);
            closeDragElement();
        }
    }
        ;
    const closeDragElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
    }
        ;
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if ($(elmnt.id + "header")) {
        $(elmnt.id + "header").onmousedown = dragMouseDown;
    }
    else {
        elmnt.onmousedown = dragMouseDown;
    }
}