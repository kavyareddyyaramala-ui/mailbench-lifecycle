/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface LifecycleFlow {
  id: string;
  title: string;
  objective: string;
  strategy: string;
  emailDesignTitle: string;
  emailDesignDescription: string;
  emailCopySubject: string;
  emailCopyPreviewText: string;
  emailCopyBody: string[];
  emailCopyCTA: string;
  smsCopyText: string;
  journeyVisualSteps: { step: string; label: string; active: boolean; type: 'trigger' | 'delay' | 'message' | 'conditional' }[];
}

export interface CampaignSample {
  id: string;
  title: string;
  type: string;
  subject: string;
  previewText: string;
  ctaText: string;
  imageUrl: string;
  headline: string;
  bodyText: string;
  tagline: string;
  offerText?: string;
  industry: 'Beauty' | 'Skincare' | 'Wellness' | 'Fashion' | 'Lifestyle';
}

export interface SmsConversation {
  id: string;
  brandName: string;
  avatar: string;
  industry: string;
  campaignTitle: string;
  messages: {
    sender: 'brand' | 'customer';
    text: string;
    time: string;
  }[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  industry: string;
  metrics: { value: string; label: string };
  body: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  imageUrl: string;
}

export interface HowWeThinkItem {
  id: string;
  title: string;
  description: string;
}

export interface MetricItem {
  id: string;
  label: string;
  baseline: string;
  optimized: string;
  lift: string;
  description: string;
}

export interface WhyItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
}
