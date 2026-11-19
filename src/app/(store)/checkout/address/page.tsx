import { CheckoutSteps } from "@/components/checkout/checkout-steps";
import { AddressForm } from "@/components/checkout/address-form";
import { OrderSummary } from "@/components/store/order-summary";

export default function CheckoutAddressPage() {
  return (
    <div className="page pt-14 pb-24">
      <CheckoutSteps current={2} />
      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_400px]">
        <div>
          <h1 className="text-h1">Shipping address</h1>
          <AddressForm />
        </div>
        <div className="self-start">
          <OrderSummary itemCount={2} subtotal={46} />
        </div>
      </div>
    </div>
  );
}
