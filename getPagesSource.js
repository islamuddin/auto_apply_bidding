function DOMtoString(document_root) {
// Create the "Shop Now" button
var shopNowButton = document.createElement('button');
shopNowButton.textContent = 'Shop Now Posts : 0';
shopNowButton.style.position = 'fixed';
shopNowButton.style.bottom = '20px';
shopNowButton.style.right = '20px';
shopNowButton.style.padding = '10px';
shopNowButton.style.backgroundColor = 'blue';
shopNowButton.style.color = 'white';
shopNowButton.style.border = 'none';
shopNowButton.style.borderRadius = '5px';

// Create the "Total Posts" button
var totalPostsButton = document.createElement('button');
totalPostsButton.textContent = 'Total Posts Loaded : 0';
totalPostsButton.style.position = 'fixed';
totalPostsButton.style.bottom = '80px';
totalPostsButton.style.right = '20px';
totalPostsButton.style.padding = '10px';
totalPostsButton.style.backgroundColor = 'green';
totalPostsButton.style.color = 'white';
totalPostsButton.style.border = 'none';
totalPostsButton.style.borderRadius = '5px';

// Append the buttons to the document body
document.body.appendChild(shopNowButton);
document.body.appendChild(totalPostsButton);

// Add unique selectors to each button
shopNowButton.classList.add('shop-now-button');
totalPostsButton.classList.add('total-posts-button');


// Append button to the document body
// document.body.appendChild(button);

let shop_counter=0;
setInterval(function() {
  window.scrollTo(0, document.body.scrollHeight);
  setTimeout(() => {
    var element = document.querySelectorAll('div[role="feed"]')[1];
    element = element.innerHTML;
    var tempElement = document.createElement('div');
    tempElement.innerHTML = element;
    
    // Remove the first child
    if (tempElement.firstElementChild) {
      tempElement.firstElementChild.remove();
    }
    
    // Remove the last child
    if (tempElement.lastElementChild) {
      tempElement.lastElementChild.remove();
      tempElement.lastElementChild.remove();
      tempElement.lastElementChild.remove();
    }
    var childCount = tempElement.childElementCount;  
    console.log("total post loaded : " + childCount);
    
    document.querySelector("body > button.total-posts-button").innerText="Total Posts Loaded : "+childCount;
    tempElement.remove();
    // loop each element
    var elements = document.querySelectorAll('div[role="feed"]')[1].children;
    
    for (var i = 1; i < elements.length-4; i++) { // skip first and last 3
      var element = elements[i];
      if (element.innerHTML.includes('#gid179')) {
        // The text is found within the element's innerHTML
        console.log('Element contains "#gid179":', element);
        ++shop_counter;
        document.querySelector("body > button.shop-now-button").innerText="Shop Now Posts : "+shop_counter;
      }else{
        element.style.display = "none";
      }
      // Perform actions with each element
      console.log(element);
    }
      
    }, 1000);  



  
}, 10000); 


    return 'done...';
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});