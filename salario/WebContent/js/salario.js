$(document).ready(function() {
	$("#reajustar").click(function() {
		$("form input").each(function() {
			if ($(this).val() == "") {
				$(this).css({
						"border" : "1px solid #F00",
						"padding" : "2px"
				});
				$(this).focus();
				return false;
			} else {
				var salario = parseFloat($("#salario").val());
				var percentual = parseFloat($("#percentual").val());
				var aumento = 0;
				var salario_final = 0;
				
				aumento = (salario * percentual) / 100;
				salario_final = salario + aumento;
				
				$("#percentual_aplicado").text("Total do Reajuste em %: " + percentual);
				$("#aumento").text("Valor do aumento em R$: " + aumento);
				$("#novo").text("Novo salário em R$: " + salario_final);
				
				return true;
			}
		});
	});
});