;if(CloudflareApps.matchPage(CloudflareApps.installs['9EnYEi3uXbCJ'].URLPatterns)){(function(){"use strict"
if(!window.addEventListener)return
var options=CloudflareApps.installs['9EnYEi3uXbCJ'].options
var element
function getMaxZIndex(){var max=0
var elements=document.getElementsByTagName('*')
Array.prototype.slice.call(elements).forEach(function(element){var zIndex=parseInt(document.defaultView.getComputedStyle(element).zIndex,10)
max=zIndex?Math.max(max,zIndex):max})
return max}
function updateElement(){var localStorageValid=localStorage.tibrrCookieConsent&&new Date(parseInt(localStorage.tibrrCookieConsent,10))>=new Date()
if(("9EnYEi3uXbCJ"=='preview')||((localStorageValid==false)||(localStorageValid==undefined))){element=CloudflareApps.createElement({"selector":"body","method":"append"},element)
element.setAttribute('app','tibrr-cookie-consent')
element.style.backgroundColor=options.backgroundColor
element.style.opacity=options.backgroundOpacity
if(options.location=='top'){element.style.top='0'}else{element.style.bottom='0'}
element.style.zIndex=getMaxZIndex()+1
var elementContainer=document.createElement('DIV')
elementContainer.className='tibrr-cookie-consent-container'
element.appendChild(elementContainer)
var elementText=document.createElement("DIV")
elementText.className='tibrr-cookie-consent-text'
elementText.textContent=options.message
elementText.style.color=options.textColor
elementContainer.appendChild(elementText)
var elementButtonContainer=document.createElement('DIV')
elementButtonContainer.className='tibrr-cookie-consent-button'
elementContainer.appendChild(elementButtonContainer)
var elementButton=document.createElement('BUTTON')
elementButton.textContent=options.buttonText
elementButton.style.borderColor=options.buttonBorderColor
elementButtonContainer.appendChild(elementButton)
var elementStyle=document.createElement('STYLE')
elementStyle.innerHTML='cloudflare-app[app="tibrr-cookie-consent"] > .tibrr-cookie-consent-container > .tibrr-cookie-consent-button > button {background-color: '+options.buttonColor+'; color: '+options.buttonTextColor+';} cloudflare-app[app="tibrr-cookie-consent"] > .tibrr-cookie-consent-container > .tibrr-cookie-consent-button > button:hover {background-color: '+options.buttonHoverColor+'; color: '+options.buttonHoverTextColor+';}';element.appendChild(elementStyle)
elementButton.onclick=function(){if("9EnYEi3uXbCJ"!='preview'){element.style.display='none'
var askAgainIn=new Date()
if(options.cookieLifetime){askAgainIn.setDate(askAgainIn.getDate()+30)}else{askAgainIn.setDate(askAgainIn.getDate()+365)}
localStorage.tibrrCookieConsent=askAgainIn.getTime()}}}}
if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",updateElement)}else{updateElement()}
window.CloudflareApps.installs['9EnYEi3uXbCJ'].scope={setOptions:function setOptions(nextOptions){options=nextOptions
updateElement()}}}())};(function(){try{var link=document.createElement('link');link.rel='stylesheet';link.href='data:text/css;charset=utf-8;base64,Y2xvdWRmbGFyZS1hcHBbYXBwPSJ0aWJyci1jb29raWUtY29uc2VudCJdIHsNCglwb3NpdGlvbjogZml4ZWQ7DQoJZm9udC1zaXplOiAxLjJlbTsNCgl3aWR0aDogMTAwJTsNCglsZWZ0OiAwOw0KfQ0KY2xvdWRmbGFyZS1hcHBbYXBwPSJ0aWJyci1jb29raWUtY29uc2VudCJdID4gLnRpYnJyLWNvb2tpZS1jb25zZW50LWNvbnRhaW5lciB7DQoJZGlzcGxheTogLXdlYmtpdC1mbGV4Ow0KICAgIGRpc3BsYXk6IGZsZXg7DQoJcGFkZGluZzogMC41ZW07DQoJLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47DQogICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOw0KICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjsNCiAgICBhbGlnbi1pdGVtczogY2VudGVyOw0KICAgIC13ZWJraXQtZmxleC13cmFwOiBub3dyYXA7DQogICAgZmxleC13cmFwOiBub3dyYXA7DQp9DQpjbG91ZGZsYXJlLWFwcFthcHA9InRpYnJyLWNvb2tpZS1jb25zZW50Il0gPiAudGlicnItY29va2llLWNvbnNlbnQtY29udGFpbmVyID4gZGl2IHsNCgltYXJnaW46IDAuNWVtOw0KfQ0KY2xvdWRmbGFyZS1hcHBbYXBwPSJ0aWJyci1jb29raWUtY29uc2VudCJdID4gLnRpYnJyLWNvb2tpZS1jb25zZW50LWNvbnRhaW5lciA+IC50aWJyci1jb29raWUtY29uc2VudC10ZXh0IHsNCgl0ZXh0LWFsaWduOiBjZW50ZXI7DQp9DQpjbG91ZGZsYXJlLWFwcFthcHA9InRpYnJyLWNvb2tpZS1jb25zZW50Il0gPiAudGlicnItY29va2llLWNvbnNlbnQtY29udGFpbmVyID4gLnRpYnJyLWNvb2tpZS1jb25zZW50LWJ1dHRvbiB7DQoJdGV4dC1hbGlnbjogcmlnaHQ7DQp9DQpjbG91ZGZsYXJlLWFwcFthcHA9InRpYnJyLWNvb2tpZS1jb25zZW50Il0gPiAudGlicnItY29va2llLWNvbnNlbnQtY29udGFpbmVyID4gLnRpYnJyLWNvb2tpZS1jb25zZW50LWJ1dHRvbiA+IGJ1dHRvbiB7DQoJYm9yZGVyLXJhZGl1czogMC41ZW07DQoJYm9yZGVyOiAwLjA1ZW0gc29saWQ7DQoJcGFkZGluZzogMC40ZW0gMWVtOw0KfQ0KY2xvdWRmbGFyZS1hcHBbYXBwPSJ0aWJyci1jb29raWUtY29uc2VudCJdID4gLnRpYnJyLWNvb2tpZS1jb25zZW50LWNvbnRhaW5lciA+IC50aWJyci1jb29raWUtY29uc2VudC1idXR0b24gPiBidXR0b246aG92ZXIgew0KCWN1cnNvcjogcG9pbnRlcjsNCn0=';document.getElementsByTagName('head')[0].appendChild(link);}catch(e){}})();