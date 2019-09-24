// Code Live//

$("#botaoHtml").click(function(){
	$("#tdHtml").toggle();	
	$("#headerHtml").toggle();
});
$("#botaoCss").click(function(){
	$("#tdCss").toggle();
	$("#headerCss").toggle();
});
$("#botaoJavaScript").click(function(){
	$("#tdJavaScript").toggle();
	$("#headerJs").toggle();
});
$("#botaoResultado").click(function(){
	$("#tdResultado").toggle();	
	$("#headerResultado").toggle();
});

var htmlCode = $("#textHtml").val();
var cssCode = $("#textCss").val();
var jsCode = $("#textJavaScript").val();
var code = "";
var iframe = jQuery('<iframe />').appendTo(jQuery('#tdResultado'));

function render() {
	
	htmlCode = $("#textHtml").val();
	cssCode = $("#textCss").val();
	jsCode = $("#textJavaScript").val();
	jQuery(iframe).contents().find('body').html(htmlCode);
	jQuery(iframe).contents().find('head').html('<style type="text/css">' + cssCode + '</style>');
	jQuery(iframe).contents().find('body').html(htmlCode + "<script type='text/javascript'>" + jsCode + "</script>" );
};

function compile() {
  document.addEventListener('keyup', function() {
    render();
  });
};

compile();
render();