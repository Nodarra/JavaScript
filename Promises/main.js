function fetchAndDecode(url, type){
  return fetch(url).then(response => {
    if(!response.ok){
      throw new Error(`Error status: ${response.status}`);
    }else{
      if(type === 'blob'){
        return response.blob();
      }else if(type === 'text'){
        return response.text();
      }
    }
  }).catch(e => {
    console.log(`There has been a problem fatching resource ${url}`)
  }).finally(() => {
    console.log("Fetch attempt finished")
  })
}

let coffee = fetchAndDecode('./images/coffee.jpg', 'blob');
let tea = fetchAndDecode('./images/tea.jpg', 'blob');
let description = fetchAndDecode('description.txt', 'text');

Promise.all([coffee, tea, description]).then(values => {
  console.log(values);

  let objectURL1 = URL.createObjectURL(values[0]);
  let objectURL2 = URL.createObjectURL(values[1]);
  let descriptionText = values[2];

  let img1 = document.createElement('img');
  let img2 = document.createElement('img');

  img1.src = objectURL1;
  img2.src = objectURL2;

  document.body.appendChild(img1);
  document.body.appendChild(img2);

  let text = document.createElement('p');
  text.textContent = descriptionText;
  document.body.appendChild(text);
});