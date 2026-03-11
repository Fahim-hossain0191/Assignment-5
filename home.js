document.getElementById("all_btn").addEventListener("click",function(){
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
        const parent_all=
        all_data.forEach((issue)=>{
            
        })
    })
})