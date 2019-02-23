const searchButton = document.getElementById('searchButton');
const userName = document.getElementById('userName');
const searchText = document.getElementById('searchText');

searchButton.onclick = function() {
  let options = {
    name: userName.value,
    text: searchText.value
  };

  Send(options);
}

const Send = async (options) => {

  let url = '';  //enter URL here
  let data = JSON.stringify(options);

  try {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data,
    });
  } catch(err) {
    console.error(err.stack);
  }

  if (response.status === 200) {
    userName.value = '';
    searchText.value = '';
    let data = await response.json();

    if (data) {
      displayResult(data);
    }
  } 
}

function displayResult(usersList) {
  if (!usersList) return;

  let resultsBlock = document.getElementById('result');
  let title = document.createElement('h2');
  if (usersList.length === 0) {
    title.innerText = `People not found`;
  } else {
    title.innerText =  `These people may suit you:`
  }

  let list = document.createElement('ul');
  let arrList = [];

  usersList.forEach((item)=>{
    arrList.push(`<li>${item.name}</li>`);
  });

  list.innerHTML = arrList.join('');

  resultsBlock.appendChild(title);
  resultsBlock.appendChild(list);

}