// ____   ____   ____  _  ____  __          _____  _  ___      ________     __
//|  _ \ / __ \ / __ \| |/ /  \/  |   /\   |  __ \| |/ / |    |  ____\ \   / /
//| |_) | |  | | |  | | ' /| \  / |  /  \  | |__) | ' /| |    | |__   \ \_/ / 
//|  _ <| |  | | |  | |  < | |\/| | / /\ \ |  _  /|  < | |    |  __|   \   /  
//| |_) | |__| | |__| | . \| |  | |/ ____ \| | \ \| . \| |____| |____   | |   
//|____/ \____/ \____/|_|\_\_|  |_/_/    \_\_|  \_\_|\_\______|______|  |_|   

//Since I KNOW that people are gonna get all up in here and straight up snip MY code, imma just let ALL Y'ALL know that my code is licensed so check the license before y'all just copy my code.


//Inject Menu
//Creates the DIV element for the Bookmarkley iFrame and loads the page
if (document.getElementById('bkVCPControlPanel') == undefined) {
  document.body.innerHTML = document.body.innerHTML + `<span id='bkVCPControlPanel'><style>.revokeallcss { all: none; }</style><link href="https://cdn.jsdelivr.net/npm/jspanel4@4.12.0/dist/jspanel.css" rel="stylesheet"><script src="https://cdn.jsdelivr.net/npm/jspanel4@4.12.0/dist/jspanel.js"></script><div style="z-index: 999 !important;position: absolute;max-width:325px;width: 325px; height: relative; position: fixed; top: 0; left: 5%;background-color: black;"><iframe id="bkVCPiFrame" src="https://bookmarkley.carbondev.cf/scriptgui.html" sandbox="allow-scripts allow-popups allow-same-origin" height="500" width="325" title="Iframe Example"></iframe></div></span>`
} else {
  document.getElementById('bkVCPControlPanel').style.display = 'block'
}

//Check for update

//In-Tab Browser
//Replaces the entire page content with an iFrame that loads a certian webpage
function startTabBrowser(url) {
  if (url == undefined) {
    document.body.innerHTML = '<iframe id="bkVCPiFrame" src="https://jesus-is.a-win" sandbox="allow-scripts allow-popups allow-same-origin" style="position: fixed; top: 0px; bottom: 0px; right: 0px; width: 100%; border: none; margin: 0; padding: 0; overflow: hidden; z-index: 999999; height: 100%;" title="Iframe Example"></iframe>'
  } else {
    document.body.innerHTML = '<iframe id="bkVCPiFrame" src="https://jesus-is.a-win" sandbox="allow-scripts allow-popups allow-same-origin" style="position: fixed; top: 0px; bottom: 0px; right: 0px; width: 100%; border: none; margin: 0; padding: 0; overflow: hidden; z-index: 999999; height: 100%;" title="Iframe Example"></iframe>'
  }
}

//Edit Mode
//Enables page content editing and allows the user to change the text on the page without the inspect tool
function editMode() {
  if (document.body.contentEditable == 'true') {
    document.body.contentEditable = 'false'; document.designMode = 'off'; void
      document.getElementById('bkVCPiFrame').contentWindow.postMessage('trick|editmode|false', '*');
  } else {
    document.body.contentEditable = 'true'; document.designMode = 'on'; void 0
    document.getElementById('bkVCPiFrame').contentWindow.postMessage('trick|editmode|true', '*');
  }
}

//Dev console
//Pulls up a custom javascript console that allows users to debug a webpage without inspect tool access
function startDevConsole() {
  (function () {
    var x = document.createElement("script");
    x.src = "https://cdn.jsdelivr.net/gh/SnowLord7/devconsole@master/main.js";
    x.onload = alert("Loaded Developer Console!");
    document.head.appendChild(x);
  })()
}

//History Flooder
//Floods history with instances of the current website
function floodHistory(num) {
  done = false; x = window.location.href;
  for (var i = 1; i <= num; i++) {
    history.pushState(0, 0, i == num ? x : i.toString()); if (i == num) { done = true }
  }
  if (done === true) {
    document.getElementById('bkVCPiFrame').contentWindow.postMessage('trick|flooder|success|' + num, '*');
  }
}

window.onmessage = function (e) {
  let command = e.data.split('|')
  if (command[0] == 'updater') {
    if (command[1] == 'open') {
      window.open('https://bookmarkley.carbondev.cf/documentation#section1-1', '_blank');
    }
  } else if (command[0] == 'trick') {
    if (command[1] == 'tabcloak') {
      document.title = command[2]
      document.getElementById('bkVCPiFrame').contentWindow.postMessage('trick|tabcloak', '*');
    } else if (command[1] == 'tabbrowser') {
      startTabBrowser(command[2])
    } else if (command[1] == 'unblock') {
      startTabBrowser(command[2])
    } else if (command[1] == 'editmode') {
      editMode()
    } else if (command[1] == 'devconsole') {
      startDevConsole()
      document.getElementById('bkVCPiFrame').contentWindow.postMessage('trick|devconsole', '*');
    } else if (command[1] == 'flooder') {
      floodHistory(command[2])
    }
  } else if (command[0] == 'rqdata') {
    if (command[1] == 'tabtitle') {
      document.getElementById('bkVCPiFrame').contentWindow.postMessage('rqdata|tabtitle|' + document.title, '*');
    } else if (command[1] == 'taburl') {
      document.getElementById('bkVCPiFrame').contentWindow.postMessage('rqdata|taburl|' + document.location, '*');
    }
  } else if (command[0] == 'game') {
    if (command[1] == 'start') {

    }
  } else if (command[0] == 'option') {
    if (command[1] == 'exit') {
      document.getElementById('bkVCPControlPanel').style.display = 'none'
    }
  }
};


