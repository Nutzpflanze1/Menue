var x = document.getElementById("boxButton");
x.addEventListener("click", addContainer)

function addContainer() {
	var newContainer = document.createElement("div");

	var box1 = document.createElement("div");
	var box2 = document.createElement("div");

	var input_text = document.createElement("input");
	input_text.type = "text";
	box2.appendChild(input_text);

	var input_file = document.createElement("input");
	input_file.type = "file"
	box1.appendChild(input_file);

	newContainer.classList.add("container");
									
	newContainer.appendChild(box1);
	newContainer.appendChild(box2);
									
	box1.classList.add("box-1");
	box2.classList.add("box-2");
							    
	box.appendChild(newContainer); 
}