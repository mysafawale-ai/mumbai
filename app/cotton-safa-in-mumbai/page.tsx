import { ServicePageTemplate } from "@/components/service-page-template"
import type { Metadata } from "next"

const MUMBAI_AREAS = [
  "South Mumbai", "Colaba", "Malabar Hill", "Bandra West", "Juhu", "Andheri West",
  "Breach Candy", "Cuffe Parade", "Nariman Point", "Churchgate", "Parel", "Dadar West",
  "Santacruz West", "Powai", "Vile Parle West", "Khar West", "Bandra East", "Andheri East",
  "Borivali West", "Goregaon West", "Thane West", "Mulund West", "Chembur", "Kurla",
  "Ghatkopar", "Malad West", "Kandivali West", "Vashi", "Nerul", "Kharghar", "Panvel"
]

export const metadata: Metadata = {
  title: "Cotton Safa in Mumbai | Cotton Turban Tying | Safawala Mumbai",
  description: "Comfortable cotton safa in Mumbai by Safawala Mumbai. Breathable cotton turban for summer weddings. Quality cotton safa in Mumbai for comfort. Book today!",
  keywords: "cotton safa in mumbai, cotton turban mumbai, cotton pagdi mumbai, breathable safa, cotton wedding turban",
  openGraph: {
    title: "Cotton Safa in Mumbai | Cotton Turban Tying | Safawala Mumbai",
    description: "Comfortable cotton safa in Mumbai by Safawala Mumbai.",
    url: "https://safawalamumbai.com/cotton-safa-in-mumbai",
    type: "website",
  },
}

export default function CottonSafaInMumbai() {
  const pageData = {
    title: "Cotton Safa in Mumbai",
    shortDescription: "Mumbai's tropical climate often makes comfort a priority, especially for summer weddings. Safawala Mumbai's cotton safa in Mumbai offers breathable, comfortable turbans that don't compromise on style. Our cotton safa in Mumbai is perfect for daytime ceremonies, outdoor weddings, and grooms who prioritize comfort while looking great.",
    description: "Comfortable cotton safa in Mumbai by Safawala Mumbai - breathable cotton turban for summer weddings.",
    mainImage: "/36-3.webp",
    videos: ["/video-1.mp4", "/video-4.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/5-2.webp", "/6-2.webp", "/7-2.webp", "/9-2.webp", "/10-2.webp", "/11-2.webp", "/12-2.webp"],
    areas: MUMBAI_AREAS,
    keyFeatures: [
      "Cotton safa in Mumbai",
      "Breathable fabric",
      "Summer-perfect",
      "Comfortable wear",
      "Lightweight feel",
      "Natural material",
      "Day wedding ideal",
      "Skin-friendly",
    ],
    seoKeywords: ["cotton safa in mumbai", "cotton turban mumbai", "cotton pagdi mumbai", "breathable safa"],
    content: `
<h2>Safawala Mumbai - Comfortable Cotton Safa in Mumbai</h2>

<p>Mumbai's weather can be hot and humid, especially during summer wedding season. While luxury fabrics look beautiful, comfort matters too. <strong>Cotton safa in Mumbai</strong> from Safawala Mumbai offers the perfect balance – a breathable, comfortable turban that still looks elegant. Our <strong>cotton safa in Mumbai</strong> is ideal for grooms who want to stay cool while looking their traditional best.</p>

<p>Natural, skin-friendly, and lightweight – <strong>cotton safa in Mumbai</strong> is the practical luxury choice.</p>

<h2>Cotton Benefits</h2>

<h3>Comfort Features</h3>

<p><strong>Cotton safa in Mumbai</strong> comfort:</p>

<ul>
<li>Breathable fabric</li>
<li>Absorbs moisture</li>
<li>Keeps you cool</li>
<li>Lightweight feel</li>
</ul>

<h3>Practical Advantages</h3>

<p><strong>Cotton safa in Mumbai</strong> practical:</p>

<ul>
<li>Skin-friendly</li>
<li>Natural material</li>
<li>Long-wear comfortable</li>
<li>No irritation</li>
</ul>

<h2>Cotton Quality Options</h2>

<p><strong>Cotton safa in Mumbai</strong> quality:</p>

<ul>
<li>Fine cotton</li>
<li>Premium cotton</li>
<li>Cotton blends</li>
<li>Printed cotton</li>
</ul>

<h2>Best Occasions for Cotton</h2>

<p><strong>Cotton safa in Mumbai</strong> occasions:</p>

<ul>
<li>Summer weddings</li>
<li>Daytime ceremonies</li>
<li>Outdoor events</li>
<li>Beach weddings</li>
<li>Hot weather functions</li>
</ul>

<h2>Cotton Colors</h2>

<p><strong>Cotton safa in Mumbai</strong> colors:</p>

<ul>
<li>White cotton</li>
<li>Cream cotton</li>
<li>Light pastels</li>
<li>Printed options</li>
<li>Traditional colors</li>
</ul>

<h2>Cotton vs Silk</h2>

<p><strong>Cotton safa in Mumbai</strong> comparison:</p>

<ul>
<li>More breathable than silk</li>
<li>Lighter weight</li>
<li>More comfortable in heat</li>
<li>More casual appearance</li>
</ul>

<h2>Contact for Cotton Safa in Mumbai</h2>

<p>Book <strong>cotton safa in Mumbai</strong> with Safawala Mumbai:</p>

<p><strong>Phone:</strong> +91-9725295692<br/>
<strong>Email:</strong> info@safawalamumbai.com<br/>
<strong>Showroom:</strong> Near Gateway of India, Colaba</p>

<p>Safawala Mumbai – <strong>Cotton safa in Mumbai</strong> for comfortable celebrations.</p>
    `,
    faqs: [
      {
        question: "Is cotton good for summer weddings?",
        answer: "Yes, cotton safa in Mumbai is perfect for hot weather – breathable and comfortable.",
      },
      {
        question: "Does cotton look elegant enough?",
        answer: "Yes, cotton safa in Mumbai offers elegant options that look great in photographs.",
      },
      {
        question: "Is cotton lightweight?",
        answer: "Yes, cotton safa in Mumbai is lightweight and comfortable for long wear.",
      },
      {
        question: "What colors in cotton?",
        answer: "Cotton safa in Mumbai offers white, cream, pastels, and printed options.",
      },
      {
        question: "Is cotton suitable for formal weddings?",
        answer: "Cotton safa in Mumbai works well for day functions and semi-formal weddings.",
      },
      {
        question: "Can cotton be styled elaborately?",
        answer: "Yes, cotton safa in Mumbai can be styled beautifully with proper technique.",
      },
    ],
  }

  return <ServicePageTemplate {...pageData} />
}
