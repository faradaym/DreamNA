$(function() {
  $('#button').click(function() {
    $('#question1').show();
  });

  var cld = cloudinary.Cloudinary.new({
    cloud_name: "dreamsmaker",
    secure: true
  });
  var options = {
    publicId: "THE_WETLAND_Official_Teaser_5",
    plugins: {
      panorama: {
        clickAndDrag: true,
        clickToToggle: true,
        autoMobileOrientation: true
      }
    },
    sourceTypes: ["mp4"]
  };
  var vplayer = cld.videoPlayer("demo-player", options);
});
