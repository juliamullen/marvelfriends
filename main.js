$(document).ready(function() {
$("#dotheyform").submit(function(e) {
    e.preventDefault();
    url = "http://gateway.marvel.com:80/v1/public/characters?nameStartsWith={0}&apikey=87e52060601dd439e2161f825f20aa6f"
    dothey = "http://gateway.marvel.com:80/v1/public/characters/{0}/comics?sharedAppearances={1}&apikey=87e52060601dd439e2161f825f20aa6f&limit=15"
    var char1 = $("#char1").text();
    var char2 = $("#char2").text();
    $.ajax({url:url.replace('{0}', char1)}).done(function(data1) {
        $.ajax({url:url.replace('{0}', char2)}).done(function(data2) {
            var char1id = data1['data']['results']['id'];
            var char2id = data2['data']['results']['id'];
            var dothey = dothey.replace('{0}', char1id)
            dothey = dothey.replace('{1}', char2id);
            $.ajax({url:dothey}).done(function(data) {
                console.log(data);
                //if (data['data']['results'] > 10) {
                //    $("#result").text("yes");
                //}
                //elif (data['data']['results'] > 0)
                //{
                //    $("#result").text("maybe?");
                //}
                //else
                //{
                //    $("#result").text("probably not");
                //}
            });

        });
    });

});
});
