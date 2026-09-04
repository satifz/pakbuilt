import { useRef, useState } from "react";
import { CheckCircle2, Paperclip, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { categories, projectTypes } from "@/data/catalog";
import { company } from "@/data/company";

interface Values {
  name: string;
  companyName: string;
  phone: string;
  email: string;
  requirement: string;
  product: string;
  projectType: string;
  quantity: string;
  message: string;
}

const empty: Values = {
  name: "",
  companyName: "",
  phone: "",
  email: "",
  requirement: "",
  product: "",
  projectType: "",
  quantity: "",
  message: "",
};

type Errors = Partial<Record<keyof Values, string>>;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[+0-9\s()-]{7,20}$/.test(v.phone.trim())) e.phone = "Enter a reachable phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Enter a valid email address.";
  if (v.requirement.trim().length < 10)
    e.requirement = "Tell us a little more about the requirement (10+ characters).";
  return e;
}

/**
 * Frontend-only quote form. Nothing is transmitted yet — submissions are held in
 * component state until an email/database integration is configured.
 */
export function QuoteForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [values, setValues] = useState<Values>({ ...empty, product: defaultProduct });
  const [errors, setErrors] = useState<Errors>({});
  const [fileName, setFileName] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const set = (key: keyof Values) => (v: string) => {
    setValues((prev) => ({ ...prev, [key]: v }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  if (done) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto size-10 text-primary" />
        <h3 className="font-display mt-4 text-2xl font-bold">Requirement captured</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Your details are recorded in this browser session only — automated delivery is not
          connected yet. To make sure it reaches us right now, send the same details on WhatsApp or
          call {company.phone}.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Button asChild variant="whatsapp" size="lg">
            <a href={company.whatsappHref} target="_blank" rel="noreferrer">
              Send on WhatsApp
            </a>
          </Button>
          <Button
            variant="onLight"
            size="lg"
            onClick={() => {
              setValues({ ...empty });
              setFileName(null);
              setDone(false);
            }}
          >
            New request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        const found = validate(values);
        setErrors(found);
        if (Object.keys(found).length === 0) setDone(true);
      }}
      className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="q-name" label="Name" required error={errors.name}>
          <Input
            id="q-name"
            value={values.name}
            onChange={(e) => set("name")(e.target.value)}
            autoComplete="name"
          />
        </Field>
        <Field id="q-company" label="Company">
          <Input
            id="q-company"
            value={values.companyName}
            onChange={(e) => set("companyName")(e.target.value)}
            autoComplete="organization"
          />
        </Field>
        <Field id="q-phone" label="Phone" required error={errors.phone}>
          <Input
            id="q-phone"
            value={values.phone}
            onChange={(e) => set("phone")(e.target.value)}
            inputMode="tel"
            placeholder="+92 3XX XXXXXXX"
            autoComplete="tel"
          />
        </Field>
        <Field id="q-email" label="Email" required error={errors.email}>
          <Input
            id="q-email"
            value={values.email}
            onChange={(e) => set("email")(e.target.value)}
            type="email"
            autoComplete="email"
          />
        </Field>
        <Field id="q-product" label="Product / material needed">
          <select
            id="q-product"
            value={values.product}
            onChange={(e) => set("product")(e.target.value)}
            className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
          >
            <option value="">Select a category</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="Other">Other / not listed</option>
          </select>
        </Field>
        <Field id="q-project-type" label="Project type">
          <select
            id="q-project-type"
            value={values.projectType}
            onChange={(e) => set("projectType")(e.target.value)}
            className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
          >
            <option value="">Select a project type</option>
            {projectTypes.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </Field>
        <Field
          id="q-requirement"
          label="Requirement"
          required
          error={errors.requirement}
          className="sm:col-span-2"
        >
          <Textarea
            id="q-requirement"
            rows={3}
            value={values.requirement}
            onChange={(e) => set("requirement")(e.target.value)}
            placeholder="What do you need sourced?"
          />
        </Field>
        <Field id="q-quantity" label="Quantity / estimated requirement">
          <Input
            id="q-quantity"
            value={values.quantity}
            onChange={(e) => set("quantity")(e.target.value)}
          />
        </Field>
        <Field id="q-file" label="Upload BOQ / file">
          <input
            ref={fileRef}
            id="q-file"
            type="file"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.jpg,.jpeg,.png"
            className="sr-only"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
          />
          <Button type="button" variant="onLight" size="lg" onClick={() => fileRef.current?.click()}>
            <Paperclip />
            {fileName ? "Change file" : "Choose file"}
          </Button>
          <p className="mt-2 truncate text-xs text-muted-foreground">
            {fileName ?? "PDF, Excel, Word or image"}
          </p>
        </Field>
        <Field id="q-message" label="Message" className="sm:col-span-2">
          <Textarea
            id="q-message"
            rows={4}
            value={values.message}
            onChange={(e) => set("message")(e.target.value)}
            placeholder="Timelines, delivery location, specifications…"
          />
        </Field>

      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" variant="cta" size="xl">
          <Send />
          Request a Quote
        </Button>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Automated sending is not configured yet, so please also reach us on WhatsApp for anything
          urgent.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string | undefined;
  className?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-2 block text-xs font-semibold tracking-wide uppercase">
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </Label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

