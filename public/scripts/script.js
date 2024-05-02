const formAddCard = document.querySelector('.FormAddCard');
// console.log(formAddCard);
if (formAddCard) {
  formAddCard.addEventListener('submit', async (e) => {
    e.preventDefault()
    // console.log(e.target);
     const { name, image, price, condition, action,method } = e.target;
     console.log(condition.value);
     const reqData = new FormData();

    reqData.append('name', name.value);
    reqData.append('image', image.files[0]);
    reqData.append('price', price.value);
     reqData.append('condition', condition.value);


    const res = await fetch(action, {
      method: method,
      body: reqData,
    });

    const data = await res.json();
    if (data.message === 'success') {
      postContainer.insertAdjacentHTML('beforeend', data.html);
      formAddCard.reset();
      123;
    }
  });

}
