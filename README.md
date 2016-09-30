Applozic Ionic Chat Plugin
==========================

Applozic powers real time messaging across any device, any platform & anywhere in the world. Integrate our simple SDK to engage your users with image, file, location sharing and audio/video conversations.

Signup at [https://www.applozic.com/signup.html](https://www.applozic.com/signup.html?utm_source=github&utm_medium=readme&utm_campaign=ionic) to get the application key.

Documentation: [Applozic Ionic Chat & Messaging Plugin Documentation](https://www.applozic.com/docs/ionic-chat-plugin.html?utm_source=github&utm_medium=readme&utm_campaign=ionic)


###Getting Started

####Step 1: Copy [/lib/applozic](https://github.com/AppLozic/Applozic-Ionic-Chat-Plugin/tree/master/www/lib/applozic) folder in your project's lib folder.

####Step 2: Add in html page header

```
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
  ```

####Step 3: Add the following before the closing of '</body>'

```
    <script type="text/javascript" src="lib/applozic/js/mck-ui-plugins.min.js"></script>
    <script type="text/javascript" src="lib/applozic/js/mck-ui-widget.min.js"></script>
    <script type="text/javascript" src="lib/applozic/js/mck-emojis.min.js"></script>
    <script type="text/javascript" src="lib/applozic/js/mck-socket.min.js"></script>
    <script type="text/javascript"
    src="https://maps.google.com/maps/api/js?key=AIzaSyDKfWHzu9X7Z2hByeW4RRFJrD9SizOzZt4&libraries=places"></script>
    <script type="text/javascript" src="lib/applozic/js/locationpicker.jquery.min.js"></script>
    <script type="text/javascript" src="lib/applozic/js/app/mck-common-1.0.js"></script>
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
```


####Step4: Login/Register User

```
  $applozic.fn.applozic({
    appId: applozicApplicationKey,      //Get your application key from https://www.applozic.com
    userId: userId,                     //Logged in user's id, a unique identifier for user
    userName: username,                 //User's display name
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
```


#### Step 5: Initiate chat with other user

To initiate chat with another user using userId:
``` 
  $applozic.fn.applozic('loadTab', otherUserId);
```

Alternatively, you can add a chat button inside your web page using a tag and use 'userId' of the other user for data attribute "data-mck-id"

``` 
  <a href="#" class="applozic-launcher" data-mck-id="PUT_OTHER_USERID_HERE" data-mck-name="PUT_OTHER_USER_DISPLAY_NAME_HERE">CHAT BUTTON</a>
``` 

To open the chat list:
``` 
  $applozic.fn.applozic('loadTab', '');
``` 


#### Step 6: Populate contact list

Javascript code to load contacts

```
$applozic.fn.applozic('loadContacts', {"contacts": [{"userId": "USER_1", "displayName": "Devashish",
                          "imageLink": "https://www.applozic.com/resources/images/applozic_icon.png"},
                        {"userId": "USER_2", "displayName": "Adarsh",
                          "imageLink": "https://www.applozic.com/resources/images/applozic_icon.png"},
                        {"userId": "USER_3", "displayName": "Shanki",
                          "imageLink": "https://www.applozic.com/resources/images/applozic_icon.png"}
                        ]
         });
```

**NOTE**- Call **loadContacts** function only after plugin initailize callback (see Step 2 onInit function for reference).


#### Step 7: Context (Topic) based Chat
 
 Add the following in window.applozic.init call:
 
 ```
  topicBox: true,
  getTopicDetail: function(topicId) {
         //Based on topicId, return the following details from your application
         return {'title': 'topic-title',      // Product title
                     'subtitle': 'sub-title',     // Product subTitle or Product Id
                     'link' :'image-link',        // Product image link
                     'key1':'key1' ,              // Small text anything like Qty (Optional)
                     'value1':'value1',           // Value of key1 ex-10 (number of quantity) Optional
                     'key2': 'key2',              // Small text anything like MRP (product price) (Optional)
                     'value2':'value2'            // Value of key2 ex-$100  (Optional)
                  };
  }
 ```
 
 Add a chat button inside your web page using ```a``` tag and add the following:
 
 ```
 Class Attribute - applozic-wt-launcher 
 Data Attriutes  - mck-id, mck-name and mck-topicid
```

```
 mck-id      :  User Id of the user with whom to initiate the chat
 mck-name    :  Display name of the user with whom to initiate the chat
 mck-topicId :  Unique identifier for the topic/product 
 ```
 
 ```
 <a href="#" class="applozic-wt-launcher" data-mck-id="PUT_USERID_HERE" data-mck-name="PUT_DISPLAYNAME_HERE" data-mck-topicid="PUT_TOPICID_HERE">CHAT ON TOPIC</a>
 ```


#### Step 8: Group Messaging
Group have 2 identifiers:
groupId: Auto generated by Applozic
clientGroupId (optional): In case if you already have group identifier on your applicaiton side, use clientGroupId in all functions.


##### Open group chat

```
 $applozic.fn.applozic('loadGroupTab', groupId);  // group Id returned in response to group create api  
 ``` 
 
Open group chat using Client Group Id
 
```
 $applozic.fn.applozic('loadGroupTabByClientGroupId',{'clientGroupId':clientGroupId});
```


##### Create Group
 
 ```
$applozic.fn.applozic('initGroupTab', {'groupName' : groupName,   // required
                                       'type' : 1,                // 1 for private , 2 for public (required)
                                       'clientGroupId' : '',      // optional
                                       'users': [{userId:userId1, displayName:''},
                                                 {userId:userId2, displayName:''}
                                                ]}); 
 ``` 
 
##### Add User to Group (only for Group Admin)
 ```
$applozic.fn.applozic('addGroupMember',{'groupId': groupId,
                                        'clientGroupId': clientGroupId, //use either groupId or clientGroupId
                                        'userId': userIdToAdd,
                                        'callback': function(response) {console.log(response);}
                                        });
 ``` 
 
##### Remove User from Group (only for Group Admin)
 ```
$applozic.fn.applozic('removeGroupMember',{'groupId': groupId,
                                          'clientGroupId' : clientGroupId, //use either groupId or clientGroupId
                                          'userId': userIdToRemove,         
                                          'callback': function(response) {console.log(response);}
                                          });
 ```  
 
##### Leave Group
 ```
$applozic.fn.applozic('leaveGroup', {'groupId' : groupId,
                                     'clientGroupId' : clientGroupId, //use either groupId or clientGroupId
                                     'callback' :function(response){console.log(response);}
                                     });
 ``` 
  
##### Update Group 
 ```
$applozic.fn.applozic('updateGroupInfo', {'groupId' : groupId
                                     'clientGroupId' : clientGroupId, //use either groupId or clientGroupId,
                                     'name' : groupName, // optional
                                     'imageUrl' : '',  //optional
                                     'callback' : function(response){console.log(response);}});
 ```  
  
##### Get group list
 
 ```
 $applozic.fn.applozic('getGroupList', {'callback':function (response) { //write your logic}});   
 ``` 
 
Sample response:

```
           {'status' : 'success' ,                 // or error
            'data': [ {'id': groupId,
                       'name' : groupName',
                       'type' : '2',               // 1,2 or 5   (private, public or broadcast)
                       'memberName':[],           // Array of group member ids
                       'adminName': '',           // Put group admin's userId
                       'removedMembersId' [],     // Array including removed or left members Id  
                       'unreadCount' : '10'       // total unread count of messages for current logged in user
                        }]    
                     }]
           }
```




#### Step 9: Push notification Setup

```
    var userPxy = {
		    'applicationId': 'APPLICATION_KEY', // Replace APPLICATION_KEY with the Application key received after Signup from https://www.applozic.com/signup.html
		    'userId': 'USER_ID', // Replace USER_ID with the user's unique identifier
		    'registrationId': 'GCM_REGISTRATION_ID', //Replace GCM_REGISTRATION_ID with GCM registration id
		    'pushNotificationFormat' : '2',
		    'deviceType': '1',       //1 for Android, 4 for iOS
		    'deviceApnsType' : '1', //1 for Distribution and 0 for Development APNS Certificate
		    'appVersionCode': '106' 
		  };
		
		$.ajax({
	      url: "https://apps.applozic.com/rest/ws/register/client",
				type: 'post',
				data: w.JSON.stringify(userPxy),
				contentType: 'application/json',
				headers: {'Application-Key': 'APPLICATION_KEY'}, // Replace APPLICATION_KEY with the Application key received after Signup from https://www.applozic.com/signup.html
				    success: function (result) {
				        //console.log(result);
				    }
		});
```



###Documentation:
For advanced options and customization, visit [Applozic Ionic Chat & Messaging Plugin Documentation](https://www.applozic.com/docs/ionic-chat-plugin.html?utm_source=github&utm_medium=readme&utm_campaign=ionic)

###Free Ionic Framework for Chat
Special plans for startup and open source contributors, write to us at github@applozic.com 
