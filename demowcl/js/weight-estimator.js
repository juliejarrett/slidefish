var clothing_weights = new Array();
clothing_weights["m-jeans"] = 1.4;
clothing_weights["m-trousers"] = 0.9;
clothing_weights["m-shirts"] = .4;
clothing_weights["m-tshirts"] = .4;
clothing_weights["m-shorts"] = .4;
clothing_weights["m-underwear"] = .12;
clothing_weights["m-socks"] = .1;
clothing_weights["m-sweaters"] = 1.2;
clothing_weights["k-pants"] = .35;
clothing_weights["k-shirts"] = .2;
clothing_weights["w-jeans"] = 1.1;
clothing_weights["w-trousers"] = 0.7;
clothing_weights["w-dress"] = 0.9;
clothing_weights["w-shirts"] = 0.3;
clothing_weights["w-tshirts"] = 0.3;
clothing_weights["w-shorts"] = 0.4;
clothing_weights["w-underwear"] = 0.08;
clothing_weights["w-socks"] = 0.08;
clothing_weights["w-sweaters"] = 1;
clothing_weights["s-twin"] = 2.5;
clothing_weights["s-full"] = 3.5;
clothing_weights["s-towel"] = .75;

var inputWeight = 0;

function getTotalWeight()
{
	var planRecommendation = "";

	var totalWeight = 0;
	var elem = document.getElementById("estimator-form").elements;
	for(i=0; i<elem.length; i++)
	{
		if (elem[i].type == "number" && elem[i].value ){
			totalWeight += ( parseInt(elem[i].value) * clothing_weights[elem[i].name] )
		}
	}
	document.getElementById('weight-reveal').innerHTML = "<h4>We think you've got about <strong>" + Math.round(totalWeight) + " lbs.</strong> of dirty duds. That's perfect for the...</h4>";

	if ( totalWeight > 0 && totalWeight < 18 ){
		planRecommendation = "SOLO";
	}
	else if ( totalWeight > 17 && totalWeight < 24){
		planRecommendation = "SWEET SPOT";
	}
	else {
		planRecommendation = "FAMILY";
	}

	document.getElementById('plan-rec').innerHTML = "<h1>" + planRecommendation + " PLAN</h1>"
	document.getElementById('estimator-sell-message').style.display = "block";
}

function revealWeightEstimator()
{
	document.getElementById('estimator-form').style.display = "block";
	document.getElementById('weight-estimator-section').style.display = "block";
	document.getElementById('estimator-sell-message').style.display = "none";
}

