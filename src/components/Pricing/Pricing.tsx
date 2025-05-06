"use client";
import React, { useState } from "react";
import styles from "./Pricing.module.css";

export interface PricingPlanData {
  price: number;
  billingPeriod: string;
  discount?: string;
}

export interface PricingPlan {
  icon: string;
  name: string;
  description: string;
  monthlyData: PricingPlanData;
  annualData: PricingPlanData;
  features: Array<string | { feature: string }>;
  popular?: boolean;
}

interface PricingProps {
  plans?: PricingPlan[];
  defaultBillingPeriod?: "monthly" | "annually";
  monthlyLabel?: string;
  annuallyLabel?: string;
  ctaButtonText?: string;
  featuresSectionTitle?: string;
}

const defaultPlans: PricingPlan[] = [
  {
    icon: "💠",
    name: "Basic",
    description: "For your small teams",
    monthlyData: {
      price: 9,
      billingPeriod: "/ month",
    },
    annualData: {
      price: 7,
      billingPeriod: "/ month, billed annually",
      discount: "Save 22%",
    },
    features: [
      "50 Contacts",
      "100 Messages",
      "10 Enrichments",
      "5 Magic fields",
    ],
  },
  {
    icon: "✨",
    name: "Pro",
    description: "For scaling company",
    monthlyData: {
      price: 19,
      billingPeriod: "/ month",
      discount: "Most popular",
    },
    annualData: {
      price: 15,
      billingPeriod: "/ month, billed annually",
      discount: "Save 21%",
    },
    features: [
      "Unlimited Contacts",
      "500 Messages",
      "50 Enrichments",
      "10 Magic Fields",
      "Priority Support",
    ],
    popular: true,
  },
  {
    icon: "✦",
    name: "Business",
    description: "For large organization",
    monthlyData: {
      price: 49,
      billingPeriod: "/ month",
    },
    annualData: {
      price: 39,
      billingPeriod: "/ month, billed annually",
      discount: "Save 20%",
    },
    features: [
      "Unlimited Contacts",
      "Unlimited Messages",
      "100 Enrichments",
      "50 Magic Fields",
    ],
  },
];

function Pricing({
  plans = defaultPlans,
  defaultBillingPeriod = "monthly",
  monthlyLabel = "Monthly",
  annuallyLabel = "Annually",
  ctaButtonText = "Get Started",
  featuresSectionTitle = "What you get:",
}: PricingProps) {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">(
    defaultBillingPeriod
  );

  // Helper function to extract feature text
  const getFeatureText = (feature: string | { feature: string }): string => {
    return typeof feature === "string" ? feature : feature.feature;
  };

  // Get the appropriate pricing data based on billing period
  const getPricingData = (plan: PricingPlan) => {
    return billingPeriod === "monthly" ? plan.monthlyData : plan.annualData;
  };

  return (
    <div className={styles.container}>
      <div className={styles.billingToggle}>
        <button
          className={`${styles.toggleButton} ${billingPeriod === "monthly" ? styles.active : ""}`}
          onClick={() => setBillingPeriod("monthly")}
        >
          {monthlyLabel}
        </button>
        <button
          className={`${styles.toggleButton} ${billingPeriod === "annually" ? styles.active : ""}`}
          onClick={() => setBillingPeriod("annually")}
        >
          {annuallyLabel}
        </button>
      </div>

      <div className={styles.plansContainer}>
        {plans.map((plan, index) => {
          const pricingData = getPricingData(plan);

          return (
            <div
              key={`${plan.name}-${index}`}
              className={`${styles.planCard} ${plan.popular ? styles.popular : ""}`}
            >
              {plan.popular && (
                <div className={styles.popularBadge}>Popular</div>
              )}

              <div className={styles.iconContainer}>
                <div className={styles.icon}>{plan.icon}</div>
              </div>

              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planDescription}>{plan.description}</p>

              <div className={styles.priceContainer}>
                <span className={styles.currencySymbol}>$</span>
                <span className={styles.price}>{pricingData.price}</span>
                <span className={styles.billingPeriod}>
                  {pricingData.billingPeriod}
                </span>
              </div>

              {pricingData.discount && (
                <div className={styles.discountContainer}>
                  <span className={styles.discount}>
                    {pricingData.discount}
                  </span>
                </div>
              )}

              <div className={styles.featuresContainer}>
                <p className={styles.featuresTitle}>{featuresSectionTitle}</p>
                <ul className={styles.featuresList}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      <span>{getFeatureText(feature)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={styles.getStartedButton}>
                {ctaButtonText}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pricing;
