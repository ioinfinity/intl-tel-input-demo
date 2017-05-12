var input = $("#phone");

input.intlTelInput({
  initialCountry: "auto",
  geoIpLookup: function(callback) {
    $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
      var countryCode = (resp && resp.country) ? resp.country : "";
      callback(countryCode);
    });
  },
  utilsScript: "https://rawgit.com/ioinfinity/intl-tel-input/master/build/js/utils.js" // just for formatting/placeholders etc
});

input.on("keyup change", function() {

  var intlNumber = input.intlTelInput("getNumber");
  
  if (intlNumber) {
    input.val(intlNumber);
  }
});
