"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { InstagramIcon, TikTokIcon, TelegramSendIcon } from "@/components/icons/SocialIcons"
import { ChevronLeft, ChevronRight, Search, Globe, X, MapPin, ArrowRight, ShoppingBag, AlignRight, Calendar, Phone } from "lucide-react"
import JsonLd from "@/components/JsonLd"

const translations = {
  uk: {
    // Header
    health: "Здоров'я",
    services: "Послуги",
    about: "Про нас",
    contacts: "Контакти",
    myAccount: "Мій кабінет",
    appointment: "Записатися",

    // Hero section
    heroTitle: "ПРИРОДНЕ ЗДОРОВ'Я.",
    heroSubtitle: "СУЧАСНІ РІШЕННЯ",
    ourServices: "Наші послуги",
    cashback: "Кешбек",
    servicesText: "Послуги",
    consultations: "Консультації",
    searchPlaceholder: "Ваш запит",
    viewAll: "ПЕРЕГЛЯНУТИ ВСІ",
    callNow: "Зателефонувати зараз",
    appointment2: "Записатися!",

    // Why us section
    whyUs: "ЧОМУ\nМИ?",
    qualifiedSpecialists: "Кваліфіковані\nспеціалісти",
    qualifiedText:
      "Ми маємо команду лікарів — це найдосвідченіші лікари світового рівня, які працюють з найсучаснішими технологіями та методами лікування.",
    serviceQuality: "Сервіс\nта якість",
    serviceText:
      "Ми пропонуємо лише найкращі послуги для наших пацієнтів. Наша команда працює з найсучаснішими технологіями та методами лікування.",
    trustPartnership: "Довіра та\nпартнерство.",
    trustText:
      "Для нас клієнт — це не просто клієнт, а партнер, з яким ми будуємо довгострокові відносини на основі довіри та взаємної поваги.",
    responsibility: "Відповідальність і\nекологічність.",
    responsibilityText:
      "Ми несемо відповідальність за своїх пацієнтів та за навколишнє середовище. Ми використовуємо лише екологічно чисті матеріали.",

    // Specialists
    gastroenterologist: "Гастроентеролог",
    dietitian: "Дієтолог",
    nutritionist: "Нутриціолог",
    psychotherapist: "Психотерапевт",
    doctorName: "Ірина Миколаївна",
    doctorTitle1: "Лікар Нутриціолог",
    doctorTitle2: "Лікар Дієтолог",
    doctorTitle3: "Лікар Гастроентеролог",
    appointmentBtn: "Записатися",
    consultationBtn: "Консультація",

    // EcoPackage
    ecoPackage: "ЕкоПакет",
    ecoPackageTitle: "Що включає ЕкоКешбек:",
    ecoFeature1: "персональна консультація та підбір оптимальних рішень;",
    ecoFeature2: "доступ до спеціальних програм і партнерських пропозицій;",
    ecoFeature3: "прозора система кешбеку без прихованих умов;",
    ecoFeature4: "постійна підтримка й супровід.",

    // Footer
    aboutFooter: "About",
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms",
    instagram: "Instagram",
    tiktok: "TikTok",
    telegram: "Telegram",
    copyright: "© 2025 EcoSofia",
  },
  en: {
    // Header
    health: "Health",
    services: "Services",
    about: "About",
    contacts: "Contacts",
    myAccount: "My Account",
    appointment: "Book appointment",

    // Hero section
    heroTitle: "NATURAL HEALTH.",
    heroSubtitle: "MODERN SOLUTIONS",
    ourServices: "Our services",
    cashback: "Cashback",
    servicesText: "Services",
    consultations: "Consultations",
    searchPlaceholder: "Your request",
    viewAll: "VIEW ALL",
    callNow: "Call now",
    appointment2: "Book appointment!",

    // Why us section
    whyUs: "WHY\nUS?",
    qualifiedSpecialists: "Qualified\nspecialists",
    qualifiedText:
      "We have a team of doctors — the most experienced world-class doctors who work with the most modern technologies and treatment methods.",
    serviceQuality: "Service\nand quality",
    serviceText:
      "We offer only the best services for our patients. Our team works with the most modern technologies and treatment methods.",
    trustPartnership: "Trust and\npartnership.",
    trustText:
      "For us, a client is not just a client, but a partner with whom we build long-term relationships based on trust and mutual respect.",
    responsibility: "Responsibility and\necology.",
    responsibilityText:
      "We take responsibility for our patients and for the environment. We use only environmentally friendly materials.",

    // Specialists
    gastroenterologist: "Gastroenterologist",
    dietitian: "Dietitian",
    nutritionist: "Nutritionist",
    psychotherapist: "Psychotherapist",
    doctorName: "Irina Nikolaevna",
    doctorTitle1: "Nutritionist Doctor",
    doctorTitle2: "Dietitian Doctor",
    doctorTitle3: "Gastroenterologist Doctor",
    appointmentBtn: "Book appointment",
    consultationBtn: "Consultation",

    // EcoPackage
    ecoPackage: "EcoPackage",
    ecoPackageTitle: "What EcoCashback includes:",
    ecoFeature1: "personal consultation and selection of optimal solutions;",
    ecoFeature2: "access to special programs and partner offers;",
    ecoFeature3: "transparent cashback system without hidden conditions;",
    ecoFeature4: "constant support and assistance.",

    // Footer
    aboutFooter: "About",
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms",
    instagram: "Instagram",
    tiktok: "TikTok",
    telegram: "Telegram",
    copyright: "© 2025 EcoSofia",
  },
}

export default function HealthcarePage() {
  const [language, setLanguage] = useState<"uk" | "en">("uk")
  const [activeSpecialty, setActiveSpecialty] = useState("gastroenterologist")
  const t = translations[language]

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "EcoSofia",
    "description": "Ваш надійний партнер у сфері здоров'я. Кваліфіковані спеціалісти, якісні послуги та екологічні рішення.",
    "url": "https://ecosofia.com",
    "logo": "https://ecosofia.com/logo.png",
    "image": "https://ecosofia.com/logo.png",
    "telephone": "+380123456789",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "UA",
      "addressLocality": "Київ"
    },
    "medicalSpecialty": [
      "Gastroenterology",
      "Nutrition",
      "Dietetics",
      "Psychotherapy"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Медичні послуги",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Консультація гастроентеролога"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Консультація дієтолога"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure", 
            "name": "Консультація нутриціолога"
          }
        }
      ]
    },
    "sameAs": [
      "https://instagram.com/ecosofia",
      "https://tiktok.com/@ecosofia",
      "https://t.me/ecosofia"
    ]
  }

  const specialties = [
    { id: "gastroenterologist", name: t.gastroenterologist },
    { id: "dietitian", name: t.dietitian },
    { id: "nutritionist", name: t.nutritionist },
    { id: "psychotherapist", name: t.psychotherapist },
  ]

  const doctors = {
    gastroenterologist: {
      name: t.doctorName,
      title: t.doctorTitle3,
      image: "/CROSSOVER TUNIC 1.png",
    },
    dietitian: { name: t.doctorName, title: t.doctorTitle2, image: "/Магазин медицинской одежды Red Plus 1.png" },
    nutritionist: { name: t.doctorName, title: t.doctorTitle1, image: "/RED+ Магазин медицинской одежды 1.png" },
    psychotherapist: {
      name: t.doctorName,
      title: t.doctorTitle1,
      image: "/RED+ Магазин медицинской одежды 1.png",
    },
  }

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F1D5C9' }}>
      <header className="flex items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#E8888A] rounded-full flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-gray-800 text-lg">{t.health}</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "uk" ? "en" : "uk")}
            className="flex items-center gap-1 text-gray-600"
          >
            <Globe className="w-4 h-4" />
            {language.toUpperCase()}
          </Button>
        </nav>
      </header>

      {/* Right side - Hero image with overlay - Positioned relative to entire page */}
      <div className="absolute top-0 right-0 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[calc(50%-1.5rem)] z-10">
        <div className="relative rounded-bl-2xl overflow-hidden">
          <Image
            src="/Mask group.png"
            alt="Healthcare professional"
            width={600}
            height={384}
            className="w-full h-68 sm:h-80 md:h-84 lg:h-100 object-cover"
          />

          {/* Top left overlays - Location and Arrow */}
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex items-center">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white font-bold" />
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-lg -ml-1">
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 font-bold" />
              </div>
            </div>

            {/* Top right overlay */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex items-center gap-1 sm:gap-2">
              <span className="text-xs sm:text-sm font-medium bg-[#E8888A] hover:bg-rose-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-3xl"> {t.appointment} </span>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <AlignRight className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
              </div>
            </div>

            {/* Search overlay */}
            <div className="absolute bottom-16 sm:bottom-20 left-4 right-4 sm:left-10 sm:right-10">
              <div className="bg-white rounded-lg p-2 sm:p-3 shadow-lg flex items-center gap-2">
                <Search className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  className="flex-1 border-none outline-none text-xs sm:text-sm text-black text-center items-center"
                />
                <X className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
              </div>
            </div>

            {/* Bottom overlays */}
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4">
              <div className="bg-white rounded-3xl px-2 py-1 flex items-center gap-1 sm:gap-2">
                <div className="relative flex items-center">
                  {/* Mask group image in small circle */}
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden border-0 border-white">
                    <Image
                      src="/Mask group.png"
                      alt="Profile"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Telegram icon circle overlapping to the right */}
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#E8888A] rounded-full flex items-center justify-center -ml-2 border-0">
                    <TelegramSendIcon className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-800">{t.callNow}</span>
              </div>
            </div>

            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4">
              <div className="bg-white rounded-3xl px-2 py-1 flex items-center gap-1">
                <div className="bg-[#E8888A] w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
                  <InstagramIcon className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                </div>
                <div className="bg-[#E8888A] w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
                  <TikTokIcon className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-black">{t.appointment2}</span>
              </div>
            </div>
          </div>
        </div>

      <section className="px-6 py-8 relative min-h-screen">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-5xl font-bold text-black leading-tight">
                {t.heroTitle}
                <br />
                <span className="text-2xl lg:text-4xl">{t.heroSubtitle}</span>
              </h1>
            </div>

            <div className="space-y-4">
              <h3 className="text-md font-medium text-black">{t.ourServices}</h3>
              <div className="space-y-3">
                {[
                  { icon: <Image src="/Знімок екрана 2025-09-07 132158 3.png" alt="Icon" width={40} height={40} className="w-10 h-10" />, text: t.cashback },
                  { icon: <Image src="/Знімок екрана 2025-09-07 132158 3.png" alt="Icon" width={20} height={20} className="w-10 h-10" />, text: t.servicesText },
                  { icon: <Image src="/Знімок екрана 2025-09-07 132158 3.png" alt="Icon" width={20} height={20} className="w-10 h-10" />, text: t.consultations },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white cursor-pointer relative"
                  >
                    <div className="flex items-center justify-between sm:pr-6 pr-3">
                      <div className="sm:mr-6 mr-3">  
                        {service.icon}
                      </div>
                      <span className="font-medium text-gray-800">{service.text}</span>
                    </div>
                    <div className="w-8 h-8 bg-[#E3E3E3] rounded-full flex items-center justify-center mr-4 py-2">
                      <ChevronRight className="w-5 h-5 text-black" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <button className="text-black font-medium text-sm underline">{t.viewAll}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative min-h-[600px]">
            {/* Three concentric circles - behind the cards */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
              {/* Outermost circle - largest */}
              <div className="w-[760px] h-[760px] rounded-full border-2 border-gray-400 bg-transparent flex items-center justify-center">
                {/* Middle circle - medium */}
                <div className="w-[660px] h-[660px] rounded-full border-2 border-gray-400 bg-transparent flex items-center justify-center">
                  {/* Inner circle - smallest with text */}
                  <div className="w-[560px] h-[560px] rounded-full border-2 border-gray-400 flex items-center justify-center">
                    <h2 className="text-5xl font-bold text-black text-center whitespace-pre-line leading-tight">
                      {t.whyUs}
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards positioned around the circle */}
            {/* Top left */}
            <div className="absolute top-0 left-0 w-80 z-10">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="sm:px-12 sm:py-10 px-10 py-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-black whitespace-pre-line leading-tight">
                      {t.qualifiedSpecialists}
                    </h3>
                    <Badge className="text-black sm:text-lg text-md">
                      01
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.qualifiedText}</p>
                </CardContent>
              </Card>
            </div>

            {/* Top right */}
            <div className="absolute top-0 right-0 w-80 z-10">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="sm:px-12 sm:py-10 px-10 py-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 whitespace-pre-line leading-tight">
                      {t.trustPartnership}
                    </h3>
                    <Badge className="text-black sm:text-lg text-md">
                      03
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.trustText}</p>
                </CardContent>
              </Card>
            </div>

            {/* Bottom left */}
            <div className="absolute bottom-0 left-0 w-80 z-10">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="sm:px-12 sm:py-10 px-10 py-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 whitespace-pre-line leading-tight">
                      {t.serviceQuality}
                    </h3>
                    <Badge className="text-black sm:text-lg text-md">
                      02
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.serviceText}</p>
                </CardContent>
              </Card>
            </div>

            {/* Bottom right */}
            <div className="absolute bottom-0 right-0 w-80 z-10">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="sm:px-12 sm:py-10 px-10 py-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 whitespace-pre-line leading-tight">
                      {t.responsibility}
                    </h3>
                    <Badge className="text-black sm:text-lg text-md">
                      04
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.responsibilityText}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Specialty tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-xl p-1 inline-flex">
              <div className="flex flex-wrap gap-1">
                {specialties.map((specialty) => (
                  <Button
                    key={specialty.id}
                    variant="ghost"
                    onClick={() => setActiveSpecialty(specialty.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      activeSpecialty === specialty.id
                        ? "bg-white text-black shadow-md border-b-2 border-gray-800"
                        : "bg-white text-black hover:bg-gray-50"
                    }`}
                  >
                    {specialty.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Doctor cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => {
              const doctor = doctors[activeSpecialty as keyof typeof doctors]
              return (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative">
                    <Image
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-center space-y-4">
                      <div>
                        <h3 className="font-semibold text-black text-lg">{doctor.name}</h3>
                        <p className="text-sm text-black mt-1">{doctor.title}</p>
                      </div>
                      {/* Top margin line */}
                      <div className="w-full h-px bg-black"></div>
                      <div className="flex min-h-[40px]">
                        <Button size="sm" variant="ghost" className="flex-1 text-xs px-4 py-2 bg-white text-black border-0 hover:bg-gray-50 flex items-center justify-center gap-2 rounded-none">
                          <Calendar className="w-4 h-4 text-[#E8888A]" />
                          {t.appointmentBtn}
                        </Button>
                        {/* Vertical separator - same thickness as top line */}
                        <div className="w-px bg-black self-stretch"></div>
                        <Button size="sm" variant="ghost" className="flex-1 text-xs px-4 py-2 bg-white text-black border-0 hover:bg-gray-50 flex items-center justify-center gap-2 rounded-none">
                          <Phone className="w-4 h-4 text-[#E8888A]" />
                          {t.consultationBtn}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-black">{t.ecoPackage}</h2>
            <div className="space-y-4">
              <p className="text-lg text-black">{t.ecoPackageTitle}</p>
              <ul className="space-y-3">
                {[t.ecoFeature1, t.ecoFeature2, t.ecoFeature3, t.ecoFeature4].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                    <span className="text-black leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden">
              <Image
                src="/c3027652a82dc0e05ae8bb7a2c2c13d7.png"
                alt="EcoPackage"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="EcoSofia Logo"
                  width={48}
                  height={48}
                  className="w-26 h-22 object-contain"
                />
              </div>
              <div className="text-center text-sm text-gray-400">{t.copyright}</div>
            </div>

            <nav className="flex flex-wrap gap-8 text-sm">
              <a href="#" className="hover:text-rose-400 transition-colors">
                {t.aboutFooter}
              </a>
              <a href="#" className="hover:text-rose-400 transition-colors">
                {t.contact}
              </a>
              <a href="#" className="hover:text-rose-400 transition-colors">
                {t.privacy}
              </a>
              <a href="#" className="hover:text-rose-400 transition-colors">
                {t.terms}
              </a>
              <a href="#" className="hover:text-rose-400 transition-colors">
                {t.instagram}
              </a>
              <a href="#" className="hover:text-rose-400 transition-colors">
                {t.tiktok}
              </a>
              <a href="#" className="hover:text-rose-400 transition-colors">
                {t.telegram}
              </a>
            </nav>
          </div>
        </div>
      </footer>
      <JsonLd data={structuredData} />
    </div>
  )
}
