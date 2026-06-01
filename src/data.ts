/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LifecycleFlow, CampaignSample, SmsConversation, MetricItem, PortfolioProject, HowWeThinkItem } from './types';

export const lifecycleFlows: LifecycleFlow[] = [
  {
    id: 'welcome',
    title: 'Welcome Flow (New Subscribers)',
    objective: 'Introduce non-buyers to the brand world, convey founder values, handle objections, and convert interest into the inaugural purchase within 7 days.',
    strategy: 'A 3-part narrative sequence. Email 1: Warm welcome + founder letter + first-purchase incentive (delivered within 2 mins of signup). Email 2: Ingredient/material spotlight + social proof showcasing 100+ five-star reviews. Email 3: Community/social lifestyle showcase + urgent incentive expiration reminder (dual-pronged SMS sent synchronously).',
    emailDesignTitle: 'The Editorial Greeting',
    emailDesignDescription: 'A classic, highly spacious editorial landing card. Warm ivory background, subtle slate typographic dividers, offset asymmetrical product imagery, and single elegant gold CTA.',
    emailCopySubject: 'Welcome to the inner circle / An opening note.',
    emailCopyPreviewText: 'Inside: the meticulous craftsmanship behind our formulas, plus your custom introductory membership access.',
    emailCopyBody: [
      'We believe the things you bring into your daily life should be crafted with radical intent.',
      'MailBench was built on a simple promise: that your skin should be nurtured, not managed. Every serum, balm, and elixir we formulate begins with raw, sustainably harvested botanicals, backed by clinical biology.',
      'No fillers. No performance theater. Just absolute integrity.',
      'To welcome you, we have credited your profile with 15% custom introductory access for your first curation. Use code INSIDER15 at checkout.'
    ],
    emailCopyCTA: 'Claim Your Curated Set',
    smsCopyText: 'MailBench: Welcome to the inner circle. Your exclusive 15% access is ready. Tap to explore our botanically-crafted curations: https://mailbench.agency/insider15 (Reply STOP to opt out)',
    journeyVisualSteps: [
      { step: 'Trigger', label: 'Newsletter Sign Up', active: true, type: 'trigger' },
      { step: 'Action', label: 'Send Welcome Email #1 (Founder Letter)', active: true, type: 'message' },
      { step: 'Delay', label: '48 Hour Intermission', active: false, type: 'delay' },
      { step: 'Action', label: 'Send Welcome Email #2 (Proof & Science)', active: false, type: 'message' },
      { step: 'Check', label: 'Has Not Purchased?', active: false, type: 'conditional' },
      { step: 'Action', label: 'Send Welcome SMS (Final Offer)', active: false, type: 'message' }
    ]
  },
  {
    id: 'abandoned-cart',
    title: 'Abandoned Cart Recovery',
    objective: 'Re-engage highly qualified prospects who left items in their cart, rebuild high-intent value, dissolve friction, and streamline checkout.',
    strategy: 'A 2-step dynamic recovery flow. Step 1 (30 mins post-bounce): Friendly dynamic checkout link reminding them of their selection with zero discount. Step 2 (24 hours post-bounce): Helpful customer service approach asking if they encountered technical questions, and offering a sweet-spot checkout helper (like complimentary priority shipping).',
    emailDesignTitle: 'The Frictionless Retainer',
    emailDesignDescription: 'Minimalist product-centric layout displaying the exact dynamic item in cart, styled with a soft-shadow glass frame, crisp pricing, and a single-click quick-re-route button.',
    emailCopySubject: 'Left something behind? / Your routine awaits.',
    emailCopyPreviewText: 'Your selected routine items are reserved and packaged for dispatch. Take another look.',
    emailCopyBody: [
      'We understand life gets busy. That\'s why we saved your selected basket items.',
      'The formulas you selected are blended in boutique, small-batch runs to preserve maximum biological activity. We can only guarantee reservation of your cart items for another 12 hours.',
      'Here is what you selected. Let\'s pick up exactly where you left off.'
    ],
    emailCopyCTA: 'Resume Meticulous Checkout',
    smsCopyText: 'MailBench: Your selected routine items are packed & ready for dispatch. Code SHIPSREE applies complimentary priority shipping on us: https://mailbench.agency/cart (Qty limited, reply STOP to opt out)',
    journeyVisualSteps: [
      { step: 'Trigger', label: 'Added to Cart & Bounced', active: true, type: 'trigger' },
      { step: 'Delay', label: 'Wait 30 Minutes', active: true, type: 'delay' },
      { step: 'Action', label: 'Send Dynamic Recovery Email #1', active: true, type: 'message' },
      { step: 'Delay', label: 'Wait 24 Hours', active: false, type: 'delay' },
      { step: 'Action', label: 'Send Checkout Helper SMS + Comp Shipping', active: false, type: 'message' }
    ]
  },
  {
    id: 'post-purchase',
    title: 'Post-Purchase Journey (Nurture & Cross-Sell)',
    objective: 'Transition first-time buyers into brand advocates, build pre-delivery excitement, teach product usage to prevent churn, and cross-sell adjacent routines.',
    strategy: 'A multi-tier experiential flow. Tier 1 (Day 1): Transaction confirmation + shipping tracking link. Tier 2 (Day 3): How-to-use ritual guide (aesthetic video and step-by-step illustrations for proper product application). Tier 3 (Day 14): Follow-up satisfaction pulse survey + contextual recommendation for complementary items based on their skin/body type.',
    emailDesignTitle: 'The Sensory Ritual Guide',
    emailDesignDescription: 'Visual, bento-grid styled informational graphic detailing layering orders, morning-vs-night routines, and storage care. Accentuated with micro-animations and warm imagery.',
    emailCopySubject: 'How to practice your daily ritual.',
    emailCopyPreviewText: 'Your curation is in transit. While it travels to you, let\'s explore how to unlock its full active potential.',
    emailCopyBody: [
      'To receive the maximum therapeutic benefits of your modern botanical cure, proper application is everything.',
      'We recommend applying 3-4 drops to freshly cleansed, damp skin. Press gently into the face using warm, open palms. Allow 60 seconds of meditative pause before applying your heavier shielding creams.',
      'In doing so, you create an active biological barrier that seals moisture for 18 sustained hours.'
    ],
    emailCopyCTA: 'Watch Step-by-Step Video',
    smsCopyText: 'MailBench: Ritual check-in! Your curation has arrived. View our interactive 60-second video on proper micro-pressing techniques: https://mailbench.agency/ritual (Reply STOP to opt out)',
    journeyVisualSteps: [
      { step: 'Trigger', label: 'Successful Order Placed', active: true, type: 'trigger' },
      { step: 'Delay', label: 'Wait 3 Days (Delivery)', active: true, type: 'delay' },
      { step: 'Action', label: 'Send Ritual How-To-Use Email', active: true, type: 'message' },
      { step: 'Delay', label: 'Wait 14 Days', active: false, type: 'delay' },
      { step: 'Check', label: 'Satisfied Customer?', active: false, type: 'conditional' },
      { step: 'Action', label: 'Send Cross-Sell Curation Email', active: false, type: 'message' }
    ]
  },
  {
    id: 'win-back',
    title: 'Win-Back Campaign (Churn Prevention)',
    objective: 'Identify lapsed customers who did not buy within their historical average re-order window (e.g. 60-90 days), re-ignite emotional connection, and motivate return.',
    strategy: 'A two-stage win-back funnel. Stage 1: Emotional check-in explaining recent product upgrades and a "We miss you" soft landing. Stage 2: Strong, direct premium incentive ("A special gift worth $35 on your next routine update") targeting re-activation before churn is marked permanent.',
    emailDesignTitle: 'The Minimalist Reunion',
    emailDesignDescription: 'Extremely direct, clean layout utilizing large, high-fashion typography, deep margins, plenty of white space, and an honest letter from the lead product formulator.',
    emailCopySubject: 'A quiet check-in. / We brought something back.',
    emailCopyPreviewText: 'It has been a while. Since your last visit, we have refined our botanical sources for 2x potency.',
    emailCopyBody: [
      'We noticed your shelf has been missing our nourishing essentials.',
      'We don\'t believe in constant noise or generic updates, but we wanted to share that we just completed our spring harvest—yielding our most active, concentrated formulas to date.',
      'To welcome you back to your regular routine, we\'d love to include a complimentary travel hydration balm ($35 value) with your next shipment.'
    ],
    emailCopyCTA: 'Claim Your Complimentary Gift',
    smsCopyText: 'MailBench: It has been a while. We added a complimentary Travel Balm ($35 value) to your account. Reactivate your routine today: https://mailbench.agency/welcome-back (Reply STOP to opt out)',
    journeyVisualSteps: [
      { step: 'Trigger', label: '90 Days Since Last Purchase', active: true, type: 'trigger' },
      { step: 'Action', label: 'Send "We Miss You" Check-in Email', active: true, type: 'message' },
      { step: 'Delay', label: 'Wait 5 Days', active: false, type: 'delay' },
      { step: 'Check', label: 'Did Not Re-engage?', active: false, type: 'conditional' },
      { step: 'Action', label: 'Send VIP Re-activation SMS with Travel Gift', active: false, type: 'message' }
    ]
  },
  {
    id: 'vip',
    title: 'VIP Customer Journey (Elevating LTV)',
    objective: 'Nurture top-tier customers (top 5-10% of revenue or purchasers), build deep psychological brand equity, and turn repeat buyers into vocal brand evangelists.',
    strategy: 'Exclusive "Inner Circle" loyalty campaign. VIPs get white-glove treatment including direct-to-SMS text concierge, priority sneak peeks of unreleased products with pre-launch allocation, and exclusive invites to live founder virtual styling masterclasses.',
    emailDesignTitle: 'The Sovereign Portfolio',
    emailDesignDescription: 'Stunning black-gold noir layout with delicate gold frames, custom monogram styling, premium editorial portraits, and an invite-only booking card.',
    emailCopySubject: 'Private collection access for our true partners.',
    emailCopyPreviewText: 'Our upcoming Autumn Linen Collection launches publicly next week. Your private VIP allocation queue is now open.',
    emailCopyBody: [
      'To our most loyal cohort, we extend our deepest gratitude.',
      'Because you have walked alongside our journey, we believe you deserve first right of refusal. Before our public launch next Tuesday, we have reserved a custom boutique allotment of our Autumn Linen Collection exclusively for you.',
      'No public access, no sell-outs. Simply select your sizing and secure high-priority luxury shipping, completely on us.'
    ],
    emailCopyCTA: 'Enter Private VIP Portal',
    smsCopyText: 'MailBench VIP: Private allocation is now open for the Autumn Linen Collection. Use your private link to claim yours prior to public launch: https://mailbench.agency/vip-linen (Complimentary express delivery included)',
    journeyVisualSteps: [
      { step: 'Trigger', label: 'Reaches VIP Level (Spend >$500)', active: true, type: 'trigger' },
      { step: 'Action', label: 'Send Exclusive "Inner Circle" Welcome Card', active: true, type: 'message' },
      { step: 'Action', label: 'Unlock 1-on-1 SMS Concierge Line', active: false, type: 'message' },
      { step: 'Delay', label: 'Prior to New Collection Launches', active: false, type: 'delay' },
      { step: 'Action', label: 'Send Pre-sale Early Allocation Invite (Email+SMS)', active: false, type: 'message' }
    ]
  },
  {
    id: 'sms-campaign',
    title: 'SMS Reminder Campaign (High-Converting Urgency)',
    objective: 'Drive immediate action for flash curations, limited inventory drops, or checkout reminders using short, hyper-contextual mobile messaging.',
    strategy: 'Targeted single-message blast focused on extreme scarcity or concrete urgency. We restrict SMS blasts to a maximum of 2 times per month to avoid list depletion and maintain the premium, non-spammy charm of high-end e-commerce brand communication.',
    emailDesignTitle: 'The Visual Mobile Companion',
    emailDesignDescription: 'A custom, mobile-friendly landing card design with ultra-legible typography, optimized for immediate loading in Gmail and Apple Mail on iOS device formats.',
    emailCopySubject: 'Final Call: Liquid Linen is selling out.',
    emailCopyPreviewText: 'Fewer than 45 units remain of our award-winning botanical linen mist. Secure yours.',
    emailCopyBody: [
      'Our boutique batch of hand-poured Liquid Linen Mist is nearing total exhaustion.',
      'Due to our meticulous slow-steep distillation process, our next refill batch will require 6 weeks of active curing. Secure your bottle today before we close the queue.'
    ],
    emailCopyCTA: 'Secure My Mist Now',
    smsCopyText: 'MailBench: Low Stock Warning! Fewer than 45 hand-poured Liquid Linen Mists are left in this season\'s batch. Claim yours with free dispatch: https://mailbench.agency/mist-alert (STOP to end)',
    journeyVisualSteps: [
      { step: 'Trigger', label: 'Low Stock SKU (<50 units)', active: true, type: 'trigger' },
      { step: 'Action', label: 'Segment List: VIPs + Frequent Mist Buyers', active: true, type: 'conditional' },
      { step: 'Action', label: 'Deploy SMS Alert with Dynamic Buy-Link', active: true, type: 'message' },
      { step: 'Delay', label: 'Monitor Stock Refills', active: false, type: 'delay' }
    ]
  }
];

export const campaignSamples: CampaignSample[] = [
  {
    id: 'launch',
    title: 'Product Launch Email',
    type: 'The Botanical Nectar Collection Launch',
    subject: 'Introducing: The Orchid Botanical Nectar.',
    previewText: 'A clinical skin-plumping breakthrough in an organic, organic-first botanical suspension.',
    ctaText: 'Shop the Botanical Collection',
    imageUrl: 'https://images.unsplash.com/photo-1608248597481-496100c8c836?auto=format&fit=crop&q=80&w=600',
    headline: 'Modern Biology Meets Botanical Luxury.',
    bodyText: 'Formulated with cold-steeped Orchid Nectar, pure active Bakuchiol, and structural vegan Squalane. Specially calibrated for dramatic overnight lipid cell restoration, delivering a visibly plumped, radiant glow by raw scientific intent.',
    tagline: 'Orchid Botanical Nectar / Batch 001',
    offerText: 'Private Batch Allocation Now Open',
    industry: 'Skincare'
  },
  {
    id: 'newsletter',
    title: 'Newsletter Campaign',
    type: 'The Weekly Curated / Mindful Living',
    subject: 'The Science of Slowing Down.',
    previewText: '3 morning rituals for conscious focus, mineral nutrition, and optimal cellular defense.',
    ctaText: 'Read the Editorial',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600',
    headline: 'Meticulous Rituals for the Modern Individual.',
    bodyText: 'True skin health is an output of internal peace and external defense. In this volume of Our Weekly Curated, we explore the biology of skin circadian rhythms, highlighting the exact foods and botanic extracts that assist nighttime structural rebuilds.',
    tagline: 'Volume 48 / Restorative Biology',
    offerText: 'Designed for the curious mind.',
    industry: 'Wellness'
  },
  {
    id: 'promotional',
    title: 'Promotional Campaign',
    type: 'The Seasonal Solstice curation',
    subject: 'The Midsummer Curation / Complimentary Gifting.',
    previewText: 'This Solstice, enjoy a hand-carved Obsidian Facial Roller with any luxury replenishing kit.',
    ctaText: 'Unlock Your Solstice Gift',
    imageUrl: 'https://images.unsplash.com/photo-1563170351-be82bc888bb4?auto=format&fit=crop&q=80&w=600',
    headline: 'Embrace the Season. Nurture Your Base.',
    bodyText: 'We celebrate the longest days of the calendar year with a sensory gift. Bring modern structural facial therapy home with our hand-polished black obsidian gua sha roller—perfectly crafted for lymphatic lymphatic drainage and immediate contour release.',
    tagline: 'Complimentary Solstice Offering',
    offerText: 'Apply Code: OBSIDIAN at checkout.',
    industry: 'Beauty'
  },
  {
    id: 'retention',
    title: 'Customer Retention Campaign',
    type: 'The Subscription Replenishment Guide',
    subject: 'Time for a fresh batch? / Seamless refills inside.',
    previewText: 'Keep your active cellular barriers hydrated without a single day of pause.',
    ctaText: 'Authorize Instant Refill',
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600',
    headline: 'Consistency is the Catalyst of Skin Wellness.',
    bodyText: 'A botanical skin routine requires sustained consistency to lock in clinical results. Your initial Botanical Nectar was formulated for a 45-day cycle. Don\'t lose the momentum of your cellular rejuvenation. Refill with 15% subscriber-only loyalty access.',
    tagline: 'Refill Portal / Curated Loyalty',
    offerText: 'Subscriber Loyalty 15% discount applied auto-com.',
    industry: 'Lifestyle'
  }
];

export const smsConversations: SmsConversation[] = [
  {
    id: 'beauty-conv',
    brandName: 'ÉTERNEL BEAUTÉ',
    avatar: 'EB',
    industry: 'Beauty & Fragrance',
    campaignTitle: 'New Palette Pre-Launch Allocation',
    messages: [
      { sender: 'brand', text: 'ETERNEL: VIP early access is now open for our Le Coeur Ochre Face Palette. 48 hours for top-tier collectors only: https://eternel.com/vip-coeur (STOP to end)', time: '11:02 AM' },
      { sender: 'customer', text: 'Is the monogram packaging included in this VIP order?', time: '11:05 AM' },
      { sender: 'brand', text: 'ETERNEL CONCIERGE: Yes, absolutely! Every VIP pre-launch order includes hand-stitched leather monogram cases and priority tracked delivery, completely on us. Would you like us to reserve your engraving?', time: '11:07 AM' },
      { sender: 'customer', text: 'Yes please! Engrave it with "KL". Let\'s do it.', time: '11:09 AM' },
      { sender: 'brand', text: 'ETERNEL CONCIERGE: Wonderful, "KL" engraving confirmed. We have locked in your allocation. Tap this secure link to complete checkout in one click: https://eternel.com/checkout?monogram=KL (Engraving complimentary)', time: '11:10 AM' }
    ]
  },
  {
    id: 'skincare-conv',
    brandName: 'AURA BOTANICA',
    avatar: 'AB',
    industry: 'Premium Skincare',
    campaignTitle: 'Personalized Re-Order Cycle SMS',
    messages: [
      { sender: 'brand', text: 'AURA: Your botanical routine has hit Day 45! Our records show your Organic Plumping Elixir might be running low. replenishment starts with free shipping: https://aurabotanica.com/refill', time: '09:15 AM' },
      { sender: 'customer', text: 'I love the elixir! But my cheeks have been feeling slightly dry in this winter weather. Any oil you suggest adding?', time: '09:20 AM' },
      { sender: 'brand', text: 'AURA CARE: We hear you! In drier climates, we highly recommend blending 1 button-drop of our Bakuchiol Infused Seed Oil directly with the elixir. It offers stellar barrier security.', time: '09:22 AM' },
      { sender: 'customer', text: 'Awesome recommendation. Can I add both to my refill order now?', time: '09:25 AM' },
      { sender: 'brand', text: 'AURA CARE: Combined! We have bundled the Elixir Refill (15% loyalty discount) along with a travel-size Bakuchiol Seed Oil, ready to dispatch. Tap link to approve: https://aurabotanica.com/bundle-checkout (STOP to end)', time: '09:27 AM' }
    ]
  },
  {
    id: 'wellness-conv',
    brandName: 'SOMA WELLNESS',
    avatar: 'SW',
    industry: 'Organic Wellness & Adaptogens',
    campaignTitle: 'Re-engagement Win-Back Ritual',
    messages: [
      { sender: 'brand', text: 'SOMA: We noticed it\'s been a while since your last adaptogen blend ritual. Since you purchased, we formulated a new Magnesium Sleep Essence. Code SOMAWELL adds a travel bottle on us today: https://somawell.com (STOP to end)', time: '02:00 PM' },
      { sender: 'customer', text: 'Is this lavender scented? I\'m allergic to lavender.', time: '02:05 PM' },
      { sender: 'brand', text: 'SOMA SPECIALIST: Real-time update: No lavender! Our Magnesium Sleep Essence is formulated with Roman chamomile, active vetiver, and sweet orange. 100% lavender-free. Warm and grounding.', time: '02:09 PM' },
      { sender: 'customer', text: 'Perfect. I will grab one now. Thank you so much for the quick help!', time: '02:12 PM' },
      { sender: 'brand', text: 'SOMA SPECIALIST: It\'s our absolute pleasure to guide your wellness rituals. We have credited your basket with the free Magnesium Travel bottle. Sleep peacefully!', time: '02:14 PM' }
    ]
  }
];

export const howWeThinkItems: HowWeThinkItem[] = [
  {
    id: 'retention',
    title: 'Customer Retention',
    description: 'Keeping customers engaged beyond the first purchase.'
  },
  {
    id: 'engagement',
    title: 'Customer Engagement',
    description: 'Creating communication customers actually want to receive.'
  },
  {
    id: 'ltv',
    title: 'Customer Lifetime Value',
    description: 'Building systems that increase long-term customer value.'
  },
  {
    id: 'lifecycle',
    title: 'Lifecycle Marketing',
    description: 'Delivering the right message at the right time.'
  }
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'p1',
    title: 'Luxury Skincare Welcome Flow',
    challenge: 'New subscribers were not converting into customers.',
    approach: 'Designed a multi-step welcome experience focused on education, trust, and product discovery.',
    deliverables: [
      'Welcome Series',
      'Audience Segmentation',
      'SMS Welcome Journey'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1608248597481-496100c8c836?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'p2',
    title: 'Wellness Brand Cart Recovery Flow',
    challenge: 'High cart abandonment.',
    approach: 'Built a customer-friendly recovery sequence focused on reducing purchase friction.',
    deliverables: [
      'Email Recovery Flow',
      'SMS Recovery Flow',
      'Customer Journey Mapping'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'p3',
    title: 'Beauty Brand Post-Purchase Journey',
    challenge: 'Low repeat purchase behavior.',
    approach: 'Designed replenishment reminders and post-purchase education campaigns.',
    deliverables: [
      'Post-Purchase Flow',
      'Replenishment Sequence',
      'VIP Customer Journey'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563170351-be82bc888bb4?auto=format&fit=crop&q=80&w=600'
  }
];

export const resultDashboardMetrics = {
  Beauty: {
    openRate: { base: '21.4%', optimized: '44.8%', lift: '+109%' },
    clickRate: { base: '1.8%', optimized: '4.9%', lift: '+172%' },
    conversionRate: { base: '2.1%', optimized: '5.4%', lift: '+157%' },
    repeatPurchaseRate: { base: '18.2%', optimized: '38.4%', lift: '+111%' },
    retentionRate: { base: '22.0%', optimized: '46.1%', lift: '+110%' },
    overallRevenueShare: { base: '9.4%', optimized: '34.2%', lift: '3.6x Growth' }
  },
  Skincare: {
    openRate: { base: '24.1%', optimized: '49.2%', lift: '+104%' },
    clickRate: { base: '2.2%', optimized: '6.1%', lift: '+177%' },
    conversionRate: { base: '2.3%', optimized: '5.9%', lift: '+156%' },
    repeatPurchaseRate: { base: '21.4%', optimized: '49.8%', lift: '+132%' },
    retentionRate: { base: '26.4%', optimized: '58.2%', lift: '+120%' },
    overallRevenueShare: { base: '12.1%', optimized: '38.9%', lift: '3.2x Growth' }
  },
  Wellness: {
    openRate: { base: '28.3%', optimized: '54.1%', lift: '+91%' },
    clickRate: { base: '2.9%', optimized: '7.8%', lift: '+169%' },
    conversionRate: { base: '3.1%', optimized: '7.2%', lift: '+132%' },
    repeatPurchaseRate: { base: '25.9%', optimized: '51.3%', lift: '+98%' },
    retentionRate: { base: '31.1%', optimized: '62.4%', lift: '+100%' },
    overallRevenueShare: { base: '14.5%', optimized: '41.2%', lift: '2.8x Growth' }
  }
};
