// Variables for HTML elements and the output iframe
var HTMLCodeBOX = document.getElementsByClassName("Editor_Html");
var HtmlCode = document.getElementById("Editor_Html_Code");
var CssCode = document.getElementById("Editor_Css_Code");
var JsCode = document.getElementById("Editor_Js_Code");
var runButton = document.getElementById('output_runButton');
var Result = document.getElementById("output_frame").contentDocument;
var HTMLCopyBtn = document.getElementById("Editor_Html_header_Copybtn");
var CssCopyBtn = document.getElementById("Editor_Css_header_Copybtn");
var JsCopyBtn = document.getElementById("Editor_Js_header_Copybtn");
var HtmlLockBtn = document.getElementById("Editor_Html_header_Lockbtn");
var CssLockBtn = document.getElementById("Editor_Css_header_Lockbtn");
var JsLockBtn = document.getElementById("Editor_Js_header_Lockbtn");

// Add a click event listener to the 'Run' button
runButton.addEventListener('click', () => {
    Result.open();
    Result.writeln(
        HtmlCode.value +
        "<style>" + CssCode.value + "</style>"
    );

    // Create a new script element and set its text content
    var scriptElement = Result.createElement('script');
    scriptElement.textContent = JsCode.value;

    // Append the script element to the iframe's document
    Result.body.appendChild(scriptElement);

    Result.close();
});

// Function to copy HTML code to the clipboard
HTMLCopyBtn.onclick = function () {
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = HtmlCode.value;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();

    try {
        document.execCommand("copy");
        alert("HTML code copied to clipboard.");
    } catch (err) {
        console.error("Unable to copy HTML code to clipboard: " + err);
    }

    document.body.removeChild(tempTextArea);
}

// Function to copy CSS code to the clipboard
CssCopyBtn.onclick = function () {
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = CssCode.value;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();

    try {
        document.execCommand("copy");
        alert("CSS code copied to clipboard.");
    } catch (err) {
        console.error("Unable to copy CSS code to clipboard: " + err);
    }

    document.body.removeChild(tempTextArea);
}

// Function to copy JavaScript code to the clipboard
JsCopyBtn.onclick = function () {
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = JsCode.value;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();

    try {
        document.execCommand("copy");
        alert("JavaScript code copied to clipboard.");
    } catch (err) {
        console.error("Unable to copy JavaScript code to clipboard: " + err);
    }

    document.body.removeChild(tempTextArea);
}

// Add a click event listener to the button for locking and unlocking the HTML Editor
HtmlLockBtn.addEventListener('click', function() {
    // Check the current inner HTML of the button
    if (HtmlLockBtn.innerHTML === 'Lock') {
        // Change the inner HTML to "Unlock"
        HtmlLockBtn.innerHTML = 'Unlock';
        // Make the HtmlCode non-editable
        HtmlCode.setAttribute('readonly', true);
    } else {
        // If it's already "Unlock," change it back to "Lock" (toggle)
        HtmlLockBtn.innerHTML = 'Lock';
        // Make the HtmlCode editable
        HtmlCode.removeAttribute('readonly');
    }
});

// Add a click event listener to the button for locking and unlocking the CSS Editor
CssLockBtn.addEventListener('click', function() {
    // Check the current inner HTML of the button
    if (CssLockBtn.innerHTML === 'Lock') {
        // Change the inner HTML to "Unlock"
        CssLockBtn.innerHTML = 'Unlock';
        // Make the CssCode non-editable
        CssCode.setAttribute('readonly', true);
    } else {
        // If it's already "Unlock," change it back to "Lock" (toggle)
        CssLockBtn.innerHTML = 'Lock';
        // Make the CssCode editable
        CssCode.removeAttribute('readonly');
    }
});

// Add a click event listener to the button for locking and unlocking the JS Editor
JsLockBtn.addEventListener('click', function() {
    // Check the current inner HTML of the button
    if (JsLockBtn.innerHTML === 'Lock') {
        // Change the inner HTML to "Unlock"
        JsLockBtn.innerHTML = 'Unlock';
        // Make the JsCode non-editable
        JsCode.setAttribute('readonly', true);
    } else {
        // If it's already "Unlock," change it back to "Lock" (toggle)
        JsLockBtn.innerHTML = 'Lock';
        // Make the JsCode editable
        JsCode.removeAttribute('readonly');
    }
});
