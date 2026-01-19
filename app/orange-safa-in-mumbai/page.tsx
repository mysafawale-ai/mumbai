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
  title: "Orange Safa in Mumbai | Orange Turban Tying | Safawala Mumbai",
  description: "Vibrant orange safa in Mumbai by Safawala Mumbai. Festive bright orange turban for celebrations. Premium orange safa in Mumbai for joyful weddings. Book today!",
  keywords: "orange safa in mumbai, orange turban mumbai, saffron safa mumbai, kesari pagdi, orange wedding turban",
  openGraph: {
    title: "Orange Safa in Mumbai | Orange Turban Tying | Safawala Mumbai",
    description: "Vibrant orange safa in Mumbai by Safawala Mumbai.",
    url: "https://safawalamumbai.com/orange-safa-in-mumbai",
    type: "website",
  },
}

export default function OrangeSafaInMumbai() {
  const pageData = {
    title: "Orange Safa in Mumbai",
    shortDescription: "Orange – the color of energy, joy, and auspiciousness in Indian culture. From saffron robes of spirituality to the vibrant orange of celebrations, this color holds special significance. Safawala Mumbai's orange safa in Mumbai captures this energy and festivity. Our orange safa in Mumbai brings warmth, enthusiasm, and traditional meaning to wedding celebrations.",
    description: "Vibrant orange safa in Mumbai by Safawala Mumbai - festive bright orange turban for celebrations.",
    mainImage: "/16-3.webp",
    videos: ["/video-1.mp4", "/video-4.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/5-2.webp", "/6-2.webp", "/7-2.webp", "/9-2.webp", "/10-2.webp", "/11-2.webp", "/12-2.webp"],
    areas: MUMBAI_AREAS,
    keyFeatures: [
      "Orange safa in Mumbai",
      "Vibrant festive color",
      "Auspicious kesari",
      "Energy and joy",
      "Traditional significance",
      "Bold choice",
      "Festival perfect",
      "Spiritual meaning",
    ],
    seoKeywords: ["orange safa in mumbai", "orange turban mumbai", "saffron safa mumbai", "kesari pagdi"],
    content: `
<h2>Safawala Mumbai - Vibrant Orange Safa in Mumbai</h2>

<p>Orange and saffron hold immense significance in Indian culture – from the kesari tilak to saffron flags, this color represents auspiciousness, energy, and spirituality. <strong>Orange safa in Mumbai</strong> from Safawala Mumbai embodies this vibrant tradition. Our <strong>orange safa in Mumbai</strong> brings a bold, joyful energy to wedding celebrations, perfect for day functions and traditional ceremonies.</p>

<p>If you want your wedding to radiate warmth and traditional energy, <strong>orange safa in Mumbai</strong> is an excellent choice.</p>

<h2>Orange in Indian Culture</h2>

<h3>Spiritual Significance</h3>

<p><strong>Orange safa in Mumbai</strong> spiritual:</p>

<ul>
<li>Saffron/kesari sacred color</li>
<li>Spiritual purity</li>
<li>Auspicious meaning</li>
<li>Traditional respect</li>
</ul>

<h3>Festive Association</h3>

<p><strong>Orange safa in Mumbai</strong> festive:</p>

<ul>
<li>Celebration energy</li>
<li>Festival favorite</li>
<li>Joy and enthusiasm</li>
<li>Warmth and happiness</li>
</ul>

<h2>Orange Shade Options</h2>

<p><strong>Orange safa in Mumbai</strong> shades:</p>

<ul>
<li>Saffron/kesari – traditional</li>
<li>Bright orange – vibrant</li>
<li>Burnt orange – warm deep</li>
<li>Coral orange – soft</li>
<li>Sunset orange – rich</li>
</ul>

<h2>Coordination Ideas</h2>

<h3>With Sherwani</h3>

<p><strong>Orange safa in Mumbai</strong> with:</p>

<ul>
<li>Cream sherwani</li>
<li>Gold sherwani</li>
<li>Orange matching sherwani</li>
<li>White sherwani</li>
</ul>

<h3>Occasions</h3>

<p><strong>Orange safa in Mumbai</strong> occasions:</p>

<ul>
<li>Day weddings</li>
<li>Mehndi functions</li>
<li>Haldi ceremonies</li>
<li>Traditional rituals</li>
<li>Morning ceremonies</li>
</ul>

<h2>Who Chooses Orange</h2>

<p><strong>Orange safa in Mumbai</strong> for:</p>

<ul>
<li>Traditional grooms</li>
<li>Vibrant personalities</li>
<li>Day function preference</li>
<li>Cultural celebrations</li>
</ul>

<h2>Photography Impact</h2>

<p><strong>Orange safa in Mumbai</strong> photos:</p>

<ul>
<li>Vibrant cheerful images</li>
<li>Warm color tones</li>
<li>Energy in photos</li>
<li>Festive appearance</li>
</ul>

<h2>Contact for Orange Safa in Mumbai</h2>

<p>Book <strong>orange safa in Mumbai</strong> with Safawala Mumbai:</p>

<p><strong>Phone:</strong> +91-9725295692<br/>
<strong>Email:</strong> info@safawalamumbai.com<br/>
<strong>Showroom:</strong> Near Gateway of India, Colaba</p>

<p>Safawala Mumbai – <strong>Orange safa in Mumbai</strong> for vibrant celebrations.</p>
    `,
    faqs: [
      {
        question: "Is orange auspicious for weddings?",
        answer: "Yes, orange safa in Mumbai carries deep traditional and spiritual significance in Indian culture.",
      },
      {
        question: "What is kesari safa?",
        answer: "Orange safa in Mumbai includes kesari (saffron) – the sacred orange shade.",
      },
      {
        question: "When is orange best – day or night?",
        answer: "Orange safa in Mumbai looks especially vibrant for day weddings and morning functions.",
      },
      {
        question: "What sherwani with orange turban?",
        answer: "Orange safa in Mumbai pairs beautifully with cream, gold, or white sherwanis.",
      },
      {
        question: "Is orange good for mehndi/haldi?",
        answer: "Yes, orange safa in Mumbai is perfect for mehndi and haldi celebrations.",
      },
      {
        question: "What shades of orange available?",
        answer: "Orange safa in Mumbai offers saffron, bright, burnt, coral, and sunset orange.",
      },
    ],
  }

  return <ServicePageTemplate {...pageData} />
}
