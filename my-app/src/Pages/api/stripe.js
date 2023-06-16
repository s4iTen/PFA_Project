const Stripe = require("stripe");

const stripe = new Stripe('sk_test_51NFb0NHo0XtniAaJZVKSIz7SMIy2rfPIjwrcoKC1y2KCtZz5T1CaUJMNmrfFJOZvttsYPdmojR9qdkZ1hWy0HEF400bTRypBGZ');

async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const lineItems = Array.isArray(req.body) ? req.body : [req.body];

            const formattedLineItems = await Promise.all(lineItems.map(async (item) => {
                const img = item.image[0].asset._ref;
                const newImage = img.replace('image-', 'https://cdn.sanity.io/images/fg0vn4ia/production/').replace('-webp', '.webp');

                const priceData = {
                    currency: 'usd',
                    product_data: {
                        name: item.name,
                        images: [newImage],
                    },
                    unit_amount: item.price * 100,
                };

                return {
                    price_data: priceData,
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1,
                    },
                    quantity: item.quantity,
                };
            }));

            const params = {
                submit_type: 'pay',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                shipping_options: [
                    { shipping_rate: 'shr_1NFcDVHo0XtniAaJS6uyGEIR' },
                ],
                line_items: formattedLineItems,
                success_url: `${req.headers.origin}/?success=true`,
                cancel_url: `${req.headers.origin}/?canceled=true`,
            };

            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create(params);
            res.status(200).json(session);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}

module.exports = handler;
