### Question : 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer to the question No : 1
 
1) getElementById() is a method which is use for (Selects one element using its id)
In javascript getElementById() use by this syntax: document.getElementById('myid')
it returns a single element, id must be unique , fastest method, no # needed.

2) getElementByClassName() is method which is use for(Selects all elements with a specific class name) 
In javascript getElementByClassName() use by this syntax: document.getElementByClassName('myClass')
 
It returns HTML collection, looks like array buto not real array,
no . needed

3) querySelector() (selects the first matching element)
elements means : #title, .text, "p" etc.  
querySelector syntax: document.querySelector('css selector')
It returns single element and null
uses css select must use # and . 
 
 4) querySelectorAll() (selects all matching elements)
 Here (all matching elements) means that when we use many class property like this : 
<div class="hello">Islam</div>
<br>
<div class="hello">Islam</div>
<div class="hello">Islam</div>
        and we use querySelectorAll()  then querySelectorAll() find all the .hello class and give us = NodeList,
        It looks like array, we can use forEach() in querySelectorAll()

Conclusion :  If selecting by ID → getElementById()
              If selecting multiple elements by class → querySelectorAll() (modern & flexible)
              If you want full CSS selector power → querySelector / querySelectorAll



### 2. How do you create and insert a new element into the DOM?

Here is the proccess that how can I create and insert  a new element into the dom :

Create a element :

let myCreate = document.createElement('h1');



myCreate.textContent = 'hi, I am muslim'

let something = document.getElementById('something')

something.appendChild(myCreate);


### 3. What is Event Bubbling? And how does it work?

Event bubbling is a concept in javascript where an event starts from the targeted element (the element which was clicked or triggered) and then it prpagates bubbles and its goes forward to its elements in the (dom) tree.

In simple meaning , when an event happens suppose when we hava a <button> inside  a <div> if we click the button, the event first triggers on the button. Then in the same go ahead to parent <div>.
After that, it continue moving up to <body>, <html>, and lastly to document.
This upward movement of the event is called event bubbling
 <div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
document.getElementById("parent").addEventListener("click", function() {
console.log("Parent clicked");
});

<br>
document.getElementById("child").addEventListener("click", function() {
  console.log("Button clicked");
});
</script>

          
