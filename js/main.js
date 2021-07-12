// ========= SELLER PROFILE =============== //
// // show edit icon
let profileImg = document.querySelector('.profile-cont .profile-img');
let profileEdit = document.querySelector('.profile-cont .profile-img button');
let coverImg = document.querySelector('.profile-cont');
let coverEdit = document.querySelector('.profile-cont button');

profileImg.addEventListener('mousemove', function(){
  profileEdit.style.display = 'block';
});
profileImg.addEventListener('mouseleave', function(){
  profileEdit.style.display = 'none'
});

coverImg.addEventListener('mousemove', function(){
  coverEdit.style.display = 'block'
});
coverImg.addEventListener('mouseleave', function(){
  coverEdit.style.display = 'none'
});

// =============== seller profile ================= //
// add real estate btn //
let addBtn = document.querySelector('.add-btn button');

addBtn.addEventListener('click', function(){
  let overLay = document.createElement('div');
  overLay.className = 'over-lay';
  let saleItem = document.createElement('div');
  saleItem.className = 'item';
  overLay.appendChild(saleItem);
  let addImg = document.createElement('div');
  addImg.className = 'add-img';
  saleItem.appendChild(addImg);
  let addImgInp = document.createElement('div');
  addImgInp.textContent = 'Add Image +';
  addImg.appendChild(addImgInp);

  let saleDet = document.createElement('div');
  saleDet.className = 'sale-detail';
  saleItem.appendChild(saleDet);

  let heading = document.createElement('h5');
  heading.textContent = 'Add Heading';
  heading.setAttribute('contenteditable', '');
  heading.style.cursor = 'pointer';
  saleDet.appendChild(heading);


  let caption = document.createElement('div');
  caption.textContent = 'Add Caption';
  caption.setAttribute('contenteditable', '');
  caption.style.cursor = 'pointer';
  saleDet.appendChild(caption);

  let location = document.createElement('p');
  location.className = 'loc';
  location.innerHTML = `<i class="fas fa-map-marker-alt"></i> location`;
  location.setAttribute('contenteditable', '');
  location.style.cursor = 'pointer';
  saleDet.appendChild(location);

  let price = document.createElement('p');
  price.className = 'price-2';
  price.textContent = 'Add Price';
  price.setAttribute('contenteditable', '');
  saleDet.appendChild(price);

  // submit btn
  let submitBtn = document.createElement('button');
  submitBtn.classList = ['btn' , ' btn-primary'];
  submitBtn.textContent = 'ADD';
  saleDet.appendChild(submitBtn);

  submitBtn.addEventListener('click', function(){
    overLay.style.display = 'none';
  });

  // close btn
  let closeBtn = document.createElement('div');
  closeBtn.className = 'close-btn';
  closeBtn.textContent = 'X';
  overLay.appendChild(closeBtn);

  closeBtn.addEventListener('click', function(){
    overLay.style.display = 'none';
  });

  document.body.appendChild(overLay);
});

// CARDS SLIDER //






















































