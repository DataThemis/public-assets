
// Customize the script as needed for embedding
    const rootContainer = document.getElementById('root');
    if (!rootContainer) {

      console.log("creating root");
      // If the 'root' element doesn't exist, create it and add it to the body
      const newRootContainer = document.createElement('div');
      newRootContainer.id = 'root';
      document.body.appendChild(newRootContainer);
    }

var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'https://raw.githubusercontent.com/DataThemis/public-assets/data-themis-homepage/chat-bot.css';

  // Append the <link> element to the <head> section of the document
  document.head.appendChild(link);


// Create a function to load the React app bundle
function loadReactApp() {

  const reactAppURL = 'https://raw.githubusercontent.com/DataThemis/public-assets/data-themis-homepage/chat-bot.js';
  
  console.log('Loading React app from:', reactAppURL);
  if(!document.getElementById('root')){
    console.log("root not yet loaded");
  }else{
    console.log('root loaded');
  }
  // Create a script element to load the React app bundle
  const script = document.createElement('script');
  script.src = reactAppURL;
  script.type = 'module'; // Adjust this if needed (e.g., 'text/javascript')
  script.async = true;

  // Set up an event handler for when the script is loaded successfully
  script.onload = () => {
    console.log('React app script has loaded successfully.');
  };

  // Set up an event handler for when the script fails to load
  script.onerror = () => {
    console.error('Failed to load the React app script.');
    // Create and display an error message element
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Failed to load the React app script. Please try again later.';
    document.body.appendChild(errorMessage);
  };

  // Append the script element to the document body
  document.body.appendChild(script);
}

// Load the React app when the page is ready
if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
  // If the page is already loaded or interactive, load the React app immediately
  
  loadReactApp();
} else {
  // If the page is still loading, wait for the 'DOMContentLoaded' event before loading the React app
  document.addEventListener('DOMContentLoaded', loadReactApp);
}
