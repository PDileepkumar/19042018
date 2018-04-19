$(document).ready(function(e) {
    "use strict";

    //mailchimp
    $('#mailchimp-subscription-form-footer').ajaxChimp({
      callback: mailChimpCallBack,
      url: '//thememascot.us9.list-manage.com/subscribe/post?u=a01f440178e35febc8cf4e51f&amp;id=49d6d30e1e'
    });

$('#mailchimp-subscription-form2').ajaxChimp({
  callback: mailChimpCallBack,
    url: '//thememascot.us9.list-manage.com/subscribe/post?u=a01f440178e35febc8cf4e51f&amp;id=49d6d30e1e'
  });

  function mailChimpCallBack(resp) {
    // Hide any previous response text
    var $mailchimpform = $('#mailchimp-subscription-form2'),
        $response = '';
    $mailchimpform.children(".alert").remove();
    if (resp.result === 'success') {
        $response = '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + resp.msg + '</div>';
    } else if (resp.result === 'error') {
        $response = '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + resp.msg + '</div>';
    }
    $mailchimpform.prepend($response);
  }
    function mailChimpCallBack(resp) {
      // Hide any previous response text
      var $mailchimpform = $('#mailchimp-subscription-form-footer'),
          $response = '';
      $mailchimpform.children(".alert").remove();
      if (resp.result === 'success') {
          $response = '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + resp.msg + '</div>';
      } else if (resp.result === 'error') {
          $response = '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + resp.msg + '</div>';
      }
      $mailchimpform.prepend($response);
    }

    //Flipclock
    var clock;
    $(document).ready(function() {
      // Grab the current date
      var currentDate = new Date();
      // Set some date in the future. In this case, it's always Jan 1
      var futureDate  = new Date(2019, 10, 10, 16, 24); //Date(year, month, day, hours, minutes, seconds, milliseconds); 
      // Calculate the difference in seconds between the future and current date
      var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
      // Instantiate a coutdown FlipClock
      clock = $('#flipclock1').FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true
      });
    });

    //Contact Form Validation
    $("#contact_form").validate({
      submitHandler: function(form) {
        var form_btn = $(form).find('button[type="submit"]');
        var form_result_div = '#form-result';
        $(form_result_div).remove();
        form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
        var form_btn_old_msg = form_btn.html();
        form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
        $(form).ajaxSubmit({
          dataType:  'json',
          success: function(data) {
            if( data.status === 'true' ) {
              $(form).find('.form-control').val('');
            }
            form_btn.prop('disabled', false).html(form_btn_old_msg);
            $(form_result_div).html(data.message).fadeIn('slow');
            setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
          }
        });
      }
    });
    
    $(document).ready(function() {
        $('#basic-coupon-clock').countdown('2019/10/10', function(event) {
          $(this).html(event.strftime('%D <span class="font-16">Days</span> %H <span class="font-16">Hours</span> %M <span class="font-16"> Minutes</span> %S <span class="font-16"> Seconds</span>'));
        });
      });
    
    $("#reservation_form").validate({
      submitHandler: function(form) {
        var form_btn = $(form).find('button[type="submit"]');
        var form_result_div = '#form-result';
        $(form_result_div).remove();
        form_btn.before('&amp;lt;div id="form-result" class="alert alert-success" role="alert" style="display: none;"&amp;gt;&amp;lt;/div&amp;gt;');
        var form_btn_old_msg = form_btn.html();
        form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
        $(form).ajaxSubmit({
          dataType:  'json',
          success: function(data) {
            if( data.status == 'true' ) {
              $(form).find('.form-control').val('');
            }
            form_btn.prop('disabled', false).html(form_btn_old_msg);
            $(form_result_div).html(data.message).fadeIn('slow');
            setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
          }
        });
      }
    });
});



