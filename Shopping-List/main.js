const list = document.querySelector('ul');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () =>{
  var item = input.value;
  input.value = '';

  var listItem = document.createElement('li');
  var span = document.createElement('span');
  var deleteBtn = document.createElement('button');

  listItem.appendChild(span);
  listItem.appendChild(deleteBtn);

  span.textContent = item;
  deleteBtn.textContent = 'Delete';

  list.appendChild(listItem);

  deleteBtn.addEventListener('click', () => {
    list.removeChild(listItem)
  })

  input.focus();
})
