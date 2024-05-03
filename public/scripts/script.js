const formAddCard = document.querySelector('.FormAddCard');
const cardContainer = document.querySelector('.container');

if (formAddCard) {
  formAddCard.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, image, price, condition, action, method } = e.target;

    const reqData = new FormData();

    reqData.append('name', name.value);
    reqData.append('image', image.files[0]);
    reqData.append('price', price.value);
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

// if (formAddPost) {
//   formAddPost.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const { title, image, twit, action, method } = e.target;
//     // console.log(title.value, image.value, twit.value, action, method);

//     const res = await fetch(action, {
//       // method: 'post'
//       method,
//       // говорим о том, в каком формате будем общаться
//       headers: { 'Content-type': 'application/json' },
//       body: JSON.stringify({
//         title: title.value,
//         image: image.value,
//         twit: twit.value,
//       }),
//     });

//     const data = await res.json();
//     if (data.message === 'success') {
//       postContainer.insertAdjacentHTML('beforeend', data.html);
//       formAddPost.reset();
//     }
//   });
// }
