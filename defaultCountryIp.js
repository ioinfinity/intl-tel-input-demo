$("#phone").intlTelInput({
  initialCountry: "auto",
  geoIpLookup: function(callback) {
    $.get('http://ipinfo.io', function() {}, "jsonp").always(function(resp) {
      var countryCode = (resp && resp.country) ? resp.country : "";
      callback(countryCode);
    });
  },
  utilsScript: "https://rawgit.com/jackocnr/intl-tel-input/master/build/js/utils.js" // just for formatting/placeholders etc
});
