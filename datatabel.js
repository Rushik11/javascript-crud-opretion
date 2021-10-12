const namei = document.getElementById("name");
const Position = document.getElementById("Position");
const Office = document.getElementById("Office");
const Age = document.getElementById("Age");
const StartDate = document.getElementById("StartDate");
const form = document.getElementById("inputform");
const datatabel = document.getElementById("datatabel");
const update = document.getElementById("update");
const hiddenInput = document.getElementById("hiddenInput");
const add = document.getElementById("add");
let tabelhed = document.getElementById("tabelhed");
let tabelarray = localStorage.getItem("mytododata");
if (tabelarray == null) {
  tabelarray = [];
} else {
  tabelarray = JSON.parse(tabelarray);
}

add.style.display = "block";
update.style.display = "none";

function commitTodo() {
  localStorage.setItem("mytododata", JSON.stringify(tabelarray));
  adddeta(tabelarray);
}

const adddeta = function (tabelarray) {
  datatabel.innerHTML = "";

  tabelarray.forEach((element, index) => {
    datatabel.insertAdjacentHTML(
      "beforeend",

      `<tr style="border-bottom: 1px solid #ddd;">
                <td>${element.shoname}</td>
                <td>${element.shoposition}</td>
                <td>${element.shooffice}</td>
                <td>${element.shoage}</td>
                <td>${element.shostartdate}</td>
                <td><i class="bi bi-pencil-square green"  onclick = "edittask(${element.shodate})" data-bs-target="#exampleModal"  data-bs-toggle="modal"></i><i class="bi bi-trash red" onclick="deleteindex(${element.shodate})"></i></td>
            </tr>`
    );
  });
};
let x;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputname = namei.value;
  const inputposition = Position.value;
  const inputOffice = Office.value;
  const inputAge = Age.value;
  const inputStartDate = StartDate.value;

  if (
    (inputname.length,
    inputposition.length,
    inputOffice.length,
    inputAge.length,
    inputStartDate.length === 0)
  ) {
    alert("Plese Enter Value");
  } else {
    let tabelobj = {
      shoname: inputname,
      shoposition: inputposition,
      shooffice: inputOffice,
      shoage: inputAge,
      shostartdate: inputStartDate,
      shodate: new Date().getTime(),
    };
    tabelarray.push(tabelobj);
    console.log(tabelarray);
    adddeta(tabelarray);
    commitTodo();
  }

  loadList();
  selectIn();
  namei.value = "";
  Position.value = "";
  Office.value = "";
  Age.value = "";
  StartDate.value = "";
});
function edittask(id) {
  let table = tabelarray.find((item) => item.shodate === id);
  namei.value = table.shoname;
  Position.value = table.shoposition;
  Office.value = table.shooffice;
  Age.value = table.shoage;
  StartDate.value = table.shostartdate;
  hiddenInput.value = table.shodate;
  add.style.display = "none";
  update.style.display = "block";
  x = hiddenInput.value;
  console.log(x);
}
function updateTable() {
  let table = tabelarray.find((item) => item.shodate == hiddenInput.value);
  table.shoname = namei.value;
  table.shoposition = Position.value;
  table.shooffice = Office.value;
  table.shoage = Age.value;
  table.shostartdate = StartDate.value;
  console.log(table);
  commitTodo();
  loadList();
  selectIn();
}

function deleteindex(id) {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      let table = tabelarray.findIndex((item) => item.shodate === id);
      tabelarray.splice(table, 1);
      commitTodo();
      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
      });
    } else {
      swal("Your imaginary file is safe!");
    }
    loadList();
    selectIn();
  });
}
let yearACS = "";
yearACS = true;
function sortYear() {
  if (yearACS) {
    tabelarray.sort(function (a, b) {
      return a.shoage - b.shoage;
    });
    yearACS = false;
  } else {
    tabelarray.sort(function (a, b) {
      return b.shoage - a.shoage;
    });
    yearACS = true;
  }
  // adddeta(tabelarray);
  // loadList();
  selectIn();
}

nameACS = true;
function sortName() {
  if (nameACS) {
    tabelarray.sort(function (a, b) {
      x = a.shoname.toLowerCase();
      y = b.shoname.toLowerCase();

      if (x > y) {
        return 1;
      }
      if (x < y) {
        return -1;
      }
      return 0;
    });
    nameACS = false;
  } else {
    tabelarray.sort(function (a, b) {
      x = a.shoname.toUpperCase();
      y = b.shoname.toUpperCase();
      if (x > y) {
        return -1;
      }
      if (x < y) {
        return 1;
      }
      return 0;
    });
    nameACS = true;
  }
  // adddeta(tabelarray);
  // loadList();
  selectIn();
}

nameACS = true;
function sortPosition() {
  if (nameACS) {
    tabelarray.sort(function (a, b) {
      x = a.shoposition.toLowerCase();
      y = b.shoposition.toLowerCase();

      if (x > y) {
        return 1;
      }
      if (x < y) {
        return -1;
      }
      return 0;
    });
    nameACS = false;
  } else {
    tabelarray.sort(function (a, b) {
      x = a.shoposition.toUpperCase();
      y = b.shoposition.toUpperCase();
      if (x > y) {
        return -1;
      }
      if (x < y) {
        return 1;
      }
      return 0;
    });
    nameACS = true;
  }
  // adddeta(tabelarray);
  // loadList();
  selectIn();
}

nameACS = true;
function sortoffice() {
  if (nameACS) {
    tabelarray.sort(function (a, b) {
      x = a.shooffice.toLowerCase();
      y = b.shooffice.toLowerCase();

      if (x > y) {
        return 1;
      }
      if (x < y) {
        return -1;
      }
      return 0;
    });
    nameACS = false;
  } else {
    tabelarray.sort(function (a, b) {
      x = a.shooffice.toUpperCase();
      y = b.shooffice.toUpperCase();
      if (x > y) {
        return -1;
      }
      if (x < y) {
        return 1;
      }
      return 0;
    });
    nameACS = true;
  }
  // adddeta(tabelarray);
  // loadList();
  selectIn();
}

tabelhed.innerHTML = `
  <tr>
      <th scope="col" onclick='sortName()' style="cursor: pointer;">Name <span><i class="bi bi-filter"></i></span></th>
      <th scope="col" onclick='sortPosition() ' style="cursor: pointer;">Position<span><i class="bi bi-filter"></i></span> </th>
      <th scope="col"onclick='sortoffice()' style="cursor: pointer;">office <span><i class="bi bi-filter"></i></span> </th>
      <th scope="col" onclick='sortYear()' style="cursor: pointer;">Age<span><i class="bi bi-filter"></i></span></th>
      <th scope="col" onclick='sortYear()' style="cursor: pointer;">Start Date <span><i class="bi bi-filter"></i></span> </th>
      <th scope="col">Action</th>
  </tr>`;

let currentPage = 0,
  numberPerPage = 5,
  numberOfPages = 1,
  pageList = [];

let options = [2, 25, 50, 100];
selectInput.innerHTML = options.map((res) => {
  return `<option value="${res}">${res}</option>`;
});

loadList();
selectIn();
function selectIn() {
  let sel = document.getElementById("selectInput");
  numberPerPage = sel.value;
  numberOfPages = Math.ceil(tabelarray.length / numberPerPage);
  currentPage = 1;
  loadList();
}

function previousPage() {
  currentPage -= 1;
  loadList();
}

function nextPage() {
  currentPage += 1;
  loadList();
}

function curPage(n) {
  currentPage = n;
  loadList();
}

function check() {
  let nxter = document.getElementById("next");
  let priver = document.getElementById("previous");
  nxter =
    currentPage == numberOfPages
      ? document.getElementById("nextlist").classList.add("disabled")
      : document.getElementById("nextlist").classList.remove("disabled");

  priver =
    currentPage == 1
      ? document.getElementById("previouslist").classList.add("disabled")
      : document.getElementById("previouslist").classList.remove("disabled");
}

function loadList() {
  let btn = document.getElementById("page-btn");
  btn.innerHTML = "";
  for (let i = 1; i <= numberOfPages; i++) {
    btn.innerHTML += `<a class="page-link ${
      currentPage === i ? "active" : ""
    }" onclick="curPage(${i})"  href="#">${i} </a>`;
  }
  let begin = (currentPage - 1) * numberPerPage;
  let end = parseInt(begin) + parseInt(numberPerPage);
  pageList = tabelarray.slice(begin, end);
  document.getElementById("start-count").innerHTML = begin + 1;
  document.getElementById("end-count").innerHTML = begin + pageList.length;
  document.getElementById("total-count").innerHTML = tabelarray.length;
  adddeta(pageList);
  check();
}

function serchtabel() {
  var input, filter, table, tr, td, col, i, j;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    tr[i].style.display = "none";
    td = tr[i].getElementsByTagName("td");
    for (var j = 0; j < td.length; j++) {
      col = tr[i].getElementsByTagName("td")[j];
      if (col) {
        if (col.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break;
        }
      }
    }
  }
}
