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
  title: "Blue Safa in Mumbai | Blue Wedding Turban | Safawala Mumbai",
  description: "Elegant blue safa in Mumbai by Safawala Mumbai. Premium blue turbans in royal, navy, and sky shades. Quality blue safa in Mumbai for weddings and events. Book today!",
  keywords: "blue safa in mumbai, blue turban mumbai, royal blue safa, navy blue pagdi, blue wedding turban mumbai",
  openGraph: {
    title: "Blue Safa in Mumbai | Blue Wedding Turban | Safawala Mumbai",
    description: "Elegant blue safa in Mumbai - premium blue turbans by Safawala Mumbai.",
    url: "https://safawalamumbai.com/blue-safa-in-mumbai",
    type: "website",
  },
}

export default function BlueSafaInMumbai() {
  const pageData = {
    title: "Blue Safa in Mumbai",
    shortDescription: "Add royal elegance with blue safa in Mumbai from Safawala Mumbai. Our blue safa in Mumbai collection features stunning shades from royal blue to navy to powder blue. Blue represents depth, trust, and nobility – and our blue safa in Mumbai brings these qualities to your wedding attire. Popular choice for coordinated wedding themes.",
    description: "Elegant blue safa in Mumbai by Safawala Mumbai - premium blue turbans for weddings.",
    mainImage: "/25-3.webp",
    videos: ["/video-3.mp4", "/video-6.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/5-2.webp", "/6-2.webp", "/7-2.webp", "/9-2.webp", "/10-2.webp", "/11-2.webp", "/12-2.webp"],
    areas: MUMBAI_AREAS,
    keyFeatures: [
      "Premium blue safa in Mumbai",
      "Royal blue options",
      "Navy blue turbans",
      "Sky blue choices",
      "Powder blue shades",
      "Teal blue options",
      "Modern elegance",
      "Photography-perfect results",
    ],
    seoKeywords: ["blue safa in mumbai", "blue turban mumbai", "royal blue safa", "navy blue pagdi"],
    content: `
<h2>Safawala Mumbai - Elegant Blue Safa in Mumbai</h2>

<p>Blue is the color of royalty, depth, and trust – qualities that make <strong>blue safa in Mumbai</strong> from Safawala Mumbai a popular choice for sophisticated weddings. Our <strong>blue safa in Mumbai</strong> collection spans the entire blue spectrum – from deep royal blue to subtle powder blue. Whether coordinating with a blue-themed wedding or seeking elegant contrast, <strong>blue safa in Mumbai</strong> delivers refined style.</p>

<p>Blue turbans photograph beautifully and create striking visual impact. Our <strong>blue safa in Mumbai</strong> helps you stand out with sophistication.</p>

<h2>Blue Shades Available</h2>

<h3>Royal Blue</h3>

<p><strong>Blue safa in Mumbai</strong> - royal:</p>

<ul>
<li>Deep rich blue</li>
<li>Regal appearance</li>
<li>Classic elegance</li>
<li>Timeless appeal</li>
</ul>

<h3>Navy Blue</h3>

<p><strong>Blue safa in Mumbai</strong> - navy:</p>

<ul>
<li>Dark sophisticated blue</li>
<li>Formal elegance</li>
<li>Versatile matching</li>
<li>Distinguished look</li>
</ul>

<h3>Sky Blue</h3>

<p><strong>Blue safa in Mumbai</strong> - sky:</p>

<ul>
<li>Light bright blue</li>
<li>Fresh modern appeal</li>
<li>Daytime wedding perfect</li>
<li>Contemporary style</li>
</ul>

<h3>Powder Blue</h3>

<p><strong>Blue safa in Mumbai</strong> - powder:</p>

<ul>
<li>Soft subtle shade</li>
<li>Gentle elegance</li>
<li>Modern sophistication</li>
<li>Unique choice</li>
</ul>

<h3>Teal Blue</h3>

<p><strong>Blue safa in Mumbai</strong> - teal:</p>

<ul>
<li>Blue-green blend</li>
<li>Unique character</li>
<li>Trendy modern option</li>
<li>Distinctive appearance</li>
</ul>

<h2>Blue Safa Occasions</h2>

<p><strong>Blue safa in Mumbai</strong> for:</p>

<ul>
<li>Blue-themed weddings</li>
<li>Reception events</li>
<li>Engagement ceremonies</li>
<li>Sangeet nights</li>
<li>Corporate events</li>
</ul>

<h2>Coordination Options</h2>

<p><strong>Blue safa in Mumbai</strong> matching:</p>

<ul>
<li>Blue sherwani coordination</li>
<li>Contrast with cream/white</li>
<li>Blue wedding theme matching</li>
<li>Bride's outfit coordination</li>
</ul>

<h2>Fabric Options</h2>

<p><strong>Blue safa in Mumbai</strong> materials:</p>

<ul>
<li>Silk blue turbans</li>
<li>Velvet blue options</li>
<li>Cotton blue choices</li>
<li>Embroidered blue safas</li>
</ul>

<h2>Contact for Blue Safa in Mumbai</h2>

<p>Book <strong>blue safa in Mumbai</strong> with Safawala Mumbai:</p>

<p><strong>Phone:</strong> +91-9725295692<br/>
<strong>Email:</strong> info@safawalamumbai.com<br/>
<strong>Showroom:</strong> Near Gateway of India, Colaba</p>

<p>Safawala Mumbai – <strong>Blue safa in Mumbai</strong> for royal elegance.</p>
    `,
    faqs: [
      {
        question: "What shades of blue do you have?",
        answer: "Blue safa in Mumbai offers royal blue, navy, sky blue, powder blue, and teal options.",
      },
      {
        question: "Is royal blue popular for weddings?",
        answer: "Yes, blue safa in Mumbai in royal blue is very popular for its regal appearance.",
      },
      {
        question: "Can blue match with my sherwani?",
        answer: "Absolutely! Blue safa in Mumbai can be coordinated with blue or contrasting outfits.",
      },
      {
        question: "Is blue good for photographs?",
        answer: "Yes, blue safa in Mumbai photographs beautifully with rich color depth.",
      },
      {
        question: "Do you have navy blue velvet?",
        answer: "Yes, blue safa in Mumbai includes navy blue in silk, velvet, and other fabrics.",
      },
      {
        question: "What occasions suit blue turbans?",
        answer: "Blue safa in Mumbai works for weddings, receptions, engagements, and corporate events.",
      },
    ],
  }

  return <ServicePageTemplate {...pageData} />
}
