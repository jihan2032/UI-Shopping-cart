$(document).on('click', '.add-btn', function(ev) {
  $total_span  = $('.total-value')
  product_price = $(this).closest('tr').find('.product-price').text()
  $amount_span = $(this).parent().siblings('.amount')
  $amount_span.text(parseInt($amount_span.text()) + 1)
  $total_span.text(parseInt($total_span.text()) + parseInt(product_price.substr(0,product_price.indexOf(','))))
});

$(document).on('click', '.sub-btn', function(ev) {
  $total_span  = $('.total-value')
  product_price = $(this).closest('tr').find('.product-price').text()
  $amount_span = $(this).parent().siblings('.amount');
  if ($amount_span.text() !== '0') {
    $amount_span.text(parseInt($amount_span.text()) - 1);
    $total_span.text(parseInt($total_span.text()) - parseInt(product_price.substr(0,product_price.indexOf(','))))
  }
});
