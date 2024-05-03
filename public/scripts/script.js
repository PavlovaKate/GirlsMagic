const formAddCard = document.querySelector('.FormAddCard');
const cardContainer = document.querySelector('.container');
const formUpdateCard = document.querySelector('.FormUpdateCard');

if (formAddCard) {
  formAddCard.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, image, price, condition, discription, action, method } =
      e.target;

    const reqData = new FormData();

    reqData.append('name', name.value);
    reqData.append('image', image.files[0]);
    reqData.append('price', price.value);
    reqData.append('discription', discription.value);
    reqData.append('condition', condition.value);

    const res = await fetch(action, {
      method,
      body: reqData,
    });

    const data = await res.json();
    if (data.message === 'success') {
      window.location.assign('/');
    }
  });
}

if (cardContainer) {
  cardContainer.addEventListener('click', async (e) => {
    if (e.target.classList.contains('btn-delete')) {
      const card = e.target.closest('.cardCard');
      const { cardid } = card.dataset;
      const res = await fetch(`/api/cards/${cardid}/upd`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (data.message === 'success') {
        card.remove();
      }
    }
  });
}

if (formUpdateCard) {
  formUpdateCard.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, image, price, condition, discription } = e.target;
    const { cardid } = e.target.dataset;
    console.log(cardid);

    const reqData = new FormData();

    reqData.append('name', name.value);
    reqData.append('image', image.files[0]);
    reqData.append('price', price.value);
    reqData.append('discription', discription.value);
    reqData.append('condition', condition.value);

    const res = await fetch(`/api/cards/update/${cardid}/upd`, {
      method: 'put',
      body: reqData,
    });

    const data = await res.json();
    if (data.message === 'success') {
      window.location.assign('/');
    }
  });
}
