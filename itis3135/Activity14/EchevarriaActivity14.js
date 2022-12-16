$(document).ready(function () {
    $("#nav_list li").click(function () {
        var title = $(this).children("a").attr("title");
        $.get("json_files/" + title + ".json", function (data, status) {
            data = data['speakers'][0];
            $("main h1").html(data['title']);
            $("main h2").html(data['month']);
            $("main h3").html(data['speaker']);
            $("main img").attr("src", data.image);
            $("main p").html(data.text);
        });
    });
}); // end ready