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

// gallery page add
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


// paise pathva 
function toggleDonationInfo() {
  var div = document.getElementById("donation-info");
  div.style.display = div.style.display === "block" ? "none" : "block";
}

function openUPILink(app) {
  const upiId = "chaitanyakanifnathfoundation@axl"; // तुमचं Foundation UPI ID इथे टाका
  const name = "Chaitanya Kanifnath Foundation";
  const amount = prompt("कृपया देणगीची रक्कम प्रविष्ट करा:");

  if (!amount || isNaN(amount)) {
    alert("कृपया वैध रक्कम भरा.");
    return;
  }

  const url = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;

  window.location.href = url;
}