// YOUR CODE HERE:
//
// var indivual = new Message {
//   this.username : window.location.search
//   this.text: form
// }

// var Message = { 
//     username: 'jen',
//     text: 'hi'
//   };
// $("#send").click(function() {
//   alert("some");
//   console.log('send');
// });

var splitData = $( '#myField' ).val();
// console.log(splitData);

var app = {
    server: 'http://parse.sfs.hackreactor.com/',
    
    unique: function(){ _.unique(this.results,false);
     console.log(this.results);
    },
    
    init: function() { 
      //setInterval(()=>app.fetch(), 1000);
      app.fetch();
      
    },

    clearMessages: function() {
      $('#chats').empty();
    },
    
    handleUsernameClick: function () {

    },

    renderMessage: function(message) {
     var userName = _.escape(message.username);
     var text = _.escape(message.text);// console.log($('#chats').length );
      $('#chats')
        .append(`<div class = 'message'>
                   <span>${userName} : </span>${text}</div>`);
    //console.log('test');
//'<span>' + message.username + ' \n ' + message.text + '</span>'
    }, 

    renderRoom: function (roomArray) {
      roomArray.forEach(function(element) {
        console.log(element);
        $('#roomSelect').append(`<a href = "#"><li> ${element} + '</li></a>`);
        
      })
      //console.log('hi', room);
      //var uni = _.unique(chatroom);
      //$('#roomSelect').append('<span>' + room + '</span>');
    },

    send: function(message) {
      $.ajax({
        // This is the url you should use to communicate with the parse API server.
        url: this.server + 'chatterbox/classes/messages',
        type: 'POST',
        data: message,
       // contentType: 'application/json',
        success: function (data) {
          console.log('chatterbox: Message sent');
          //this.fetch();
        },
        error: function (data) {
          // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
          console.error('chatterbox: Failed to send message', data);
        }
      });
    
    },
    
    fetch: function() {
      $.ajax({
       
        // This is the url you should use to communicate with the parse API server.
        url: this.server + 'chatterbox/classes/messages',
        type: 'GET',
        data: 'order=-createdAt',
        contentType: 'application/json',
        success: function (data) {
          console.log('chatterbox: Message sent');
          //console.log(data);
          console.log(data.results);
          app.clearMessages();
          var individualObjects = data.results.forEach(function(messages) {
            
            app.renderMessage(messages);
          })
          var individualRooms = [];
            data.results.forEach(function(room){
              individualRooms.push(room.roomname);
          });
          var roomsArray = _.unique(individualRooms);
          //console.log(test);
          app.renderRoom(roomsArray);//console.log(individualRooms);//$('#chats').append('<span>\n' + data.results + '</span>');
        },
        error: function (data) {
          // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
          console.error('chatterbox: Failed to send message', data);
        }
      });
    } 

    
    
    
    
    
  };

//});
