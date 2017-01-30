jQuery(document).ready(function() {

    $("#categories__price-range").slider({
        range: true,
        min: 0,
        max: 300,
        values: [0, 200],
        slide: function(event, ui) {
            $("#price").val("$" + ui.values[0] + " - $" + ui.values[1]);

            $("#pricemin").text(ui.values[0]);
            $("#pricemax").text(ui.values[1]);



        },

        slide: function(event, ui) {
            $('#price').val("$" + ui.values[0] + " - $" + ui.values[1]);
            $("#pricemin").text(ui.values[0]);
            $("#pricemax").text(ui.values[1]);
        }

    });
    $("#price").val("$" + $("#categories__price-range").slider("values", 0) +
        " - $" + $("#categories__price-range").slider("values", 1));


});