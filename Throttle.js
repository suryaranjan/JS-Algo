function throttle2(fun, delay){

    let inThrottle = false;

    return function(...args){
        if(!inThrottle){
            inThrottle = true;
            fun.apply(this, ...args);
            setTimeout(() => {
                inThrottle = false;
            }, delay);
        }
    }
}

function throttle(func, delay) {
    let lastCall = 0;
  
    return function (...args) {
      const now = Date.now();
  
      if (now - lastCall >= delay) {
        lastCall = now;
        func.apply(this, args);
      }
    };
  }
  
  // Usage
  const logScroll = throttle(() => {
    console.log("Scroll event fired!");
  }, 1000);
  
  window.addEventListener("scroll", logScroll);
  