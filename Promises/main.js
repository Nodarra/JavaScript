async function fetchAndDecode(url, type){
  let response = await fetch(url);

  let content;

  if(!response.ok){
    throw new Error('Erro fetching the data')
  }

  if(type === 'blob'){
    content = await response.blob();
  }else if(type === 'text'){
    content = await response.text();
  }

  return content;
}

async function displayContent(){
  let coffee = fetchAndDecode('./images/coffee.jpg', 'blob');
  let tea = fetchAndDecode('./images/tea.jpg', 'blob');
  let descriptionText = fetchAndDecode('description.txt', 'text');

  let values = await Promise.all([coffee, tea, descriptionText]);

  let objectURL1 = URL.createObjectURL(values[0]);
  let objcetURL2 = URL.createObjectURL(values[1]);
  let description = values[2];

  let img1 = document.createElement('img');
  let img2 = document.createElement('img');
  
  img1.src = objectURL1;
  img2.src = objcetURL2;

  document.body.appendChild(img1);
  document.body.appendChild(img2);

  let text = document.createElement('p');

  text.textContent = description;

  document.body.appendChild(text);
}

displayContent().catch((e) => console.log(e));