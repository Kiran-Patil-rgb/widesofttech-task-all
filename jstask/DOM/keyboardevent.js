//keyboard event//
document.addEventListener('keydown', (event)=> {
        document.getElementById('keydown-output').innerText =` the key has been pressed: ${event.key}`;
    });

      document.addEventListener('keypress', (event) =>{
        document.getElementById('keypress-output').innerText = `the key has been pressed: ${event.key}`;
    });

    document.addEventListener('keyup', (event)=> {
        document.getElementById('keyup-output').innerText = `the key has been pressed: ${event.key}`;
    });