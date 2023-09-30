if (sessionStorage.getItem("qcm")==null) {
  window.location.href="/TestQcm"

}
const qcm=JSON.parse(sessionStorage.getItem("qcm"));

const responses=JSON.parse(sessionStorage.getItem("responces"));


console.log(responses)

var content = document.getElementById("cont");

for (var i = 0; i < qcm.length; i++) {
  var div = document.createElement("div");
  div.className = "card m-2";
  div.style.width = "auto";
  div.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">Question ${i + 1}</h5>
      <p class="card-text">${qcm[i].question}</p>
    </div>
    <ul class="list-group list-group-flush">
      ${qcm[i].options.map((option, index) => {
        return `<li class="list-group-item" style='color:white; background:${
          index == qcm[i].correct_option ? "#33b864" : index == responses[i] ? "#800000" : "#999999"
        }'>${option}</li>`;
      }).join('')}
    </ul>
  `;
  content.appendChild(div);
}


sessionStorage.clear()
