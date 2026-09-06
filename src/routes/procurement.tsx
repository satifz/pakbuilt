import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceTrail } from "@/components/site/ServicePage";
import { procurement as service } from "@/data/services";
import { breadcrumbLd, canonical, faqLd, jsonLd, pageMeta, serviceLd } from "@/lib/seo";

export const Route = createFileRoute("/procurement")({
  head: () => ({
    meta: pageMeta({
      title: service.title,
      description: service.description,
      path: service.path,
    }),
    links: canonical(service.path),
    scripts: [
      jsonLd(
        serviceLd({
          name: service.name,
          description: service.description,
          path: service.path,
          serviceType: service.serviceType,
        }),
      ),
      jsonLd(breadcrumbLd(serviceTrail(service))),
      jsonLd(faqLd(service.faqs)),
    ],
  }),
  component: () => <ServicePage service={service} />,
});
