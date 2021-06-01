//add an eventListener to the from
const form = document.querySelector('#itemForm'); // select form
const itemInput = document.querySelector('#itemInput'); // select input box from form
const itemList = document.querySelector('.item-list');
const feedback = document.querySelector('.feedback');
const clearButton = document.querySelector('#clear-list');

let todoItems = [];
let completedItems = [];

const handleItem = function (itemName) {

    const items = itemList.querySelectorAll('.item');

    items.forEach(function (item) {
        let name = itemName.split('.')[0];
        let visible = itemName.split('.')[1];

        if (item.querySelector('.item-name').textContent === name) {
            item.querySelector('.complete-item').addEventListener('click', function () {
                item.querySelector('.item-name').classList.toggle('completed');

                let tf = this.classList.toggle('visibility') ? "t" : "f";
                console.log(item.parentNode);
                let len = item.parentNode.childNodes.length;
                console.log(len);
                for (var i = 0; i < len; i++) {
                    if (item.parentNode.childNodes[i] === item) {
                        console.log(i);
                        todoItems[(i - 1) / 2] = name + "." + tf;
                    }
                }

                //console.log(todoItems);         
            });
            item.querySelector('.edit-item').addEventListener('click', function () {
                itemInput.value = name;
                itemList.removeChild(item);

                todoItems = todoItems.filter(function (item) {
                    return item !== itemName;
                });
            });
            item.querySelector('.delete-item').addEventListener('click', function () {
                debugger;
                itemList.removeChild(item);

                todoItems = todoItems.filter(function (item) {
                    return item !== itemName;
                });

                showFeedback('item delete', 'success');
            })
        }
    })
}

const removeItem = function (item) {
    const removeIndex = (todoItems.indexOf(item));
    todoItems.splice(removeIndex, 1);
}

const getList = function (todoItems) {
    itemList.innerHTML = '';

    todoItems.forEach(function (item) {
        let name = item.split('.')[0];
        let visible = item.split('.')[1];
        let completeText = visible === 't' ? " completed" : ""

        itemList.insertAdjacentHTML('beforeend', `
            <div class="item my-3">
                <h5 class="item-name text-capitalize${completeText}">${name}</h5>
                <div class="item-icons">
                    <a href="#" class="complete-item mx-2 item-icon">
                        <i class="far fa-check-circle"></i>
                        </a><a href="#" class="edit-item mx-2 item-icon">
                        <i class="far fa-edit"></i>
                        </a><a href="#" class="delete-item item-icon">
                        <i class="far fa-times-circle"></i>
                    </a>
                </div>
            </div>`);

        handleItem(item);
    });
}

const getLocalStorage = function () {

    const todoStorage = localStorage.getItem('todoItems');
    if (todoStorage === 'undefined' || todoStorage === null) {
        todoItems = [];
    } else {
        todoItems = JSON.parse(todoStorage);
        getList(todoItems);
    }
    console.log(todoItems);
}

const setLocalStorage = function (todoItems) {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
}


function onAddItemButtonClick(e) {
    e.preventDefault();
    const itemName = itemInput.value + "." + "f";

    if (itemInput.value.length === 0) {
        feedback.innerHTML = 'Please Enter Valid Value';
        feedback.classList.add('showItem', 'alert-danger');
        setTimeout(
            function () {
                feedback.classList.remove('showItem');
            }, 3000);
    } else {
        todoItems.push(itemName);
        setLocalStorage(todoItems);
        getList(todoItems);
    }

    itemInput.value = '';
    console.log(todoItems);

}

function onClearButtonClick() {
    todoItems = [];
    localStorage.clear();
    getList(todoItems);
}

function init() {
    getLocalStorage();
    form.addEventListener('submit', onAddItemButtonClick);
    clearButton.addEventListener('click', onClearButtonClick)
}

init();