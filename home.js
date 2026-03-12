function remove() {
    document.getElementById('all_btn').classList.remove("btn-primary");
    document.getElementById('open_btn').classList.remove("btn-primary");
    document.getElementById('closed_btn').classList.remove("btn-primary");
}
//Individual Information
// "id": 33,
// "title": "Add bulk operations support",
// "description": "Allow users to perform bulk actions like delete, update status on multiple items at once.",
// "status": "open",
// "labels": [
//   "enhancement"
// ],
// "priority": "low",
// "author": "bulk_barry",
// "assignee": "",
// "createdAt": "2024-02-02T10:00:00Z",
// "updatedAt": "2024-02-02T10:00:00Z"

function modal(id) {
    console.log(`Hello from ${id}`);
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
    fetch(url).then((res) => res.json()).then((data) => {
        const issue = data.data;


        document.getElementById("show_modal_title").innerText = issue.title;
        document.getElementById("show_modal_author_name").innerText = `Opened by ${issue.author}`;
        document.getElementById("show_modal_status").innerText = issue.status;
       
        document.getElementById("show_modal_created").innerText = issue.createdAt;
        const labelsContainer = document.getElementById("show_modal_labels");
        labelsContainer.innerHTML = "";

        issue.labels.map((item) => {
            const span = document.createElement("div");
            span.innerText = item;
            span.classList.add( "bg-yellow-200","p-1","rounded-lg"); // Tailwind/DaisyUI style
            labelsContainer.appendChild(span);
        });
        document.getElementById("show_modal_description").innerText = issue.description;
        document.getElementById("show_modal_author").innerText = issue.author;
        document.getElementById("show_modal_priority").innerText = issue.priority;


        document.getElementById("show_modal").showModal();
    })
}

function loadAllCards() {

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
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url).then((res) => res.json()).then((data) => {
        const all_data = data.data;
        const parent_all = document.getElementById('card_container');


        parent_all.innerHTML = "";
        all_data.forEach((issue) => {

            const createElement = document.createElement('div');
            createElement.innerHTML = `
                  <div onclick=modal(${issue.id}) class="shadow-lg border-t-4 ${issue.status === 'open' ? "border-[#00A96E]" : issue.status === 'closed' ? "border-[#A855F7]" : "border-blue-500"} p-[10px] rounded-lg space-y-2 bg-white h-[100%]">
          <div class="flex justify-between">
            <img src="./assets/Open-Status.png" alt="" />
            <p class="${issue.priority === "high" ? "bg-[#FEECEC] text-[#EF4444]  px-2 rounded-lg" : issue.priority === "medium" ? "bg-[#FFF6D1] text-[#F59E0B] px-2 rounded-lg" : "bg-[#EEEFF2] text-[#9CA3AF] px-2 rounded-lg"}">${issue.priority}</p>
          </div>
          <p class="text-xl font-bold">${issue.title}</p>
          <p class="text-sm font-light "
            >${issue.description}</p
          >
          <div class="flex gap-2">
           ${issue.labels.map(label => `<p class="bg-yellow-200 gap-2 px-2 rounded-lg">${label}</p>`).join("")} 
           
          </div>
          <hr />
          <p class="text-small font-extralight">#1 ${issue.author}</p>
          <p class="text-small font-extralight s">${issue.createdAt}</p>
        </div>
            `
            parent_all.append(createElement);
        })
        const total = parent_all.children.length;
        const totalCards = document.getElementById('total_cards');
        totalCards.innerText = `${total} cards`

    })

}
loadAllCards();

const allBtn = document.getElementById('all_btn');
document.getElementById('all_btn').addEventListener("click", function () {
    remove();
    allBtn.classList.add("btn-primary");
    loadAllCards();

});




function openBtn() {
    const buttonId = document.getElementById("open_btn");
    remove();
    buttonId.classList.add("btn-primary");
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url).then((res) => res.json()).then((data) => {
        const all_data = data.data;
        const parent_all = document.getElementById('card_container');
        parent_all.innerHTML = "";
        // console.log(parent_all);
        all_data.forEach((issue) => {

            const createElement = document.createElement('div');

            if (issue.status === "open") {
                createElement.innerHTML = `
                  <div class="shadow-lg border-t-4 border-[#00A96E] p-[10px] rounded-lg space-y-2 bg-white h-[100%]">
          <div class="flex justify-between">
            <img src="./assets/Open-Status.png" alt="" />
            <p class="${issue.priority === "high" ? "bg-[#FEECEC] text-[#EF4444] px-2 rounded-lg" : issue.priority === "medium" ? "bg-[#FFF6D1] text-[#F59E0B] px-2 rounded-lg" : "bg-[#EEEFF2] text-[#9CA3AF] px-2 rounded-lg"}">${issue.priority}</p>
          </div>
          <p class="text-xl font-bold">${issue.title}</p>
          <p class="text-sm font-light "
            >${issue.description}</p
          >
          <div class="flex gap-2">
           ${issue.labels.map(label => `<p class="bg-yellow-200 gap-2 px-2 rounded-lg">${label}</p>`).join("")} 
           
          </div>
          <hr />
          <p class="text-small font-extralight">#1 ${issue.author}</p>
          <p class="text-small font-extralight s">${issue.createdAt}</p>
        </div>
            `
                parent_all.append(createElement);
            }


        })
        const total = parent_all.children.length;
        const totalCards = document.getElementById('total_cards');
        totalCards.innerText = `${total} cards`
    })
}

function closedBtn() {
    const buttonId = document.getElementById("closed_btn");
    remove();
    buttonId.classList.add("btn-primary");
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url).then((res) => res.json()).then((data) => {
        const all_data = data.data;
        const parent_all = document.getElementById('card_container');
        parent_all.innerHTML = "";
        console.log(parent_all);
        all_data.forEach((issue) => {

            const createElement = document.createElement('div');

            if (issue.status === "closed") {
                createElement.innerHTML = `
                  <div class="shadow-lg border-t-4 border-[#A855F7] p-[10px] rounded-lg space-y-2 bg-white h-[100%]">
          <div class="flex justify-between">
            <img src="./assets/Open-Status.png" alt="" />
            <p class="${issue.priority === "high" ? "bg-[#FEECEC] text-[#EF4444] px-2 rounded-lg" : issue.priority === "medium" ? "bg-[#FFF6D1] text-[#F59E0B] px-2 rounded-lg" : "bg-[#EEEFF2] text-[#9CA3AF] px-2 rounded-lg"}">${issue.priority}</p>
          </div>
          <p class="text-xl font-bold">${issue.title}</p>
          <p class="text-sm font-light "
            >${issue.description}</p
          >
          <div class="flex gap-2">
           ${issue.labels.map(label => `<p class="bg-yellow-200 gap-2 px-2 rounded-lg">${label}</p>`).join("")} 
           
          </div>
          <hr />
          <p class="text-small font-extralight">#1 ${issue.author}</p>
          <p class="text-small font-extralight s">${issue.createdAt}</p>
        </div>
            `
                parent_all.append(createElement);
            }


        })
        const total = parent_all.children.length;
        const totalCards = document.getElementById('total_cards');
        totalCards.innerText = `${total} cards`
    })
}