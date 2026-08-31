"use client";

import { ArrowLeft, ArrowRight, Check, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import PurgoButton from "@/components/PurgoButton";
import { productImageClass } from "@/lib/images";
import { formatPrice } from "@/lib/products";
import {
  quizConcerns,
  quizScopes,
  quizStyles,
  scoreQuiz,
  type QuizAnswers,
  type QuizConcern,
  type QuizScope,
  type QuizStyle,
} from "@/lib/quiz";

const steps = ["concern", "scope", "style", "result"] as const;

export default function QuizPageClient() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({
    concern: null,
    scope: null,
    style: null,
  });

  const result = useMemo(
    () => (step === 3 ? scoreQuiz(answers) : null),
    [answers, step]
  );

  const progress = ((step + 1) / steps.length) * 100;
  const canNext =
    (step === 0 && answers.concern) ||
    (step === 1 && answers.scope) ||
    (step === 2 && answers.style);

  return (
    <div className="relative min-h-screen bg-[#f4f2eb] px-5 pb-16 pt-28 md:px-10 md:pt-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42vh] overflow-hidden opacity-50">
        <Image
          src="/images/quiz/q1-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f2eb]/30 via-[#f4f2eb]/70 to-[#f4f2eb]" />
      </div>
      <div className="relative mx-auto max-w-3xl">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-muted">
          Find your ritual
        </p>
        <div className="mx-auto mt-6 h-1.5 max-w-md overflow-hidden rounded-full bg-[#e4e0d4]">
          <div
            className="h-full rounded-full bg-[#2f2e24] transition-[width] duration-400"
            style={{ width: `${progress}%` }}
          />
        </div>

        {step === 0 ? (
          <section className="mt-12 text-center">
            <h1 className="text-3xl font-medium tracking-[-0.02em] text-shell md:text-4xl">
              What do you want to improve most?
            </h1>
            <p className="mt-3 text-sm text-muted">Choose one to start</p>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {quizConcerns.map((option) => {
                const selected = answers.concern === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() =>
                      setAnswers((current) => ({
                        ...current,
                        concern: option.id as QuizConcern,
                      }))
                    }
                    className={`seed-card flex min-h-[180px] flex-col overflow-hidden bg-white text-center transition ${
                      selected
                        ? "ring-2 ring-[#2f2e24]"
                        : "hover:-translate-y-0.5"
                    }`}
                  >
                    <span className="relative aspect-[5/4] w-full bg-[#ebe8df]">
                      <Image
                        src={option.image}
                        alt=""
                        fill
                        className="object-cover object-center"
                        sizes="180px"
                      />
                    </span>
                    <span className="flex flex-1 flex-col items-center justify-center gap-1 px-4 py-4">
                      <span className="text-sm font-medium text-shell">
                        {option.label}
                      </span>
                      <span className="text-xs text-muted">{option.hint}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        ) : null}

        {step === 1 ? (
          <section className="mt-12 text-center">
            <h1 className="text-3xl font-medium tracking-[-0.02em] text-shell md:text-4xl">
              Where do you want to start?
            </h1>
            <p className="mt-3 text-sm text-muted">Hair, skin, or both</p>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {quizScopes.map((option) => {
                const selected = answers.scope === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() =>
                      setAnswers((current) => ({
                        ...current,
                        scope: option.id as QuizScope,
                      }))
                    }
                    className={`seed-card flex min-h-[180px] flex-col overflow-hidden bg-white text-center transition ${
                      selected
                        ? "ring-2 ring-[#2f2e24]"
                        : "hover:-translate-y-0.5"
                    }`}
                  >
                    <span className="relative aspect-[5/4] w-full bg-[#ebe8df]">
                      <Image
                        src={option.image}
                        alt=""
                        fill
                        className="object-cover object-center"
                        sizes="220px"
                      />
                    </span>
                    <span className="flex flex-1 flex-col items-center justify-center gap-1 px-4 py-4">
                      <span className="text-sm font-medium text-shell">
                        {option.label}
                      </span>
                      <span className="text-xs text-muted">{option.hint}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        ) : null}

        {step === 2 ? (
          <section className="mt-12 text-center">
            <h1 className="text-3xl font-medium tracking-[-0.02em] text-shell md:text-4xl">
              One formula, or a stack?
            </h1>
            <p className="mt-3 text-sm text-muted">
              You can always add more later
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {quizStyles.map((option) => {
                const selected = answers.style === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() =>
                      setAnswers((current) => ({
                        ...current,
                        style: option.id as QuizStyle,
                      }))
                    }
                    className={`seed-card flex min-h-[140px] flex-col items-center justify-center gap-2 bg-white px-4 py-6 text-center transition ${
                      selected
                        ? "ring-2 ring-[#2f2e24]"
                        : "hover:-translate-y-0.5"
                    }`}
                  >
                    <span className="text-sm font-medium text-shell">
                      {option.label}
                    </span>
                    <span className="text-xs text-muted">{option.hint}</span>
                  </button>
                );
              })}
            </div>
          </section>
        ) : null}

        {step === 3 && result ? (
          <section className="mt-12">
            <p className="text-center text-xs uppercase tracking-[0.16em] text-muted">
              {result.eyebrow}
            </p>
            <h1 className="mt-3 text-center text-3xl font-medium tracking-[-0.02em] text-shell md:text-4xl">
              {result.title}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-muted">
              {result.reason}
            </p>

            <article className="seed-shell mx-auto mt-10 max-w-xl overflow-hidden bg-white">
              <div className="relative aspect-[5/4] overflow-hidden bg-[#ebe8df]">
                <Image
                  src={
                    result.product?.cardImage ??
                    result.bundle?.image ??
                    "/images/quiz/q11-result.jpg"
                  }
                  alt={result.title}
                  fill
                  className={productImageClass(
                    result.product?.cardImage ??
                      result.bundle?.image ??
                      "/images/quiz/q11-result.jpg"
                  )}
                  sizes="560px"
                />
              </div>
              <div className="space-y-5 p-6 md:p-8">
                <p className="text-xl font-medium text-shell">
                  {result.product
                    ? formatPrice(result.product.price)
                    : result.bundle
                      ? formatPrice(result.bundle.price)
                      : null}
                </p>
                <ul className="space-y-3 text-sm leading-relaxed text-muted">
                  {result.why.map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-deep"
                        strokeWidth={1.75}
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <PurgoButton
                    href={
                      result.product?.purgoUrl ??
                      result.bundle?.purgoUrl ??
                      "/products"
                    }
                    icon={<ShoppingBag className="h-4 w-4" strokeWidth={1.75} />}
                  >
                    Shop Now
                  </PurgoButton>
                  {result.product ? (
                    <PurgoButton
                      href={`/products/${result.product.slug}`}
                      external={false}
                      variant="secondary"
                    >
                      View {result.product.name}
                    </PurgoButton>
                  ) : (
                    <PurgoButton
                      href="/products"
                      external={false}
                      variant="secondary"
                    >
                      View the lineup
                    </PurgoButton>
                  )}
                </div>
              </div>
            </article>

            {result.extras.length ? (
              <div className="mt-10">
                <p className="text-center text-xs uppercase tracking-[0.16em] text-muted">
                  Also consider
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {result.extras.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/products/${item.slug}`}
                      className="seed-card overflow-hidden bg-white transition hover:-translate-y-0.5"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#ebe8df]">
                        <Image
                          src={item.cardImage}
                          alt={item.name}
                          fill
                          className={productImageClass(item.cardImage)}
                          sizes="280px"
                        />
                      </div>
                      <div className="p-4">
                        <p className="font-medium text-shell">{item.name}</p>
                        <p className="mt-1 text-sm text-muted">{item.tagline}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        ) : null}

        <div className="mt-12 flex items-center justify-between">
          <button
            type="button"
            disabled={step === 0}
            onClick={() => setStep((value) => Math.max(0, value - 1))}
            className="seed-pill inline-flex items-center gap-2 border border-[#2f2e24]/20 px-5 py-2.5 text-sm font-medium text-shell disabled:opacity-30"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} />
            Back
          </button>
          {step < 3 ? (
            <button
              type="button"
              disabled={!canNext}
              onClick={() => setStep((value) => Math.min(3, value + 1))}
              className="seed-pill inline-flex items-center gap-2 bg-[#2f2e24] px-5 py-2.5 text-sm font-medium text-white disabled:opacity-30"
            >
              Next
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setStep(0);
                setAnswers({ concern: null, scope: null, style: null });
              }}
              className="seed-pill inline-flex items-center gap-2 border border-[#2f2e24]/20 px-5 py-2.5 text-sm font-medium text-shell"
            >
              Retake
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
