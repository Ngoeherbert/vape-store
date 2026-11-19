import { CheckoutSteps } from "@/components/checkout/checkout-steps";
import { CustomerForm } from "@/components/checkout/customer-form";
import { OrderSummary } from "@/components/store/order-summary";

export default function CheckoutInfoPage() {
  return (
    <div className="page pt-14 pb-24">
      <CheckoutSteps current={1} />
      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_400px]">
        <div>
          <h1 className="text-h1">Your details</h1>
          <CustomerForm />
        </div>
        <div className="self-start">
          <OrderSummary itemCount={2} subtotal={46} />
        </div>
      </div>
    </div>
  );
}
