const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(express.static('public'));

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    discounts: req.headers.referer.endsWith('?discount=true') ? [
      {
        coupon: '1a8WDUeP',
      },
    ] : [],
    line_items: [
      {
        price: 'price_1QlI46JdgZWAkXVl3kdSQPda',
        quantity: 1,
      },
    ],
    mode: 'payment',
    payment_method_types: ['card'],
    return_url: `http://localhost:3000/return.html?session_id={CHECKOUT_SESSION_ID}`,
    ui_mode: 'embedded',
  });

  res.send({ clientSecret: session.client_secret });
});

app.get('/session-status', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email
  });
});

app.listen(3000, () => {
  console.log('Server is listening. Navigate to site at http://localhost:3000/checkout.html');
});

module.exports = app;
