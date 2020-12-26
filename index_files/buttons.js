var x = document.getElementById("boxButton");
x.addEventListener("click", addContainer)

function addContainer() {
	var newContainer = document.createElement("div");

	var box1 = document.createElement("div");
	var box2 = document.createElement("div");

	var input_file = document.createElement("input");
	input_file.type = "file"
	box1.appendChild(input_file);

	var output_file = document.createElement("output");
	output_file.type = "file"
	box1.appendChild(output_file);

	var submit_file = document.createElement("input");
	submit_file.type = "Submit";
	box1.appendChild(submit_file);

	var input_text = document.createElement("input");
	input_text.type = "text";
	box2.appendChild(input_text);

	var output_text = document.createElement("output");
	output_text.type = "text"
	box2.appendChild(output_text);

	var submit_text = document.createElement("input");
	submit_text.type = "Submit";
	box2.appendChild(submit_text);

	newContainer.classList.add("container");
									
	newContainer.appendChild(box1);
	newContainer.appendChild(box2);
									
	box1.classList.add("box-1");
	box2.classList.add("content");
							    
	box.appendChild(newContainer); 
}

window.onload = function() {
  if (localStorage.getItem('content')) {
    document.querySelector('.content').innerHTML = localStorage.getItem('content');
  }
}

let editBtn = document.querySelector('#edit_content');
let content = document.querySelector('.content');

editBtn.addEventListener('click', () => {
  content.contentEditable = !content.isContentEditable;
  if (content.contentEditable === 'false') {
    localStorage.setItem('content', content.innerHTML);
  }
});
