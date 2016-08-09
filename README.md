Applozic Ionic Chat Plugin
==========================



1. Copy /www/lib/applozic folder in your project's lib folder.

2. Add in html page header  <!-- Applozic -->
  <link href="lib/applozic/css/mck-combined.min.css" rel="stylesheet">
  <link href="lib/applozic/css/app/mck-sidebox-1.0.css" rel="stylesheet">
  
  <link href="lib/applozic/css/app/style.css" rel="stylesheet">

  <!-- Custom JS -->
  <script type="text/javascript">
      var $original;
      if (typeof jQuery !== 'undefined') {
          $original = jQuery.noConflict(true);
          $ = $original;
          jQuery = $original;
      }
  </script>
  <script src="lib/applozic/js/jquery-2.2.2.min.js"></script>
  
  <!-- Applozic -->

  3.  Add the following before the closing of </body>

    <script type="text/javascript" src="lib/applozic/js/mck-ui-plugins.min.js"></script>
    <script type="text/javascript" src="lib/applozic/js/mck-ui-widget.min.js"></script>
    <script type="text/javascript" src="lib/applozic/js/mck-emojis.min.js"></script>
    <script type="text/javascript" src="lib/applozic/js/mck-socket.min.js"></script>
    <script type="text/javascript"
    src="https://maps.google.com/maps/api/js?key=AIzaSyDKfWHzu9X7Z2hByeW4RRFJrD9SizOzZt4&libraries=places"></script>
    <script type="text/javascript" src="lib/applozic/js/locationpicker.jquery.min.js"></script>
    <script type="text/javascript" src="lib/applozic/js/app/mck-sidebox-1.0.js"></script>
    <script type="text/javascript">
            var oModal = "";
            if (typeof $original !== 'undefined') {
                $ = $original;
                jQuery = $original;
                if (typeof $.fn.modal === 'function') {
                    oModal = $.fn.modal.noConflict();
                }
            } else {
                $ = $applozic;
                jQuery = $applozic;
                if (typeof $applozic.fn.modal === 'function') {
                    oModal = $applozic.fn.modal.noConflict();
                }
            }
    </script>

  4. Login/Register User
  $applozic.fn.applozic({
    appId: "applozic-sample-app",      //Get your application key from https://www.applozic.com
    userId: "demo1",                     //Logged in user's id, a unique identifier for user
    userName: "Demo user",                 //User's display name
    imageLink : '',                     //User's profile picture url
    email : '',                         //optional
    contactNumber: '',                  //optional, pass with internationl code eg: +16508352160
    desktopNotification: true,
    notificationIconLink: 'https://www.applozic.com/favicon.ico',    //Icon to show in desktop notification, replace with your icon
    authenticationTypeId: '1',          //1 for password verification from Applozic server and 0 for access Token verification from your server
    accessToken: '',                    //optional, leave it blank for testing purpose, read this if you want to add additional security by verifying password from your server https://www.applozic.com/docs/configuration.html#access-token-url
    onInit : function(response) {
       if (response === "success") {
          // login successful, perform your actions if any, for example: load contacts, getting unread message count, etc
            $applozic.fn.applozic('loadTab', '');
        } else {
          // error in user login/register (you can hide chat button or refresh page)
       }
   },
   contactDisplayName: function(otherUserId) {
         //return the display name of the user from your application code based on userId.
         return "";
   },
   contactDisplayImage: function(otherUserId) {
         //return the display image url of the user from your application code based on userId.
         return "";
   }
  });
