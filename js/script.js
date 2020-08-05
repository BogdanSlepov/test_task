var picker = new Pikaday({ field: document.getElementById('datepicker') });

function changeToTile() {
    document.querySelectorAll('.main').forEach(block => {
        block.classList.add('main2');
        block.classList.remove('main');
      });

    document.querySelectorAll('.block1').forEach(block => {
      block.classList.add('block2');
      block.classList.remove('block1');
    });
  
    document.querySelectorAll('.img1').forEach(block => {
      block.classList.add('img2');
      block.classList.remove('img1');
    });

    document.querySelectorAll('.block1-container').forEach(block => {
        block.classList.add('block2-container');
        block.classList.remove('block1-container');
      });

    document.querySelectorAll('.block1-text1').forEach(block => {
    block.classList.add('block2-text1');
    block.classList.remove('block1-text1');
    });

    document.querySelectorAll('.block1-text1-edit1').forEach(block => {
        block.classList.add('block2-text1-edit1');
        block.classList.remove('block1-text1-edit1');
        });

    document.querySelectorAll('.block1-text1-edit2').forEach(block => {
        block.classList.add('block2-text1-edit2');
        block.classList.remove('block1-text1-edit2');
        });
        
    document.querySelectorAll('.block1-text1-number').forEach(block => {
        block.classList.add('block2-text1-number');
        block.classList.remove('block1-text1-number');
        });
    
    document.querySelectorAll('.image-upload1').forEach(block => {
        block.classList.add('image-upload2');
        block.classList.remove('image-upload1');
        });

    document.querySelectorAll('.comment1').forEach(image => {
        image.src = "./img/icon-comment1.png";
        });
    
    document.querySelectorAll('.heart1').forEach(image => {
        image.src = "./img/icon-heart1.png";
        });
  }

  function changeToList() {

    document.querySelectorAll('.main2').forEach(block => {
        block.classList.add('main');
        block.classList.remove('main2');
      });

    document.querySelectorAll('.block2').forEach(block => {
        block.classList.add('block1');
        block.classList.remove('block2');
      });
    
      document.querySelectorAll('.img2').forEach(block => {
        block.classList.add('img1');
        block.classList.remove('img2');
      });
  
      document.querySelectorAll('.block2-container').forEach(block => {
          block.classList.add('block1-container');
          block.classList.remove('block2-container');
        });
  
      document.querySelectorAll('.block2-text1').forEach(block => {
      block.classList.add('block1-text1');
      block.classList.remove('block2-text1');
      });
  
      document.querySelectorAll('.block2-text1-edit1').forEach(block => {
          block.classList.add('block1-text1-edit1');
          block.classList.remove('block2-text1-edit1');
          });
  
      document.querySelectorAll('.block2-text1-edit2').forEach(block => {
          block.classList.add('block1-text1-edit2');
          block.classList.remove('block2-text1-edit2');
          });
          
      document.querySelectorAll('.block2-text1-number').forEach(block => {
          block.classList.add('block1-text1-number');
          block.classList.remove('block2-text1-number');
          });
      
      document.querySelectorAll('.image-upload2').forEach(block => {
          block.classList.add('image-upload1');
          block.classList.remove('image-upload2');
          });

          
        document.querySelectorAll('.comment1').forEach(image => {
        image.src = "./img/icon-comment.png";
            });
        
        document.querySelectorAll('.heart1').forEach(image => {
            image.src = "./img/icon-heart.png";
            });
  }