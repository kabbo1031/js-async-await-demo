async function load(){
  const result = document.getElementById('result');
  result.innerText = 'Loading...';

  try{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    result.innerText = 'Todo: ' + data.title;
  }catch(err){
    result.innerText = 'Failed to load data';
  }
}
