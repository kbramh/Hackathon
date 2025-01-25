import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import Stripe from 'stripe';
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(express.static('public'));

app.post('/create-checkout-session', async (_req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'price_1QlI46JdgZWAkXVl3kdSQPda',
        quantity: 1,
      },
    ],
    mode: 'payment',
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
  console.log('Server is listening');
});
