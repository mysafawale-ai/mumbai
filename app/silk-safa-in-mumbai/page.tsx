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
  title: "Silk Safa in Mumbai | Premium Silk Turban | Safawala Mumbai",
  description: "Luxurious silk safa in Mumbai by Safawala Mumbai. Premium pure silk turbans for weddings & events. Beautiful silk safa in Mumbai with lustrous finish. Book your silk turban today!",
  keywords: "silk safa in mumbai, silk safa mumbai, silk turban mumbai, pure silk safa, premium silk pagdi mumbai",
  openGraph: {
    title: "Silk Safa in Mumbai | Premium Silk Turban | Safawala Mumbai",
    description: "Luxurious silk safa in Mumbai - premium pure silk turbans by Safawala Mumbai.",
    url: "https://safawalamumbai.com/silk-safa-in-mumbai",
    type: "website",
  },
}

export default function SilkSafaInMumbai() {
  const pageData = {
    title: "Silk Safa in Mumbai",
    shortDescription: "Indulge in luxury with silk safa in Mumbai from Safawala Mumbai. Our silk safa in Mumbai features pure silk turbans with lustrous sheen and rich drape. Silk has been the fabric of royalty for centuries, and our silk safa in Mumbai continues this tradition of excellence with premium quality materials.",
    description: "Luxurious silk safa in Mumbai by Safawala Mumbai - premium pure silk turbans for special occasions.",
    mainImage: "/36-3.webp",
    videos: ["/video-3.mp4", "/video-6.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/5-2.webp", "/6-2.webp", "/7-2.webp", "/9-2.webp", "/10-2.webp", "/11-2.webp", "/12-2.webp"],
    areas: MUMBAI_AREAS,
    keyFeatures: [
      "Premium silk safa in Mumbai",
      "Pure silk quality",
      "Lustrous sheen finish",
      "Rich elegant drape",
      "Comfortable lightweight",
      "Royal fabric heritage",
      "Multiple silk varieties",
      "Luxurious appearance",
    ],
    seoKeywords: ["silk safa in mumbai", "silk safa mumbai", "silk turban mumbai", "pure silk safa"],
    content: `
<h2>Safawala Mumbai - Premium Silk Safa in Mumbai</h2>

<p>When only the finest will do, choose <strong>silk safa in Mumbai</strong> from Safawala Mumbai. Our <strong>silk safa in Mumbai</strong> collection features pure silk turbans that drape beautifully, catch light magnificently, and feel luxurious against your skin. <strong>Silk safa in Mumbai</strong> represents the pinnacle of turban elegance – chosen by those who appreciate quality.</p>

<p>Silk has been the fabric of Indian royalty and nobility for millennia. Our <strong>silk safa in Mumbai</strong> continues this tradition, offering turbans that make you feel like the king of your celebration.</p>

<h2>Silk Quality Features</h2>

<p><strong>Silk safa in Mumbai</strong> characteristics:</p>

<ul>
<li>Natural lustrous sheen</li>
<li>Smooth elegant drape</li>
<li>Lightweight comfort</li>
<li>Breathable fabric</li>
<li>Rich texture</li>
<li>Premium appearance</li>
</ul>

<h2>Silk Varieties</h2>

<h3>Pure Silk Safa</h3>

<p><strong>Silk safa in Mumbai</strong> - pure:</p>

<ul>
<li>100% natural silk</li>
<li>Maximum sheen</li>
<li>Premium quality</li>
<li>Luxurious feel</li>
</ul>

<h3>Banarasi Silk Safa</h3>

<p><strong>Silk safa in Mumbai</strong> - Banarasi:</p>

<ul>
<li>Famous weave</li>
<li>Zari work integration</li>
<li>Traditional richness</li>
<li>Wedding favorite</li>
</ul>

<h3>Raw Silk Safa</h3>

<p><strong>Silk safa in Mumbai</strong> - raw:</p>

<ul>
<li>Textured finish</li>
<li>Subtle elegance</li>
<li>Natural appeal</li>
<li>Unique character</li>
</ul>

<h3>Dupion Silk Safa</h3>

<p><strong>Silk safa in Mumbai</strong> - dupion:</p>

<ul>
<li>Distinctive texture</li>
<li>Crisp appearance</li>
<li>Structured drape</li>
<li>Modern appeal</li>
</ul>

<h2>Why Choose Silk</h2>

<p><strong>Silk safa in Mumbai</strong> benefits:</p>

<ul>
<li>Unmatched elegance</li>
<li>Royal heritage fabric</li>
<li>Comfortable to wear</li>
<li>Photographs beautifully</li>
<li>Temperature regulating</li>
<li>Lasting quality</li>
</ul>

<h2>Silk Safa Colors</h2>

<p><strong>Silk safa in Mumbai</strong> available in:</p>

<ul>
<li>Red silk safa</li>
<li>Maroon silk safa</li>
<li>Gold silk safa</li>
<li>Cream silk safa</li>
<li>Pink silk safa</li>
<li>All colors available</li>
</ul>

<h2>Silk Safa Care</h2>

<p><strong>Silk safa in Mumbai</strong> handling:</p>

<ul>
<li>Gentle fabric treatment</li>
<li>Proper storage guidance</li>
<li>Cleaning instructions provided</li>
<li>Maintained premium quality</li>
</ul>

<h2>Book Silk Safa in Mumbai</h2>

<p>Experience silk luxury with Safawala Mumbai:</p>

<p><strong>Phone:</strong> +91-9725295692<br/>
<strong>Email:</strong> info@safawalamumbai.com<br/>
<strong>Showroom:</strong> Near Gateway of India, Colaba</p>

<p>Safawala Mumbai – <strong>Silk safa in Mumbai</strong> for royal celebrations.</p>
    `,
    faqs: [
      {
        question: "Is silk safa worth the premium?",
        answer: "Yes, silk safa in Mumbai offers unmatched elegance, comfort, and photographs beautifully.",
      },
      {
        question: "What silk types are available?",
        answer: "Silk safa in Mumbai includes pure silk, Banarasi silk, raw silk, and dupion silk options.",
      },
      {
        question: "Is silk safa comfortable?",
        answer: "Yes, silk safa in Mumbai is lightweight, breathable, and comfortable for all-day wear.",
      },
      {
        question: "Does silk safa photograph well?",
        answer: "Excellently! Silk safa in Mumbai has natural sheen that catches light beautifully in photos.",
      },
      {
        question: "Can silk safa be rented?",
        answer: "Yes, silk safa in Mumbai is available for both rental and purchase.",
      },
      {
        question: "What is the cost of silk safa?",
        answer: "Silk safa in Mumbai is premium-priced reflecting quality, with various options available.",
      },
    ],
  }

  return <ServicePageTemplate {...pageData} />
}
