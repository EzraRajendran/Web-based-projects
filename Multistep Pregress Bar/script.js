$(document).ready(function () { 
	var mycurrentStep, MynextStep, mypreviousStep; 
	var opacity; 
	var current = 1; 
	var steps = $("fieldset").length; 

	setProgressBar(current); 

	$(".next-step").click(function () { 

		mycurrentStep = $(this).parent(); 
		MynextStep = $(this).parent().next(); 

		$("#progressbar li").eq($("fieldset") 
			.index(MynextStep)).addClass("active"); 

		MynextStep.show(); 
		mycurrentStep.animate({ opacity: 0 }, { 
			step: function (now) { 
				opacity = 1 - now; 

				mycurrentStep.css({ 
					'display': 'none', 
					'position': 'relative'
				}); 
				MynextStep.css({ 'opacity': opacity }); 
			}, 
			duration: 500 
		}); 
		setProgressBar(++current); 
	}); 

	$(".previous-step").click(function () { 

		mycurrentStep = $(this).parent(); 
		mypreviousStep = $(this).parent().prev(); 

		$("#progressbar li").eq($("fieldset") 
			.index(mycurrentStep)).removeClass("active"); 

		mypreviousStep.show(); 

		mycurrentStep.animate({ opacity: 0 }, { 
			step: function (now) { 
				opacity = 1 - now; 

				mycurrentStep.css({ 
					'display': 'none', 
					'position': 'relative'
				}); 
				mypreviousStep.css({ 'opacity': opacity }); 
			}, 
			duration: 500 
		}); 
		setProgressBar(--current); 
	}); 

	function setProgressBar(mycurrentStep) { 
		var percent = parseFloat(100 / steps) * current; 
		percent = percent.toFixed();
		$(".progress-bar")
			.css("width", percent + "%")
	} 

	$(".submit").click(function () { 
		return false; 
	}) 
}); 
