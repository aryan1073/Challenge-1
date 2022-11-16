let form = document.querySelector('form');
let text = document.querySelector('textarea');
let select = document.getElementById('select1');

function onAddWebsite(e) {
  e.preventDefault();
  let t = parseInt(document.getElementById('select1').value);
  for (let i = 1; i <= t; i++) {
    const input_user = document.getElementById('input_user' + i).value;
    const ans = input_user * input_user * input_user;
    if (ans == 0) {
    alert('Please Enter The Number at' + i);
    }
    else
    {
     document.getElementById('text' + i).innerHTML = ans;
    }
  }
}
form.addEventListener('submit', onAddWebsite);

function onchange(e) {
  e.preventDefault();
  const input_user = parseInt(document.getElementById('select1').value);
  let m = "";
  for (let i = 1; i <= input_user; i++) {
  m += '<div class="row justify-content-center"><div class="col-md-6"><input id="input_user' + i + '" placeholder="Enter decimal value" class="input" required type="text"></div><div class="col-md-6"><textarea id="text' + i + '"></textarea></div><br></div>';
  }
  document.getElementById('let').innerHTML = m;
}
select.addEventListener('change', onchange);