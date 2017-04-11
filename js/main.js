// product constructor
function jordan(name, size, color, price, image) {
	this.name  = name
	this.size  = size
	this.color = color
	this.price = price
	this.image = image
}

// create new products from the product constructor
var jordan1  = new jordan("Jordan 1", "10", "white/varsity", "$150", "img/jordan1.jpg")
var jordan3  = new jordan("Jordan 3", "10.5", "true blue", "$250", "img/jordan3.jpg")
var jordan4  = new jordan("Jordan 4", "10.5", "cool grey", "$400", "img/jordan4.jpg")
var jordan5  = new jordan("Jordan 5", "11", "black metallic", "$220", "img/jordan5.jpg")
var jordan11 = new jordan("Jordan 11", "10", "royal blue", "$600", "img/jordan11.jpg")
var jordan12 = new jordan("Jordan 12", "10.5", "red cherry", "$450", "img/jordan12.jpg")
var jordan13 = new jordan("Jordan 13", "10.5", "frenchblue", "$300", "img/jordan13.jpg")
var jordan2 = new jordan("Jordan 2", "10.5", "meloblue", "$290", "img/jordan2.jpg")
var jordan7 = new jordan("Jordan 7", "10", "alympics", "$280", "img/jordan7.jpg")

// create an array to add products to
var jordanArray = new Array


// add products to array of products
jordanArray.push(jordan1, jordan3, jordan4, jordan5, jordan11, jordan12, jordan13, jordan2, jordan7)

// loop through products array
for(var i = 0; i < jordanArray.length; i++) {
	// create new elements for each product
	var newItem  = document.createElement("div")
	var newDiv   = document.createElement("div")
	var nameH1   = document.createElement("h1")
	var sizeH4   = document.createElement("h4")
	var colorH4  = document.createElement("h4")
	var priceH4  = document.createElement("h4")
	var btn      = document.createElement("button")
	var image    = document.createElement("img")

	// create text for new elements
	var jName   = document.createTextNode(jordanArray[i].name)
	var jSize   = document.createTextNode("Available size: " + jordanArray[i].size)
	var jColor  = document.createTextNode("Color: " + jordanArray[i].color)
	var jPrice  = document.createTextNode("For ONLY: " + jordanArray[i].price)
	var jButton = document.createTextNode("Buy Now!")

	// update source attribute
	image.src = jordanArray[i].image

	// update class attributes
	image.className = "img-responsive"
	btn.className = "btn btn-primary btn-lg"
	newItem.className = "col-sm-4"
	newDiv.className = "tshirt shirtName" + [i] + " thumbnail"
	// add text to elements
	nameH1.appendChild(jName)
	sizeH4.appendChild(jSize)
	colorH4.appendChild(jColor)
	priceH4.appendChild(jPrice)
	btn.appendChild(jButton)

	// add elements to new div
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(sizeH4)
	newDiv.appendChild(colorH4)
	newDiv.appendChild(priceH4)
	newDiv.appendChild(btn)
	

	// add newdiv to newitem div
	newItem.appendChild(newDiv)

	// add new item to the element with id="shirts"
	document.getElementById("products").appendChild(newItem)
}


