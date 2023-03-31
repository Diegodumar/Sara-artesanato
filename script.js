function clickMenu(){
    if  (menupaleta.style.display == 'block'){
        menupaleta.style.display = 'none'} else {
            menupaleta.style.display = 'block'
        }
    }

// CARROSSEL___________________//

const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const carouselItems = carousel.querySelectorAll('.carousel-item');
const prevBtn = carousel.querySelector('.prev-btn');
const nextBtn = carousel.querySelector('.next-btn');
let currentIndex = 0;
const intervalTime = 4000; // tempo de intervalo em milissegundos
let slideInterval;

// Função para iniciar o intervalo de slides
function startSlide() {
  slideInterval = setInterval(() => {
    if (currentIndex < carouselItems.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, intervalTime);
}

// Função para parar o intervalo de slides
function stopSlide() {
  clearInterval(slideInterval);
}

// Event listener para quando o mouse estiver sobre o carrossel
carousel.addEventListener('mouseover', stopSlide);

// Event listener para quando o mouse sair do carrossel
carousel.addEventListener('mouseleave', startSlide);

// Event listener para o botão "anterior"
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = carouselItems.length - 1;
  }
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
});

// Event listener para o botão "próximo"
nextBtn.addEventListener('click', () => {
  if (currentIndex < carouselItems.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
});

// Iniciar o carrossel automaticamente
startSlide();

