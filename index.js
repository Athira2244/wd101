let userForm=document.getElementById("user-form");
const retrieveEntries = () => {
    let entries = localStorage.getItem("user-entries");
    if(entries)
    {
        entries=JSON.parse(entries);
    }else{
        entries=[];
       }
       return entries;
}


let userEntries=retrieveEntries();
const displayEntries = () => {
    const entries=retrieveEntries();
    
   const tableEntries = entries.map((entry)=> {
        const namecell=`<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailcell=`<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordcell=`<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobcell=`<td class='border px-4 py-2'>${entry.dob}</td>`;
        const acceptTermscell=`<td class='border px-4 py-2'>${entry.accepttermsandconditions}</td>`;

        const row=`<tr>${namecell} ${emailcell} ${passwordcell} ${dobcell} ${acceptTermscell}</tr>`;
        return row;
    }).join("\n");
    const table = `<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th> 
    <th class="px-4 py-2">dob</th>
    <th class="px-4 py-2">Acceptedterms</th>
    </tr>${tableEntries} </table>`;

    let details=document.getElementById("user-entries");
    details.innerHTML=table;
}

const saveUserForm =(event) => {
  //event.preventDefault();
  const name= document.getElementById("name").value;
  const email= document.getElementById("email").value;
  const password= document.getElementById("pwd").value;
  const dob= document.getElementById("dob").value;
  const accepttermsandconditions= document.getElementById("acceptTerms").checked;
  let dateofbirth=dob.split("-");
  let currentyear=new Date().getFullYear();
  let birthyear=dateofbirth[0];
  let age=currentyear-birthyear;
  if(age<18 || age>55)
  {
    document.getElementById('dob');
    alert("age must be between 18 and 55")
    
  }else{
    document.getElementById('dob')
    
  }
  
  const entry={
    name,
    email,
    password,
    dob,
    accepttermsandconditions

  };
  userEntries.push(entry);
  localStorage.setItem("user-entries",JSON.stringify(userEntries));
  displayEntries();
}
userForm.addEventListener("submit",saveUserForm)
displayEntries();


