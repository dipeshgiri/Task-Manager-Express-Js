const resultDOM=document.querySelector('.tbody');
let val=""

const showTasks = async () => {
    try {
    const data= await axios.get('api/v1/tasks');
    if(data.length<1){
      resultDOM.innerHTML=`<h5>No Data Found</h5>`
      return
    }
    const allTask=data.data.task.map((tasks)=>{
      const {completed,_id,name}=tasks
      val+=`<tr>
      <td>${_id}</td>
      <td>${name}</td>
      <td>${completed}</td>
      <td><a href="edit.html?id=${_id}"class="btn btn-success edit">Edit</a >
      <button class="btn btn-danger" value="${_id}" onclick="deleted(value)">Delete</button></td>
      </tr>
      `
    })
    resultDOM.innerHTML=val
    val=""
  }catch (error) {
    console.log(error)
  }
}

showTasks()


function submited(){
  const task=document.getElementById('task').value;
  axios.post('/api/v1/tasks',{"name":task})
  showTasks()
}


function deleted(value){
  axios.delete(`/api/v1/tasks/${value}`);
  showTasks()
}