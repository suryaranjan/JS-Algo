function debounce(func, delay) {
    let timer;
  
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  // Usage
  const logResize = debounce(() => {
    console.log("Resize event processed!");
  }, 500);
  
  window.addEventListener("resize", logResize);
  