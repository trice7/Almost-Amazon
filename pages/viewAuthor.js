import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (item) => {
  clearDom();
  console.warn(item);
  let domString = '';

  domString += `
  <div id="book-auth">
  <div class="auth-container">
    <h4>${item.first_name} ${item.last_name}</h4>
    <h5>Author Email: ${item.email}</h5>
  </div>
  <div class="card-contain">
  `;

  item.booksObject.forEach((arr) => {
    domString += `<div class="card">
    <img class="card-img-top" src=${arr.image} alt=${arr.title} style="height: 400px;">
    <div class="card-body" style="height: 180px;">
      <h5 class="card-title">${arr.title}</h5>
        <p class="card-text bold">${arr.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${arr.price}` : `$${arr.price}`}</p>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-book-btn--${arr.firebaseKey}"></i>
        <i id="edit-book-btn--${arr.firebaseKey}" class="fas fa-edit btn btn-info"></i>
        <i id="delete-book-btn--${arr.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
    </div>
  </div>`;
  });

  domString += '</div></div>';
  renderToDOM('#view', domString);
  console.warn(domString);
};

export default viewAuthor;
