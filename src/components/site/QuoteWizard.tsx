import { ArrowLeft, ArrowRight, CheckCircle2, Paperclip, Send } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { categories, projectTypes } from "@/data/catalog";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

const needs = [
  { id: "materials", label: "Building materials", hint: "Cement, blocks, steel, finishes" },
  { id: "fit-out", label: "Fit-out materials", hint: "Ceilings, partitions, flooring" },
  { id: "services", label: "HVAC / MEP", hint: "Building services supply" },
  { id: "boq", label: "Full BOQ pricing", hint: "A list to be priced end to end" },
  { id: "other", label: "Something else", hint: "Tell us in your own words" },
];

interface Values {
  need: string;
  product: string;
  requirement: string;
  quantity: string;
  projectType: string;
  name: string;
  companyName: string;
  phone: string;
  email: string;
  message: string;
}

const empty: Values = {
  need: "",
  product: "",
  requirement: "",
  quantity: "",
  projectType: "",
  name: "",
  companyName: "",
  phone: "",
  email: "",
  message: "",
};

type Errors = Partial<Record<keyof Values, string>>;

const steps = ["What do you need?", "Which category?", "Your requirement", "Contact details"];

function validateStep(step: number, v: Values): Errors {
  const e: Errors = {};
  if (step === 0 && !v.need) e.need = "Pick the closest option.";
  if (step === 1 && !v.product) e.product = "Choose a category, or select Other.";
  if (step === 2 && v.requirement.trim().length < 10)
    e.requirement = "Tell us a little more (10+ characters).";
  if (step === 3) {
    if (v.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[+0-9\s()-]{7,20}$/.test(v.phone.trim())) e.phone = "Enter a reachable phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
      e.email = "Enter a valid email address.";
  }
  return e;
}

/**
 * Multi-step quote request. Frontend-only: nothing is transmitted yet, which the
 * success state states plainly rather than implying a delivered enquiry.
 */
export function QuoteWizard({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>({ ...empty, product: defaultProduct });
  const [errors, setErrors] = useState<Errors>({});
  const [fileName, setFileName] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const set = <K extends keyof Values>(key: K, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const next = () => {
    const found = validateStep(step, values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    if (step < steps.length - 1) setStep(step + 1);
    else setDone(true);
  };

  if (done) {
    return (
      <div className="border border-border bg-card p-8 text-center shadow-card">
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
              setStep(0);
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
        next();
      }}
      className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-7"
    >
      {/* Progress */}
      <div>
        <div className="flex items-center justify-between">
          <span className="font-display text-[0.65rem] font-bold tracking-[0.2em] text-primary uppercase">
            Step {step + 1} of {steps.length}
          </span>
          <span className="text-xs text-muted-foreground">{steps[step]}</span>
        </div>
        <div className="mt-3 flex gap-1.5" aria-hidden="true">
          {steps.map((s, i) => (
            <span
              key={s}
              className={cn(
                "h-1 flex-1 origin-left rounded-full transition-[background-color,transform] duration-300 ease-out",
                i <= step ? "scale-x-100 bg-primary" : "scale-x-100 bg-border",
              )}
            />
          ))}
        </div>
      </div>

      <div key={step} className="mt-7 min-h-64 animate-fade-in">
        {step === 0 ? (
          <fieldset>
            <legend className="font-display text-xl font-bold">What do you need?</legend>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {needs.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  aria-pressed={values.need === n.id}
                  onClick={() => set("need", n.id)}
                  className={cn(
                    "rounded-md border p-4 text-left transition-[border-color,background-color,transform] duration-200 ease-out hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
                    values.need === n.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary",
                  )}
                >
                  <span className="font-display block text-sm font-bold">{n.label}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">{n.hint}</span>
                </button>
              ))}
            </div>
            {errors.need ? <p className="mt-2 text-xs text-destructive">{errors.need}</p> : null}
          </fieldset>
        ) : null}

        {step === 1 ? (
          <div>
            <h3 className="font-display text-xl font-bold">Which category?</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {[...categories.map((c) => c.name), "Other / not listed"].map((name) => (
                <button
                  key={name}
                  type="button"
                  aria-pressed={values.product === name}
                  onClick={() => set("product", name)}
                  className={cn(
                    "font-display min-h-11 rounded-md border px-4 text-xs font-bold tracking-wide uppercase transition-[color,background-color,border-color] duration-200 ease-out focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none",
                    values.product === name
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-foreground/70 hover:border-primary hover:text-primary",
                  )}
                >
                  {name}
                </button>
              ))}
            </div>
            {errors.product ? (
              <p className="mt-3 text-xs text-destructive">{errors.product}</p>
            ) : null}
          </div>
        ) : null}

        {step === 2 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <h3 className="font-display text-xl font-bold sm:col-span-2">
              Tell us about your requirement
            </h3>
            <Field
              id="w-requirement"
              label="Requirement"
              required
              error={errors.requirement}
              className="sm:col-span-2"
            >
              <Textarea
                id="w-requirement"
                rows={4}
                value={values.requirement}
                onChange={(e) => set("requirement", e.target.value)}
                placeholder="Specification, sizes, finish, delivery location…"
              />
            </Field>
            <Field id="w-quantity" label="Quantity / estimated requirement">
              <Input
                id="w-quantity"
                value={values.quantity}
                onChange={(e) => set("quantity", e.target.value)}
              />
            </Field>
            <Field id="w-project-type" label="Project type">
              <select
                id="w-project-type"
                value={values.projectType}
                onChange={(e) => set("projectType", e.target.value)}
                className="h-9 w-full border border-input bg-background px-3 text-sm"
              >
                <option value="">Select a project type</option>
                {projectTypes.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </Field>
            <Field id="w-file" label="Upload BOQ / file" className="sm:col-span-2">
              <input
                ref={fileRef}
                id="w-file"
                type="file"
                accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.jpg,.jpeg,.png"
                className="sr-only"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
              />
              <Button
                type="button"
                variant="onLight"
                size="lg"
                onClick={() => fileRef.current?.click()}
              >
                <Paperclip />
                {fileName ? "Change file" : "Choose file"}
              </Button>
              <p className="mt-2 truncate text-xs text-muted-foreground">
                {fileName ?? "PDF, Excel, Word or image"}
              </p>
            </Field>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <h3 className="font-display text-xl font-bold sm:col-span-2">Contact details</h3>
            <Field id="w-name" label="Name" required error={errors.name}>
              <Input
                id="w-name"
                value={values.name}
                onChange={(e) => set("name", e.target.value)}
                autoComplete="name"
              />
            </Field>
            <Field id="w-company" label="Company">
              <Input
                id="w-company"
                value={values.companyName}
                onChange={(e) => set("companyName", e.target.value)}
                autoComplete="organization"
              />
            </Field>
            <Field id="w-phone" label="Phone" required error={errors.phone}>
              <Input
                id="w-phone"
                value={values.phone}
                onChange={(e) => set("phone", e.target.value)}
                inputMode="tel"
                placeholder="+92 3XX XXXXXXX"
                autoComplete="tel"
              />
            </Field>
            <Field id="w-email" label="Email" required error={errors.email}>
              <Input
                id="w-email"
                type="email"
                value={values.email}
                onChange={(e) => set("email", e.target.value)}
                autoComplete="email"
              />
            </Field>
            <Field id="w-message" label="Anything else?" className="sm:col-span-2">
              <Textarea
                id="w-message"
                rows={3}
                value={values.message}
                onChange={(e) => set("message", e.target.value)}
                placeholder="Timelines, site access, preferred contact time…"
              />
            </Field>
          </div>
        ) : null}
      </div>

      <div className="mt-7 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center">
        {step > 0 ? (
          <Button
            type="button"
            variant="onLight"
            size="lg"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
          >
            <ArrowLeft />
            Back
          </Button>
        ) : null}
        <Button type="submit" variant="cta" size="xl">
          {step === steps.length - 1 ? <Send /> : null}
          {step === steps.length - 1 ? "Request a Quote" : "Continue"}
          {step === steps.length - 1 ? null : <ArrowRight />}
        </Button>
        <p className="text-xs leading-relaxed text-muted-foreground sm:max-w-xs">
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
      {error ? <p className="mt-1.5 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
