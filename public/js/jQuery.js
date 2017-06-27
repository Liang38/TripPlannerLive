$(document).ready(function(){
        console.log(this)

          $('#hotel-choices').append(() => {
            return hotels.map((hotel) => {
              return '<option>' + hotel.name + '</option>';
            })
          })

          $('#restaurant-choices').append(() => {
            return restaurants.map((restaurant) => {
              return '<option>' + restaurant.name + '</option>';
            })
          })
          $('#activity-choices').append(() => {
            return activities.map((activity) => {
              return '<option>' + activity.name + '</option>';
            })
          })

          // $('#hotel-choices + button').on('click', function(){
          //   var value = $('#hotel-choices').val();
          //   $('#hotel-list .itinerary-item-hotel').append(`
          //     <li>
          //       <span class="title">${value}</span>
          //       <button class="btn btn-xs btn-danger remove btn-circle">x</button>
          //   </li>
          //   `);
          // })
          $('#hotel-choices + button').on('click', function(){
            var value = $('#hotel-choices').val();
            $('#hotel-list .itinerary-item-hotel').replaceWith(`
              <div class="itinerary-item-hotel">
              <li>
                <span class="title">${value}</span>
                <button class="btn btn-xs btn-danger remove btn-circle">x</button>
            </li>
             </div>
            `);
          })
// $(function () {
//   //  set a limit to # of li's to show
//   var limit = 2, 
//   //  cache the li's
//       $li   = $('li');
  
//   $li.slice(limit, $li.length).hide();  
  
//   $('<li>', {
//     html: 'More...'
//   })
//   .appendTo('ul')
//   .bind('click', function() {
//     $(this).remove();
//     $li.show();
//   });
// });

          $('#restaurant-choices + button').on('click', function(){
            var value = $('#restaurant-choices').val();
            $('#restaurant-list .itinerary-item-restaurant').append(`
              <li>
                <span class="title">${value}</span>
                <button class="btn btn-xs btn-danger remove btn-circle">x</button>
            </li>
            `);
          })
          $('#activity-choices + button').on('click', function(){
            var value = $('#activity-choices').val();
            $('#activity-list .itinerary-item-activity').append(`
              <li>
                <span class="title">${value}</span>
                <button class="btn btn-xs btn-danger remove btn-circle">x</button>
            </li>
            `);
          })

          
      // alert("The paragraph was clicked.");
      });  
