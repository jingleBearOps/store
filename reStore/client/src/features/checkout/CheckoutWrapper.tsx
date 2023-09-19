import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "./CheckoutPage";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51NsA3yLtPjouTNdVnZqLpBspwxaGNQA4Ctn17bGFE1esfg1p9DYRjev8hzWwSQUwMDST5PnHy42KXJfigMa79VqF00qzs4ynbS')
export default function CheckoutWrapper(){
    return (
        <Elements stripe={stripePromise}>
            <CheckoutPage />
        </Elements>
    )
}