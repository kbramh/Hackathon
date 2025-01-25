const stripe = Stripe("pk_test_51QNHGyJdgZWAkXVlt23ESao7Ho2LrYPRcbxRFXMTcQJxQRceC2nKOJMfvNqLPRKuUBNBJSGF7uPVaiebsRxvWPUX00tOJTL26l")
initialize();

//Create a Checkout Session
async function initialize() {
    const fetchClientSecret = async () => {
        const response = await fetch("/create-checkout-session", {
            method: 'POST',
        });
        const { clientSecret } = await response.json();
        return clientSecret;
    };

    const checkout = await stripe.initEmbeddedCheckout({
        fetchClientSecret,
    });

    //Mount Checkout
    checkout.mount('#checkout');
}
