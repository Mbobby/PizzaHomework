function onClickSubmit()
{
	var name = document.getElementById("customerName").value;
	var telephone = document.getElementById("telephone").value;
	var email = document.getElementById("email").value;
	var size = "";
	var topping = "";

	//Get Size
	var sizeCheck = document.getElementsByName("size");
	for(var i = 0; i < sizeCheck.length; i++)
	{
		if(sizeCheck[i].checked)
			size = sizeCheck[i].value;
	}


	var toppings = document.getElementsByName("toppings");
	var added = 0;
	for(var i = 0; i < toppings.length; i++)
	{
		if(toppings[i].checked)
		{
			if(added === 0)
			{
				topping = topping + toppings[i].value;
				added = added + 1;
			}
			else
			{
				topping = topping + ", " + toppings[i].value;
			}
		}
	}
	topping = topping + ".";

	var bodyContent = "<h1>Order Details</h1><p class=\"lead\">Thank you " + name + "</p>";
	bodyContent = bodyContent + "<p class=\"lead\">Your telephone number is " + telephone + "</p>";
	bodyContent = bodyContent + "<p class=\"lead\">Your email is " + email + "</p>"; 
	bodyContent = bodyContent + "<p class=\"lead\">You ordered a " + size + " size pizza with the following toppings <em>" + topping + "<br></em>Please confirm or decline your order below.<br><b>Thank You</b></p>";
	bodyContent = bodyContent + "<div class=\"form-group\"><div class=\"col-sm-10 col-md-offset-1\"><button type=\"submit\" class=\"btn btn-primary btn-lg center-block\" onclick=\"onClickConfirm();return false;\">Confirm</button></div></div>";
	bodyContent = bodyContent + "<div class=\"form-group cancelButtonContainer\"><div class=\"col-sm-10 col-md-offset-1\"><button type=\"submit\" class=\"btn btn-danger btn-lg center-block\" onclick=\"onClickCancel();return false;\">Cancel Order</button></div></div>";
	var element = document.getElementById("body");
	element.innerHTML = bodyContent;
}

function onClickConfirm()
{
	var bodyContent = "<h1>Order Confirmed</h1><p>Your Order has been confirmed.</p>";
	var element = document.getElementById("body");
	element.innerHTML = bodyContent;
}
function onClickCancel()
{
	var bodyContent = "<h1>Order Canceled</h1><p>Your Order has been canceled.</p>";
	var element = document.getElementById("body");
	element.innerHTML = bodyContent;
}
