#!/usr/bin/env bash
# Run from the ROOT of your Next.js project (after create-next-app).
# Creates every folder and empty file for the vape store. Existing files are NOT overwritten.
set -euo pipefail

mk() { for f in "$@"; do mkdir -p "$(dirname "$f")"; [ -e "$f" ] || touch "$f"; done; }

# create-next-app makes src/app/page.tsx, which would clash with src/app/(store)/page.tsx
rm -f src/app/page.tsx

# ---------------------------------------------------------------- pages
pages=(
  # storefront (87-screen outline, Part 1)
  "(store)" "(store)/region" "(store)/blocked" "(store)/age-check"
  "(store)/categories" "(store)/categories/[slug]" "(store)/brands" "(store)/brands/[slug]"
  "(store)/products" "(store)/products/[slug]" "(store)/search" "(store)/compare"
  "(store)/deals" "(store)/bundles" "(store)/cart"
  "(store)/checkout/info" "(store)/checkout/address" "(store)/checkout/shipping"
  "(store)/checkout/payment" "(store)/checkout/review"
  "(store)/pay/[orderId]" "(store)/pay/[orderId]/status" "(store)/order/[orderId]/confirmation"
  "(store)/track-order" "(store)/blog" "(store)/blog/[slug]" "(store)/contact" "(store)/faq"
  "(store)/shipping-policy" "(store)/returns" "(store)/about" "(store)/terms"
  "(store)/privacy" "(store)/cookies" "(store)/health-warning"
  # customer auth
  "(auth)/login" "(auth)/register" "(auth)/forgot-password" "(auth)/reset-password" "(auth)/verify-email"
  # customer account
  "(account)/account" "(account)/account/orders" "(account)/account/orders/[id]"
  "(account)/account/addresses" "(account)/account/profile" "(account)/account/wishlist"
  "(account)/account/reviews" "(account)/account/notifications" "(account)/account/verification"
  # admin auth
  "admin/(auth)/login" "admin/(auth)/forgot-password" "admin/(auth)/reset-password"
  # admin panel (Part 2)
  "admin/(panel)" "admin/(panel)/products" "admin/(panel)/products/new" "admin/(panel)/products/[id]"
  "admin/(panel)/categories" "admin/(panel)/brands" "admin/(panel)/attributes"
  "admin/(panel)/inventory" "admin/(panel)/import-export"
  "admin/(panel)/orders" "admin/(panel)/orders/[id]" "admin/(panel)/orders/[id]/refund"
  "admin/(panel)/orders/[id]/invoice"
  "admin/(panel)/payments" "admin/(panel)/payments/[id]" "admin/(panel)/payments/exceptions"
  "admin/(panel)/payments/ipn-logs"
  "admin/(panel)/customers" "admin/(panel)/customers/[id]" "admin/(panel)/customers/blocked"
  "admin/(panel)/verification"
  "admin/(panel)/marketing/coupons" "admin/(panel)/marketing/promotions"
  "admin/(panel)/marketing/campaigns" "admin/(panel)/marketing/reviews"
  "admin/(panel)/shipping/zones" "admin/(panel)/shipping/carriers"
  "admin/(panel)/shipping/restrictions" "admin/(panel)/shipping/tax"
  "admin/(panel)/content/pages" "admin/(panel)/content/blog" "admin/(panel)/content/homepage"
  "admin/(panel)/settings" "admin/(panel)/settings/nowpayments" "admin/(panel)/settings/emails"
  "admin/(panel)/team/staff" "admin/(panel)/team/roles"
  "admin/(panel)/audit-log" "admin/(panel)/reports"
)
for p in "${pages[@]}"; do mk "src/app/$p/page.tsx"; done

# layouts, loading + error boundaries
mk src/app/layout.tsx src/app/globals.css src/app/not-found.tsx src/app/error.tsx src/app/loading.tsx \
   "src/app/(store)/layout.tsx" "src/app/(store)/loading.tsx" \
   "src/app/(auth)/layout.tsx" "src/app/(account)/layout.tsx" \
   "src/app/admin/(auth)/layout.tsx" "src/app/admin/(panel)/layout.tsx" "src/app/admin/(panel)/loading.tsx"

# ---------------------------------------------------------------- API route handlers
mk "src/app/api/auth/[...all]/route.ts" \
   src/app/api/webhooks/nowpayments/route.ts \
   src/app/api/payments/create/route.ts \
   "src/app/api/payments/[id]/route.ts" \
   src/app/api/uploads/presign/route.ts \
   "src/app/api/export/[type]/route.ts" \
   src/app/api/import/products/route.ts \
   "src/app/api/invoices/[orderId]/route.ts" \
   src/app/api/cron/expire-payments/route.ts \
   src/app/api/cron/release-stock/route.ts

# ---------------------------------------------------------------- components
mk src/components/ui/.gitkeep \
   src/components/layout/{site-header,site-footer,mobile-nav,mobile-tab-bar,account-nav,admin-sidebar,auth-split-layout}.tsx \
   src/components/store/{age-gate,region-picker,product-card,product-grid,product-filters,filter-sheet,variant-picker,quantity-input,search-box,compare-table,cart-drawer,cart-line,order-summary,wishlist-button,review-list,review-form}.tsx \
   src/components/checkout/{checkout-steps,customer-form,address-form,shipping-options,payment-methods,review-card}.tsx \
   src/components/payments/{coin-picker,qr-code,payment-countdown,payment-status-timeline,copy-button}.tsx \
   src/components/account/{order-table,order-timeline,address-card,id-upload}.tsx \
   src/components/admin/{data-table,stat-card,revenue-chart,product-form,variant-table,image-uploader,status-badge,payment-exception-card,rich-text-editor,csv-dropzone,permissions-matrix,audit-table}.tsx \
   src/components/shared/{empty-state,page-header,pagination,form-field}.tsx

# ---------------------------------------------------------------- database (Drizzle + Neon)
mk src/db/index.ts src/db/seed.ts \
   src/db/schema/{index,auth,catalog,inventory,customers,orders,payments,marketing,shipping,content,settings,audit}.ts \
   drizzle/.gitkeep drizzle.config.ts

# ---------------------------------------------------------------- lib
mk src/lib/{auth,auth-client,permissions,nowpayments,money,age,region,storage,email,ratelimit,env,utils,constants,csv}.ts \
   src/lib/pdf/invoice.tsx \
   src/lib/validators/{auth,checkout,product,order,payment,shipping,marketing,settings}.ts

# ---------------------------------------------------------------- server (actions, queries, services)
mk src/server/actions/{auth,cart,checkout,order,account,review,wishlist,contact}.ts \
   src/server/actions/admin/{products,categories,brands,attributes,inventory,orders,payments,customers,verification,coupons,promotions,campaigns,reviews,shipping,tax,pages,blog,homepage,settings,staff,roles}.ts \
   src/server/queries/{catalog,orders,payments,customers,reports,content}.ts \
   src/server/services/{order-service,payment-service,inventory-service,shipping-service,tax-service,coupon-service,verification-service,notification-service}.ts

# ---------------------------------------------------------------- client state, hooks, types, emails
mk src/stores/{cart-store,region-store,age-store,compare-store,ui-store}.ts \
   src/hooks/{use-debounce,use-countdown,use-payment-status,use-media-query}.ts \
   src/types/{index,nowpayments}.ts \
   src/emails/{order-confirmation,payment-received,payment-underpaid,shipped,delivered,refund-issued,verify-email,reset-password,age-approved}.tsx \
   src/middleware.ts

# ---------------------------------------------------------------- public, tests, config
mk public/images/.gitkeep public/icons/.gitkeep \
   tests/unit/{money,nowpayments-signature,age}.test.ts \
   tests/e2e/{checkout-crypto,age-gate,admin-login}.spec.ts \
   vitest.config.ts playwright.config.ts .prettierrc vercel.json README.md

# ---------------------------------------------------------------- .env.example
if [ ! -e .env.example ]; then
cat > .env.example <<'EOF'
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Neon Postgres
DATABASE_URL=

# Better Auth
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000

# NOWPayments
NOWPAYMENTS_API_KEY=
NOWPAYMENTS_IPN_SECRET=
NOWPAYMENTS_SANDBOX=true

# Email (Resend)
RESEND_API_KEY=
EMAIL_FROM="Store <orders@yourdomain.com>"

# File storage (Cloudflare R2, S3 compatible) for ID uploads + product images
R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET=
R2_PUBLIC_URL=

# Rate limiting (Upstash Redis)
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

# Cron protection
CRON_SECRET=
EOF
fi

echo "Done. Created $(find src tests public drizzle -type f | wc -l) files."