// YOUR CODE HERE:
//

  var message = { 
    username: 'jen',
    text: 'hi'
  };
  var app = {
    server: 'http://parse.sfs.hackreactor.com/',
    
    init: function() {
    },

    clearMessages: function() {
      $('#chats').empty();
    },
    
    handleUsernameClick: function () {

    },

    renderMessage: function(message) {
     // console.log($('#chats').length );
      $('#chats')
        .append(`<div class = 'message'>
                   <span>${message.username} : </span>${message.text}</div>`);
    //console.log('test');
//'<span>' + message.username + ' \n ' + message.text + '</span>'
    }, 

    renderRoom: function (room) {
      $('#roomSelect').append('<span>' + room + '</span>');
    },

    send: function(message) {
      $.ajax({
        // This is the url you should use to communicate with the parse API server.
        url: this.server + 'chatterbox/classes/messages',
        type: 'POST',
        data: message,
        contentType: 'application/json',
        success: function (data) {
          console.log('chatterbox: Message sent');
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
        data:{},
        contentType: 'application/json',
        success: function (data) {
          console.log('chatterbox: Message sent');
          console.log(data);
          console.log(data.results);
          var individualObjects = data.results.forEach(function(messages) {
            console.log('++', this);
            app.renderMessage(messages);
          })
          //$('#chats').append('<span>\n' + data.results + '</span>');
        },
        error: function (data) {
          // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
          console.error('chatterbox: Failed to send message', data);
        }
      });
    } 
  };
  var storage = new XMLHttpRequest();
  console.log(storage);
//});
