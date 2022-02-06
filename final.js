

window.addEventListener('load', () => {
	let form = document.querySelector("#form");
	let head = document.querySelector("#heading");
    let desc =document.querySelector('#dis')
	let blogs = document.querySelector("#blog");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		let head1 = head.value;
        let desc1 = desc.value;

		let section = document.createElement('div');
		section.classList.add('task');

	    let headcontent = document.createElement('div');
		headcontent.classList.add('content');

		section.appendChild(headcontent);

		let content = document.createElement('input');
		content.classList.add('text');
		content.type = 'text';
		content.value = head1;
		content.setAttribute('readonly', 'readonly');

		headcontent.appendChild(content);

        let content2 = document.createElement('input');
		content2.classList.add('text1');
		content2.type = 'text';
		content2.value = desc1;
		content2.setAttribute('readonly', 'readonly');

		headcontent.appendChild(content2);

		let task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		let task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		let task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		section.appendChild(task_actions_el);

		blogs.appendChild(section);

		head.value = '';
        desc.value="";

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				content.removeAttribute("readonly");
                content2.removeAttribute("readonly");
				content.focus();
			} else {
				task_edit_el.innerText = "Edit";
				content.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			blogs.removeChild(section);
		});
	});
});
