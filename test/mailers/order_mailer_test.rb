require "test_helper"

class OrderMailerTest < ActionMailer::TestCase
  test "received" do
    mail = OrderMailer.received(orders(:one))
    assert_equal "Pragmatic Store Order Confirmation", mail.subject
    assert_equal ["MyString@email.com"], mail.to
    assert_equal ["arielberardi95@gmail.com"], mail.from
  end

  test "shipped" do
    mail = OrderMailer.shipped(orders(:one))
    assert_equal "Pragmatic Store Order Shipped", mail.subject
    assert_equal ["MyString@email.com"], mail.to
    assert_equal ["arielberardi95@gmail.com"], mail.from
  end
end
