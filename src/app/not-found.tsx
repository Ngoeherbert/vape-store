import { StatusPage } from "@/components/shared/status-page";

export default function NotFound() {
  return (
    <StatusPage
      code="404"
      title="Page not found"
      message="The page you are looking for does not exist or has moved."
    />
  );
}
