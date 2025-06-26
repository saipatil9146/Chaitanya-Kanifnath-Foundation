const navbarToggle = document.querySelector('.navbar-toogle');
const navbarMenu = document.querySelector('.navbar-Menu');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});

// this is auto scroll image
const images = document.querySelectorAll('.carousel img');
const dotsContainer = document.querySelector('.dots');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let current = 0;
let interval;

// Create dots
images.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    current = index;
    showSlide(current);
    resetInterval();
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  images.forEach((img, i) => {
    img.className = '';
    if (i === index) img.classList.add('active');
    else if (i === (index + 1) % images.length) img.classList.add('next');
    else if (i === (index - 1 + images.length) % images.length) img.classList.add('prev');
  });

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function nextSlide() {
  current = (current + 1) % images.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + images.length) % images.length;
  showSlide(current);
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 4000);
}

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

interval = setInterval(nextSlide, 4000);

// page add
function openNewFile0() {
  var url = "index.html";
  window.open(url, "_self");
}
function openNewFile1() {
  var url = "Gallery.html";
  window.open(url, "_self");
}

function openNewFile2() {
  var url = "about.html";
  window.open(url, "_self");
}
function openNewFile3() {
  var url = "member.html";
  window.open(url, "_self");
}
function openNewFile4() {
  var url = "contact.html";
  window.open(url, "_self");
}

// 5 points
function toggleCard(cardId) {
  document.getElementById(cardId).classList.toggle('expanded');
}


// /././../../././../../../paise pathva .//..././././././././/./.././././././././././././././././.
let donationOpen = false;
let qrVisible = false;

// Donation section toggle
function toggleDonation() {
  const section = document.getElementById('donationDetails');

  if (!donationOpen) {
    section.style.display = 'flex';
    section.classList.remove("slide-up");
    section.classList.add("slide-down");
  } else {
    section.classList.remove("slide-down");
    section.classList.add("slide-up");
    setTimeout(() => {
      section.style.display = 'none';
    }, 400);
  }

  donationOpen = !donationOpen;
}

// QR code toggle + download button show/hide
function toggleQR() {
  const qrImage = document.getElementById('qrImage');
  const qrDownload = document.getElementById('qrDownload');

  if (!qrVisible) {
    qrImage.style.display = 'block';
    qrDownload.style.display = 'inline-block';
  } else {
    qrImage.style.display = 'none';
    qrDownload.style.display = 'none';
  }

  qrVisible = !qrVisible;
}