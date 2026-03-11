function remove(){
       document.getElementById('all_btn').classList.remove("btn-primary");
    document.getElementById('open_btn').classList.remove("btn-primary");
    document.getElementById('closed_btn').classList.remove("btn-primary");
}


function loadAllCards(){
   
    //       "id": 1,
    //   "title": "Fix navigation menu on mobile devices",
    //   "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
    //   "status": "open",
    //   "labels": [
    //     "bug",
    //     "help wanted"
    //   ],
    //   "priority": "high",
    //   "author": "john_doe",
    //   "assignee": "jane_smith",
    //   "createdAt": "2024-01-15T10:30:00Z",
    //   "updatedAt": "2024-01-15T10:30:00Z"
    const url="https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url).then((res)=>res.json()).then((data)=>{
        const all_data=data.data;
        const parent_all=document.getElementById('card_container');
        console.log(parent_all);
        parent_all.innerHTML="";
        all_data.forEach((issue)=>{
            
            const createElement=document.createElement('div');
            createElement.innerHTML=`
                  <div class="shadow-lg border-t-4 border-green-300 p-[10px] rounded-lg space-y-2 bg-white h-[100%]">
          <div class="flex justify-between">
            <img src="./assets/Open-Status.png" alt="" />
            <p class="${issue.priority==="high"?"bg-[#FEECEC] text-[#EF4444] px-2 rounded-lg":issue.priority==="medium"?"bg-[#FFF6D1] text-[#F59E0B] px-2 rounded-lg":"bg-[#EEEFF2] text-[#9CA3AF] px-2 rounded-lg"}">${issue.priority}</p>
          </div>
          <p class="text-xl">${issue.title}</p>
          <p class="text-sm font-light "
            >${issue.description}</p
          >
          <div class="flex gap-2">
           ${issue.labels.map(label=>`<p class="bg-yellow-200 gap-2 px-2 rounded-lg">${label}</p>`).join("")} 
           
          </div>
          <hr />
          <p class="text-xl font-extralight">#1 ${issue.author}</p>
          <p class="text-small font-extralight s">${issue.createdAt}</p>
        </div>
            `
            parent_all.append(createElement);
        })
    })
}
loadAllCards();

const allBtn=document.getElementById('all_btn');
document.getElementById('all_btn').addEventListener("click",function(){
    remove();
    allBtn.classList.add("btn-primary");
    loadAllCards();
   
});




function openBtn(){
    const buttonId=document.getElementById("open_btn");
    remove();
    buttonId.classList.add("btn-primary");
    const url="https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url).then((res)=>res.json()).then((data)=>{
        const all_data=data.data;
        const parent_all=document.getElementById('card_container');
        parent_all.innerHTML="";
        console.log(parent_all);
        all_data.forEach((issue)=>{
            
            const createElement=document.createElement('div');
            
            if(issue.status==="open"){
                     createElement.innerHTML=`
                  <div class="shadow-lg border-t-4 border-green-300 p-[10px] rounded-lg space-y-2 bg-white h-[100%]">
          <div class="flex justify-between">
            <img src="./assets/Open-Status.png" alt="" />
            <p class="${issue.priority==="high"?"bg-[#FEECEC] text-[#EF4444] px-2 rounded-lg":issue.priority==="medium"?"bg-[#FFF6D1] text-[#F59E0B] px-2 rounded-lg":"bg-[#EEEFF2] text-[#9CA3AF] px-2 rounded-lg"}">${issue.priority}</p>
          </div>
          <p class="text-xl">${issue.title}</p>
          <p class="text-sm font-light "
            >${issue.description}</p
          >
          <div class="flex gap-2">
           ${issue.labels.map(label=>`<p class="bg-yellow-200 gap-2 px-2 rounded-lg">${label}</p>`).join("")} 
           
          </div>
          <hr />
          <p class="text-xl font-extralight">#1 ${issue.author}</p>
          <p class="text-small font-extralight s">${issue.createdAt}</p>
        </div>
            `
            parent_all.append(createElement);
            }
            
            
        })
    })
}