	
function DOMtoString(document_root) {
    let skills=document.querySelector("main > fl-container > fl-page-layout-single > fl-grid > fl-col:nth-child(1) > fl-card > fl-bit > fl-bit.CardBody > app-project-details-skills > fl-bit").innerText.replaceAll("\n",", ").replace(/,(?=[^,]*$)/, ' and');

	let subject=document.querySelector("h1 > fl-text:nth-child(2)").innerText;
	// subject=subject.replaceAll("I ", "you ");
	subject=subject.replaceAll("my ", "your ");
	subject=subject.replaceAll("our ", "your ");
	subject=subject.replaceAll(" me ", " you ");	
	subject=subject.replaceAll(" Looking for ", "");	
	subject=subject.replaceAll(" looking for ", "");	
	subject=subject.replaceAll(" want to ", " you want to ");	
	subject=subject.replaceAll(" website for ", " you need website for ");	
   	
	if(subject.startsWith("want "))		subject=subject.replace("want ", "You want ");
	if(subject.startsWith("Need "))		subject=subject.replace("Need ", "You need ");
	if(subject.startsWith("i need"))	subject=subject.replace("i need", "You need ");
	if(subject === "build a website")	subject=subject.replace("build a website", "your need a website developer to build your website ");		
  subject =subject.split("--")[0].trim();

//	let bid="Hi, I have seen this, "+subject+" project and I can do this right now. I am an expert in "+skills+" skills";	
//  let bid="How early you need delivery of this project? I am available and can start work to complete it within your time and budget as I know  "+skills+" skills";	
let bid="Hi, I have seen project \""+subject+"\", I am free and available to work. I am verified expert freelancer ☑️ in  "+skills+" skills. Please come to chat to proceed it on urgent basis. Thanks for posting project on freelancer.com";	

	copyTextToClipboard(document_root,bid);
document.querySelector("app-bid-form > fl-card > fl-bit > fl-bit.CardBody > fl-bit.BidFormBtn.ng-star-inserted > fl-button").style.position="absolute";
document.querySelector("app-bid-form > fl-card > fl-bit > fl-bit.CardBody > fl-bit.BidFormBtn.ng-star-inserted > fl-button").style.top="150%";

    return 'done...';
}

function copyTextToClipboard(document1,text) {
  
    setTimeout(function() {
        //Create a textbox field where we can insert text to.
        if(!(  document.getElementById("descriptionTextAreaExtended"))){
            let new_tag = document.createElement("textarea");
            new_tag.setAttribute("id", "descriptionTextAreaExtended");
            document.body.appendChild(new_tag);
                  }
		
        setTimeout(function() {
            var copyFrom=document.getElementById("descriptionTextAreaExtended");
            copyFrom.textContent = text;
			copyFrom.select();
			document.execCommand('copy');
			document.querySelector("#descriptionTextArea").focus();
			document.execCommand('paste');			

               setTimeout(function() {
        			    document.querySelector("fl-grid > fl-col:nth-child(1) > app-project-details-freelancer > app-bid-form > fl-card > fl-bit > fl-bit.CardBody > fl-bit.BidFormBtn.ng-star-inserted > fl-button > button").click();
                }, 20000);
 
            // level 3
        }, 500);
        }, 500);

}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});


function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}




function lowercaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}
