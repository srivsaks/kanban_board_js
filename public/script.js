const addBtns=document.querySelectorAll(".add-btn:not(.solid)");
const saveItemBttns=document.querySelectorAll(".solid");
const addItemContainers=document.querySelectorAll(".add-container");
const addItems=document.querySelectorAll(".add-item");

const itemLists=document.querySelectorAll("drag-item-list");
const backlogLists=document.querySelectorAll("backlog-list");
const progressLists=document.querySelectorAll("progress-list");
const completeLists=document.querySelectorAll("complete-list");
const onholdLists=document.querySelectorAll("on-hold-list");

let backlogListArray=[];
let progressListArray=[];
let completeListArray=[];
let onholdListArray=[];

function getSavedColumns(){
    if(localStorage.getItem("backlogItems")){
backlogListArray=JSON.parse(localStorage.getItem("backlogItems"));
progressListArray=JSON.parse(localStorage.getItem("progressItems"));
completeListArray=JSON.parse(localStorage.getItem("completeItems"));
onholdListArray=JSON.parse(localStorage.getItem("onHoldItems"));
    }
    else{
       backlogListArray=["Release"];
progressListArray=["work"];
completeListArray=["ahh.done"];
onholdListArray=["onhold"];
    }
}

function updateColumns(){
    localStorage.setItem("backlogItems",backlogListArray)
    localStorage.setItem("progressItems",progressListArray)
    localStorage.setItem("completeItems",completeListArray)
    localStorage.setItem("onHoldItems",onholdListArray)
}

getSavedColumns();
updateColumns();