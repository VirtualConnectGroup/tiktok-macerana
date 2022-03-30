    const swapCameraComponent = {
      init() {
        const scene = this.el.sceneEl
        const camBtn = document.getElementById('swap-cam-btn')
        const swapCam = () => {
          const direction = this.el.getAttribute('xrface').cameraDirection === 'back' ? 'front' : 'back'
          // Stop xrweb
          scene.removeAttribute('xrface')
          // // Restart xrweb
          scene.setAttribute('xrface', `disableWorldTracking: true; cameraDirection: ${direction}; mirroredDisplay: ${direction === 'front'};`)
          //camBtn.innerHTML = `Camera: ${direction}`
        }
        camBtn.addEventListener('click', swapCam)
      },
    }
    export { swapCameraComponent }