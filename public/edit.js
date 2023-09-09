const urlParams = new URLSearchParams(window.location.search);
const input=document.getElementById('task');
const check=document.getElementById('check');
const id = urlParams.get('id');
const data=  axios.get(`api/v1/tasks/${id}`);
if(data.length<1){
      resultDOM.innerHTML=`<h5>No Data Found</h5>`
}
data.then((E)=>{
      input.value=E.data.task.name
      check.checked=E.data.task.completed
}).catch((error)=>{
    console.log(error)
})

function editsubmit(){

    const nam=document.getElementById('task').value;
    const c=document.getElementById('check').checked;
    axios.patch(`api/v1/tasks/${id}`,{
        name:nam,
        completed:c
    }).then(window.location.href="/index.html").catch((error)=>console.log(error))

}