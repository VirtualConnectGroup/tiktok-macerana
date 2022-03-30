    const modelList = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11", "card12"];

    AFRAME.registerComponent('clickhandler', {
      init: function() {
        let count = 0;
        this.el.addEventListener('click', () => {
          setInterval(function() {
            if (count < 50) {
              count += 1;
              //console.log(count);
              //console.log("vibeClick")
              let randIndex = Math.floor(Math.random() * modelList.length);
              //console.log(randIndex);
              cards.removeAttribute('src')
              cards.setAttribute('src', `#${modelList[randIndex]}`)

            };
          }, 50);
        });
      }
    });