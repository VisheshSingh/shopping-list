const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

const items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  if (!name) {
    return;
  }
  const item = {
    name,
    id: Date.now(),
    checked: false,
  };

  items.push(item);
  e.target.reset();

  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  const html = items.map((item) => {
    return `<li class='shopping-item'>
            <input type='checkbox' />
            <span class='itemName'>${item.name}</span>
            <button aria-label='Remove ${item.name}'>&times;</button>
        </li>`;
  });
  list.innerHTML = html.join('');
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
