    let currentIndex = 0;
    const images = document.querySelectorAll('.Gallery a');
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
 
    function openModal(index) {
        modal.style.display = "block";
        currentIndex = index;
        modalImage.src = images[currentIndex].href;
    }
 
    function closeModal() {
        modal.style.display = "none";
    }

    function changeImage(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        modalImage.src = images[currentIndex].href;
    }

    images.forEach((image, index) => {
        image.addEventListener('click', function(event) {
            event.preventDefault();
            openModal(index);
        });
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    };