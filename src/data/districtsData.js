import { east_sikkim_assets } from "../assets/assets";
import { west_sikkim_assets } from "../assets/assets";
import { north_sikkim_assets } from "../assets/assets";
import { south_sikkim_assets } from "../assets/assets";


export const districtsData = {
  east: {
    name: "East Sikkim",
    heroImage: "/assets/east-sikkim.jpg",
    description:
      "The heart of Sikkim, known for monasteries, vibrant markets, and breathtaking Himalayan views.",
    info: [
      {
        title: "Capital",
        value: "Gangtok",
        icon: "🏙️",
        color: "bg-blue-50 text-blue-700",
      },
      {
        title: "Altitude Range",
        value: "1,437m to 4,000m",
        icon: "⛰️",
        color: "bg-emerald-50 text-emerald-700",
      },
      {
        title: "Best Time to Visit",
        value: "March to June & September to November",
        icon: "📅",
        color: "bg-amber-50 text-amber-700",
      },
    ],
    topAttractions: [
      {
        title: "Tsomgo Lake",
        tag: "Natural",
        desc: "A glacial lake at 12,400 ft, sacred to local people.",
        img: east_sikkim_assets.tsomgo_lake,
      },
      {
        title: "Nathula Pass",
        tag: "Historical",
        desc: "Historic mountain pass connecting India and China.",
        img: east_sikkim_assets.nathula_pass,
      },
      {
        title: "Rumtek Monastery",
        tag: "Cultural",
        desc: "One of the largest and most significant monasteries in Sikkim.",
        img: east_sikkim_assets.rumtek_monastery,
      },
      {
        title: "MG Marg",
        tag: "Urban",
        desc: "Vibrant pedestrian street with shops, cafes and local handicrafts.",
        img: east_sikkim_assets.mg_marg,
      },
      {
        title: "Ban Jhakri Falls",
        tag: "Nature",
        desc: "Landscaped park with waterfall and mythical statues.",
        img: east_sikkim_assets.banjhakiri_falls,
      },
      {
        title: "Tashi View Point",
        tag: "Viewpoint",
        desc: "Panoramic sunrise/sunset views of Kanchenjunga.",
        img: east_sikkim_assets.tashi_view_point,
      },
    ],
    // ... you can add festivals, transport, tips, faq later
  },

  west: {
    name: "West Sikkim",
    heroImage: "/assets/west-sikkim.jpg",
    description:
      "The pristine paradise, known for sacred lakes, ancient monasteries, and stunning Kanchenjunga views.",
    info: [
      {
        title: "Key Town",
        value: "Pelling",
        icon: "🏞️",
        color: "bg-blue-50 text-blue-700",
      },
      {
        title: "Altitude Range",
        value: "1,700m to 4,200m+",
        icon: "⛰️",
        color: "bg-emerald-50 text-emerald-700",
      },
      {
        title: "Best Time to Visit",
        value: "March to June & September to November",
        icon: "📅",
        color: "bg-amber-50 text-amber-700",
      },
    ],
    topAttractions: [
      {
        title: "Khecheopalri Lake",
        tag: "Sacred",
        desc: "Wish-fulfilling lake believed to stay clean naturally.",
        img: west_sikkim_assets.khecheopalri_lake,
      },
      {
        title: "Pemayangtse Monastery",
        tag: "Spiritual",
        desc: "Oldest monastery with impressive seven-tiered structure.",
        img: west_sikkim_assets.Pemayangtse_monastery,
      },
      {
        title: "Rabdentse Ruins",
        tag: "Historical",
        desc: "Ruins of former royal capital with great views.",
        img: west_sikkim_assets.rabdentse_ruins,
      },
      {
        title: "Singshore Bridge",
        tag: "Engineering",
        desc: "Asia's highest suspension bridge.",
        img: west_sikkim_assets.singshore_bridge,
      },
      {
        title: "Yuksom",
        tag: "Heritage",
        desc: "First capital of Sikkim and starting point for treks.",
        img: west_sikkim_assets.yuksom,
      },
      {
        title: "Dubdi Monastery",
        tag: "Heritage",
        desc: "Oldest monastery in Sikkim (1701).",
        img: west_sikkim_assets.dubdi_monastery,
      },
    ],
  },

  north: {
    name: "North Sikkim",
    heroImage: "/assets/north-sikkim.jpg",
    description:
      "The alpine wonderland, known for high-altitude lakes, flower valleys, hot springs and dramatic snowy landscapes.",
    info: [
      {
        title: "Base Towns",
        value: "Lachen & Lachung",
        icon: "🏔️",
        color: "bg-blue-50 text-blue-700",
      },
      {
        title: "Altitude Range",
        value: "2,700m to 17,100ft+",
        icon: "❄️",
        color: "bg-emerald-50 text-emerald-700",
      },
      {
        title: "Best Time to Visit",
        value: "March to June & October to December",
        icon: "📅",
        color: "bg-amber-50 text-amber-700",
      },
    ],
    topAttractions: [
      {
        title: "Gurudongmar Lake",
        tag: "Sacred",
        desc: "One of the highest lakes in the world (~17,100 ft).",
        img: north_sikkim_assets.gurudongmar_lake,
      },
      {
        title: "Yumthang Valley",
        tag: "Valley",
        desc: "Valley of Flowers with hot springs and snow.",
        img: north_sikkim_assets.yumthang_valley,
      },
      {
        title: "Zero Point",
        tag: "Adventure",
        desc: "Last civilian point with permanent snow.",
        img: north_sikkim_assets.zero_point,
      },
      {
        title: "Lachung Village",
        tag: "Village",
        desc: "Picturesque village with monastery and orchards.",
        img: north_sikkim_assets.lachung_valley,
      },
      {
        title: "Phodong Monastery",
        tag: "Spiritual",
        desc: "Beautiful Kagyu monastery near Lachen.",
        img: north_sikkim_assets.phodong_monastery,
      },
      {
        title: "Thangu Valley",
        tag: "Alpine",
        desc: "High valley with meadows and yak grazing.",
        img: north_sikkim_assets.thangu_valley,
      },
    ],
  },

  south: {
    name: "South Sikkim",
    heroImage: "/assets/south-sikkim.jpg",
    description:
      "The spiritual hub, known for grand pilgrimage sites, Buddha statues, and lush tea gardens.",
    info: [
      {
        title: "Key Town",
        value: "Namchi / Ravangla",
        icon: "🛕",
        color: "bg-blue-50 text-blue-700",
      },
      {
        title: "Altitude Range",
        value: "1,500m to 3,000m+",
        icon: "⛰️",
        color: "bg-emerald-50 text-emerald-700",
      },
      {
        title: "Best Time to Visit",
        value: "March to June & September to November",
        icon: "📅",
        color: "bg-amber-50 text-amber-700",
      },
    ],
    topAttractions: [
      {
        title: "Char Dham",
        tag: "Spiritual",
        desc: "Replica of India's four major dhams in one place.",
        img: south_sikkim_assets.char_dham,
      },
      {
        title: "Ravangla Buddha Park",
        tag: "Spiritual",
        desc: "130-ft Guru Padmasambhava statue with mountain views.",
        img: south_sikkim_assets.ravangla_buddha_parl,
      },
      {
        title: "Temi Tea Garden",
        tag: "Nature",
        desc: "Only tea garden in Sikkim – scenic and organic.",
        img: south_sikkim_assets.temi_tarku,
      },
      {
        title: "Namchi",
        tag: "Town",
        desc: "District headquarters with panoramic views.",
        img: south_sikkim_assets.namchi,
      },
      {
        title: "Sirdang Monastery",
        tag: "Spiritual",
        desc: "Peaceful monastery near Ravangla.",
        img: south_sikkim_assets.sirdang_monastery,
      },
      {
        title: "Maenam Wildlife Sanctuary",
        tag: "Trekking",
        desc: "Popular trek with red panda habitat.",
        img: south_sikkim_assets.maenam_park,
      },
    ],
  },
};
