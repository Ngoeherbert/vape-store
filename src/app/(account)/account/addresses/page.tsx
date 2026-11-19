"use client";

const label = "block text-[15px] text-muted";
const input = "mt-2 h-[68px] w-full border border-[#d4d4d4] px-4 text-lg";

export default function AddressesPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-24 pt-14">
      <div className="flex items-center justify-between">
        <h1 className="text-h1">Addresses</h1>
        <a href="#address-form" className="bg-ink px-8 py-5 text-xl text-canvas">
          Add address
        </a>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <article className="card">
          <span className="inline-block bg-ink px-3 py-1.5 text-[15px] text-canvas">
            Default
          </span>
          <p className="mt-5 text-xl leading-9">
            [Name]<br />[Street]<br />[City], [Postcode]
          </p>
          <div className="mt-4 flex gap-5 text-lg">
            <button type="button" className="underline">Edit</button>
            <button type="button" className="underline">Delete</button>
          </div>
        </article>
        <article className="card">
          <p className="text-xl leading-9">
            [Name]<br />[Street]<br />[City], [Postcode]
          </p>
          <div className="mt-4 flex gap-5 text-lg">
            <button type="button" className="underline">Edit</button>
            <button type="button" className="underline">Delete</button>
            <button type="button" className="underline">Set as default</button>
          </div>
        </article>
      </div>

      <form
        id="address-form"
        className="mt-10 card"
        onSubmit={(e) => {
          e.preventDefault();
          /* TODO: save address server action */
        }}
      >
        <h2 className="text-3xl font-semibold">Add / edit address</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <label className={label}>
            First name<input name="firstName" required className={input} />
          </label>
          <label className={label}>
            Last name<input name="lastName" required className={input} />
          </label>
        </div>
        <label className={`${label} mt-6`}>
          Address<input name="address" required className={input} />
        </label>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <label className={label}>
            City<input name="city" required className={input} />
          </label>
          <label className={label}>
            Postcode<input name="postcode" required className={input} />
          </label>
        </div>
        <div className="mt-8 flex gap-4">
          <button type="submit" className="bg-ink px-9 py-5 text-xl text-canvas">
            Save address
          </button>
          <button type="reset" className="border border-[#d4d4d4] px-9 py-5 text-xl">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
