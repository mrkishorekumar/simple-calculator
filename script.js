function enter(val){
	document.getElementById("result").value+=val
}

function clear_result(){
	document.getElementById("result").value=""
}

function eval_result(){
	var problem = document.getElementById("result").value
	var solution = eval(problem)
	document.getElementById("result").value = solution
}