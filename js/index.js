document.getElementById('submit').addEventListener('click',function(e){

  fetch('/submit',{method:'POST'}).then(function(res){
      if(res.ok){
        const validate=res.json();
        if(validate==='true') document.getElementById('secret').value="true";
        return;
      }
  })

})