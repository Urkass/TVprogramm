var an_array=[
    {name:"My name"},
    {name:"Another name"},
];

var source   = $("#src").html();
var template = Handlebars.compile(source);
$("body").append( template(an_array) );