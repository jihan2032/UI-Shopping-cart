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
  $amount_span = $(this).parent().siblings('.amount')
  if ($amount_span.text() !== '0') {
    $amount_span.text(parseInt($amount_span.text()) - 1)
    $total_span.text(parseInt($total_span.text()) - parseInt(product_price.substr(0,product_price.indexOf(','))))
  }
});

$(document).on('click', '.delete-product', function(ev) {
  $total_span  = $('.total-value')
  $current_row = $(this).closest('tr')
  product_price = $current_row.find('.product-price').text()
  amount = parseInt($current_row.find('.amount').text())
  $current_row.hide()
  if (amount > 0) {
    to_be_deducted = parseInt(product_price.substr(0,product_price.indexOf(','))) * amount
    $total_span.text(parseInt($total_span.text()) - to_be_deducted)
  }
});
