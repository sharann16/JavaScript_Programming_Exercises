// Generating the keyboard code code using even listener. 

// The image below.

// https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_min_project_keycode_day_3.2.gif

document.addEventListener('keydown', function(event) {
    document.querySelector('.key-code').textContent = `Key Code: ${event.keyCode}`;
    document.querySelector('.key').textContent = `Key: ${event.key}`;
    document.querySelector('.code').textContent = `Code: ${event.code}`;
  });
  